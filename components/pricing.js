"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'next-i18next';

// --- Animatsiya Variantlari ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PricingSection = () => {
  const { t } = useTranslation('common');
  const pricingPlans = [
    {
      name: t('pricing_plan_free_name'),
      description: t('pricing_plan_free_desc'),
      price: 0,
      features: [
        t('pricing_plan_free_feature_1'),
        t('pricing_plan_free_feature_2'),
        t('pricing_plan_free_feature_3'),
        t('pricing_plan_free_feature_4'),
      ],
      buttonText: t('pricing_plan_free_button'),
      isPopular: false,
    },
    {
      name: t('pricing_plan_pro_name'),
      description: t('pricing_plan_pro_desc'),
      price: 12,
      features: [
        t('pricing_plan_pro_feature_1'),
        t('pricing_plan_pro_feature_2'),
        t('pricing_plan_pro_feature_3'),
        t('pricing_plan_pro_feature_4'),
        t('pricing_plan_pro_feature_5'),
      ],
      buttonText: t('pricing_plan_pro_button'),
      isPopular: true,
    },
    {
      name: t('pricing_plan_team_name'),
      description: t('pricing_plan_team_desc'),
      price: 49,
      features: [
        t('pricing_plan_team_feature_1'),
        t('pricing_plan_team_feature_2'),
        t('pricing_plan_team_feature_3'),
        t('pricing_plan_team_feature_4'),
      ],
      buttonText: t('pricing_plan_team_button'),
      isPopular: false,
    },
  ];

  return (
    // Bo'lim uchun oqish rangli fon
    <section className="w-full bg-slate-50 py-24 text-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        {/* Sarlavhalar */}
        <motion.h2 
          className="text-4xl font-extrabold text-gray-900 md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('pricing_headline')}
        </motion.h2>
        <motion.p 
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('pricing_subheadline')}
        </motion.p>
        {/* Narx kartalari uchun grid */}
        <motion.div 
          className="mt-16 grid w-full grid-cols-1 items-center gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-xl border bg-white p-8 shadow-lg transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 ${plan.isPopular ? 'border-2 border-[#14d3b2]' : 'border-gray-200'}`}
              variants={itemVariants}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* "MOST POPULAR" yorlig'i */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#14d3b2] px-4 py-1 text-xs font-bold uppercase text-white">
                  {t('pricing_most_popular')}
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-gray-500">{plan.description}</p>
              <div className="mt-6 flex items-end">
                <p className="text-5xl font-extrabold text-gray-900">${plan.price}</p>
                <p className="ml-1 text-lg text-gray-500">/month</p>
              </div>
              <hr className="my-6 border-gray-200" />
              <ul className="space-y-4 text-left">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[#14d3b2]" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-lg py-3 text-base font-bold transition-all ${
                  plan.isPopular
                    ? 'bg-[#14d3b2] text-white shadow-lg hover:shadow-xl'
                    : 'border border-gray-400 text-gray-800 hover:bg-gray-100'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;