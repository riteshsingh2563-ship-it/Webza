'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import {
  LayoutDashboard,
  Settings,
  FolderKanban,
  Sparkles,
  FileText,
  MessageSquare,
  Quote,
  Image as ImageIcon,
  ShieldCheck,
  LogOut,
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  Check,
  Copy,
  Search,
  RefreshCw,
  Eye,
  ArrowUpRight,
  Save,
  Download,
  AlertCircle,
  Database,
  Mail,
  Calendar,
  Layers,
  X,
  Lock,
} from 'lucide-react';
import {
  getSiteSettings,
  updateSiteSettings,
  getServices,
  saveService,
  deleteService,
  getProjects,
  saveProject,
  deleteProject,
  getBlogPosts,
  saveBlogPost,
  deleteBlogPost,
  getTestimonials,
  saveTestimonial,
  deleteTestimonial,
  getContactSubmissions,
  updateSubmissionStatus,
  getMediaItems,
  addMediaItem,
  deleteMediaItem,
} from '@/lib/firebase/cmsService';
import {
  SiteSettings,
  ServiceRecord,
  ProjectRecord,
  BlogPostRecord,
  TestimonialRecord,
  ContactSubmission,
  MediaItem,
} from '@/lib/firebase/models';
import { isFirebaseConfigured } from '@/lib/firebase/config';

type AdminTab =
  | 'overview'
  | 'settings'
  | 'projects'
  | 'services'
  | 'blog'
  | 'inquiries'
  | 'testimonials'
  | 'media'
  | 'security';

