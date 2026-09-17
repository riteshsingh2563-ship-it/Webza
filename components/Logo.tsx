import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'badge' | 'minimal';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showTagline = true,
  showWordmark = true,
  size = 'md',
  variant = 'badge',
}) => {
  const iconBoxClass =
    size === 'sm' ? 'w-8 h-8 rounded-lg p-1' : size === 'lg' ? 'w-12 h-12 rounded-xl p-2' : 'w-10 h-10 rounded-xl p-1.5';
  const textClass =
    size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subClass =
    size === 'sm' ? 'text-[8px]' : 'text-[9px] sm:text-[10px]';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Authentic Master Brand Badge */}
      <div className={`${iconBoxClass} bg-white/95 border border-[#6B7D50]/30 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:border-[#6B7D50] group-hover:shadow-md`}>
        <Image
          src="/brand/webza-icon.png"
          alt="WEBZA"
          width={44}
          height={44}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {showWordmark && (
        <div className="flex flex-col">
          <span className={`font-heading font-bold ${textClass} tracking-tight leading-none text-[#14241A] dark:text-[#FAF7F1]`}>
            WEB<span className="text-[#6B7D50]">ZA</span>
          </span>
          {showTagline && (
            <span className={`font-label ${subClass} tracking-[0.2em] text-[#6B7D50] font-bold uppercase mt-0.5`}>
              BUILT TO BE SEEN
            </span>
          )}
        </div>
      )}
    </div>
  );
};
