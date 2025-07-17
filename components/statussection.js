"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, animate } from 'framer-motion';
import { useTranslation } from 'next-i18next';

// --- Reusable Animated Counter Component ---
function AnimatedCounter({ to }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, to, {
        duration: 2, // Animation duration in seconds
        onUpdate(value) {
          // Format number with commas and remove decimals
          ref.current.textContent = new Intl.NumberFormat().format(Math.round(value));
        },
      });
      // Cleanup function
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <span ref={ref}>0</span>;
}

// --- Main Stats Section Component ---
const StatsSection = () => {
  const { t } = useTranslation('common');
  return (
    // Section container with light grey background
    <section className="w-full bg-[#f3f3f3] py-20 text-[#333]">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4">
        
        {/* Top Image */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/IMAGE/scy.png" // Make sure this image exists
            width={150}
            height={150}
            alt="Astronaut standing on the moon"
          />
        </motion.div>
        
        {/* Headings */}
        <motion.h2 
          className="mt-6 text-4xl font-bold md:text-5xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('stats_headline')}
        </motion.h2>
        <motion.p 
          className="mt-2 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {t('stats_subheadline')}
        </motion.p>
        
        {/* Stats Grid */}
        <div className="mt-16 grid w-full grid-cols-1 gap-12 text-center md:grid-cols-3">
          {/* Stat 1 */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="text-7xl font-bold text-[#14d3b2]">
              <AnimatedCounter to={50000} />+
            </div>
            <p className="mt-2 text-gray-500">{t('stats_1_label')}</p>
          </motion.div>
          
          {/* Stat 2 */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="text-7xl font-bold text-[#14d3b2]">
              <AnimatedCounter to={10000} />+
            </div>
            <p className="mt-2 text-gray-500">{t('stats_2_label')}</p>
          </motion.div>
          
          {/* Stat 3 */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="text-7xl font-bold text-[#14d3b2]">
              <AnimatedCounter to={25000} />+
            </div>
            <p className="mt-2 text-gray-500">{t('stats_3_label')}</p>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default StatsSection;