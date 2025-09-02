'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Stethoscope, Zap, ArrowRight } from 'lucide-react';

export default function CaseAnalogySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const doctorSteps = [
    { step: 1, title: "Patient Assessment", description: "Examine symptoms and medical history" },
    { step: 2, title: "Diagnosis", description: "Identify the root cause of the problem" },
    { step: 3, title: "Treatment Plan", description: "Prescribe appropriate medication/solution" },
    { step: 4, title: "Recovery Monitoring", description: "Track progress and adjust as needed" }
  ];

  const aiSteps = [
    { step: 1, title: "Data Analysis", description: "Process business metrics and performance data" },
    { step: 2, title: "Bottleneck Detection", description: "Identify inefficiencies using AI algorithms" },
    { step: 3, title: "AI Solution Design", description: "Create automated workflows and intelligent systems" },
    { step: 4, title: "Performance Optimization", description: "Continuous monitoring and AI-driven improvements" }
  ];

  return (
    <section ref={ref} id="case-study" className="py-20 px-6 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            From Medical Diagnosis to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Prescription</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Just as doctors diagnose illnesses and prescribe treatments, we diagnose business inefficiencies and prescribe AI-powered solutions that drive transformation.
          </p>
        </motion.div>

        {/* Desktop Split Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 mb-16">
          {/* Doctor Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Traditional Medical Diagnosis</h3>
              </div>

              <div className="space-y-4">
                {doctorSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm"
                  >
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AI Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">AI-Powered Business Diagnosis</h3>
              </div>

              <div className="space-y-4">
                {aiSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm"
                  >
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Vertical Stack */}
        <div className="lg:hidden space-y-8">
          {/* Doctor Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Traditional Medical Diagnosis</h3>
              </div>

              <div className="space-y-3">
                {doctorSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-3 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm"
                  >
                    <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">{step.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center"
          >
            <div className="bg-gradient-to-r from-red-500 to-blue-500 p-4 rounded-full shadow-lg">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* AI Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI-Powered Business Diagnosis</h3>
              </div>

              <div className="space-y-3">
                {aiSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="flex items-start space-x-3 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm"
                  >
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">{step.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
