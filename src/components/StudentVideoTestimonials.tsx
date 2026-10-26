import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Star, 
  Play, 
  Volume2, 
  VolumeX, 
  Wifi, 
  Battery 
} from 'lucide-react';

interface StudentVideo {
  id: string;
  name: string;
  course: string;
  quote: string;
  batch: string;
  time: string;
  thumbnail: string;
  videoSrc: string;
}

const studentVideos: StudentVideo[] = [
  {
    id: 'vid-1',
    name: 'Ananya Sharma',
    course: 'Clinical Psychology Masterclass',
    quote: 'The diagnostic discussions and live case studies gave me genuine clinical confidence.',
    batch: 'Batch of 2025',
    time: '9:41',
    thumbnail: '/images/testimonials/student-ananya.jpg',
    videoSrc: '/videos/testimonials/student-ananya.mp4'
  },
  {
    id: 'vid-2',
    name: 'Rhea Kapoor',
    course: 'Therapy & Counselling Immersion',
    quote: 'Learned practical CBT and DBT techniques that textbooks never adequately cover.',
    batch: 'Batch of 2025',
    time: '9:41',
    thumbnail: '/images/testimonials/student-rhea.jpg',
    videoSrc: '/videos/testimonials/student-rhea.mp4'
  },
  {
    id: 'vid-3',
    name: 'Muskan Verma',
    course: 'Practitioner Certification',
    quote: 'Mentorship under Sadaf Ma’am is transformative, compassionate, and deeply rigorous.',
    batch: 'Batch of 2026',
    time: '9:41',
    thumbnail: '/images/testimonials/student-muskan.jpg',
    videoSrc: '/videos/testimonials/student-muskan.mp4'
  },
  {
    id: 'vid-4',
    name: 'Kabir Mehra',
    course: 'Clinical Mentorship Program',
    quote: 'Real case observations prepared me for client work far beyond standard curriculum.',
    batch: 'Batch of 2025',
    time: '9:41',
    thumbnail: '/images/testimonials/student-kabir.jpg',
    videoSrc: '/videos/testimonials/student-kabir.mp4'
  },
  {
    id: 'vid-5',
    name: 'Divya Patel',
    course: 'Psychometric Assessments',
    quote: 'Hands-on test administration and clinical report formulation made crystal clear.',
    batch: 'Batch of 2026',
    time: '9:41',
    thumbnail: '/images/testimonials/student-divya.jpg',
    videoSrc: '/videos/testimonials/student-divya.mp4'
  },
  {
    id: 'vid-6',
    name: 'Simran Juneja',
    course: 'Child & Adolescent Psychology',
    quote: 'Invaluable clinical perspective for supporting young minds and modern families.',
    batch: 'Batch of 2025',
    time: '9:41',
    thumbnail: '/images/testimonials/student-simran.jpg',
    videoSrc: '/videos/testimonials/student-simran.mp4'
  }
];

