// src\features\web\InfoItem.tsx
'use client';
import React from 'react';

interface InfoItemProps {
  label: string;
  value: React.ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
  value && (
    <div className="flex justify-between items-center py-2">
      <span className="text-gray-500">{label}:</span>
      <span className="text-gray-800">{value}</span>
    </div>
  )
);

export default InfoItem;