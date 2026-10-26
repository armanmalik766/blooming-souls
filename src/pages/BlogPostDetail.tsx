import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  Stethoscope, 
  CalendarCheck,
  Check
} from 'lucide-react';
import { blogs } from '../data/blogs';
import { Button } from '../components/Button';
import { BlogCard } from '../components/BlogCard';

interface BlogPostDetailProps {
  onOpenQuickConnect: (service?: string, doctor?: string) => void;
}

export const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ onOpenQuickConnect }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copiedToast, setCopiedToast] = useState(false);

  const post = blogs.find(b => b.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h2 className="font-heading text-3xl font-bold text-[#1D1D1F] mb-4">
          Article Not Found
        </h2>
        <p className="text-sm text-[#666666] mb-6">
          The psychological insight or article you are searching for might have been moved or updated.
        </p>
        <Button variant="primary" to="/blog">
          Return to All Articles
        </Button>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 3000);
    }
  };

  const relatedPosts = blogs.filter(b => b.id !== post.id && (b.category === post.category || true)).slice(0, 2);

  return (
    <article className="pb-20">
      {/* Article Header & Cover */}
      <header className="bg-gradient-to-b from-[#FAF7FC] via-white to-white pt-10 sm:pt-16 pb-8 border-b border-[#E8DDED]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back Navigation */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#700486] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights & Articles
          </Link>

          {/* Category Pill */}
          <div className="mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#F3EAF6] text-[#700486] border border-[#E8DDED]">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D1D1F] tracking-tight leading-[1.2] mb-6">
            {post.title}
          </h1>

          {/* Metadata & Author Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#E8DDED]">
            <div className="flex items-center gap-3">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#700486]"
              />
              <div>
                <div className="font-heading font-bold text-sm text-[#1D1D1F]">
                  {post.author.name}
                </div>
                <div className="text-xs text-[#666666]">
                  {post.author.role}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#666666]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#700486]" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#700486]" />
                {post.readTime}
              </span>
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-[#FAF7FC] hover:bg-[#F3EAF6] text-[#700486] border border-[#E8DDED] ml-2"
                title="Share article"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Cover Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8">
        <div className="rounded-[30px] overflow-hidden shadow-lg border border-[#E8DDED] max-h-[440px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Key Takeaways Box */}
        <div className="p-6 sm:p-7 rounded-[24px] bg-[#FAF7FC] border border-[#E8DDED]">
          <h3 className="font-heading font-bold text-base text-[#1D1D1F] flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-[#700486]" />
            Clinical Key Takeaways
          </h3>
          <ul className="space-y-2">
            {post.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="text-xs sm:text-sm text-[#555555] flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#700486] mt-2 flex-shrink-0" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Narrative Paragraphs */}
        <div className="prose max-w-none text-[#333333] text-base sm:text-lg leading-relaxed space-y-5">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-[#E8DDED] flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-[#FAF7FC] border border-[#E8DDED] text-[#666666]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box with Consultation CTA */}
        <div className="p-6 sm:p-8 rounded-[28px] bg-gradient-to-r from-[#FAF7FC] to-[#F3EAF6] border border-[#E8DDED] flex flex-col sm:flex-row items-center gap-6 mt-10">
          <img
            src={post.author.image}
            alt={post.author.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-[#700486] shadow-sm flex-shrink-0"
          />
          <div className="text-center sm:text-left space-y-2 flex-1">
            <div className="text-xs font-bold text-[#700486] uppercase tracking-wider">
              Written by Clinical Specialist
            </div>
            <h4 className="font-heading font-bold text-lg text-[#1D1D1F]">
              {post.author.name}
            </h4>
            <p className="text-xs text-[#666666]">
              {post.author.role} at Blooming Souls Mental Healthcare Clinic.
            </p>
            <div className="pt-1">
              <Button
                variant="primary"
                size="sm"
                onClick={() => onOpenQuickConnect(undefined, post.author.name)}
                icon={<CalendarCheck className="w-4 h-4" />}
                iconPosition="left"
              >
                Book Session with {post.author.name.split(' ')[1] || post.author.name}
              </Button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="pt-16 border-t border-[#E8DDED] mt-16">
            <h3 className="font-heading font-bold text-2xl text-[#1D1D1F] mb-6">
              Related Clinical Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <BlogCard key={rPost.id} post={rPost} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Copy Toast Notification */}
      {copiedToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#1D1D1F] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-xl flex items-center gap-2 z-50 animate-fade-in border border-white/10">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Article link copied to clipboard!</span>
        </div>
      )}
    </article>
  );
};
