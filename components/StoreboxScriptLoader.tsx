'use client';

import { useEffect } from 'react';

export function StoreboxScriptLoader() {
  useEffect(() => {
    let isCancelled = false;

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null;
        if (existing) {
          if ((existing as any).__loaded) {
            resolve();
            return;
          }
          existing.addEventListener('load', () => resolve());
          existing.addEventListener('error', (e) => reject(e));
          return;
        }
        const s = document.createElement('script');
        s.src = src;
        s.async = false;
        s.onload = () => {
          (s as any).__loaded = true;
          resolve();
        };
        s.onerror = (e) => reject(e);
        document.body.appendChild(s);
      });
    };

    const init = async () => {
      try {
        await loadScript('/js/gsap.min.js');
        if (isCancelled) return;
        await loadScript('/js/ScrollTrigger.min.js');
        if (isCancelled) return;
        await loadScript('/js/lenis.min.js');
        if (isCancelled) return;
        await loadScript('/js/storebox_engine.js');
        if (isCancelled) return;

        if (typeof (window as any).initStoreboxEngine === 'function') {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (!isCancelled && typeof (window as any).initStoreboxEngine === 'function') {
                (window as any).initStoreboxEngine();
              }
            });
          });
        }
      } catch (err) {
        console.error('Failed to load local animation engines, falling back to CDN:', err);
        try {
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js');
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js');
          await loadScript('https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js');
          await loadScript('/js/storebox_engine.js');
          if (isCancelled) return;

          if (typeof (window as any).initStoreboxEngine === 'function') {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                if (!isCancelled && typeof (window as any).initStoreboxEngine === 'function') {
                  (window as any).initStoreboxEngine();
                }
              });
            });
          }
        } catch (cdnErr) {
          console.error('Failed to load CDN fallback engines:', cdnErr);
        }
      }
    };

    init();

    return () => {
      isCancelled = true;
      if (typeof window !== 'undefined') {
        if ((window as any).ScrollTrigger) {
          try {
            (window as any).ScrollTrigger.getAll().forEach((t: any) => t.kill());
          } catch (e) {}
        }
        if ((window as any).__lenis) {
          try {
            (window as any).__lenis.destroy();
          } catch (e) {}
          (window as any).__lenis = null;
        }
        if ((window as any).gsap && (window as any).__lenisTicker) {
          try {
            (window as any).gsap.ticker.remove((window as any).__lenisTicker);
          } catch (e) {}
          (window as any).__lenisTicker = null;
        }
      }
    };
  }, []);

  return null;
}
