import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../data/blogs';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article
      id={`blog-card-${post.slug}`}
      className="group bg-white rounded-[26px] overflow-hidden border border-[#E8DDED] shadow-sm hover:shadow-xl hover:shadow-[#700486]/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
    >
      <div>
        {/* Cover Image */}
        <Link to={`/blog/${post.slug}`} className="block relative h-52 w-full overflow-hidden bg-[#FAF7FC]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-[#700486] shadow-sm">
              {post.category}
            </span>
          </div>
        </Link>

        {/* Post Metadata & Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-[#777777] mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#700486]" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#700486]" />
              {post.readTime}
            </span>
          </div>

          <h3 className="font-heading font-bold text-lg sm:text-xl text-[#1D1D1F] group-hover:text-[#700486] transition-colors mb-2.5 line-clamp-2 leading-snug">
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-sm text-[#666666] leading-relaxed line-clamp-3 mb-4">
            {post.shortDescription}
          </p>
        </div>
      </div>

      {/* Author & CTA */}
      <div className="p-6 pt-0 mt-auto border-t border-[#E8DDED]/50 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img
            src={post.author.image}
            alt={post.author.name}
            className="w-7 h-7 rounded-full object-cover border border-[#E8DDED]"
          />
          <span className="text-xs font-medium text-[#444444]">{post.author.name}</span>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#700486] group-hover:text-[#58036B] transition-colors"
        >
          <span>Read Article</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};
