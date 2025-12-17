import { Project, SiteContent } from './types';

export const DEFAULT_SITE_CONTENT: SiteContent = {
  heroTitle: 'ארכיטקטורה דיגיטלית',
  heroSubtitle: 'שבונים עליה עסקים',
  heroDescription: 'אני לא רק כותב קוד, אני בונה מנועי צמיחה.\nהתמחות בהפיכת אתגרים תפעוליים לפתרונות דיגיטליים אלגנטיים, מהירים ומניבי רווחים.',
  quoteText: '"טכנולוגיה טובה היא כזו שלא מרגישים אותה.\nהיא פשוט גורמת לעסק לעבוד טוב יותר."',
  quoteAuthor: 'Shay Kalimi',
  footerTitle: 'מוכנים לשלב הבא?',
  footerText: 'בוא נהפוך את הרעיון שלך למציאות עסקית.'
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'מנוע צמיחה לקהילות',
    category: 'עמותת עמיתים',
    description: 'הפכנו תהליך הרשמה מסורבל לממשק מהיר שמזניק את כמות הנרשמים. המערכת יודעת להציע למשתמש בדיוק את מה שהוא מחפש, בזמן שהוא מחפש.',
    techStack: ['עלייה של 40% בהרשמות', 'חיפוש מיידי', 'נגישות מלאה'],
    iconName: 'Users',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    ],
    autoPlay: false,
    link: 'https://amitim-augim.vercel.app/'
  },
  {
    id: '2',
    title: 'אוטומציה של כוח אדם',
    category: 'עמותת אתגרים',
    description: 'מערכת חכמה שמחליפה עבודה ידנית של ימים שלמים - לדקות בודדות. האלגוריתם משבץ מאות עובדים ומתנדבים תוך התחשבות באילוצים מורכבים.',
    techStack: ['חיסכון של 80% בזמן ניהול', 'שיבוץ אופטימלי', 'אפס טעויות אנוש'],
    iconName: 'Cpu',
    images: [
      'https://images.unsplash.com/photo-1551650992-ee4fd47df41f?q=80&w=1600&auto=format&fit=crop'
    ],
    autoPlay: true,
    link: 'https://team-planer-s.vercel.app/'
  },
  {
    id: '3',
    title: 'חווית מדיה רציפה',
    category: 'אפליקציית רדיו',
    description: 'כשמדובר במוזיקה, אין מקום להפרעות. בנינו נגן יציב במיוחד שממשיך לנגן גם כשהקליטה ירודה, עם ממשק נקי ששם את התוכן במרכז.',
    techStack: ['0% זמן טעינה מורגש', 'עיצוב מינימליסטי', 'חווית משתמש חלקה'],
    iconName: 'PlayCircle',
    images: [
      'https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=1600&auto=format&fit=crop'
    ],
    autoPlay: false,
    link: 'https://eran4383.github.io/radio/'
  },
  {
    id: '4',
    title: 'מאמן אישי בכיס',
    category: 'כושר ו-AI',
    description: 'לקחנו את הידע של מאמני כושר מובילים והטמענו אותו בתוך אפליקציה. המערכת מזהה את קצב המשתמש ומתאימה את האימון בזמן אמת.',
    techStack: ['פרסונליזציה בזמן אמת', 'מוטיבציה גבוהה', 'מעקב חכם'],
    iconName: 'Activity',
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop'
    ],
    autoPlay: false,
    link: 'https://sport-clock-by-gemini.vercel.app/'
  },
  {
    id: '5',
    title: 'דאטה ללא כאב ראש',
    category: 'כלי למנהלים',
    description: 'הפכנו את הדוחות המשעממים והמסובכים לגרפים ברורים שכל מנהל יכול להבין בשניות. כלי שמאפשר לקבל החלטות מבוססות נתונים ברגע.',
    techStack: ['ויזואליזציה מיידית', 'קבלת החלטות', 'פשטות תפעולית'],
    iconName: 'BarChart',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop'
    ],
    autoPlay: false,
    link: 'https://read-csv-and-json-online.vercel.app/'
  },
  {
    id: '6',
    title: 'מחשבון רווחיות',
    category: 'איקומרס ופיננסים',
    description: 'מערכת שעוזרת ללקוחות להבין בדיוק כמה הם משלמים (וחוסכים). שקיפות מלאה מול הלקוח שמובילה לאמון וסגירת עסקאות מהירה יותר.',
    techStack: ['שקיפות ללקוח', 'מניעת נטישה', 'דיוק פיננסי'],
    iconName: 'Calculator',
    images: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop'
    ],
    autoPlay: false,
    link: 'https://sportyman.github.io/Discounts-cauclator/'
  }
];

export const SKILLS = [
  { name: 'ROI Focus', iconName: 'TrendingUp' },
  { name: 'Product', iconName: 'Box' },
  { name: 'Innovation', iconName: 'Zap' },
  { name: 'UX/UI', iconName: 'Layout' },
];