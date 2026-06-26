import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  intensity = 'medium' 
}) => {
  const blurMap = {
    low: 'backdrop-blur-xs',
    medium: 'backdrop-blur-glass',
    high: 'backdrop-blur-deep',
  };

  return (
    <div className={`
      bg-white/60 
      ${blurMap[intensity]} 
      border border-white/20 
      rounded-xl 
      shadow-[0_20px_40px_rgba(0,43,91,0.08)]
      ${className}
    `}>
      {children}
    </div>
  );
};
