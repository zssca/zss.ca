// Section.tsx
'use client';
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className=" pb-6">
    <h4 className="text-lg font-semibold mb-4 text-gray-800">{title}</h4>
    {children}
  </div>
);

export default Section;