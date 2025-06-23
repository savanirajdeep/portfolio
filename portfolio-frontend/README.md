# Portfolio Frontend

A modern, responsive portfolio website built with React and Tailwind CSS for Rajdeep Savani.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling, hover effects, and micro-interactions
- **Dynamic Content**: Fetches data from Spring Boot backend API
- **Performance Optimized**: Fast loading with optimized animations
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Framer Motion** - Animation library for smooth transitions
- **Axios** - HTTP client for API communication
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## 📋 Prerequisites

- Node.js 16+ 
- npm or yarn
- Running Spring Boot backend (see portfolio-backend README)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

The application will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Skills.js       # Skills showcase
│   ├── Experience.js   # Work experience timeline
│   ├── Projects.js     # Projects portfolio
│   ├── Education.js    # Education timeline
│   ├── Contact.js      # Contact form
│   ├── Footer.js       # Footer
│   └── Loading.js      # Loading component
├── services/           # API services
│   └── api.js         # API communication
├── App.js             # Main App component
├── index.js           # Entry point
└── index.css          # Global styles and Tailwind
```

## 🎨 Components Overview

### Header
- Fixed navigation with smooth scrolling
- Responsive mobile menu
- Dynamic background on scroll

### Hero
- Animated profile section
- Call-to-action buttons
- Social media links
- Scroll indicator

### About
- Personal information display
- Contact details
- Key highlights
- Professional summary

### Skills
- Categorized skill display
- Proficiency indicators
- Interactive filtering
- Skills overview summary

### Experience
- Timeline layout
- Company information
- Key achievements
- Technology tags

### Projects
- Project cards with images
- Category filtering
- GitHub and live demo links
- Technology stack display

### Education
- Educational timeline
- Institution details
- Current enrollment status
- Academic highlights

### Contact
- Contact form with validation
- Contact information cards
- Social media links
- Success feedback

### Footer
- Quick navigation links
- Social media links
- Contact information
- Scroll to top button

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Optimized layouts for all screen sizes

### Animations
- Smooth page transitions
- Hover effects and micro-interactions
- Scroll-triggered animations
- Loading states

### Performance
- Optimized bundle size
- Lazy loading for images
- Efficient re-renders
- Smooth scrolling

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## 🔧 Configuration

### API Configuration
Update the API base URL in `src/services/api.js`:

```javascript
const API_BASE_URL = 'http://localhost:8080/api';
```

### Tailwind Configuration
Custom colors and animations are defined in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        // ... more shades
        900: '#1e3a8a',
      }
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      'slide-up': 'slideUp 0.5s ease-out',
    }
  }
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Scheme

- **Primary**: Blue (#3b82f6)
- **Secondary**: Gray (#64748b)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

## 🔄 State Management

The application uses React's built-in state management:
- `useState` for local component state
- `useEffect` for side effects and API calls
- Props for data flow between components

## 📊 Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect React settings
3. Deploy with one click!

### AWS S3 + CloudFront
1. Build the project: `npm run build`
2. Upload `build` folder to S3
3. Configure CloudFront for CDN

## 🔧 Environment Variables

Create a `.env` file for environment-specific configuration:

```env
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_ENVIRONMENT=development
```

## 📝 Customization

### Colors
Update the primary color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#your-color-50',
    500: '#your-color-500',
    900: '#your-color-900',
  }
}
```

### Content
Update the content by modifying the backend API or directly in the components.

### Styling
All styles use Tailwind CSS classes. Custom styles can be added in `src/index.css`.

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Error**
   - Ensure backend is running on port 8080
   - Check CORS configuration in backend
   - Verify API endpoints

2. **Build Errors**
   - Clear node_modules and reinstall
   - Check for syntax errors in components
   - Verify all dependencies are installed

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check for conflicting CSS
   - Verify class names are correct

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: rajdeep.s@cvtechmail.com
- LinkedIn: [Rajdeep Savani](https://linkedin.com/in/rajdeepsavani)
- GitHub: [rajdeepsavani](https://github.com/rajdeepsavani)
