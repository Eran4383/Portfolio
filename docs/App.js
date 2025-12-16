import React, { useState, useEffect } from 'react';
import { INITIAL_PROJECTS, DEFAULT_SITE_CONTENT } from './constants.js';
import SiteView from './components/SiteView.js';
import AdminPanel from './components/AdminPanel.js';

const App = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [siteContent, setSiteContent] = useState(DEFAULT_SITE_CONTENT);

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

  const handleUpdateProjects = (updatedProjects) => {
    setProjects(updatedProjects);
  };

  const handleUpdateContent = (updatedContent) => {
    setSiteContent(updatedContent);
  };

  if (isAdminOpen) {
    return React.createElement(AdminPanel, {
      onClose: () => setIsAdminOpen(false),
      onUpdateProjects: handleUpdateProjects,
      onUpdateContent: handleUpdateContent,
      currentProjects: projects,
      currentContent: siteContent
    });
  }

  return React.createElement(SiteView, {
    projects: projects,
    content: siteContent,
    onAdminClick: () => setIsAdminOpen(true)
  });
};

export default App;