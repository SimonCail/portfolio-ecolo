import React from 'react';

export const Badge = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-block px-2 py-0.5 text-[11px] font-medium border border-eco-border rounded-md bg-eco-card text-cv-paper/80 hover:border-cv-accent hover:text-cv-accent transition-colors cursor-default">
    {children}
  </span>
);