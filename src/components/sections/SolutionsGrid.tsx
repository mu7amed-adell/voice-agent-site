'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    id: 1,
    title: 'Intelligent Automation',
    icon: '🤖',
    description: 'Streamline repetitive tasks with AI-powered workflows that learn and adapt to your business processes.',
    features: ['Process optimization', 'Smart scheduling', 'Error reduction', '24/7 operation'],
    color: 'from-blue-600 to-cyan-400'
  },
  {
    id: 2,
    title: 'Predictive Analytics',
    icon: '📊',
    description: 'Harness the power of data to forecast trends, identify opportunities, and make data-driven decisions.',
    features: ['Revenue forecasting', 'Customer behavior analysis', 'Risk assessment', 'Performance metrics'],
    color: 'from-purple-600 to-blue-600'
  },
  {
    id: 3,
    title: 'Voice Intelligence',
    icon: '🎤',
    description: 'Transform voice interactions with advanced speech recognition, natural language processing, and conversational AI.',
    features: ['Voice assistants', 'Call analytics', 'Transcription services', 'Multi-language support'],
    color: 'from-cyan-400 to-blue-600'
  },
  {
    id: 4,
    title: 'Custom AI Solutions',
    icon: '⚡',
    description: 'Tailored AI implementations designed specifically for your unique business challenges and objectives.',
    features: ['Bespoke models', 'API integrations', 'Scalable architecture', 'Ongoing optimization'],
    color: 'from-purple-600 to-cyan-400'
  }
];

export default function SolutionsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedMobileCard, setExpandedMobileCard] = useState<number | null>(null);

  const toggleMobileCard = (id: number) => {
    setExpandedMobileCard(expandedMobileCard === id ? null : id);
  };

  return (
    <section ref={ref} id="solutions" className="py-20 px-6 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI Solutions for Every
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"> Business Need</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From automation to predictive insights, our comprehensive suite of AI solutions addresses the most common business inefficiencies with precision and scale.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative p-8">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{solution.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {solution.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color} mr-3 flex-shrink-0`} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover CTA */}
                  <motion.div
                    className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                      Learn More →
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Card Header */}
              <button
                onClick={() => toggleMobileCard(solution.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {solution.title}
                  </h3>
                </div>
                {expandedMobileCard === solution.id ? (
                  <ChevronUp className="w-6 h-6 text-gray-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                )}
              </button>

              {/* Expandable Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedMobileCard === solution.id ? 'auto' : 0,
                  opacity: expandedMobileCard === solution.id ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color} mr-3 flex-shrink-0`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-600">
                    <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button variant="gradient" size="lg">
            Explore All Solutions
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
