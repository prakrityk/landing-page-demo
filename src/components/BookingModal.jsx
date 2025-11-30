import React, { useState } from 'react';
import { X } from 'lucide-react';
import { PRICING_TIERS } from '../components/utils/constants';

const BookingModal = ({ isOpen, onClose, selectedPlan = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: selectedPlan,
    message: ''
  });

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.plan) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon to confirm your booking.');
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-plum-dark/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-cream rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-plum-dark hover:text-plum transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-plum-dark mb-2">
            Start Your Journey
          </h2>
          <p className="text-plum-dark/70 mb-6">
            Fill out the form below and we'll get back to you shortly.
          </p>

          <div className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-plum-dark mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-lavender/30 bg-white/50 text-plum-dark focus:outline-none focus:ring-2 focus:ring-plum/50 transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-plum-dark mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-lavender/30 bg-white/50 text-plum-dark focus:outline-none focus:ring-2 focus:ring-plum/50 transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-plum-dark mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-lavender/30 bg-white/50 text-plum-dark focus:outline-none focus:ring-2 focus:ring-plum/50 transition-all"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Plan Selection */}
            <div>
              <label className="block text-sm font-medium text-plum-dark mb-2">
                Select Plan *
              </label>
              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-lavender/30 bg-white/50 text-plum-dark focus:outline-none focus:ring-2 focus:ring-plum/50 transition-all appearance-none cursor-pointer"
              >
                <option value="">Choose a plan...</option>
                {PRICING_TIERS.map((tier) => (
                  <option key={tier.id} value={tier.name}>
                    {tier.name} - {tier.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-plum-dark mb-2">
                Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 rounded-xl border border-lavender/30 bg-white/50 text-plum-dark focus:outline-none focus:ring-2 focus:ring-plum/50 transition-all resize-none"
                placeholder="Any questions or special requests?"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-plum-dark hover:bg-plum text-cream font-semibold py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              Submit Booking Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;