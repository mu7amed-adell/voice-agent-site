'use client';

import { motion, PanInfo } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    company: "TechFlow Solutions",
    content: "The AI automation system they implemented increased our operational efficiency by 300%. What used to take our team 40 hours now takes just 8 hours. The ROI was evident within the first month.",
    rating: 5,
    avatar: "SC",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Operations Director, RetailMax",
    company: "RetailMax",
    content: "Their predictive analytics solution helped us optimize our inventory management, reducing stockouts by 75% and overstock by 60%. Our sales increased by 45% in the first quarter alone.",
    rating: 5,
    avatar: "MR",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Marketing VP, GrowthCorp",
    company: "GrowthCorp",
    content: "The voice AI implementation transformed our customer service. Response times dropped from 24 hours to under 5 minutes, and customer satisfaction scores jumped from 3.2 to 4.8 out of 5.",
    rating: 5,
    avatar: "EW",
    gradient: "from-green-500 to-teal-500"
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO, InnovateLabs",
    company: "InnovateLabs",
    content: "Their custom AI solution for our R&D process accelerated our product development cycle by 200%. We've brought 3 new products to market in the time it used to take for one.",
    rating: 5,
    avatar: "DK",
    gradient: "from-orange-500 to-red-500"
  }
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const nextTestimonial = () => {
    if (!isDragging) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isDragging) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const swipeThreshold = 50;

    if (info.offset.x > swipeThreshold) {
      // Swiped right - go to previous
      prevTestimonial();
    } else if (info.offset.x < -swipeThreshold) {
      // Swiped left - go to next
      nextTestimonial();
    }
  };

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextTestimonial();
      }
    }, 8000); // Change testimonial every 8 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isDragging, nextTestimonial]);

  return (
    <section ref={ref} id="testimonials" className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Success Stories from
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Transformation</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Hear from business leaders who&apos;ve transformed their operations with our AI solutions.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-gray-100 dark:border-slate-700">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-blue-500 opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className={`w-10 h-10 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3 flex-shrink-0`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              animate={{ x: -currentIndex * 100 + '%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-slate-700">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-blue-500 opacity-60" />
                    </div>

                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-semibold mr-4 flex-shrink-0`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  backgroundColor: index === currentIndex ? '#2563eb' : '#d1d5db'
                }}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-600"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-4 space-x-6">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:shadow-xl"
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              disabled={isDragging}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:shadow-xl"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              disabled={isDragging}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Swipe Indicator */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Swipe or use arrows to navigate
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-green-800 dark:text-green-300 font-medium">
              Join 500+ satisfied clients
            </span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Write Your Success Story?
          </h3>

          <Button variant="gradient" size="lg">
            Start Your AI Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
