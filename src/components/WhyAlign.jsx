import { Users, Sparkles, Heart, Clock } from 'lucide-react';
import { BENEFITS } from '../components/utils/constants';

// Map icon names to Lucide components
const iconMap = {
  Users,
  Sparkles,
  Heart,
  Clock,
};

export default function WhyAlign() {
  return (
    <section className="py-20 px-4 gradient-soft">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl font-bold text-plum-dark mb-4"
            style={{ fontFamily: 'Cormorant, serif' }}
          >
            Why Choose ALIGN
          </h2>
          <p
            className="text-lg text-plum max-w-2xl mx-auto font-light"
            style={{ fontFamily: 'Cormorant, serif' }}
          >
            Experience the difference with our premium pilates studio designed for your success
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit) => {
            const IconComponent = iconMap[benefit.icon];
            return (
              <div
                key={benefit.id}
                className="group glass p-8 hover:glass-strong transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 bg-[#ffead8] rounded-lg group-hover:bg-[#ddc3c3] transition-colors duration-300">
                  <IconComponent
                    className="w-6 h-6 text-[#6b3f69]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-[#6b3f69] mb-3"
                  style={{ fontFamily: 'Cormorant, serif' }}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#8d5f8c] leading-relaxed font-light"
                  style={{ fontFamily: 'Cormorant, serif' }}
                >
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}