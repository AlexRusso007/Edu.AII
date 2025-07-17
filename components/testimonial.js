"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Sparkle } from 'lucide-react';
import { useTranslation, Trans } from 'next-i18next';

// --- Animation Variants ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TestimonialsSection = () => {
  const { t } = useTranslation('common');
  const testimonialsData = [
    {
      name: t('testimonials_1_name'),
      avatar: '/IMAGE/bluegirl.jpg',
      quote: <Trans i18nKey="testimonials_1_quote" components={{ strong: <strong /> }} />,
    },
    {
      name: t('testimonials_2_name'),
      avatar: '/IMAGE/girl2.jpg',
      quote: <Trans i18nKey="testimonials_2_quote" components={{ strong: <strong /> }} />,
    },
    {
      name: t('testimonials_3_name'),
      avatar: '/IMAGE/boy4.jpg',
      quote: <Trans i18nKey="testimonials_3_quote" components={{ strong: <strong /> }} />,
    },
  ];

  return (
    <section className="w-full bg-[#f8f8f8] py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        {/* Headings */}
        <motion.h2 
          className="text-4xl font-bold text-[#333] md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('testimonials_headline')}
        </motion.h2>
        <motion.p 
          className="mt-2 text-lg text-gray-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('testimonials_subheadline')}
        </motion.p>
        {/* Testimonials Grid */}
        <motion.div 
          className="mt-20 grid w-full grid-cols-1 gap-10 md:grid-cols-3 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              {/* Avatar and Sparkle */}
              <div className="relative mb-6">
                <Image
                  src={testimonial.avatar}
                  width={100}
                  height={100}
                  alt={testimonial.name}
                  className="rounded-full"
                />
                <Sparkle className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400" />
              </div>
              {/* Quote Text */}
              <p className="text-base text-gray-600 leading-relaxed">
                {testimonial.quote}
              </p>
              {/* Quotation Mark Icon */}
              <Quote className="mt-6 h-10 w-10 text-[#14d3b2]" fill="#14d3b2" />
            </motion.div>
          ))}
        </motion.div>
        {/* "Show more" Button */}
        <motion.button 
          className="mt-20 rounded-md border border-gray-400 px-8 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-200 hover:border-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {t('testimonials_show_more')}
        </motion.button>
      </div>
    </section>
  );
};

export default TestimonialsSection;