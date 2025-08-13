# Origami Interior Design Website

A modern, responsive website for Origami Interior Design featuring AI-enhanced design services, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with animated components
- **AI-Powered Branding**: Emphasizes the innovative AI-enhanced approach
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- **Performance**: Optimized for Core Web Vitals and fast loading
- **Accessibility**: WCAG 2.1 compliant with proper semantics and ARIA labels

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Lato)

## 🎨 Brand Colors

- **Primary Blue**: `#183D59`
- **Secondary Gold**: `#FFB703`
- **Neutral Gray**: `#F2F2F2`
- **Text Black**: `#333333`

## 📱 Pages

- **Home**: Hero section, services overview, featured projects, AI advantages
- **Services**: Detailed service offerings (House Flipping, Interior Design, Furniture Painting)
- **Portfolio**: Filterable project gallery with case studies
- **About**: Company story, AI approach, values, and team
- **Contact**: Contact form, business information, and service areas

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd origami-interior-design
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Management

The website currently uses placeholder content. To update:

1. **Images**: Replace placeholder image references with actual image paths
2. **Content**: Update text content in component files
3. **Contact Info**: Update contact details in Footer and Contact components
4. **Projects**: Add real project data in the Portfolio page

## 🔧 Customization

### Brand Colors
Update colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    blue: '#183D59',
    gold: '#FFB703',
  },
  // ... other colors
}
```

### Typography
Fonts are configured in `src/app/layout.tsx` and `src/app/globals.css`

### Components
All components are in `src/components/` and follow TypeScript best practices

## 📊 SEO Features

- Dynamic meta tags for each page
- Structured data for local business
- XML sitemap generation
- Robots.txt configuration
- Open Graph tags
- Semantic HTML structure

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- High contrast colors

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly interface elements
- Optimized images and loading
- Fast performance on mobile devices

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Configure custom domain if needed

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean
- AWS Amplify

## 📞 Support

For technical support or customization requests, please contact the development team.

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

Built with ❤️ for Origami Interior Design