'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Desktop: Particles/Gradient Waves */}
        {mounted && !isMobile && (
          <>
            {/* Gradient waves animation */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(30, 58, 138, 0.4) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.4) 0%, transparent 50%)',
                  'radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.4) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(30, 58, 138, 0.4) 0%, transparent 50%)',
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />

            {/* Floating particles */}
            {[...Array(25)].map((_, i) => {
              const left = mounted ? Math.random() * 100 : 50;
              const top = mounted ? Math.random() * 100 : 50;
              const duration = mounted ? Math.random() * 3 + 2 : 3;
              const delay = mounted ? Math.random() * 2 : 0;

              return (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    delay,
                  }}
                />
              );
            })}
          </>
        )}

        {/* Mobile: Static gradient with subtle motion */}
        {mounted && isMobile && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
            animate={{
              background: [
                'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
                'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #1e3a8a 100%)',
                'linear-gradient(135deg, #0f172a 0%, #06b6d4 50%, #0f172a 100%)',
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="block md:inline">NeuraCure:</span>
            <span className="block md:inline md:ml-2">AI-Powered Solutions</span>
          </h1>
          <h2 className="text-xl md:text-xl lg:text-2xl text-cyan-300 font-light">
            For Every Inefficiency, There&apos;s an AI Solution
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Transform your business bottlenecks into competitive advantages with our cutting-edge AI
          solutions. Just like medicine diagnoses and treats diseases, we diagnose inefficiencies
          and prescribe AI treatments.
        </motion.p>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-white/80 text-sm mb-3 font-medium"
        >
          Scroll to explore
        </motion.p>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center mx-auto"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-4 bg-white/80 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
