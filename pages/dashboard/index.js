"use client";

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// --- YAKUNIY TUZATISH: src papkasisiz to'g'ri yo'llar ---
import DashboardSidebar from '../../components/daashboard/DashboardSidebar';
import DashboardHeader from '../../components/daashboard/DashboardHeader';
import UploadSection from '../../components/daashboard/UploadSection';
import FlashcardsSection from '../../components/daashboard/FlashcardsSection';
import QuizSection from '../../components/daashboard/QuizSection';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div className="flex h-screen w-full bg-gray-50 font-sans">
      <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex flex-1 flex-col">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'upload' && <UploadSection key="upload" />}
            {activeTab === 'flashcards' && <FlashcardsSection key="flashcards" />}
            {activeTab === 'quiz' && <QuizSection key="quiz" />}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}