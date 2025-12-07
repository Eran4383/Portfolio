import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  iconName: string; 
  images: string[];
  autoPlay?: boolean; // New: Supports auto-scrolling gallery
  link?: string; // New: Link to live project
}

export interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  quoteText: string;
  quoteAuthor: string;
  footerTitle: string;
  footerText: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}