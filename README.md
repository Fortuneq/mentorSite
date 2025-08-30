# MentorSite - IT Career Mentorship Landing Page

A modern, animated landing page for an IT mentorship service built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Dark Theme Design**: Sleek, professional dark theme with gradients
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Responsive Layout**: Mobile-first responsive design
- **TypeScript**: Full type safety throughout the application
- **Component Structure**: Modular React components for easy maintenance

## Components

- **Hero**: Eye-catching hero section with animated call-to-action
- **Services**: Three service cards highlighting mentorship offerings
- **Benefits**: Key benefits with hover animations
- **Testimonials**: Social proof with sample success stories
- **CTA**: Email capture form and consultation booking

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Add your Supabase URL and anon key

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **Supabase** - Backend for data storage (configured but not fully integrated)

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Benefits.tsx
│   ├── Testimonials.tsx
│   └── CTA.tsx
└── lib/
    └── supabase.ts
```

## Customization

- Update content in each component to match your specific mentorship services
- Modify colors in `tailwind.config.js` and component files
- Add your actual Supabase configuration for email collection
- Integrate with your preferred analytics and marketing tools

## Deployment

The project is ready to deploy on Vercel, Netlify, or any other Next.js-compatible platform.
