'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DemoVoiceAgent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(30); // 30 seconds demo
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
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

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  // Simulate audio progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  // Simulate waveform animation - generate random values after mount to avoid hydration mismatch
  const waveformBars = mounted ? Array.from({ length: 20 }, (_, i) => {
    const baseHeight = 20 + Math.random() * 30;
    return {
      id: i,
      height: isPlaying ? baseHeight + Math.sin(Date.now() * 0.001 + i * 0.5) * 15 : baseHeight,
      delay: i * 0.1
    };
  }) : Array.from({ length: 20 }, (_, i) => ({
    id: i,
    height: 35, // Default height for SSR
    delay: i * 0.1
  }));

  return (
    <section ref={ref} id="demo" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Experience the Future of
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Voice AI</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Our advanced voice agents combine natural language processing with emotional intelligence to deliver conversational experiences that feel genuinely human.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-300">Multi-language support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-gray-300">Context-aware conversations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span className="text-gray-300">Real-time sentiment analysis</span>
              </div>
            </motion.div>

            {/* Desktop CTA */}
            {mounted && !isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mt-8"
              >
                <Button
                  variant="gradient"
                  size="lg"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).openConsultationBooking) {
                      (window as any).openConsultationBooking();
                    }
                  }}
                >
                  Schedule Voice Agent Demo
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Audio Player */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Volume2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">AI Voice Agent Demo</h3>
                    <p className="text-sm text-gray-400">30-second preview</p>
                  </div>
                </div>

                {/* Mobile CTA */}
                {mounted && isMobile && (
                  <Button
                    variant="gradient"
                    size="sm"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).openConsultationBooking) {
                        (window as any).openConsultationBooking();
                      }
                    }}
                  >
                    Tap to Try
                  </Button>
                )}
              </div>

              {/* Waveform Visualization */}
              <div className="mb-6">
                {mounted && !isMobile ? (
                  // Desktop: Full waveform
                  <div className="flex items-end justify-center space-x-1 h-20">
                    {waveformBars.map((bar) => (
                      <motion.div
                        key={bar.id}
                        className="bg-gradient-to-t from-blue-400 to-purple-400 rounded-sm min-w-[4px]"
                        style={{ height: `${bar.height}px` }}
                        animate={{
                          height: isPlaying ? `${bar.height + Math.sin(Date.now() * 0.001 + bar.id * 0.5) * 15}px` : `${bar.height}px`,
                          backgroundColor: isPlaying ? '#60a5fa' : '#94a3b8'
                        }}
                        transition={{ duration: 0.1 }}
                      />
                    ))}
                  </div>
                ) : mounted && isMobile ? (
                  // Mobile: Animated mic icon
                  <div className="flex justify-center">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                      animate={isPlaying ? {
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(59, 130, 246, 0.4)',
                          '0 0 0 10px rgba(59, 130, 246, 0)',
                          '0 0 0 0 rgba(59, 130, 246, 0)'
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
                    >
                      <Volume2 className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                ) : (
                  // Loading state or default
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Volume2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="space-y-4">
                {/* Main Controls */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')} / 0:30
                  </div>

                  <motion.button
                    onClick={togglePlayback}
                    className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isPlaying ? (
                      <Pause className="w-7 h-7 text-white" />
                    ) : (
                      <Play className="w-7 h-7 text-white ml-1" />
                    )}
                  </motion.button>

                  <div className="text-sm text-gray-400">
                    Voice Demo
                  </div>
                </div>

                {/* Volume Control */}
                <div className="flex items-center space-x-3">
                  <motion.button
                    onClick={toggleMute}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Volume2 className={`w-5 h-5 ${isMuted ? 'text-gray-500' : 'text-white'}`} />
                  </motion.button>

                  <div className="flex-1">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((isMuted ? 0 : volume) * 100)}%, #374151 ${((isMuted ? 0 : volume) * 100)}%, #374151 100%)`
                      }}
                    />
                  </div>

                  <div className="text-xs text-gray-400 w-8 text-right">
                    {Math.round((isMuted ? 0 : volume) * 100)}%
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                    animate={isPlaying ? { width: `${((currentTime + 1) / duration) * 100}%` } : {}}
                    transition={{ duration: 1, ease: 'linear' }}
                  />
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-80"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}
