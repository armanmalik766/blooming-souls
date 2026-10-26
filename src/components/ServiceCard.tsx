import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  HeartHandshake, 
  Heart, 
  Compass, 
  FileCheck, 
  Users, 
  ArrowRight,
  Clock,
  CheckCircle2,
  Calendar,
  Sparkles,
  MessageCircle,
  Flower2,
  Star,
  Briefcase,
  FileText
} from 'lucide-react';
import { Service } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-5 h-5" />,
  MessageCircle: <MessageCircle className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Flower2: <Flower2 className="w-5 h-5" />,
  Star: <Star className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  FileCheck: <FileCheck className="w-5 h-5" />
};

interface ServiceCardProps {
  service: Service;
  onBookNow?: (serviceTitle: string) => void;
  onClickDetails?: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  onBookNow,
  onClickDetails 
}) => {
  return (
    <div
      id={`service-card-${service.slug}`}
      className="group relative bg-white rounded-[32px] p-3 border border-[#E8DDED] shadow-sm hover:shadow-xl hover:shadow-[#700486]/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
    >
      <div>
        {/* Top Image Frame matching Screenshot 2 rounded aesthetic */}
        <div 
          onClick={() => onClickDetails && onClickDetails(service)}
          className="relative aspect-[4/3.5] w-full rounded-[26px] overflow-hidden bg-[#FAF7FC] border border-[#E8DDED]/70 cursor-pointer"
        >
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            loading="lazy"
          />

          {/* Top Duration Badge */}
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#1D1D1F] border border-[#E8DDED] shadow-2xs flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-[#700486]" />
            <span>{service.duration}</span>
          </div>

          {/* Category Chip */}
          <div className="absolute top-3 right-3 bg-[#700486]/90 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs">
            {service.category}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Title */}
          <h3 
            onClick={() => onClickDetails && onClickDetails(service)}
            className="font-heading font-bold text-xl sm:text-[22px] text-[#700486] group-hover:text-[#58036B] transition-colors mb-2 leading-snug cursor-pointer"
          >
            {service.title}
          </h3>

          {/* Short Description */}
          <p className="text-[#666666] text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Key Clinical Focus Items */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="space-y-1.5 pt-3 border-t border-[#E8DDED]/70 mb-2">
              <div className="text-[10px] font-bold text-[#700486] uppercase tracking-wider">
                Clinical Focus
              </div>
              <ul className="space-y-1 text-[11px] text-[#555555]">
                {service.benefits.slice(0, 2).map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#700486] flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-4 pb-3 pt-2 border-t border-[#E8DDED]/60 flex items-center justify-between gap-2 mt-auto">
        <button
          onClick={() => onClickDetails ? onClickDetails(service) : null}
          className="text-xs font-semibold text-[#666666] hover:text-[#700486] transition-colors inline-flex items-center gap-1 cursor-pointer"
        >
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {onBookNow && (
          <button
            onClick={() => onBookNow(service.title)}
            className="text-xs px-3.5 py-1.5 rounded-full bg-[#700486] text-white font-semibold hover:bg-[#58036B] transition-all shadow-2xs hover:shadow-md cursor-pointer flex items-center gap-1"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book</span>
          </button>
        )}
      </div>
    </div>
  );
};
