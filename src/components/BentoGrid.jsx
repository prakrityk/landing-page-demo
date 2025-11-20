import { CLASSES, getImageUrl } from '../components/utils/constants';
import GlassCard from './GlassCard';
import useScrollAnimation from '../hooks/useScrollAnimation';

const BentoGrid = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Size mapping for grid layout
  const getSizeClass = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-1';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <section className="min-h-screen py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-lavender/5 rounded-full blur-3xl"></div>

      {/* Content Container - Centered */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-plum-dark mb-4">
            Our Classes
          </h2>
          <p className="text-lg md:text-xl text-plum max-w-2xl mx-auto">
            Discover the perfect class to match your wellness journey
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {CLASSES.map((classItem, index) => (
            <ClassCard 
              key={classItem.id} 
              classItem={classItem} 
              index={index}
              sizeClass={getSizeClass(classItem.size)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

// Individual Class Card Component
const ClassCard = ({ classItem, index, sizeClass }) => {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold: 0.2,
    triggerOnce: true 
  });

  return (
    <div
      ref={ref}
      className={`${sizeClass} transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <GlassCard 
        hover 
        className="h-full overflow-hidden relative group cursor-pointer min-h-[280px]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={getImageUrl(classItem.image)}
            alt={classItem.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          {/* Balanced overlay - images visible, text readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent"></div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 h-full px-6 md:px-8 pt-6 md:pt-8 pb-3 md:pb-4 flex flex-col justify-end">
          
          {/* Title with text shadow for readability */}
          <h3 className="text-2xl md:text-3xl font-bold mb-0.5 transition-transform duration-300 group-hover:-translate-y-1 text-plum-dark drop-shadow-sm">
            {classItem.name}
          </h3>
          
          {/* Description with better contrast */}
          <p className="text-sm md:text-base text-plum-dark leading-relaxed mb-1 drop-shadow-sm">
            {classItem.description}
          </p>

          {/* Learn more indicator */}
          <div className="flex items-center gap-2 text-plum opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
            <span className="text-sm font-semibold">Explore Class</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default BentoGrid;