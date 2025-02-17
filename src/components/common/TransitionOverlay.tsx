import React from 'react';


interface TransitionOverlayProps {
  transitionType: 'top' | 'bottom' | 'left' | 'right';
  isActive: boolean;
}

export default function TransitionOverlay({ transitionType, isActive }: TransitionOverlayProps) {
  return (
    <div className="transition-overlay">
      {/* TOP layers */}
      <div className={`top-layer ${transitionType === 'top' && isActive ? 'active' : ''}`}></div>
      <div className={`top-layer top-layer--2 ${transitionType === 'top' && isActive ? 'active' : ''}`}></div>
      <div className={`top-layer top-layer--3 ${transitionType === 'top' && isActive ? 'active' : ''}`}></div>
      <div className={`top-layer top-layer--4 ${transitionType === 'top' && isActive ? 'active' : ''}`}></div>
      <div className={`top-layer top-layer--5 ${transitionType === 'top' && isActive ? 'active' : ''}`}></div>

      {/* BOTTOM layers */}
      <div className={`bottom-layer ${transitionType === 'bottom' && isActive ? 'active' : ''}`}></div>
      <div className={`bottom-layer bottom-layer--2 ${transitionType === 'bottom' && isActive ? 'active' : ''}`}></div>
      <div className={`bottom-layer bottom-layer--3 ${transitionType === 'bottom' && isActive ? 'active' : ''}`}></div>

      {/* LEFT layers */}
      <div className={`left-layer ${transitionType === 'left' && isActive ? 'active' : ''}`}></div>
      <div className={`left-layer left-layer--2 ${transitionType === 'left' && isActive ? 'active' : ''}`}></div>
      <div className={`left-layer left-layer--3 ${transitionType === 'left' && isActive ? 'active' : ''}`}></div>
      <div className={`left-layer left-layer--4 ${transitionType === 'left' && isActive ? 'active' : ''}`}></div>

      {/* RIGHT layers */}
      <div className={`right-layer ${transitionType === 'right' && isActive ? 'active' : ''}`}></div>
      <div className={`right-layer right-layer--2 ${transitionType === 'right' && isActive ? 'active' : ''}`}></div>
      <div className={`right-layer right-layer--3 ${transitionType === 'right' && isActive ? 'active' : ''}`}></div>
    </div>
  );
}
