import { ArrowRight } from 'lucide-react';
import GlassCard from './GlassCard';
import { getImageUrl } from '../components/utils/constants';

const Hero = ({ onBookingOpen }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 mesh-gradient relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-plum/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lavender/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Large Background Image Card */}
        <div className="relative animate-fadeIn">
          <GlassCard className="overflow-hidden h-[550px] md:h-[650px] lg:h-[700px] relative group">
            {/* Hero Image */}
            <div className="absolute inset-0">
              <img 
                src={getImageUrl('hero.jpg')}
                alt="Pilates Studio"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              {/* Stronger gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-plum-dark/50 via-plum/30 to-transparent"></div>
              {/* Additional darkening at center for card placement */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-2xl h-96 bg-plum-dark/20 blur-3xl"></div>
              </div>
            </div>

            {/* Floating Content Glass Card - Centered */}
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              <div 
                className="w-full max-w-xl md:max-w-lg animate-fadeIn" 
                style={{ animationDelay: '0.3s' }}
              >
                <div className="bg-cream/95 backdrop-blur-2xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20">
                  {/* Branding - Centered */}
                  <div className="text-center mb-6">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-plum-dark mb-2">
                      ALIGN
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-plum italic">
                      Find Your Flow
                    </p>
                  </div>

                  {/* Tagline */}
                  <p className="text-base text-center md:text-lg text-plum-dark/80 mb-8 leading-relaxed ">
                    Transform your body and mind through expert-led pilates and mindful movement
                  </p>

                  {/* CTA Button */}
                  {/* <button className="w-full bg-plum-dark hover:bg-plum text-cream font-medium py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl mb-8 flex items-center justify-center gap-2 group">
                    Start Your Journey
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button> */}

                   <button 
    onClick={() => onBookingOpen()}
    className="w-full bg-plum-dark hover:bg-plum text-cream font-medium py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl mb-8 flex items-center justify-center gap-2 group"
  >
    Start Your Journey
    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
  </button>

                  {/* Key Features - Compact Grid */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-center text-plum-dark border-t border-plum/20 pt-6">
                    <div className="flex  items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-lavender/40 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <p className="text-sm font-medium">Expert instructors</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-lavender/40 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <p className="text-sm font-medium">Small classes</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-lavender/40 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <p className="text-sm font-medium">Premium equipment</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-lavender/40 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <p className="text-sm font-medium">Flexible schedule</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges on the background image - More visible */}
            <div className="absolute top-6 right-6 z-[5] animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <div className="bg-cream/95 backdrop-blur-md px-5 py-3 rounded-full shadow-xl border border-white/30">
                <p className="text-sm font-bold text-plum-dark">Est. 2020</p>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 z-[5] hidden md:block animate-fadeIn" style={{ animationDelay: '0.7s' }}>
              <div className="bg-cream/95 backdrop-blur-md px-5 py-3 rounded-full shadow-xl border border-white/30">
                <p className="text-sm font-semibold text-plum-dark">🧘‍♀️ Serene Studio Space</p>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>

      {/* Scroll indicator
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-plum/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-plum/50 rounded-full animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;