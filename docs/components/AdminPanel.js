import React, { useState } from 'react';
import { X, Save, Layout, Layers, Monitor, Smartphone, RotateCcw, Plus, Trash, Undo2, XCircle } from 'lucide-react';
import { INITIAL_PROJECTS, DEFAULT_SITE_CONTENT } from '../constants.js';
import SiteView from './SiteView.js';

const AdminPanel = ({ 
  onClose, 
  onUpdateProjects, 
  onUpdateContent,
  currentProjects,
  currentContent
}) => {
  const [activeTab, setActiveTab] = useState('projects');
  const [activeDevice, setActiveDevice] = useState('desktop');
  
  // Data State
  const [projects, setProjects] = useState(currentProjects);
  const [content, setContent] = useState(currentContent);
  
  // History State
  const [history, setHistory] = useState([]);
  
  // Editing State
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Helper
  const selectedProject = projects.find(p => p.id === selectedProjectId) || null;

  // History Helper
  const saveHistory = () => {
    const snapshot = {
      projects: JSON.parse(JSON.stringify(projects)),
      content: JSON.parse(JSON.stringify(content))
    };
    setHistory(prev => [...prev, snapshot]);
  };

  // Handlers
  const handleUndo = () => {
    if (history.length === 0) return;
    const previousState = history[history.length - 1];
    setProjects(previousState.projects);
    setContent(previousState.content);
    setHistory(prev => prev.slice(0, prev.length - 1));
  };

  const handleDiscard = () => {
    if(confirm('האם אתה בטוח שברצונך לבטל את כל השינויים שלא נשמרו בסשן זה?')) {
      setProjects(currentProjects);
      setContent(currentContent);
      setHistory([]);
    }
  };

  const handleSave = () => {
    onUpdateProjects(projects);
    onUpdateContent(content);
    localStorage.setItem('shay_portfolio_projects', JSON.stringify(projects));
    localStorage.setItem('shay_portfolio_content', JSON.stringify(content));
    setHistory([]);
    alert('השינויים נשמרו בהצלחה!');
  };

  const handleReset = () => {
    if(confirm('פעולה זו תאפס את כל הנתונים לברירת המחדל (Initial State). להמשיך?')) {
      saveHistory();
      localStorage.removeItem('shay_portfolio_projects');
      localStorage.removeItem('shay_portfolio_content');
      setProjects(INITIAL_PROJECTS);
      setContent(DEFAULT_SITE_CONTENT);
      onUpdateProjects(INITIAL_PROJECTS);
      onUpdateContent(DEFAULT_SITE_CONTENT);
    }
  };

  // Project Handlers
  const handleProjectChange = (field, value) => {
    if (!selectedProjectId) return;
    setProjects(prev => prev.map(p => 
      p.id === selectedProjectId ? { ...p, [field]: value } : p
    ));
  };

  const handleAddProject = () => {
    saveHistory();
    const newId = Date.now().toString();
    const newProject = {
      id: newId,
      title: 'פרויקט חדש',
      category: 'General',
      description: 'תיאור קצר...',
      techStack: ['Tech1', 'Tech2'],
      iconName: 'Code',
      images: ['https://images.unsplash.com/photo-1550745165-9bc0b252726f'],
      autoPlay: false,
      link: ''
    };
    setProjects([newProject, ...projects]);
    setSelectedProjectId(newId);
  };

  const handleDeleteProject = () => {
    if (!selectedProjectId) return;
    if (confirm('למחוק את הפרויקט?')) {
      saveHistory();
      setProjects(prev => prev.filter(p => p.id !== selectedProjectId));
      setSelectedProjectId(null);
    }
  };

  const updateContent = (field, value) => {
    setContent(prev => ({ ...prev, [field]: value }));
  };

  return React.createElement('div', { className: "fixed inset-0 z-50 bg-obsidian-100 flex flex-col font-sans", dir: "rtl" },
    /* Top Bar */
    React.createElement('div', { className: "h-16 bg-white border-b border-obsidian-200 flex items-center justify-between px-6 shadow-sm z-50" },
      React.createElement('div', { className: "flex items-center gap-4" },
        React.createElement('h2', { className: "text-xl font-bold font-serif text-obsidian-900" }, "CMS Panel"),
        React.createElement('div', { className: "h-6 w-px bg-obsidian-200" }),
        React.createElement('div', { className: "flex gap-2" },
          React.createElement('button', { 
            onClick: () => setActiveTab('projects'),
            className: `px-3 py-1.5 rounded-md text-sm font-bold flex items-center gap-2 transition-colors ${activeTab === 'projects' ? 'bg-gold-100 text-gold-900' : 'text-obsidian-500 hover:bg-obsidian-50'}`
          }, React.createElement(Layers, { size: 16 }), " ניהול פרויקטים"),
          React.createElement('button', { 
            onClick: () => setActiveTab('content'),
            className: `px-3 py-1.5 rounded-md text-sm font-bold flex items-center gap-2 transition-colors ${activeTab === 'content' ? 'bg-gold-100 text-gold-900' : 'text-obsidian-500 hover:bg-obsidian-50'}`
          }, React.createElement(Layout, { size: 16 }), " תוכן כללי")
        )
      ),

      React.createElement('div', { className: "flex items-center gap-2" },
        React.createElement('button', {
          onClick: handleUndo,
          disabled: history.length === 0,
          className: `flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${history.length === 0 ? 'text-gray-300' : 'text-obsidian-600 hover:bg-obsidian-100'}`,
          title: "בטל פעולה אחרונה"
        }, React.createElement(Undo2, { size: 18 }), React.createElement('span', { className: "text-xs font-bold hidden md:inline" }, "בטל")),

        React.createElement('button', {
          onClick: handleDiscard,
          className: "flex items-center gap-1 px-3 py-2 text-red-500 hover:bg-red-50 rounded-md transition-colors",
          title: "בטל את כל השינויים שלא נשמרו"
        }, React.createElement(XCircle, { size: 18 }), React.createElement('span', { className: "text-xs font-bold hidden md:inline" }, "בטל שינויים")),

        React.createElement('div', { className: "h-6 w-px bg-obsidian-200 mx-2" }),

        React.createElement('button', { onClick: handleReset, className: "p-2 text-obsidian-400 hover:text-red-500 hover:bg-red-50 rounded-full", title: "איפוס מפעל (מחיקת הכל)" },
          React.createElement(RotateCcw, { size: 18 })
        ),
        
        React.createElement('button', { onClick: handleSave, className: "flex items-center gap-2 px-4 py-2 bg-gold-500 text-white rounded-md hover:bg-gold-600 font-bold shadow-sm mx-2" },
          React.createElement(Save, { size: 18 }), " שמירה"
        ),
        
        React.createElement('button', { onClick: onClose, className: "p-2 hover:bg-obsidian-100 rounded-full text-obsidian-500" },
          React.createElement(X, { size: 24 })
        )
      )
    ),

    /* Main Content */
    React.createElement('div', { className: "flex-1 flex overflow-hidden" },
      
      /* Left Sidebar - Editor */
      React.createElement('div', { className: "w-[400px] bg-white border-l border-obsidian-200 overflow-y-auto p-6 shadow-xl z-40" },
        
        activeTab === 'projects' ? (
          React.createElement('div', { className: "space-y-6" },
            React.createElement('div', { className: "flex justify-between items-center" },
              React.createElement('label', { className: "text-sm font-bold text-obsidian-500 uppercase tracking-wider" }, "בחר פרויקט לעריכה"),
              React.createElement('button', { onClick: handleAddProject, className: "text-xs bg-gold-50 text-gold-600 px-2 py-1 rounded border border-gold-200 hover:bg-gold-100 flex items-center gap-1" },
                React.createElement(Plus, { size: 12 }), " חדש"
              )
            ),

            React.createElement('select', {
              className: "w-full p-3 border border-obsidian-300 rounded-lg bg-obsidian-50 focus:ring-2 focus:ring-gold-400 outline-none",
              value: selectedProjectId || '',
              onChange: (e) => setSelectedProjectId(e.target.value)
            },
              React.createElement('option', { value: "", disabled: true }, "בחר מהרשימה..."),
              projects.map(p => React.createElement('option', { key: p.id, value: p.id }, p.title))
            ),

            selectedProject ? (
              React.createElement('div', { className: "space-y-4 animate-fade-in" },
                React.createElement('div', { className: "space-y-1" },
                  React.createElement('label', { className: "text-xs font-bold text-obsidian-400" }, "כותרת"),
                  React.createElement('input', {
                    value: selectedProject.title,
                    onFocus: saveHistory,
                    onChange: (e) => handleProjectChange('title', e.target.value),
                    className: "w-full p-2 border border-obsidian-200 rounded focus:border-gold-400 outline-none"
                  })
                ),
                
                React.createElement('div', { className: "grid grid-cols-2 gap-4" },
                  React.createElement('div', { className: "space-y-1" },
                    React.createElement('label', { className: "text-xs font-bold text-obsidian-400" }, "קטגוריה"),
                    React.createElement('input', {
                      value: selectedProject.category,
                      onFocus: saveHistory,
                      onChange: (e) => handleProjectChange('category', e.target.value),
                      className: "w-full p-2 border border-obsidian-200 rounded focus:border-gold-400 outline-none"
                    })
                  ),
                  React.createElement('div', { className: "space-y-1" },
                    React.createElement('label', { className: "text-xs font-bold text-obsidian-400" }, "אייקון (Lucide)"),
                    React.createElement('input', {
                      value: selectedProject.iconName,
                      onFocus: saveHistory,
                      onChange: (e) => handleProjectChange('iconName', e.target.value),
                      className: "w-full p-2 border border-obsidian-200 rounded focus:border-gold-400 outline-none"
                    })
                  )
                ),

                React.createElement('div', { className: "space-y-1" },
                  React.createElement('label', { className: "text-xs font-bold text-obsidian-400" }, "קישור לאתר (URL)"),
                  React.createElement('input', {
                    value: selectedProject.link || '',
                    onFocus: saveHistory,
                    onChange: (e) => handleProjectChange('link', e.target.value),
                    className: "w-full p-2 border border-obsidian-200 rounded focus:border-gold-400 outline-none dir-ltr",
                    placeholder: "https://...",
                    dir: "ltr"
                  })
                ),

                React.createElement('div', { className: "space-y-1" },
                  React.createElement('label', { className: "text-xs font-bold text-obsidian-400" }, "תיאור"),
                  React.createElement('textarea', {
                    value: selectedProject.description,
                    onFocus: saveHistory,
                    onChange: (e) => handleProjectChange('description', e.target.value),
                    className: "w-full p-2 border border-obsidian-200 rounded h-24 focus:border-gold-400 outline-none resize-none"
                  })
                ),

                React.createElement('div', { className: "space-y-1" },
                  React.createElement('label', { className: "text-xs font-bold text-obsidian-400" }, "מדיה (URL תמונה/וידאו בשורות נפרדות)"),
                  React.createElement('textarea', {
                    value: selectedProject.images.join('\n'),
                    onFocus: saveHistory,
                    onChange: (e) => handleProjectChange('images', e.target.value.split('\n')),
                    className: "w-full p-2 border border-obsidian-200 rounded h-24 focus:border-gold-400 outline-none font-mono text-xs dir-ltr text-left",
                    dir: "ltr"
                  }),
                  React.createElement('p', { className: "text-[10px] text-gray-400" }, "תומך ב-JPG, PNG, MP4, YouTube")
                ),

                React.createElement('div', { className: "flex items-center gap-2" },
                  React.createElement('input', {
                    type: "checkbox",
                    id: "autoplay",
                    checked: selectedProject.autoPlay || false,
                    onFocus: saveHistory,
                    onChange: (e) => handleProjectChange('autoPlay', e.target.checked),
                    className: "rounded text-gold-500 focus:ring-gold-500"
                  }),
                  React.createElement('label', { htmlFor: "autoplay", className: "text-sm" }, "ניגון גלריה אוטומטי")
                ),

                React.createElement('div', { className: "space-y-1" },
                  React.createElement('label', { className: "text-xs font-bold text-obsidian-400" }, "טכנולוגיות (מופרד בפסיק)"),
                  React.createElement('input', {
                    value: selectedProject.techStack.join(', '),
                    onFocus: saveHistory,
                    onChange: (e) => handleProjectChange('techStack', e.target.value.split(',').map(s => s.trim())),
                    className: "w-full p-2 border border-obsidian-200 rounded focus:border-gold-400 outline-none"
                  })
                ),

                React.createElement('div', { className: "pt-4 border-t border-obsidian-100" },
                  React.createElement('button', { onClick: handleDeleteProject, className: "text-red-500 text-sm flex items-center gap-1 hover:underline" },
                    React.createElement(Trash, { size: 14 }), " מחק פרויקט זה"
                  )
                )
              )
            ) : (
              React.createElement('div', { className: "text-center text-gray-400 py-10" }, "בחר פרויקט לעריכה")
            )
          )
        ) : (
          /* Global Content Tab */
          React.createElement('div', { className: "space-y-6 animate-fade-in" },
            React.createElement('h3', { className: "font-bold text-lg text-obsidian-800" }, "הגדרות כותרת (Hero)"),
            
            React.createElement('div', { className: "space-y-1" },
              React.createElement('label', { className: "text-xs font-bold text-obsidian-400" }, "כותרת עליונה"),
              React.createElement('input', {
                value: content.heroTitle,
                onFocus: saveHistory,
                onChange: (e) => updateContent('heroTitle', e.target.value),
                className: "w-full p-2 border border-obsidian-200 rounded focus:border-gold-400 outline-none"
              })
            ),
            React.createElement('div', { className: "space-y-1" },
              React.createElement('label', { className: "text-xs font-bold text-obsidian-400" }, "כותרת משנה (אפקט)"),
              React.createElement('input', {
                value: content.heroSubtitle,
                onFocus: saveHistory,
                onChange: (e) => updateContent('heroSubtitle', e.target.value),
                className: "w-full p-2 border border-obsidian-200 rounded focus:border-gold-400 outline-none"
              })
            ),
            React.createElement('div', { className: "space-y-1" },
              React.createElement('label', { className: "text-xs font-bold text-obsidian-400" }, "טקסט אודות"),
              React.createElement('textarea', {
                value: content.heroDescription,
                onFocus: saveHistory,
                onChange: (e) => updateContent('heroDescription', e.target.value),
                className: "w-full p-2 border border-obsidian-200 rounded h-24 focus:border-gold-400 outline-none resize-none"
              })
            ),

            React.createElement('div', { className: "h-px bg-obsidian-100 my-4" }),
            React.createElement('h3', { className: "font-bold text-lg text-obsidian-800" }, "ציטוט ופוטר"),

            React.createElement('div', { className: "space-y-1" },
              React.createElement('label', { className: "text-xs font-bold text-obsidian-400" }, "משפט השראה (ציטוט)"),
              React.createElement('textarea', {
                value: content.quoteText,
                onFocus: saveHistory,
                onChange: (e) => updateContent('quoteText', e.target.value),
                className: "w-full p-2 border border-obsidian-200 rounded h-16 focus:border-gold-400 outline-none resize-none"
              })
            ),
            React.createElement('div', { className: "space-y-1" },
              React.createElement('label', { className: "text-xs font-bold text-obsidian-400" }, "מחבר הציטוט"),
              React.createElement('input', {
                value: content.quoteAuthor,
                onFocus: saveHistory,
                onChange: (e) => updateContent('quoteAuthor', e.target.value),
                className: "w-full p-2 border border-obsidian-200 rounded focus:border-gold-400 outline-none"
              })
            ),
            React.createElement('div', { className: "space-y-1" },
              React.createElement('label', { className: "text-xs font-bold text-obsidian-400" }, "כותרת פוטר"),
              React.createElement('input', {
                value: content.footerTitle,
                onFocus: saveHistory,
                onChange: (e) => updateContent('footerTitle', e.target.value),
                className: "w-full p-2 border border-obsidian-200 rounded focus:border-gold-400 outline-none"
              })
            ),
            React.createElement('div', { className: "space-y-1" },
              React.createElement('label', { className: "text-xs font-bold text-obsidian-400" }, "טקסט פוטר"),
              React.createElement('textarea', {
                value: content.footerText,
                onFocus: saveHistory,
                onChange: (e) => updateContent('footerText', e.target.value),
                className: "w-full p-2 border border-obsidian-200 rounded h-16 focus:border-gold-400 outline-none resize-none"
              })
            )
          )
        )
      ),

      /* Right Side - Preview */
      React.createElement('div', { className: "flex-1 bg-obsidian-100 flex flex-col min-w-0" },
        /* Toolbar */
        React.createElement('div', { className: "h-10 bg-white border-b border-obsidian-200 flex justify-center items-center gap-4" },
          React.createElement('button', {
            onClick: () => setActiveDevice('desktop'),
            className: `p-1.5 rounded ${activeDevice === 'desktop' ? 'bg-obsidian-100 text-obsidian-900' : 'text-obsidian-400 hover:text-obsidian-600'}`,
            title: "Desktop View"
          }, React.createElement(Monitor, { size: 18 })),
          React.createElement('button', {
            onClick: () => setActiveDevice('mobile'),
            className: `p-1.5 rounded ${activeDevice === 'mobile' ? 'bg-obsidian-100 text-obsidian-900' : 'text-obsidian-400 hover:text-obsidian-600'}`,
            title: "Mobile View"
          }, React.createElement(Smartphone, { size: 18 }))
        ),
        
        /* Viewport */
        React.createElement('div', { className: "flex-1 overflow-auto p-8 flex justify-center bg-gray-200/50" },
          React.createElement('div', {
            className: `bg-white shadow-2xl transition-all duration-500 overflow-hidden relative ${
              activeDevice === 'mobile' 
              ? 'w-[375px] h-[812px] rounded-[3rem] border-[8px] border-obsidian-900' 
              : 'w-full h-full rounded-md border border-obsidian-200'
            }`
          },
            React.createElement('div', { className: "w-full h-full overflow-y-auto no-scrollbar bg-white" },
              React.createElement(SiteView, {
                projects: projects,
                content: content,
                onAdminClick: () => {},
                isAdminMode: true
              })
            )
          )
        )
      )
    )
  );
};

export default AdminPanel;