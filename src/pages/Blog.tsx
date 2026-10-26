import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, BookOpen, Search, X, Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogs, BlogPost } from '../data/blogs';
import { BlogCard } from '../components/BlogCard';
import { Button } from '../components/Button';

export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const categories = [
    'All',
    'Mental Health',
    'Psychology',
    'Relationships',
    'Wellness',
    'Personal Growth'
  ];

  // Find featured post
  const featuredPost: BlogPost = useMemo(() => {
    return blogs.find(b => b.isFeatured) || blogs[0];
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedBlogs = filteredBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBlogs.length;

  return (
    <div className="space-y-6 sm:space-y-8 pb-12">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#FAF7FC] via-[#F3EAF6]/40 to-white pt-6 sm:pt-10 pb-8 border-b border-[#E8DDED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EAF6] text-[#700486] text-xs sm:text-sm font-semibold mb-4 border border-[#E8DDED]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Clinical Knowledge & Reflections</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D1D1F] tracking-tight mb-4">
            Insights for a <span className="text-[#700486]">Healthier Mind</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#555555] leading-relaxed mb-6">
            Evidence-based perspectives on psychiatry, emotional regulation, relationship dynamics, and mental healthcare written by our licensed doctors and clinical psychologists.
          </p>

          {/* Search Input Bar */}
          <div className="relative max-w-xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#888888]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(6); // Reset pagination on search
              }}
              placeholder="Search articles by topic, condition, or keyword..."
              className="w-full pl-12 pr-10 py-3.5 rounded-full bg-white border border-[#E8DDED] text-[#1D1D1F] text-sm focus:outline-none focus:border-[#700486] focus:ring-2 focus:ring-[#700486]/10 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(6);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#700486] text-white shadow-md shadow-[#700486]/20'
                    : 'bg-white text-[#555555] hover:text-[#700486] hover:bg-[#FAF7FC] border border-[#E8DDED]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article (when not searching or when category includes it) */}
      {!searchQuery && selectedCategory === 'All' && featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-[#E8DDED] bg-white shadow-md hover:shadow-xl transition-all group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#700486] text-white shadow-md">
                    Featured Article
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#666666] mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#F3EAF6] text-[#700486] font-semibold border border-[#E8DDED]">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#700486]" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#700486]" />
                      {featuredPost.date}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1D1D1F] group-hover:text-[#700486] transition-colors leading-tight mb-4">
                    <Link to={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed mb-6">
                    {featuredPost.shortDescription}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-[#E8DDED]">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.image}
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#700486]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#1D1D1F]">
                        {featuredPost.author.name}
                      </div>
                      <div className="text-[11px] text-[#666666]">
                        {featuredPost.author.role}
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#700486] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#1D1D1F]">
            {searchQuery ? `Search Results for "${searchQuery}"` : selectedCategory === 'All' ? 'All Clinical Articles' : `${selectedCategory} Articles`}
          </h3>
          <span className="text-xs text-[#666666]">
            Showing {displayedBlogs.length} of {filteredBlogs.length} articles
          </span>
        </div>

        {displayedBlogs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E8DDED] p-8">
            <BookOpen className="w-12 h-12 text-[#700486]/40 mx-auto mb-3" />
            <h4 className="font-heading font-bold text-lg text-[#1D1D1F] mb-1">
              No matching articles found
            </h4>
            <p className="text-xs sm:text-sm text-[#666666] mb-4">
              Try adjusting your search terms or filter by a different category.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {/* Pagination / Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-8 py-3.5 rounded-full font-heading font-semibold text-sm text-[#700486] bg-white border border-[#700486] hover:bg-[#FAF7FC] transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              Load More Articles
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
