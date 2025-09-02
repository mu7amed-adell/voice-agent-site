'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isMobile, setIsMobile] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const heroHeight = window.innerHeight;
        setShowStickyCTA(window.scrollY > heroHeight);
      } else {
        setShowStickyCTA(false);
      }
    };

    if (window.innerWidth < 768) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Section Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Sparkle Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transform Your Business with
          <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            {' '}
            NeuraCure
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Stop treating symptoms. Cure the root cause of your business inefficiencies with our
          comprehensive AI diagnosis and treatment plan.
        </motion.p>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
            <div className="text-gray-300 text-sm">Average Efficiency Increase</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">AI-Powered Operations</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">ROI</div>
            <div className="text-gray-300 text-sm">Guaranteed Results</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Button
            variant="gradient"
            size="xl"
            onClick={() => {
              if (typeof window !== 'undefined' && window.openConsultationBooking) {
                window.openConsultationBooking();
              }
            }}
            className="w-full sm:w-auto min-w-[240px]"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Free Diagnosis Session
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
               {/* Modern Footer */}
      <div className="bg-white/90 dark:bg-slate-900/90 border-t border-gray-200 dark:border-slate-700 py-3 px-4 rounded-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Copyright */}
          <div className="text-xs text-gray-500 dark:text-gray-400">
                        Powered by
            <a
              href="https://ismaiel.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            > NeuraCure
            </a>
          </div>
          {/* LinkedIn Link */}
          <a 
            href="https://www.linkedin.com/in/mohammed-adel-622b2020a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
        </motion.div>
      </div>

      {/* Mobile Sticky CTA */}
      {mounted && isMobile && showStickyCTA && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 p-4 shadow-lg z-50"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                Book Free Diagnosis Session
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Transform your business today
              </div>
            </div>
            <Button
              variant="gradient"
              size="sm"
              onClick={() => {
                if (typeof window !== 'undefined' && window.openConsultationBooking) {
                  window.openConsultationBooking();
                }
              }}
              className="ml-4"
            >
              Book Free Diagnosis
            </Button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
