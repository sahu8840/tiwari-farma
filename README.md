# Tiwari Farma Website

A modern, professional, and fully responsive React website for Tiwari Farma - a leading pharmaceutical raw materials and chemicals supplier.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations and gradients
- **Fully Responsive**: Seamlessly adapts to desktop, tablet, and mobile devices
- **Multi-Page Navigation**: Standard website structure with dedicated pages
- **React Router**: Smooth client-side navigation between pages
- **Interactive Components**: Engaging UI elements and hover effects
- **Contact Form**: Functional inquiry form with validation
- **Product Catalog**: Filterable products by category
- **SEO Friendly**: Semantic HTML and proper meta tags

## 🛠️ Tech Stack

- **React**: 19.2.0 (Latest version)
- **React Router DOM**: 7.1.3 (For navigation)
- **Vite**: 7.2.4 (Fast build tool)
- **CSS3**: Modern CSS with Flexbox, Grid, and Gradients
- **ESLint**: Code quality and linting

## 📁 Project Structure

```
tiwari-farma/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with responsive menu
│   │   ├── Navbar.css
│   │   ├── Footer.jsx          # Footer with company info and links
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with hero and features
│   │   ├── Home.css
│   │   ├── About.jsx           # Company overview and values
│   │   ├── About.css
│   │   ├── Products.jsx        # Product catalog with filters
│   │   ├── Products.css
│   │   ├── Services.jsx        # Services offered
│   │   ├── Services.css
│   │   ├── Contact.jsx         # Contact form and information
│   │   └── Contact.css
│   ├── App.jsx                 # Main app component with routing
│   ├── App.css                 # Global styles
│   ├── index.css               # Base styles
│   └── main.jsx                # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20.19+ or 22.12+ recommended, works with 20.17.0)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd tiwari-farma
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173/`

### Build for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📄 Pages

### 1. Home Page (`/`)
- Hero section with call-to-action buttons
- Three pillars of excellence
- Featured products preview
- Customer-focused CTA section

### 2. About Us (`/about`)
- Company overview and history
- Mission and vision statements
- Core values and principles
- Timeline of milestones
- Why choose us section

### 3. Products (`/products`)
- Complete product catalog
- Category-based filtering (API, Nutraceuticals, Excipients, etc.)
- Detailed product cards with applications
- Request quote functionality
- Product advantages section

### 4. Services (`/services`)
- Comprehensive service offerings
- Trading and distribution
- Product sourcing
- Quality assurance
- Supply chain solutions
- Technical support
- Custom solutions
- Process workflow
- Industries served
- Benefits of partnership

### 5. Contact (`/contact`)
- Contact information (address, phone, email)
- Business hours
- Interactive contact form with validation
- Location map placeholder
- Social links ready

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#2563eb to #1d4ed8)
- **Secondary**: Orange accent (#f59e0b)
- **Background**: Light gray gradients (#f8fafc to #e2e8f0)
- **Text**: Dark slate (#1e293b, #64748b)

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

### UI Components
- Sticky navigation bar
- Responsive hamburger menu
- Gradient backgrounds
- Card-based layouts
- Smooth animations and transitions
- Interactive hover effects
- Form validation
- Loading states

## 📱 Mobile Responsiveness

All pages are fully optimized for mobile devices with:
- Responsive grid layouts
- Touch-friendly navigation
- Optimized font sizes
- Stacked layouts on small screens
- Mobile-first approach

## 🔧 Customization

### Updating Content

**Company Information**: Edit `/src/components/Footer.jsx` and `/src/pages/Contact.jsx`

**Products**: Modify the products array in `/src/pages/Products.jsx`

**Services**: Update the services array in `/src/pages/Services.jsx`

**Colors**: Change color variables in individual CSS files or create a theme file

### Adding New Pages

1. Create new component in `/src/pages/`
2. Import and add route in `/src/App.jsx`
3. Add navigation link in `/src/components/Navbar.jsx`
4. Add footer link in `/src/components/Footer.jsx`

## 📞 Contact Information

- **Company**: Tiwari Farma
- **Address**: Gala No.8 B70 Arihant Commercial Complex, Purna Village, Bhiwandi, Dist-Thane 421302, Maharashtra, India
- **Phone**: +91 8591106468, +91 7208502625
- **Email**: info@tiwarifarma.com, info.tiwarifarma@gmail.com
- **Website**: www.tiwarifarma.com

## 📝 License

Private project - All rights reserved © 2025 Tiwari Farma

## 🙏 Acknowledgments

- Built with React and Vite
- Designed following modern web standards
- Responsive design best practices
- User experience focused
