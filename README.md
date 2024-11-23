# Growth Business Development México

A modern, multilingual business development platform built with Next.js 13, focusing on expansion strategies and growth intelligence for the Mexican market.

## Features

- 🌐 Multilingual support (Spanish, English, Chinese)
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 📱 Fully responsive design
- 💬 AI-powered chat assistant
- 📝 MDX blog system
- 🔄 Dynamic content management
- 🚀 Optimized performance

## System Requirements

- Node.js 18.x or higher
- NPM 9.x or higher
- 2 CPU cores minimum
- 4GB RAM minimum
- 20GB SSD storage minimum

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/growth-business-development.git
cd growth-business-development
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Start development server:
```bash
npm run dev
```

## Project Structure

```
├── app/                   # Next.js 13 app directory
│   ├── [locale]/         # Locale-specific routes
│   ├── api/              # API routes
├── components/           # React components
├── lib/                  # Utility functions and hooks
├── messages/            # i18n translation files
├── posts/              # MDX blog posts
├── public/             # Static assets
└── styles/            # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features in Detail

### Multilingual Support
- Implemented using next-intl
- Supports Spanish (es), English (en), and Chinese (zh)
- SEO-friendly URL structure

### Blog System
- MDX-based blog posts
- Category filtering
- Related posts
- Newsletter integration

### AI Chat Assistant
- Real-time chat interface
- Automated responses
- Meeting scheduling integration
- Multi-language support

### Business Development Tools
- Expansion strategy planning
- Growth intelligence analytics
- Strategic alliance management
- Contact and lead management

## API Endpoints

### Newsletter Subscription
```http
POST /api/newsletter
Content-Type: application/json

{
  "email": "string"
}
```

### Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "company": "string?",
  "message": "string"
}
```

### Chat System
```http
POST /api/chat
Content-Type: application/json

{
  "message": "string",
  "sessionId": "string"
}
```

## Deployment

The project is configured for deployment on various platforms:

### Netlify
```bash
npm run build
```
- Automatic deployments configured via `netlify.toml`
- Environment variables must be set in Netlify dashboard

### Docker
```bash
docker build -t growth-bdm .
docker run -p 3000:3000 growth-bdm
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.

## Support

For technical support or questions:
- Email: tech@growthbdm.com
- Website: https://growthbdm.com
- Phone: +52 (55) 2701 6354