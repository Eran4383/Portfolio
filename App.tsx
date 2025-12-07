import React, { useState, useEffect } from 'react';
import { INITIAL_PROJECTS, DEFAULT_SITE_CONTENT } from './constants';
import SiteView from './components/SiteView';
import AdminPanel from './components/AdminPanel';
import { Project, SiteContent } from './types';

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [siteContent, setSiteContent] = useState<SiteContent>(DEFAULT_SITE_CONTENT);

  useEffect(() => {
    // Load projects from local storage on mount
    const savedProjects = localStorage.getItem('shay_portfolio_projects');
    if (savedProjects) {
      try {
        setProjects(JSON.parse(savedProjects));
      } catch (e) {
        console.error('Failed to parse projects');
      }
    }

    // Load content from local storage
    const savedContent = localStorage.getItem('shay_portfolio_content');
    if (savedContent) {
      try {
        setSiteContent(JSON.parse(savedContent));
      } catch (e) {
        console.error('Failed to parse content');
      }
    }
  }, []);

  const handleUpdateProjects = (updatedProjects: Project[]) => {
    setProjects(updatedProjects);
  };

  const handleUpdateContent = (updatedContent: SiteContent) => {
    setSiteContent(updatedContent);
  };

  if (isAdminOpen) {
    return (
      <AdminPanel 
        onClose={() => setIsAdminOpen(false)} 
        onUpdateProjects={handleUpdateProjects}
        onUpdateContent={handleUpdateContent}
        currentProjects={projects}
        currentContent={siteContent}
      />
    );
  }

  return (
    <SiteView 
      projects={projects} 
      content={siteContent} 
      onAdminClick={() => setIsAdminOpen(true)} 
    />
  );
};

export default App;