export const StudentVideoTestimonials: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleTogglePlay = (videoId: string) => {
    const currentVideo = videoRefs.current[videoId];
    if (!currentVideo) return;

    if (playingId === videoId && !currentVideo.paused) {
      // Pause
      currentVideo.pause();
      setPlayingId(null);
    } else {
      // Pause any previously playing video
      if (playingId && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }
      currentVideo.play().then(() => {
        setPlayingId(videoId);
      }).catch(() => {
        // Fallback if browser requires muted autoplay
        currentVideo.muted = true;
        setIsMuted(true);
        currentVideo.play();
        setPlayingId(videoId);
      });
    }
  };

  const handleTimeUpdate = (videoId: string) => {
    const video = videoRefs.current[videoId];
    if (video && video.duration) {
      const pct = (video.currentTime / video.duration) * 100;
      setProgressMap((prev) => ({ ...prev, [videoId]: pct }));
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    (Object.values(videoRefs.current) as (HTMLVideoElement | null)[]).forEach((v) => {
      if (v) v.muted = newMuted;
    });
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#FAF7FC] via-white to-[#FAF7FC]/80 border-t border-[#E8DDED] relative overflow-hidden">
      
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#700486]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section with Refined, Balanced Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div className="space-y-2 max-w-xl">
            {/* Top Badge: —— Our Testimonials */}
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-[1.5px] bg-[#700486]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#700486]">
                Our Testimonials
              </span>
            </div>

            {/* Clean, Balanced Heading */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#700486] tracking-tight leading-snug">
              See what our students are saying
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
              Real reflections and video experiences from psychology students, interns, and certified practitioners.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-2.5 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-full border border-[#E8DDED] bg-white text-[#700486] hover:bg-[#700486] hover:text-white shadow-2xs hover:shadow-md transition-all flex items-center justify-center cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-full border border-[#E8DDED] bg-white text-[#700486] hover:bg-[#700486] hover:text-white shadow-2xs hover:shadow-md transition-all flex items-center justify-center cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container: Realistic iPhone 17 Pro Max Devices */}
        <div 
          ref={scrollContainerRef}
          className="flex items-start gap-6 sm:gap-7 overflow-x-auto pb-6 pt-3 px-1 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {studentVideos.map((video) => {
            const isPlaying = playingId === video.id;
            const progress = progressMap[video.id] || 0;

            return (
              <div
                key={video.id}
                className="flex-shrink-0 w-[270px] sm:w-[285px] snap-center group flex flex-col"
              >
                {/* ============================================================== */}
                {/* IPHONE 17 PRO MAX TITANIUM CHASSIS                             */}
                {/* ============================================================== */}
                <div className="relative mx-auto w-full transition-transform duration-300 group-hover:-translate-y-1.5">
                  
                  {/* Physical Buttons (Side) */}
                  <span className="absolute -left-[3px] top-[74px] w-[3px] h-[18px] bg-[#3B3545] rounded-l-xs shadow-xs" />
                  <span className="absolute -left-[3px] top-[102px] w-[3px] h-[34px] bg-[#3B3545] rounded-l-xs shadow-xs" />
                  <span className="absolute -left-[3px] top-[146px] w-[3px] h-[34px] bg-[#3B3545] rounded-l-xs shadow-xs" />
                  <span className="absolute -right-[3px] top-[102px] w-[3px] h-[46px] bg-[#3B3545] rounded-r-xs shadow-xs" />
                  <span className="absolute -right-[3px] top-[170px] w-[3px] h-[30px] bg-[#2E2838] rounded-r-xs shadow-xs" />

                  {/* Outer Dark Titanium Border & Chamfered Edge */}
                  <div className="p-[7px] bg-gradient-to-b from-[#4A4254] via-[#241F2B] to-[#3A3343] rounded-[48px] sm:rounded-[52px] shadow-[0_16px_36px_rgba(0,0,0,0.22),0_4px_12px_rgba(112,4,134,0.08)] ring-1 ring-white/15">
                    
                    {/* Inner Screen Bezel */}
                    <div 
                      className="relative aspect-[9/19] w-full bg-black rounded-[42px] sm:rounded-[46px] overflow-hidden border border-black shadow-inner cursor-pointer select-none group/screen"
                      onClick={() => handleTogglePlay(video.id)}
                    >
                      
                      {/* iOS Status Bar (Header) */}
                      <div className="absolute top-0 inset-x-0 h-10 px-5 pt-2 flex items-center justify-between text-white/95 text-[11px] font-semibold tracking-tight z-30 pointer-events-none">
                        <span className="font-medium tracking-normal text-[11px] drop-shadow-xs">
                          {video.time}
                        </span>

                        <div className="flex items-center gap-1.5 opacity-90 drop-shadow-xs">
                          <div className="flex items-end gap-[1.5px] h-2.5">
                            <span className="w-[2px] h-[3px] bg-white rounded-2xs" />
                            <span className="w-[2px] h-[5px] bg-white rounded-2xs" />
                            <span className="w-[2px] h-[7px] bg-white rounded-2xs" />
                            <span className="w-[2px] h-[9px] bg-white rounded-2xs" />
                          </div>
                          <Wifi className="w-3 h-3 text-white" />
                          <Battery className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>

                      {/* Dynamic Island (iPhone 17 Pro Max) */}
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                        <div className="w-24 h-5 bg-black rounded-full border border-white/10 flex items-center justify-between px-2.5 shadow-md">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#0E1524] ring-1 ring-[#1b253b]/60 relative overflow-hidden">
                            <div className="w-1 h-1 rounded-full bg-[#3b5998]/40 absolute top-0.5 right-0.5" />
                          </div>
                          <div className="w-1.5 h-1.5 rounded-full bg-[#050505] ring-1 ring-white/5" />
                        </div>
                      </div>

                      {/* Pure HTML5 Video Player */}
                      <video
                        ref={(el) => (videoRefs.current[video.id] = el)}
                        src={video.videoSrc}
                        poster={video.thumbnail}
                        playsInline
                        loop
                        muted={isMuted}
                        onTimeUpdate={() => handleTimeUpdate(video.id)}
                        onEnded={() => setPlayingId(null)}
                        className="w-full h-full object-cover"
                      />

                      {/* Clean Custom Play / Pause Overlay Icon */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none ${
                        isPlaying ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                      }`}>
                        <div className="w-14 h-14 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-md border border-white/30 shadow-[0_8px_24px_rgba(0,0,0,0.5)] group-hover/screen:scale-115 group-hover/screen:bg-[#700486] transition-all">
                          <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                        </div>
                      </div>

                      {/* Subtle Hint when paused */}
                      {!isPlaying && (
                        <div className="absolute bottom-6 inset-x-3 text-center pointer-events-none">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/55 text-white/95 text-[11px] font-medium backdrop-blur-md border border-white/15">
                            <Play className="w-2.5 h-2.5 fill-white" />
                            <span>Tap to Play Video</span>
                          </span>
                        </div>
                      )}

                      {/* Audio Mute / Unmute Button (Top Right) */}
                      {isPlaying && (
                        <button
                          onClick={toggleMute}
                          className="absolute top-12 right-3.5 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all shadow-md z-20 cursor-pointer"
                          title={isMuted ? 'Unmute' : 'Mute'}
                          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                        >
                          {isMuted ? (
                            <VolumeX className="w-3.5 h-3.5 text-white" />
                          ) : (
                            <Volume2 className="w-3.5 h-3.5 text-white" />
                          )}
                        </button>
                      )}

                      {/* Clean Video Progress Bar (Reel Style, at the bottom) */}
                      {isPlaying && (
                        <div className="absolute bottom-4 inset-x-5 h-[2.5px] bg-white/30 rounded-full overflow-hidden z-20 pointer-events-none">
                          <div 
                            className="h-full bg-white transition-all duration-100 rounded-full"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}

                      {/* Bottom iOS Home Indicator Bar */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/70 rounded-full z-30 pointer-events-none" />
                    </div>
                  </div>

                  {/* Ambient Soft Phone Shadow on Surface */}
                  <div className="w-4/5 h-4 bg-[#700486]/10 rounded-full blur-md mx-auto mt-2" />
                </div>

                {/* Student Metadata Card underneath the iPhone */}
                <div className="mt-3 bg-white p-3.5 rounded-2xl border border-[#E8DDED] shadow-2xs text-left">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h4 className="font-heading font-bold text-sm text-[#1D1D1F] truncate">
                      {video.name}
                    </h4>
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-400 stroke-none" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#700486] truncate mb-2">
                    <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="truncate">{video.course}</span>
                  </div>

                  <p className="text-[11px] text-[#555555] leading-relaxed italic line-clamp-2 bg-[#FAF7FC] p-2 rounded-lg border border-[#F2EBF5]">
                    "{video.quote}"
                  </p>

                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#888888] pt-2 border-t border-[#F5EDF7]">
                    <span className="font-semibold text-[#700486]">{video.batch}</span>
                    <span className="text-[10px] text-[#666666] bg-[#FAF7FC] px-2 py-0.5 rounded-full border border-[#E8DDED]">
                      Verified Student
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-8 pt-6 border-t border-[#E8DDED]/80 flex flex-wrap items-center justify-between gap-4 text-xs text-[#666666]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Over <strong>1,200+</strong> psychology students & mental health practitioners mentored</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-medium text-[#700486]">
              Clinical Mentorship • DSM-5 Diagnostics • Psychotherapy Certifications
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