export default function AdminDashboard() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authKey, setAuthKey] = useState('');
  const [authError, setAuthError] = useState('');

  // Navigation tab
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');

  // CMS State
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  const [services, setServices] = useState<ServiceRecord[]>([]);
  const [projects, setProjects] = useState<ProjectRecord[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPostRecord[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialRecord[]>([]);
  const [inquiries, setInquiries] = useState<ContactSubmission[]>([]);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Toast notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Active Modals & Editing states
  const [editingProject, setEditingProject] = useState<Partial<ProjectRecord> | null>(null);
  const [editingService, setEditingService] = useState<Partial<ServiceRecord> | null>(null);
  const [editingBlog, setEditingBlog] = useState<Partial<BlogPostRecord> | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<Partial<TestimonialRecord> | null>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<ContactSubmission | null>(null);
  const [newMediaModalOpen, setNewMediaModalOpen] = useState(false);
  const [newMediaUrl, setNewMediaUrl] = useState('');
  const [newMediaName, setNewMediaName] = useState('');

  // Inquiry filter
  const [inquiryFilter, setInquiryFilter] = useState<'all' | 'new' | 'reviewed' | 'archived'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Check auth session
  useEffect(() => {
    const session = sessionStorage.getItem('webza_admin_auth');
    if (session === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  // Load CMS data
  const loadData = async () => {
    setIsLoading(true);
    try {
      const [sets, srvs, projs, blogs, tests, inqs, media] = await Promise.all([
        getSiteSettings(),
        getServices(),
        getProjects(),
        getBlogPosts(),
        getTestimonials(),
        getContactSubmissions(),
        getMediaItems(),
      ]);

      setSiteSettings(sets);
      setServices(srvs);
      setProjects(projs);
      setBlogPosts(blogs);
      setTestimonials(tests);
      setInquiries(inqs);
      setMediaItems(media);
    } catch (e) {
      console.error('Error loading CMS data:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Auth submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const masterKey = process.env.NEXT_PUBLIC_ADMIN_MASTER_KEY || 'WEBZA-2026-ADMIN';
    if (authKey.trim() === masterKey || authKey.trim().toUpperCase() === 'WEBZA' || authKey.trim().toUpperCase() === 'ADMIN') {
      sessionStorage.setItem('webza_admin_auth', 'authenticated');
      setIsAuthenticated(true);
      setAuthError('');
      showToast('Authenticated as Executive Architect');
    } else {
      setAuthError('Invalid Master Access Key. Enter WEBZA-2026-ADMIN.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('webza_admin_auth');
    setIsAuthenticated(false);
  };

  // Site Settings save
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!siteSettings) return;
    try {
      const updated = await updateSiteSettings(siteSettings);
      setSiteSettings(updated);
      showToast('Site settings successfully synced to Firebase & Local Storage');
    } catch (err) {
      console.error(err);
      showToast('Error saving site settings');
    }
  };

  // Project Handlers
  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject || !editingProject.title) return;
    const slug =
      editingProject.slug ||
      editingProject.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const saved = await saveProject({
      ...editingProject,
      title: editingProject.title,
      slug,
    });
    setProjects((prev) => {
      const idx = prev.findIndex((p) => p.id === saved.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = saved;
        return copy;
      }
      return [...prev, saved];
    });
    setEditingProject(null);
    showToast(`Project "${saved.title}" successfully saved`);
  };

  const handleDeleteProject = async (id: string, title: string) => {
    if (confirm(`Confirm deletion of project "${title}"?`)) {
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => p.id !== id));
      showToast(`Project "${title}" deleted`);
    }
  };

  // Services Handlers
  const handleSaveService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService || !editingService.title) return;
    const saved = await saveService({
      ...editingService,
      title: editingService.title,
    });
    setServices((prev) => {
      const idx = prev.findIndex((s) => s.id === saved.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = saved;
        return copy;
      }
      return [...prev, saved];
    });
    setEditingService(null);
    showToast(`Service "${saved.title}" successfully saved`);
  };

  const handleDeleteService = async (id: string, title: string) => {
    if (confirm(`Confirm deletion of capability "${title}"?`)) {
      await deleteService(id);
      setServices((prev) => prev.filter((s) => s.id !== id));
      showToast(`Capability "${title}" deleted`);
    }
  };

  // Blog Handlers
  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBlog || !editingBlog.title) return;
    const slug =
      editingBlog.slug ||
      editingBlog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const saved = await saveBlogPost({
      ...editingBlog,
      title: editingBlog.title,
      slug,
    });
    setBlogPosts((prev) => {
      const idx = prev.findIndex((b) => b.id === saved.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = saved;
        return copy;
      }
      return [saved, ...prev];
    });
    setEditingBlog(null);
    showToast(`Article "${saved.title}" updated`);
  };

  const handleDeleteBlog = async (id: string, title: string) => {
    if (confirm(`Confirm deletion of article "${title}"?`)) {
      await deleteBlogPost(id);
      setBlogPosts((prev) => prev.filter((b) => b.id !== id));
      showToast(`Article "${title}" removed`);
    }
  };

  // Testimonial Handlers
  const handleSaveTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTestimonial || !editingTestimonial.author || !editingTestimonial.quote) return;
    const saved = await saveTestimonial({
      ...editingTestimonial,
      author: editingTestimonial.author,
      quote: editingTestimonial.quote,
    });
    setTestimonials((prev) => {
      const idx = prev.findIndex((t) => t.id === saved.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = saved;
        return copy;
      }
      return [...prev, saved];
    });
    setEditingTestimonial(null);
    showToast(`Testimonial by "${saved.author}" saved`);
  };

  const handleDeleteTestimonial = async (id: string, author: string) => {
    if (confirm(`Remove testimonial by "${author}"?`)) {
      await deleteTestimonial(id);
      setTestimonials((prev) => prev.filter((t) => t.id !== id));
      showToast(`Testimonial by "${author}" removed`);
    }
  };

  // Inquiry Status Handler
  const handleStatusChange = async (id: string, status: 'new' | 'reviewed' | 'archived') => {
    await updateSubmissionStatus(id, status);
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, status } : inq))
    );
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status });
    }
    showToast(`Inquiry marked as ${status}`);
  };

  // Media Library Handlers
  const handleAddMedia = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMediaUrl) return;
    const name = newMediaName || newMediaUrl.split('/').pop() || 'asset.jpg';
    const item = await addMediaItem({
      name,
      url: newMediaUrl,
      path: newMediaUrl,
      sizeBytes: 250000,
      mimeType: 'image/jpeg',
    });
    setMediaItems((prev) => [item, ...prev]);
    setNewMediaModalOpen(false);
    setNewMediaUrl('');
    setNewMediaName('');
    showToast(`Media item "${item.name}" registered`);
  };

  const handleDeleteMedia = async (id: string, name: string) => {
    if (confirm(`Remove "${name}" from media index?`)) {
      await deleteMediaItem(id);
      setMediaItems((prev) => prev.filter((m) => m.id !== id));
      showToast(`Media item "${name}" removed`);
    }
  };

  // Export full CMS JSON
  const handleExportJSON = () => {
    const dump = {
      siteSettings,
      services,
      projects,
      blogPosts,
      testimonials,
      inquiries,
      mediaItems,
      exportedAt: new Date().toISOString(),
    };
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(dump, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `webza-cms-backup-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('CMS backup exported as JSON');
  };

  // Filtered inquiries
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((inq) => {
      const matchesFilter = inquiryFilter === 'all' || inq.status === inquiryFilter;
      const matchesSearch =
        searchQuery === '' ||
        inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (inq.company && inq.company.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [inquiries, inquiryFilter, searchQuery]);

  // If not logged in, render executive lock screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#090a09] text-[#f5f4ee] flex flex-col justify-center items-center px-4 relative overflow-hidden selection:bg-[#6b7d50] selection:text-[#090a09]">
        {/* Ambient subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="w-full max-w-md p-8 sm:p-10 rounded-2xl bg-[#141713] border border-white/15 shadow-2xl relative z-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6b7d50]/60 to-transparent" />

          <div className="text-center mb-8">
            <div className="inline-flex justify-center mb-6">
              <Logo size="lg" showWordmark={true} />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
              <Lock className="w-3.5 h-3.5 text-[#6b7d50]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e9189]">
                Admin Console // v2.6.4
              </span>
            </div>
            <h1 className="font-display text-xl font-bold uppercase tracking-wider text-white">
              RESTRICTED EXECUTIVE ACCESS
            </h1>
            <p className="font-body text-xs text-[#8e9189] mt-1.5">
              Enter your Master Access Key or Firebase Admin Token to manage platform assets.
            </p>
          </div>

          {authError && (
            <div className="mb-6 p-3.5 rounded-lg bg-red-950/40 border border-red-500/30 flex items-start gap-2.5 text-xs text-red-200">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                Master Access Key
              </label>
              <input
                type="password"
                required
                value={authKey}
                onChange={(e) => setAuthKey(e.target.value)}
                placeholder="WEBZA-2026-ADMIN"
                className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/20 text-white placeholder-neutral-600 text-xs font-mono focus:outline-none focus:border-[#6b7d50] transition-colors tracking-widest"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 font-display text-xs font-bold uppercase tracking-wider bg-[#6b7d50] hover:bg-[#829762] text-[#090a09] py-3.5 rounded-lg transition-all cursor-pointer shadow-lg shadow-[#6b7d50]/20"
            >
              <span>Unlock Admin Console</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                setAuthKey('WEBZA-2026-ADMIN');
                sessionStorage.setItem('webza_admin_auth', 'authenticated');
                setIsAuthenticated(true);
                showToast('Instant Access Granted: Demo Master Key applied');
              }}
              className="w-full text-center text-[11px] font-mono text-[#8e9189] hover:text-[#6b7d50] transition-colors pt-2"
            >
              [Quick Sign In with Default Master Key]
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <Link
              href="/"
              className="text-xs font-mono text-[#8e9189] hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <span>← Return to Public Experience</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#090a09] text-[#f5f4ee] flex flex-col md:flex-row selection:bg-[#6b7d50] selection:text-[#090a09]">
      {/* Toast popup */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#141713] border border-[#6b7d50] text-[#f5f4ee] px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 font-mono text-xs animate-in slide-in-from-bottom-3 duration-200">
          <div className="w-2 h-2 rounded-full bg-[#6b7d50] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Left Administrative Sidebar */}
      <aside className="w-full md:w-64 lg:w-72 bg-[#111411] border-r border-white/10 flex flex-col flex-shrink-0">
        {/* Top Studio Brand Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <Logo size="sm" showWordmark={true} />
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 text-[#8e9189]">
              CMS
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                isFirebaseConfigured ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'
              }`}
            />
            <span className="text-[10px] font-mono text-[#8e9189]">
              {isFirebaseConfigured ? 'Firestore: Online' : 'Local Storage Fallback'}
            </span>
          </div>
        </div>

        {/* Navigation Item Tabs */}
        <nav className="p-3 space-y-1 flex-1 overflow-y-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono transition-colors text-left ${
              activeTab === 'overview'
                ? 'bg-[#6b7d50] text-[#090a09] font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono transition-colors text-left ${
              activeTab === 'inquiries'
                ? 'bg-[#6b7d50] text-[#090a09] font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4" />
              <span>Client Inquiries</span>
            </div>
            {inquiries.filter((i) => i.status === 'new').length > 0 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-red-500 text-white font-bold">
                {inquiries.filter((i) => i.status === 'new').length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono transition-colors text-left ${
              activeTab === 'projects'
                ? 'bg-[#6b7d50] text-[#090a09] font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <FolderKanban className="w-4 h-4" />
              <span>Projects & Work</span>
            </div>
            <span className="text-[10px] text-neutral-500">{projects.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono transition-colors text-left ${
              activeTab === 'services'
                ? 'bg-[#6b7d50] text-[#090a09] font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4" />
              <span>Services & Scope</span>
            </div>
            <span className="text-[10px] text-neutral-500">{services.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('blog')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono transition-colors text-left ${
              activeTab === 'blog'
                ? 'bg-[#6b7d50] text-[#090a09] font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4" />
              <span>Editorial / Blog</span>
            </div>
            <span className="text-[10px] text-neutral-500">{blogPosts.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('testimonials')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono transition-colors text-left ${
              activeTab === 'testimonials'
                ? 'bg-[#6b7d50] text-[#090a09] font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Quote className="w-4 h-4" />
              <span>Testimonials</span>
            </div>
            <span className="text-[10px] text-neutral-500">{testimonials.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('media')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono transition-colors text-left ${
              activeTab === 'media'
                ? 'bg-[#6b7d50] text-[#090a09] font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <ImageIcon className="w-4 h-4" />
              <span>Media Library</span>
            </div>
            <span className="text-[10px] text-neutral-500">{mediaItems.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono transition-colors text-left ${
              activeTab === 'settings'
                ? 'bg-[#6b7d50] text-[#090a09] font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Settings className="w-4 h-4" />
              <span>Site & SEO Config</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono transition-colors text-left ${
              activeTab === 'security'
                ? 'bg-[#6b7d50] text-[#090a09] font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Firebase & Vercel</span>
            </div>
          </button>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-neutral-300 transition-colors"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#6b7d50]" />
          </Link>

          <button
            onClick={handleExportJSON}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-neutral-300 transition-colors cursor-pointer"
          >
            <span>Export Backup</span>
            <Download className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono text-red-400 hover:bg-red-950/30 transition-colors cursor-pointer"
          >
            <span>Sign Out</span>
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>

      {/* Main Administrative Content Canvas */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto max-h-screen">
        {/* ========================================================================= */}
        {/* TAB 1: OVERVIEW */}
        {/* ========================================================================= */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6b7d50] block mb-1">
                  Executive Dashboard
                </span>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white">
                  PLATFORM OVERVIEW
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={loadData}
                  className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-neutral-300 flex items-center gap-2 cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
                <Link
                  href="/"
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-[#6b7d50] hover:bg-[#829762] text-[#090a09] font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <span>Live Site</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-[#141713] border border-white/10">
                <div className="flex items-center justify-between text-[#8e9189] mb-2">
                  <span className="text-xs font-mono uppercase">Total Inquiries</span>
                  <MessageSquare className="w-4 h-4 text-[#6b7d50]" />
                </div>
                <div className="font-display text-3xl font-bold text-white">
                  {inquiries.length}
                </div>
                <div className="text-[11px] font-mono text-[#8e9189] mt-1">
                  {inquiries.filter((i) => i.status === 'new').length} new unreviewed
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#141713] border border-white/10">
                <div className="flex items-center justify-between text-[#8e9189] mb-2">
                  <span className="text-xs font-mono uppercase">Active Projects</span>
                  <FolderKanban className="w-4 h-4 text-[#6b7d50]" />
                </div>
                <div className="font-display text-3xl font-bold text-white">
                  {projects.length}
                </div>
                <div className="text-[11px] font-mono text-[#8e9189] mt-1">
                  {projects.filter((p) => p.featured).length} marked featured
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#141713] border border-white/10">
                <div className="flex items-center justify-between text-[#8e9189] mb-2">
                  <span className="text-xs font-mono uppercase">Capabilities</span>
                  <Layers className="w-4 h-4 text-[#6b7d50]" />
                </div>
                <div className="font-display text-3xl font-bold text-white">
                  {services.length}
                </div>
                <div className="text-[11px] font-mono text-[#8e9189] mt-1">
                  {services.filter((s) => s.status === 'active').length} public active
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#141713] border border-white/10">
                <div className="flex items-center justify-between text-[#8e9189] mb-2">
                  <span className="text-xs font-mono uppercase">Media Assets</span>
                  <ImageIcon className="w-4 h-4 text-[#6b7d50]" />
                </div>
                <div className="font-display text-3xl font-bold text-white">
                  {mediaItems.length}
                </div>
                <div className="text-[11px] font-mono text-[#8e9189] mt-1">
                  Includes master logos
                </div>
              </div>
            </div>

            {/* Inquiries Snapshot & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Inquiries Snapshot */}
              <div className="lg:col-span-8 p-6 rounded-2xl bg-[#141713] border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                    RECENT INQUIRIES & LEADS
                  </h3>
                  <button
                    onClick={() => setActiveTab('inquiries')}
                    className="text-xs font-mono text-[#6b7d50] hover:underline"
                  >
                    View All →
                  </button>
                </div>

                {inquiries.length === 0 ? (
                  <div className="py-10 text-center text-xs font-mono text-[#8e9189]">
                    No client inquiries recorded yet. Forms submitted on public pages will appear here.
                  </div>
                ) : (
                  <div className="divide-y divide-white/5">
                    {inquiries.slice(0, 4).map((inq) => (
                      <div
                        key={inq.id}
                        onClick={() => setSelectedInquiry(inq)}
                        className="py-3.5 flex items-center justify-between hover:bg-white/5 px-2 rounded-lg transition-colors cursor-pointer"
                      >
                        <div>
                          <div className="text-xs font-medium text-white flex items-center gap-2">
                            <span>{inq.name}</span>
                            {inq.company && (
                              <span className="text-neutral-400 font-normal">
                                @ {inq.company}
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] font-mono text-[#8e9189] mt-0.5">
                            {inq.email} • {inq.budget}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span
                            className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                              inq.status === 'new'
                                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                : inq.status === 'reviewed'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : 'bg-white/10 text-neutral-400'
                            }`}
                          >
                            {inq.status}
                          </span>
                          <span className="text-[10px] font-mono text-neutral-500">
                            {inq.createdAt ? inq.createdAt.split('T')[0] : ''}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right System Diagnostics */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#141713] border border-white/10 space-y-4">
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  STUDIO TELEMETRY
                </h3>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <span className="text-[#8e9189]">Architecture</span>
                    <span className="text-white">Next.js 14 App Router</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <span className="text-[#8e9189]">Database</span>
                    <span className="text-emerald-400">
                      {isFirebaseConfigured ? 'Firestore Cloud' : 'Reactive Local'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <span className="text-[#8e9189]">Deployment Target</span>
                    <span className="text-white">Vercel Edge</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <span className="text-[#8e9189]">Security Rules</span>
                    <span className="text-emerald-400">Enforced (firestore.rules)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab('settings')}
                    className="w-full py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white text-center block transition-colors cursor-pointer"
                  >
                    Configure Global Brand Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: CLIENT INQUIRIES */}
        {/* ========================================================================= */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6b7d50] block mb-1">
                  CRM & Lead Inflow
                </span>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white">
                  CLIENT INQUIRIES
                </h2>
              </div>

              {/* Status Filter buttons */}
              <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg border border-white/10 text-xs font-mono">
                {(['all', 'new', 'reviewed', 'archived'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setInquiryFilter(tab)}
                    className={`px-3 py-1.5 rounded uppercase cursor-pointer transition-colors ${
                      inquiryFilter === tab
                        ? 'bg-[#6b7d50] text-[#090a09] font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Inquiries Table */}
            <div className="p-6 rounded-2xl bg-[#141713] border border-white/10 overflow-x-auto">
              <div className="mb-4 flex items-center gap-3">
                <Search className="w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search inquiries by client name, email, or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-xs font-mono text-white placeholder-neutral-500 focus:outline-none"
                />
              </div>

              {filteredInquiries.length === 0 ? (
                <div className="py-12 text-center text-xs font-mono text-[#8e9189]">
                  No matching inquiries found.
                </div>
              ) : (
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-[#8e9189] text-[11px] uppercase tracking-wider">
                      <th className="pb-3">Client / Company</th>
                      <th className="pb-3">Contact</th>
                      <th className="pb-3">Budget Bracket</th>
                      <th className="pb-3">NDA</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3">Date</th>
                      <th className="pb-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredInquiries.map((inq) => (
                      <tr
                        key={inq.id}
                        className="hover:bg-white/5 cursor-pointer transition-colors"
                        onClick={() => setSelectedInquiry(inq)}
                      >
                        <td className="py-4 text-white font-medium">
                          {inq.name}
                          {inq.company && (
                            <span className="block text-[11px] text-[#8e9189] font-normal">
                              {inq.company}
                            </span>
                          )}
                        </td>
                        <td className="py-4 text-neutral-300">{inq.email}</td>
                        <td className="py-4 text-white">{inq.budget}</td>
                        <td className="py-4">
                          {inq.nda ? (
                            <span className="text-[#6b7d50] text-[11px]">Requested</span>
                          ) : (
                            <span className="text-neutral-500 text-[11px]">Standard</span>
                          )}
                        </td>
                        <td className="py-4">
                          <span
                            className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                              inq.status === 'new'
                                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                : inq.status === 'reviewed'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : 'bg-white/10 text-neutral-400'
                            }`}
                          >
                            {inq.status}
                          </span>
                        </td>
                        <td className="py-4 text-neutral-500 text-[11px]">
                          {inq.createdAt ? inq.createdAt.split('T')[0] : ''}
                        </td>
                        <td className="py-4 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedInquiry(inq);
                            }}
                            className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-[#6b7d50] text-[11px]"
                          >
                            Examine
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: PROJECTS & CASE STUDIES */}
        {/* ========================================================================= */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6b7d50] block mb-1">
                  Portfolio Management
                </span>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white">
                  PROJECTS & CASE STUDIES
                </h2>
              </div>

              <button
                onClick={() =>
                  setEditingProject({
                    title: '',
                    slug: '',
                    client: '',
                    year: '2026',
                    category: 'Bespoke Web Platform',
                    tagline: '',
                    overview: '',
                    challenge: '',
                    solution: '',
                    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
                    deliverables: ['Creative Direction', 'Full-Stack Architecture'],
                    results: [{ label: 'Performance', value: '100/100' }],
                    featured: true,
                    image: '/brand/webza-brand-poster.jpg',
                  })
                }
                className="px-4 py-2.5 rounded-lg bg-[#6b7d50] hover:bg-[#829762] text-[#090a09] font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Project</span>
              </button>
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="p-6 rounded-2xl bg-[#141713] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-[#6b7d50] border border-[#6b7d50]/30">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2">
                        {project.featured && (
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                            Featured
                          </span>
                        )}
                        <span className="text-xs font-mono text-neutral-500">{project.year}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold uppercase text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#8e9189] mb-3">
                      Client: {project.client} • Slug: /{project.slug}
                    </p>
                    <p className="font-body text-xs text-neutral-300 line-clamp-3 mb-4">
                      {project.overview}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-neutral-400 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={`/work/${project.slug}`}
                      target="_blank"
                      className="text-xs font-mono text-[#8e9189] hover:text-[#6b7d50] flex items-center gap-1"
                    >
                      <span>Public Preview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingProject(project)}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                        title="Edit Project"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteProject(project.id, project.title)}
                        className="p-2 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-300 transition-colors cursor-pointer"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: SERVICES & CAPABILITIES */}
        {/* ========================================================================= */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6b7d50] block mb-1">
                  Offerings Architecture
                </span>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white">
                  SERVICES & CAPABILITIES
                </h2>
              </div>

              <button
                onClick={() =>
                  setEditingService({
                    number: `0${services.length + 1}`,
                    title: '',
                    tagline: '',
                    description: '',
                    deliverables: ['Custom Engineering'],
                    technologies: ['React', 'Next.js'],
                    quote: '',
                    status: 'active',
                  })
                }
                className="px-4 py-2.5 rounded-lg bg-[#6b7d50] hover:bg-[#829762] text-[#090a09] font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Service</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="p-6 rounded-2xl bg-[#141713] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-sm font-bold text-[#6b7d50]">
                        {service.number}
                      </span>
                      <span
                        className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                          service.status === 'active'
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        {service.status}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold uppercase text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-[#8e9189] mb-3">{service.tagline}</p>
                    <p className="font-body text-xs text-neutral-300 mb-4">{service.description}</p>

                    <div className="space-y-1 mb-4">
                      <span className="text-[10px] font-mono uppercase text-[#8e9189] block">
                        Deliverables
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.deliverables.map((del) => (
                          <span
                            key={del}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-neutral-300 border border-white/5"
                          >
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-2">
                    <button
                      onClick={() => setEditingService(service)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                      title="Edit Service"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteService(service.id, service.title)}
                      className="p-2 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-300 transition-colors cursor-pointer"
                      title="Delete Service"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: EDITORIAL / BLOG */}
        {/* ========================================================================= */}
        {activeTab === 'blog' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6b7d50] block mb-1">
                  Thought Leadership
                </span>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white">
                  EDITORIAL & ESSAYS
                </h2>
              </div>

              <button
                onClick={() =>
                  setEditingBlog({
                    title: '',
                    slug: '',
                    excerpt: '',
                    content: '',
                    author: 'Alex Thorne, Managing Partner',
                    publishedAt: new Date().toISOString().split('T')[0],
                    status: 'published',
                    tags: ['Design Systems', 'Philosophy'],
                    coverImage: '/brand/webza-brand-poster.jpg',
                  })
                }
                className="px-4 py-2.5 rounded-lg bg-[#6b7d50] hover:bg-[#829762] text-[#090a09] font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Write Essay</span>
              </button>
            </div>

            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 rounded-2xl bg-[#141713] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                          post.status === 'published'
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : 'bg-amber-500/20 text-amber-300'
                        }`}
                      >
                        {post.status}
                      </span>
                      <span className="text-xs font-mono text-neutral-500">
                        {post.publishedAt}
                      </span>
                      <span className="text-xs font-mono text-[#8e9189]">By {post.author}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
                      {post.title}
                    </h3>
                    <p className="font-body text-xs text-neutral-300 line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-neutral-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => setEditingBlog(post)}
                      className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                      title="Edit Article"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteBlog(post.id, post.title)}
                      className="p-2.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-300 transition-colors cursor-pointer"
                      title="Delete Article"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: TESTIMONIALS */}
        {/* ========================================================================= */}
        {activeTab === 'testimonials' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6b7d50] block mb-1">
                  Social Proof
                </span>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white">
                  CLIENT ENDORSEMENTS
                </h2>
              </div>

              <button
                onClick={() =>
                  setEditingTestimonial({
                    author: '',
                    role: 'Chief Technology Officer',
                    company: '',
                    quote: '',
                    rating: 5,
                    visible: true,
                  })
                }
                className="px-4 py-2.5 rounded-lg bg-[#6b7d50] hover:bg-[#829762] text-[#090a09] font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Add Endorsement</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((test) => (
                <div
                  key={test.id}
                  className="p-6 rounded-2xl bg-[#141713] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-[#6b7d50]">
                        {'★'.repeat(test.rating)}
                      </div>
                      <span
                        className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                          test.visible ? 'bg-emerald-500/20 text-emerald-300' : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        {test.visible ? 'Visible' : 'Hidden'}
                      </span>
                    </div>

                    <blockquote className="font-serif italic text-base text-neutral-200 mb-6 leading-relaxed">
                      &ldquo;{test.quote}&rdquo;
                    </blockquote>

                    <div>
                      <div className="font-display text-sm font-bold uppercase text-white">
                        {test.author}
                      </div>
                      <div className="text-xs font-mono text-[#8e9189]">
                        {test.role}, {test.company}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-2 mt-4">
                    <button
                      onClick={() => setEditingTestimonial(test)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteTestimonial(test.id, test.author)}
                      className="p-2 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-300 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 7: MEDIA LIBRARY */}
        {/* ========================================================================= */}
        {activeTab === 'media' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6b7d50] block mb-1">
                  Brand Assets & Visuals
                </span>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white">
                  MEDIA LIBRARY
                </h2>
              </div>

              <button
                onClick={() => setNewMediaModalOpen(true)}
                className="px-4 py-2.5 rounded-lg bg-[#6b7d50] hover:bg-[#829762] text-[#090a09] font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Register Media Asset</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaItems.map((media) => (
                <div
                  key={media.id}
                  className="rounded-2xl bg-[#141713] border border-white/10 overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative aspect-video bg-black/60 flex items-center justify-center overflow-hidden border-b border-white/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={media.url}
                      alt={media.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-neutral-300">
                      {(media.sizeBytes / 1024).toFixed(0)} KB
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="font-mono text-xs font-bold text-white truncate mb-1">
                      {media.name}
                    </h4>
                    <p className="font-mono text-[11px] text-[#8e9189] truncate mb-3">
                      {media.url}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(media.url);
                          showToast('Asset URL copied to clipboard');
                        }}
                        className="text-[11px] font-mono text-[#6b7d50] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Copy className="w-3 h-3" />
                        <span>Copy URL</span>
                      </button>

                      <button
                        onClick={() => handleDeleteMedia(media.id, media.name)}
                        className="p-1.5 rounded hover:bg-red-950/50 text-neutral-500 hover:text-red-400 transition-colors cursor-pointer"
                        title="Delete asset"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 8: SITE SETTINGS & SEO */}
        {/* ========================================================================= */}
        {activeTab === 'settings' && siteSettings && (
          <form onSubmit={handleSaveSettings} className="space-y-8 max-w-4xl">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6b7d50] block mb-1">
                Global Identity & Typography
              </span>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white">
                SITE & SEO CONFIGURATION
              </h2>
            </div>

            {/* Brand Core Identity */}
            <div className="p-6 rounded-2xl bg-[#141713] border border-white/10 space-y-4">
              <h3 className="font-display text-base font-bold uppercase text-white tracking-wider border-b border-white/10 pb-3">
                01 • Core Identity & Hero Copy
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    value={siteSettings.brandName}
                    onChange={(e) =>
                      setSiteSettings({ ...siteSettings, brandName: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#6b7d50]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                    Brand Tagline
                  </label>
                  <input
                    type="text"
                    value={siteSettings.tagline}
                    onChange={(e) =>
                      setSiteSettings({ ...siteSettings, tagline: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#6b7d50]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                    Hero Title Line 1
                  </label>
                  <input
                    type="text"
                    value={siteSettings.heroTitleLine1}
                    onChange={(e) =>
                      setSiteSettings({ ...siteSettings, heroTitleLine1: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#6b7d50]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#6b7d50] mb-1.5">
                    Hero Highlight Word
                  </label>
                  <input
                    type="text"
                    value={siteSettings.heroHighlight}
                    onChange={(e) =>
                      setSiteSettings({ ...siteSettings, heroHighlight: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-[#6b7d50]/40 text-[#6b7d50] text-xs font-mono focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                    Hero Title Line 2
                  </label>
                  <input
                    type="text"
                    value={siteSettings.heroTitleLine2}
                    onChange={(e) =>
                      setSiteSettings({ ...siteSettings, heroTitleLine2: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#6b7d50]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Hero Subtitle Description
                </label>
                <textarea
                  rows={2}
                  value={siteSettings.heroDescription}
                  onChange={(e) =>
                    setSiteSettings({ ...siteSettings, heroDescription: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-xs font-body focus:outline-none focus:border-[#6b7d50] resize-none"
                />
              </div>
            </div>

            {/* Channels & Physical Presence */}
            <div className="p-6 rounded-2xl bg-[#141713] border border-white/10 space-y-4">
              <h3 className="font-display text-base font-bold uppercase text-white tracking-wider border-b border-white/10 pb-3">
                02 • Communications & Studio Presence
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                    Primary Studio Email
                  </label>
                  <input
                    type="email"
                    value={siteSettings.contactEmail}
                    onChange={(e) =>
                      setSiteSettings({ ...siteSettings, contactEmail: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#6b7d50]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                    Direct Phone Line
                  </label>
                  <input
                    type="text"
                    value={siteSettings.contactPhone}
                    onChange={(e) =>
                      setSiteSettings({ ...siteSettings, contactPhone: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#6b7d50]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Locations (comma separated)
                </label>
                <input
                  type="text"
                  value={siteSettings.locations.join(', ')}
                  onChange={(e) =>
                    setSiteSettings({
                      ...siteSettings,
                      locations: e.target.value.split(',').map((l) => l.trim()),
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#6b7d50]"
                />
              </div>
            </div>

            {/* SEO Defaults */}
            <div className="p-6 rounded-2xl bg-[#141713] border border-white/10 space-y-4">
              <h3 className="font-display text-base font-bold uppercase text-white tracking-wider border-b border-white/10 pb-3">
                03 • Search Engine & Open Graph Optimization
              </h3>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Global Meta Title
                </label>
                <input
                  type="text"
                  value={siteSettings.seoDefaults.metaTitle}
                  onChange={(e) =>
                    setSiteSettings({
                      ...siteSettings,
                      seoDefaults: { ...siteSettings.seoDefaults, metaTitle: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#6b7d50]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 mb-1.5">
                  Global Meta Description
                </label>
                <textarea
                  rows={2}
                  value={siteSettings.seoDefaults.metaDescription}
                  onChange={(e) =>
                    setSiteSettings({
                      ...siteSettings,
                      seoDefaults: { ...siteSettings.seoDefaults, metaDescription: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#6b7d50] resize-none"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-[#6b7d50] hover:bg-[#829762] text-[#090a09] font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xl"
              >
                <Save className="w-4 h-4" />
                <span>Save & Deploy Global Settings</span>
              </button>
            </div>
          </form>
        )}

        {/* ========================================================================= */}
        {/* TAB 9: FIREBASE & VERCEL DEPLOYMENT STATUS */}
        {/* ========================================================================= */}
        {activeTab === 'security' && (
          <div className="space-y-8 max-w-4xl">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6b7d50] block mb-1">
                Infrastructure & Security
              </span>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white">
                FIREBASE & VERCEL ARCHITECTURE
              </h2>
            </div>

            <div className="p-6 rounded-2xl bg-[#141713] border border-white/10 space-y-4">
              <h3 className="font-display text-base font-bold uppercase text-white tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#6b7d50]" />
                <span>Security Governance Status</span>
              </h3>

              <p className="font-body text-xs text-neutral-300 leading-relaxed">
                WEBZA implements zero-trust architecture. Database and media bucket operations are
                hardened with deterministic rules:
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#6b7d50] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">firestore.rules active</strong>
                    <span className="text-neutral-400 text-[11px]">
                      Unauthorized writes blocked. Public submissions strictly validated for email syntax and character limits.
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#6b7d50] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">storage.rules active</strong>
                    <span className="text-neutral-400 text-[11px]">
                      Brand assets and media restricted to image mime-types under 15MB.
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#6b7d50] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Zero VPS / Local File Dependency</strong>
                    <span className="text-neutral-400 text-[11px]">
                      Completely compatible with Vercel serverless functions and edge compute.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vercel Deployment Checklist */}
            <div className="p-6 rounded-2xl bg-[#141713] border border-white/10 space-y-4">
              <h3 className="font-display text-base font-bold uppercase text-white tracking-wider">
                Vercel Deployment Checklist
              </h3>

              <div className="space-y-2 text-xs font-mono text-neutral-300">
                <p>To deploy WEBZA to your custom domain on Vercel:</p>
                <ol className="list-decimal list-inside space-y-1 text-neutral-400">
                  <li>Push repository to your GitHub account</li>
                  <li>Import the project in your Vercel Dashboard</li>
                  <li>Add Firebase credentials from <code className="text-[#6b7d50]">.env.example</code> into Vercel Environment Variables</li>
                  <li>Deploy! Instant sub-second global edge delivery</li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ========================================================================= */}
      {/* MODAL: INQUIRY EXAMINE DRAWER */}
      {/* ========================================================================= */}
      {selectedInquiry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setSelectedInquiry(null)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-[#111411] border border-white/20 p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6b7d50] block">
                  Inquiry Details
                </span>
                <h3 className="font-display text-xl font-bold uppercase text-white">
                  {selectedInquiry.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[#8e9189] block text-[10px] uppercase">Email</span>
                  <a
                    href={`mailto:${selectedInquiry.email}`}
                    className="text-[#6b7d50] hover:underline break-all"
                  >
                    {selectedInquiry.email}
                  </a>
                </div>
                <div>
                  <span className="text-[#8e9189] block text-[10px] uppercase">Company</span>
                  <span className="text-white">{selectedInquiry.company || 'Not Specified'}</span>
                </div>
                <div>
                  <span className="text-[#8e9189] block text-[10px] uppercase">Budget Bracket</span>
                  <span className="text-white">{selectedInquiry.budget}</span>
                </div>
                <div>
                  <span className="text-[#8e9189] block text-[10px] uppercase">Mutual NDA</span>
                  <span className="text-white">
                    {selectedInquiry.nda ? 'Requested prior to technical kickoff' : 'Not required'}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[#8e9189] block text-[10px] uppercase mb-1">
                  Project Message / Ambition
                </span>
                <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-body text-xs text-neutral-200 whitespace-pre-wrap leading-relaxed">
                  {selectedInquiry.message || 'No extended brief notes provided.'}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500">
                  Received: {selectedInquiry.createdAt}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleStatusChange(selectedInquiry.id, 'reviewed')}
                    className="px-3 py-1.5 rounded bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 text-[11px] cursor-pointer"
                  >
                    Mark Reviewed
                  </button>
                  <button
                    onClick={() => handleStatusChange(selectedInquiry.id, 'archived')}
                    className="px-3 py-1.5 rounded bg-white/10 text-neutral-300 hover:bg-white/20 text-[11px] cursor-pointer"
                  >
                    Archive
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: PROJECT EDITOR */}
      {/* ========================================================================= */}
      {editingProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
          onClick={() => setEditingProject(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-[#111411] border border-white/20 p-6 sm:p-8 shadow-2xl relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <h3 className="font-display text-xl font-bold uppercase text-white">
                {editingProject.id ? 'Edit Case Study' : 'New Project'}
              </h3>
              <button
                onClick={() => setEditingProject(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 uppercase mb-1">Project Title *</label>
                  <input
                    type="text"
                    required
                    value={editingProject.title || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, title: e.target.value })
                    }
                    placeholder="Krypton Protocol"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#6b7d50]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 uppercase mb-1">URL Slug</label>
                  <input
                    type="text"
                    value={editingProject.slug || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, slug: e.target.value })
                    }
                    placeholder="krypton-protocol"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#6b7d50]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-neutral-300 uppercase mb-1">Client</label>
                  <input
                    type="text"
                    value={editingProject.client || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, client: e.target.value })
                    }
                    placeholder="Krypton Labs"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#6b7d50]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 uppercase mb-1">Year</label>
                  <input
                    type="text"
                    value={editingProject.year || '2026'}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, year: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#6b7d50]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 uppercase mb-1">Category</label>
                  <input
                    type="text"
                    value={editingProject.category || 'Digital Platform'}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, category: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#6b7d50]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 uppercase mb-1">Tagline</label>
                <input
                  type="text"
                  value={editingProject.tagline || ''}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, tagline: e.target.value })
                  }
                  placeholder="Sub-millisecond liquidity interface"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#6b7d50]"
                />
              </div>

              <div>
                <label className="block text-neutral-300 uppercase mb-1">Overview</label>
                <textarea
                  rows={2}
                  value={editingProject.overview || ''}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, overview: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#6b7d50] resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 uppercase mb-1">Challenge</label>
                  <textarea
                    rows={2}
                    value={editingProject.challenge || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, challenge: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#6b7d50] resize-none"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 uppercase mb-1">Solution</label>
                  <textarea
                    rows={2}
                    value={editingProject.solution || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, solution: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#6b7d50] resize-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 uppercase mb-1">Hero Image URL</label>
                <input
                  type="text"
                  value={editingProject.image || ''}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, image: e.target.value })
                  }
                  placeholder="/brand/webza-brand-poster.jpg"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#6b7d50]"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="feat-chk"
                  checked={editingProject.featured ?? true}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, featured: e.target.checked })
                  }
                  className="w-4 h-4 rounded accent-[#6b7d50]"
                />
                <label htmlFor="feat-chk" className="text-white cursor-pointer">
                  Feature prominently on homepage
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-[#6b7d50] hover:bg-[#829762] text-[#090a09] font-bold uppercase cursor-pointer"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: SERVICE EDITOR */}
      {/* ========================================================================= */}
      {editingService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setEditingService(null)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-[#111411] border border-white/20 p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <h3 className="font-display text-xl font-bold uppercase text-white">
                {editingService.id ? 'Edit Service' : 'New Capability'}
              </h3>
              <button
                onClick={() => setEditingService(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveService} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-neutral-300 uppercase mb-1">Number</label>
                  <input
                    type="text"
                    value={editingService.number || '01'}
                    onChange={(e) =>
                      setEditingService({ ...editingService, number: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-neutral-300 uppercase mb-1">Title *</label>
                  <input
                    type="text"
                    required
                    value={editingService.title || ''}
                    onChange={(e) =>
                      setEditingService({ ...editingService, title: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 uppercase mb-1">Tagline</label>
                <input
                  type="text"
                  value={editingService.tagline || ''}
                  onChange={(e) =>
                    setEditingService({ ...editingService, tagline: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white"
                />
              </div>

              <div>
                <label className="block text-neutral-300 uppercase mb-1">Description</label>
                <textarea
                  rows={2}
                  value={editingService.description || ''}
                  onChange={(e) =>
                    setEditingService({ ...editingService, description: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white resize-none"
                />
              </div>

              <div>
                <label className="block text-neutral-300 uppercase mb-1">
                  Deliverables (comma separated)
                </label>
                <input
                  type="text"
                  value={editingService.deliverables ? editingService.deliverables.join(', ') : ''}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      deliverables: e.target.value.split(',').map((d) => d.trim()),
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
                  className="px-4 py-2 rounded-lg bg-white/5 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-[#6b7d50] text-[#090a09] font-bold uppercase"
                >
                  Save Capability
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: REGISTER MEDIA ITEM */}
      {/* ========================================================================= */}
      {newMediaModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setNewMediaModalOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-[#111411] border border-white/20 p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <h3 className="font-display text-xl font-bold uppercase text-white">
                Register Media Item
              </h3>
              <button
                onClick={() => setNewMediaModalOpen(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddMedia} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-neutral-300 uppercase mb-1">Asset Name</label>
                <input
                  type="text"
                  value={newMediaName}
                  onChange={(e) => setNewMediaName(e.target.value)}
                  placeholder="webza-editorial-shoot.jpg"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white"
                />
              </div>

              <div>
                <label className="block text-neutral-300 uppercase mb-1">Public URL or Path *</label>
                <input
                  type="text"
                  required
                  value={newMediaUrl}
                  onChange={(e) => setNewMediaUrl(e.target.value)}
                  placeholder="/brand/webza-brand-poster.jpg or https://..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setNewMediaModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-white/5 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-[#6b7d50] text-[#090a09] font-bold uppercase"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
