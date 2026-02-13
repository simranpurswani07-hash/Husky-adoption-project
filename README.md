# Husky Adoption Next.js Website

A beautiful, professional website for the Stray Dogs Centre Husky Relocation Drive in Dubai.

## Features

- ✅ **SEO Optimized** - For "husky for adoption", "husky price", and related searches
- ✅ **Responsive Design** - Works beautifully on all devices
- ✅ **Arctic-Inspired Design** - Professional, elegant aesthetic
- ✅ **Contact Form** - Auto-submits to WhatsApp with pre-filled message
- ✅ **Video Integration** - Showcase your huskies
- ✅ **Editable Husky Gallery** - Easy to add individual dogs
- ✅ **FAQ Section** - Answers common questions
- ✅ **Next.js 14** - Modern, fast, and SEO-friendly
- ✅ **TypeScript** - Type-safe code

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Add your video file:
   - Place your husky video in the `public/videos/` directory
   - Name it `husky-video.mp4` (or update the path in `components/VideoSection.tsx`)

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Adding Huskies to the Gallery

Edit `components/HuskyGallery.tsx` and add new entries to the `huskies` array:

```typescript
{
  image: '/images/your-husky.jpg',
  name: 'Max',
  tags: ['Age: 3 years', 'Male', 'Friendly'],
  description: 'Max is a friendly boy who loves the cold...',
  alt: 'Max the husky'
}
```

### Updating Contact Information

Update WhatsApp number and Instagram handle in:
- `components/Hero.tsx`
- `components/ContactForm.tsx`
- `components/Footer.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Netlify

1. Build the project:
```bash
npm run build
```

2. Upload the `.next` folder to Netlify

## Project Structure

```
husky-adoption-nextjs/
├── app/
│   ├── layout.tsx        # Root layout with fonts & metadata
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── Hero.tsx          # Hero section with banner
│   ├── VideoSection.tsx  # Video showcase
│   ├── Mission.tsx       # Mission cards
│   ├── HuskyGallery.tsx  # Available huskies
│   ├── Process.tsx       # Adoption process
│   ├── ContactForm.tsx   # Contact form
│   ├── FAQ.tsx           # FAQs
│   └── Footer.tsx        # Footer & CTA
├── public/
│   └── videos/           # Place your videos here
├── package.json
├── next.config.js
└── tsconfig.json
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Fonts:** Google Fonts (DM Sans, Archivo Black)
- **Image Optimization:** Next.js Image component

## Support

For issues or questions, contact Stray Dogs Centre:
- WhatsApp: +971 50 235 2616
- Instagram: [@straydogscenter](https://www.instagram.com/straydogscenter)

---

💙 **Adopt Don't Shop** | Saving lives, one paw at a time. 🐾
