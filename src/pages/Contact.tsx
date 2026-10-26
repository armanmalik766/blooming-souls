import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  MessageCircle, 
  ChevronRight,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Navigation,
  ExternalLink
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FCF9FD] min-h-screen py-6 sm:py-10 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Breadcrumbs matching Screenshot */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-xs sm:text-sm font-medium border border-[#E8DDED] text-[#700486] shadow-2xs">
            <Link to="/" className="text-[#666666] hover:text-[#700486] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#700486]" />
            <span className="font-semibold text-[#700486]">Contact Us</span>
          </div>
        </div>

        {/* Main 2-Column Section matching Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Head Office, Mobile, Email, Hours, Socials                   */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 pt-2">
            
            {/* Badge: horizontal line with Contact Us */}
            <div className="flex items-center gap-3">
              <span className="w-10 sm:w-12 h-[1.5px] bg-[#333333]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#700486]">
                Contact Us
              </span>
            </div>

            {/* Headline matching screenshot */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#700486] tracking-tight leading-[1.2]">
              Feel Free To Contact & Reach Us!
            </h1>

            {/* Description matching screenshot */}
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
              Contact Sadaf Malik, renowned as a top psychologist in New Delhi, for effective mental health care. Specializing in expert counseling and therapy services, Sadaf provides compassionate care and extensive experience in helping individuals overcome anxiety, depression, trauma, and relationship issues.
            </p>

            {/* 4 Details Grid matching Screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              
              {/* Mobile Number */}
              <div className="space-y-2">
                <div className="w-11 h-11 rounded-full border border-[#E8DDED] bg-white flex items-center justify-center text-[#700486] shadow-2xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#222222]">
                    Mobile Number:
                  </h3>
                  <a
                    href="tel:+918826533260"
                    className="text-sm text-[#555555] hover:text-[#700486] transition-colors block mt-0.5"
                  >
                    +91 88265 33260
                  </a>
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <div className="w-11 h-11 rounded-full border border-[#E8DDED] bg-white flex items-center justify-center text-[#700486] shadow-2xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#222222]">
                    Email Address:
                  </h3>
                  <a
                    href="mailto:info@bloomingsouls.in"
                    className="text-sm text-[#555555] hover:text-[#700486] transition-colors block mt-0.5"
                  >
                    info@bloomingsouls.in
                  </a>
                </div>
              </div>

              {/* Head Office Address */}
              <div className="space-y-2">
                <div className="w-11 h-11 rounded-full border border-[#E8DDED] bg-white flex items-center justify-center text-[#700486] shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#222222]">
                    Head Office Address:
                  </h3>
                  <a
                    href="https://www.google.com/maps/place/Blooming+Souls+%26+Psyche+Pvt+Ltd+-+Best+Psychologist+in+New+Delhi/@28.571225,77.269528,613m/data=!3m1!1e3!4m6!3m5!1s0x390ce396d3fe1cc9:0x8d3d0a720854ebad!8m2!3d28.5712248!4d77.2695284!16s%2Fg%2F11s0zld_qd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#555555] hover:text-[#700486] hover:underline leading-relaxed mt-0.5 block"
                  >
                    98-B, Third floor, Namberdar Estate, Taimoor Nagar, New Friends Colony, New Delhi - 110065
                  </a>
                </div>
              </div>

              {/* Work Hours */}
              <div className="space-y-2">
                <div className="w-11 h-11 rounded-full border border-[#E8DDED] bg-white flex items-center justify-center text-[#700486] shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#222222]">
                    Work Hours
                  </h3>
                  <p className="text-sm text-[#555555] mt-0.5">
                    Mon-Sat 12:00-6:00
                  </p>
                </div>
              </div>

            </div>

            {/* Follow Us On Social Media row matching screenshot */}
            <div className="pt-4 flex items-center flex-wrap gap-3">
              <span className="text-sm sm:text-base font-bold text-[#700486]">
                Follow us on Social Media:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com/bloomingsouls"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-[#700486]/30 text-[#700486] flex items-center justify-center hover:bg-[#700486] hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/company/bloomingsouls"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full border border-[#700486]/30 text-[#700486] flex items-center justify-center hover:bg-[#700486] hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/bloomingsouls"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-[#700486]/30 text-[#700486] flex items-center justify-center hover:bg-[#700486] hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com/@bloomingsouls"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full border border-[#700486]/30 text-[#700486] flex items-center justify-center hover:bg-[#700486] hover:text-white transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Send Us a Message Form matching Screenshot                 */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-[#F0E6F3]">
              
              <h2 className="font-heading text-3xl sm:text-4xl text-[#333333] font-light mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-10 px-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#1D1D1F]">
                    Thank You, {form.firstName}!
                  </h3>
                  <p className="text-sm text-[#666666] max-w-md mx-auto leading-relaxed">
                    Your message has been received by our clinic in New Delhi. We will reach out to you at <strong>{form.phone || form.email}</strong> shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#700486] text-white text-sm font-semibold hover:bg-[#550266] transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        placeholder="First Name"
                        className="w-full px-5 py-3 rounded-full border border-[#8915A2] text-sm text-[#1D1D1F] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#700486]/30 bg-white"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        placeholder="Last Name"
                        className="w-full px-5 py-3 rounded-full border border-[#8915A2] text-sm text-[#1D1D1F] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#700486]/30 bg-white"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Email Address"
                      className="w-full px-5 py-3 rounded-full border border-[#8915A2] text-sm text-[#1D1D1F] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#700486]/30 bg-white"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Phone Number"
                      className="w-full px-5 py-3 rounded-full border border-[#8915A2] text-sm text-[#1D1D1F] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#700486]/30 bg-white"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Message"
                      className="w-full px-5 py-4 rounded-3xl border border-[#8915A2] text-sm text-[#1D1D1F] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#700486]/30 resize-none bg-white"
                    />
                  </div>

                  {/* Submit Button matching screenshot */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-10 py-3 rounded-full bg-[#700486] hover:bg-[#550266] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-all cursor-pointer active:scale-95"
                    >
                      Submit
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Head Office Map & Directions Section */}
        <div className="bg-white rounded-3xl border border-[#E8DDED] overflow-hidden shadow-xs">
          <div className="p-6 sm:p-8 border-b border-[#E8DDED] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7FC] text-[#700486] text-xs font-semibold mb-2">
                <MapPin className="w-3.5 h-3.5" />
                Find Us on Google Maps
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#1D1D1F]">
                Blooming Souls & Psyche Pvt Ltd — Best Psychologist in New Delhi
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] mt-0.5">
                98-B, Third floor, Namberdar Estate, Taimoor Nagar, New Friends Colony, New Delhi - 110065
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.google.com/maps/place/Blooming+Souls+%26+Psyche+Pvt+Ltd+-+Best+Psychologist+in+New+Delhi/@28.571225,77.269528,613m/data=!3m1!1e3!4m6!3m5!1s0x390ce396d3fe1cc9:0x8d3d0a720854ebad!8m2!3d28.5712248!4d77.2695284!16s%2Fg%2F11s0zld_qd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#700486] text-white text-xs sm:text-sm font-semibold hover:bg-[#550266] transition-colors shadow-2xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/918826533260"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs sm:text-sm font-semibold hover:bg-[#20ba59] transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="relative w-full h-80 sm:h-96 bg-[#FAF7FC]">
            <iframe
              title="Blooming Souls & Psyche Pvt Ltd - Best Psychologist in New Delhi Map"
              src="https://maps.google.com/maps?q=28.5712248,77.2695284+(Blooming+Souls+%26+Psyche+Pvt+Ltd+-+Best+Psychologist+in+New+Delhi)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </div>
  );
};
