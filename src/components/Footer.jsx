import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../components/utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    'Instagram': Instagram,
    'Facebook': Facebook,
  };

  return (
    <footer className="bg-plum-dark text-cream py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold tracking-wide mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              ALIGN
            </h3>
            <p className="text-cream/80 text-sm leading-relaxed">
              Transform your body and mind through expert-led pilates and mindful movement.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-cream/80 text-sm">
              <div className="flex items-start gap-3">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-cream transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-cream transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <p>{CONTACT_INFO.address}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.name];
                return Icon ? (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                ) : null;
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 pt-8 text-center">
          <p className="text-cream/60 text-sm">
            © {currentYear} ALIGN Pilates. All rights reserved. | Est. 2020
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;