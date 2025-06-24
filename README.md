# Rajdeep Savani - Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, designed to showcase my skills, experience, and projects.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with beautiful layouts for all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Static Deployment**: Optimized for GitHub Pages hosting
- **Performance**: Fast loading with optimized assets
- **Accessibility**: Screen reader friendly with semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 19, Tailwind CSS, Framer Motion
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
Portfolio/
├── portfolio-frontend/          # React frontend application
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── data/              # Static portfolio data
│   │   ├── services/          # API services
│   │   └── App.js             # Main application component
│   ├── public/                # Static assets
│   └── package.json           # Frontend dependencies
├── portfolio-backend/          # Spring Boot backend (not used for GitHub Pages)
└── .github/workflows/         # GitHub Actions for deployment
```

## 🚀 Deployment to GitHub Pages

### Prerequisites

1. Make sure you have a GitHub account
2. Create a new repository named `Portfolio` (or your preferred name)
3. Ensure you have Node.js installed locally

### Steps to Deploy

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   cd portfolio-frontend
   npm install
   ```

3. **Update the homepage URL** in `portfolio-frontend/package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/Portfolio"
   }
   ```

4. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Set Source to "GitHub Actions"
   - The workflow will automatically deploy your site

### Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:
- Builds the React application
- Deploys it to GitHub Pages
- Runs on every push to the main branch

### Manual Deployment

If you prefer manual deployment:

```bash
cd portfolio-frontend
npm run build
npm run deploy
```

## 🎨 Customization

### Updating Portfolio Data

All portfolio information is stored in `portfolio-frontend/src/data/portfolioData.js`. You can easily update:

- Personal information
- Skills and expertise
- Work experience
- Projects
- Education

### Styling

The portfolio uses Tailwind CSS for styling. Custom styles can be added in:
- `portfolio-frontend/src/index.css`
- `portfolio-frontend/tailwind.config.js`

### Components

Each section is a separate React component in `portfolio-frontend/src/components/`:
- `Header.js` - Navigation and header
- `Hero.js` - Main hero section
- `About.js` - About me section
- `Skills.js` - Skills and expertise
- `Experience.js` - Work experience timeline
- `Projects.js` - Project showcase
- `Education.js` - Educational background
- `Contact.js` - Contact information
- `Footer.js` - Footer section

## 🔧 Development

### Local Development

1. **Start the development server**:
   ```bash
   cd portfolio-frontend
   npm start
   ```

2. **Open your browser** and navigate to `http://localhost:3000`

### Building for Production

```bash
cd portfolio-frontend
npm run build
```

The build files will be created in the `build/` directory.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🎯 Performance

- Optimized bundle size
- Lazy loading for images
- Efficient re-renders
- Smooth scrolling and animations

## 🔒 Security

- No sensitive data in the frontend
- Static deployment eliminates server vulnerabilities
- Secure external links

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions, please open an issue or submit a pull request.

## 📞 Contact

- **Email**: rajdeep.s@cvtechmail.com
- **LinkedIn**: [Rajdeep Savani](https://linkedin.com/in/rajdeepsavani)
- **GitHub**: [rajdeepsavani](https://github.com/rajdeepsavani)

---

Made with ❤️ by Rajdeep Savani 