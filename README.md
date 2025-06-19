# Next.js + Supabase Template

A Next.js template with authentication and form validation. Good starting point for apps that need user auth and backend functionality.

## What's Included

- **Authentication**: Login/signup with Supabase
- **Form Validation**: Zod validation with error handling  
- **Protected Routes**: Middleware handles auth automatically
- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind

## Quick Setup

1. **Clone and install**
```bash
git clone git@github.com:saifuddm/complex.git
cd complex
npm install
```

2. **Environment setup**
Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. **Supabase setup**
- Create a project at [supabase.com](https://supabase.com)
- Copy your URL and anon key to `.env.local`
- Auth tables are created automatically

4. **Run it**
```bash
npm run dev
```

## What You Get

```
src/
├── app/
│   ├── login/           # Auth pages
│   ├── account/         # Protected user page
│   └── api/auth/        # Auth endpoints
├── components/          # Reusable components
├── middleware.ts        # Route protection
└── utils/supabase/      # Supabase config
```

## Key Features

- `/login` - handles both login and signup
- `/account` - protected page showing user info
- Form validation with Zod (email format, password length)
- Error messages show up right under form fields
- Middleware protects routes automatically

## Customizing

- Update validation rules in `src/app/login/actions.ts`
- Add new protected routes - middleware handles them automatically
- Customize styles in `src/app/globals.css`
- Add database tables in Supabase dashboard

## Scripts

- `npm run dev` - development server
- `npm run build` - build for production
- `npm run start` - start production build

That's it! You now have a working app with auth. Build from here.