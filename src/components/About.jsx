import React from 'react';

const About = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-cream to-lighter">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-plum-dark mb-8 tracking-tight">
          About ALIGN
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl font-light text-plum-dark/90 leading-relaxed italic">
          We exist to empower every body to discover their strength, embrace mindful movement, and create lasting transformation through the art of pilates.
        </p>
      </div>
    </section>
  );
};

export default About;