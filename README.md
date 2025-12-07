# הוראות התקנה והעלאה (Deployment Instructions)

כדי שהאתר יעבוד בחינם באמצעות GitHub ו-Vercel, עקוב אחר ההוראות הבאות:

## 1. הכנה ב-GitHub
1. צור **Repository** חדש ב-GitHub (לדוגמה: `portfolio`).
2. וודא שהוא מוגדר כ-`Public` (ציבורי) כדי ש-Vercel תוכל לגשת אליו בגרסה החינמית בקלות.
3. דחוף את כל הקבצים שנוצרו כאן לתוך ה-Repository. 
   
   *הערה טכנית*: מכיוון שאני מספק לך את קוד המקור ללא `package.json`, עליך ליצור פרויקט Vite בסיסי במחשב שלך ולהעתיק את הקבצים שלי פנימה.
   
   **פקודות ליצירת הפרויקט במחשב שלך:**
   ```bash
   npm create vite@latest my-portfolio -- --template react-ts
   cd my-portfolio
   npm install lucide-react framer-motion clsx tailwind-merge
   # העתק את הקבצים שלי לתיקייה זו (החלף את הקיים)
   ```

## 2. הגדרות Vercel
1. הירשם ל-[Vercel](https://vercel.com) והתחבר עם חשבון ה-GitHub שלך.
2. לחץ על **"Add New..."** -> **"Project"**.
3. בחר את ה-Repository שיצרת ב-GitHub ולחץ **Import**.
4. **Build and Output Settings**:
   - Vercel לרוב מזהה אוטומטית שזה פרויקט Vite.
   - וודא שפקודת ה-Build היא: `vite build` (או `npm run build`).
   - וודא שתיקיית הפלט (Output Directory) היא: `dist`.
5. לחץ על **Deploy**.

## 3. הגדרות Environment (אם נדרש)
בפרויקט הנוכחי, אין שימוש ב-API Keys סודיים (כמו Gemini API Key) בצד השרת, שכן זהו אתר סטטי (Client Side). לכן, **אין צורך** להגדיר משתני סביבה (Environment Variables) ב-Vercel עבור גרסה זו.

אם בעתיד תרצה לחבר את ה-API של Gemini (למשל לצ'אטבוט באתר):
1. ב-Vercel, לך ללשונית **Settings** -> **Environment Variables**.
2. הוסף מפתח בשם `VITE_GEMINI_API_KEY` ואת הערך שלו.
3. בקוד, גש אליו דרך `import.meta.env.VITE_GEMINI_API_KEY`.

בהצלחה! האתר יהיה זמין בכתובת שתסתיים ב-`.vercel.app`.