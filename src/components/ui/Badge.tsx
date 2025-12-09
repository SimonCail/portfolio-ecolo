import React from 'react';

export const Badge = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-block px-2.5 py-1 text-[11px] font-medium border border-eco-border rounded-md bg-eco-bg text-cv-ink/70 hover:border-cv-accent hover:text-cv-accent transition-colors cursor-default">
    {children}
  </span>
);