import { Project, SiteContent } from './types';

export const DEFAULT_SITE_CONTENT: SiteContent = {
  heroTitle: 'ארכיטקטורת תוכנה',
  heroSubtitle: 'וחדשנות טכנולוגית',
  heroDescription: 'מתמחה בניהול מוצר טכנולוגי וארכיטקטורת מערכת.\nאני רותם את כוחה של הבינה המלאכותית כדי להוביל פרויקטים מורכבים מחזון למציאות, במהירות שיא וללא פשרות על איכות, אסתטיקה וחווית משתמש.',
  quoteText: '"רעיונות מורכבים לא צריכים להרגיש מסובכים.\nהם צריכים להרגיש כמו קסם."',
  quoteAuthor: 'Shay Kalimi & AI Synergy',
  footerTitle: 'בוא נבנה את העתיד.',
  footerText: 'זמין לפרויקטים מאתגרים, ייעוץ אסטרטגי והובלת תהליכי פיתוח מבוססי AI.'
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'עמותת עמיתים - חיפוש פעילויות',
    category: 'Logistics & Search',
    description: 'פיתוח וניהול מוצר למערכת חיפוש חכמה. המיקוד: יצירת ארכיטקטורת נתונים המאפשרת סינון מהיר (גיל, עניין, אזור) למאות משתמשים בו זמנית, תוך שימוש במודלים לאופטימיזציה של תוצאות.',
    techStack: ['React Native', 'ElasticSearch', 'GeoLocation API'],
    iconName: 'Search',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586717791821-3f44a5638d28?q=80&w=1600&auto=format&fit=crop'
    ],
    autoPlay: false,
    link: 'https://amitim-augim.vercel.app/'
  },
  {
    id: '2',
    title: 'עמותת אתגרים - שיבוץ חכם',
    category: 'AI & Optimization',
    description: 'יישום מנוע לוגי מורכב לשיבוץ משאבים. ניהול הפיתוח של אלגוריתם המתחשב ב-30+ משתנים (רפואיים, לוגיסטיים, אנושיים) כדי לייצר לו"ז אופטימלי בלחיצת כפתור.',
    techStack: ['Node.js', 'AI Scheduling', 'Real-time DB'],
    iconName: 'CalendarClock',
    images: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551650992-ee4fd47df41f?q=80&w=1600&auto=format&fit=crop'
    ],
    autoPlay: true,
    link: 'https://team-planer-s.vercel.app/'
  },
  {
    id: '3',
    title: 'רדיו ישראלי - סטרימינג',
    category: 'Media & Streaming',
    description: 'אפיון ועיצוב חווית משתמש לאפליקציית מדיה עשירה. אינטגרציה של טכנולוגיות זיהוי שמע וניהול עומסים (Load Balancing) לשידור רציף ללא הפרעות.',
    techStack: ['Audio API', 'WebSocket', 'LyricFinder'],
    iconName: 'Radio',
    images: [
      'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=1600&auto=format&fit=crop'
    ],
    autoPlay: false,
    link: 'https://eran4383.github.io/radio/'
  },
  {
    id: '4',
    title: 'שעון אינטרוולים AI',
    category: 'Health & AI',
    description: 'חיבור בין עולם הכושר לבינה מלאכותית יוצרת. המערכת לומדת את דפוסי האימון של המשתמש ומייצרת תוכניות אימון דינמיות המשתנות בזמן אמת לפי ביצועים.',
    techStack: ['Google Fit API', 'TensorFlow Lite', 'React'],
    iconName: 'Timer',
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop'
    ],
    autoPlay: false,
    link: 'https://sport-clock-by-gemini.vercel.app/'
  },
  {
    id: '5',
    title: 'קורא קבצי קוד אונליין',
    category: 'Developer Tools',
    description: 'כלי עזר למפתחים המאפשר קריאה וניתוח מהיר של קבצי CSV ו-JSON ישירות בדפדפן. ממשק נקי להצגת נתונים מורכבים בצורה טבלאית וברורה, המדגים עבודה יעילה עם File API.',
    techStack: ['React', 'File API', 'Data Parsing'],
    iconName: 'FileJson',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop'
    ],
    autoPlay: false,
    link: 'https://read-csv-and-json-online.vercel.app/'
  },
  {
    id: '6',
    title: 'מחשבון הנחות כפולות',
    category: 'FinTech Logic',
    description: 'פישוט לוגיקה עסקית מורכבת לממשק משתמש מינימליסטי. אלגוריתם המחשב הצטלבויות של מבצעים שונים בזמן אמת כדי לחסוך כסף לצרכן הקצה.',
    techStack: ['TypeScript', 'PWA', 'Complex Logic'],
    iconName: 'Percent',
    images: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=1600&auto=format&fit=crop'
    ],
    autoPlay: false,
    link: 'https://sportyman.github.io/Discounts-cauclator/'
  }
];

export const SKILLS = [
  { name: 'Architecture', iconName: 'Hexagon' },
  { name: 'Product Lead', iconName: 'Crown' },
  { name: 'Problem Solver', iconName: 'Lightbulb' },
  { name: 'AI Strategy', iconName: 'BrainCircuit' },
  { name: 'High-End UX', iconName: 'Gem' },
];