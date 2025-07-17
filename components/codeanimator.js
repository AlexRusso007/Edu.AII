"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const codeLines = [
  '# Initializing EDU.AI learning core...',
  '# Target: Human Brain Augmentation',
  '',
  'def process_document(source):',
  '    if source.type in [\'PDF\', \'text\', \'image\']:',
  '        # Step 1: Analyze and distill information',
  '        summary = AI.summarize(source)',
  '',
  '        # Step 2: Create interactive learning tools',
  '        quiz = AI.generate_quiz(summary)',
  '        flashcards = AI.create_flashcards(summary)',
  '',
  '        # Step 3: Deliver clarity',
  '        return { knowledge_unlocked }',
  '',
  '# System Ready. Awaiting your document...',
];

const CodeAnimator = () => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const fullText = codeLines.join('\n');

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 25); // Typing speed in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="h-96 w-full max-w-lg rounded-lg border border-gray-700 bg-navy-light/60 p-6 font-mono text-sm text-gray-300 shadow-2xl backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <pre className="whitespace-pre-wrap">
        {displayedText}
        <span className="cursor-blink text-brand-teal">|</span>
      </pre>
    </motion.div>
  );
};

export default CodeAnimator;