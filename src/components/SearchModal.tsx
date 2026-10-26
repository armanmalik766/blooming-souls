import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Brain, BookOpen, FileText, Calendar } from 'lucide-react';
import { services } from '../data/services';
import { courses } from '../data/courses';
import { events } from '../data/events';
import { blogs } from '../data/blogs';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmedQuery = query.toLowerCase().trim();

  const filteredServices = trimmedQuery
    ? services.filter(s => 
        s.title.toLowerCase().includes(trimmedQuery) || 
        s.shortDescription.toLowerCase().includes(trimmedQuery) ||
        s.category.toLowerCase().includes(trimmedQuery)
      )
    : [];

  const filteredCourses = trimmedQuery
    ? courses.filter(c => 
        c.title.toLowerCase().includes(trimmedQuery) || 
        c.shortDescription.toLowerCase().includes(trimmedQuery) ||
        c.category.toLowerCase().includes(trimmedQuery)
      )
    : [];

  const filteredBlogs = trimmedQuery
    ? blogs.filter(b => 
        b.title.toLowerCase().includes(trimmedQuery) || 
        b.shortDescription.toLowerCase().includes(trimmedQuery) ||
        b.category.toLowerCase().includes(trimmedQuery)
      )
    : [];

  const filteredEvents = trimmedQuery
    ? events.filter(e => 
        e.title.toLowerCase().includes(trimmedQuery) || 
        e.description.toLowerCase().includes(trimmedQuery) ||
        e.categoryLabel.toLowerCase().includes(trimmedQuery)
      )
    : [];

  const hasResults = filteredServices.length > 0 || filteredCourses.length > 0 || filteredBlogs.length > 0 || filteredEvents.length > 0;

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div
      id="search-overlay-modal"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-[28px] shadow-2xl border border-[#E8DDED] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E8DDED] flex items-center gap-3">
          <Search className="w-6 h-6 text-[#700486] flex-shrink-0 ml-2" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search mental health services, courses, psychiatric articles..."
            className="w-full text-base sm:text-lg text-[#1D1D1F] placeholder:text-[#888888] focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-[#888888] hover:text-[#1D1D1F]"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#666666] hover:bg-[#F3EAF6] hover:text-[#700486] transition-colors ml-1"
          >
            <span className="sr-only">Close</span>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {!trimmedQuery && (
            <div className="text-center py-8">
              <p className="text-sm text-[#666666] mb-4">
                Popular searches you can explore:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  'Psychiatric Consultation',
                  'Relationship Counselling',
                  'Anxiety & Stress',
                  'Depression Care',
                  'Clinical Internship',
                  'Emotional Intelligence'
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-full text-xs bg-[#FAF7FC] border border-[#E8DDED] text-[#700486] hover:bg-[#F3EAF6] font-medium transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {trimmedQuery && !hasResults && (
            <div className="text-center py-12">
              <p className="text-base font-semibold text-[#1D1D1F] mb-1">
                No results found for "{query}"
              </p>
              <p className="text-xs text-[#666666]">
                Try searching for psychiatry, therapy, couples, depression, or courses.
              </p>
            </div>
          )}

          {/* Services Results */}
          {filteredServices.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#700486] mb-3">
                <Brain className="w-4 h-4" />
                Services ({filteredServices.length})
              </div>
              <div className="space-y-2">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleSelect(`/services?focus=${service.slug}`)}
                    className="p-3 rounded-2xl border border-[#E8DDED] hover:border-[#700486] hover:bg-[#FAF7FC] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-heading font-semibold text-sm sm:text-base text-[#1D1D1F] group-hover:text-[#700486]">
                        {service.title}
                      </h4>
                      <p className="text-xs text-[#666666] line-clamp-1 mt-0.5">
                        {service.shortDescription}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#700486] opacity-0 group-hover:opacity-100 transition-opacity ml-3 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Courses Results */}
          {filteredCourses.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#700486] mb-3">
                <BookOpen className="w-4 h-4" />
                Programs & Courses ({filteredCourses.length})
              </div>
              <div className="space-y-2">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => handleSelect('/courses')}
                    className="p-3 rounded-2xl border border-[#E8DDED] hover:border-[#700486] hover:bg-[#FAF7FC] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-heading font-semibold text-sm sm:text-base text-[#1D1D1F] group-hover:text-[#700486]">
                        {course.title}
                      </h4>
                      <p className="text-xs text-[#666666] line-clamp-1 mt-0.5">
                        {course.duration} • {course.level}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#700486] opacity-0 group-hover:opacity-100 transition-opacity ml-3 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blog Results */}
          {filteredBlogs.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#700486] mb-3">
                <FileText className="w-4 h-4" />
                Insights & Articles ({filteredBlogs.length})
              </div>
              <div className="space-y-2">
                {filteredBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    onClick={() => handleSelect(`/blog/${blog.slug}`)}
                    className="p-3 rounded-2xl border border-[#E8DDED] hover:border-[#700486] hover:bg-[#FAF7FC] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-heading font-semibold text-sm sm:text-base text-[#1D1D1F] group-hover:text-[#700486]">
                        {blog.title}
                      </h4>
                      <p className="text-xs text-[#666666] line-clamp-1 mt-0.5">
                        {blog.category} • {blog.readTime}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#700486] opacity-0 group-hover:opacity-100 transition-opacity ml-3 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events Results */}
          {filteredEvents.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#700486] mb-3">
                <Calendar className="w-4 h-4" />
                Events & Initiatives ({filteredEvents.length})
              </div>
              <div className="space-y-2">
                {filteredEvents.map((evt) => (
                  <div
                    key={evt.id}
                    onClick={() => handleSelect(`/events?focus=${evt.id}`)}
                    className="p-3 rounded-2xl border border-[#E8DDED] hover:border-[#700486] hover:bg-[#FAF7FC] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-heading font-semibold text-sm sm:text-base text-[#1D1D1F] group-hover:text-[#700486]">
                        {evt.title}
                      </h4>
                      <p className="text-xs text-[#666666] line-clamp-1 mt-0.5">
                        {evt.categoryLabel} • {evt.frequency || 'Event'}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#700486] opacity-0 group-hover:opacity-100 transition-opacity ml-3 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Modal Footer */}
        <div className="p-3 bg-[#FAF7FC] border-t border-[#E8DDED] text-xs text-[#777777] flex items-center justify-between px-6">
          <span>Press <strong>Esc</strong> to exit</span>
          <span>Blooming Souls Health Directory</span>
        </div>
      </div>
    </div>
  );
};
