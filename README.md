# Data Visualization Platform

A modern React application for data visualization and scenario analysis with a focus on user experience and performance. Built with TypeScript, Vite, and Firebase for a robust and scalable data visualization solution.

## 🚀 Features

### Authentication System

- **Firebase Authentication**: Secure email/password and Google Sign-In integration
- **Form Validation**: React Hook Form with Zod schema validation
- **Protected Routes**: Authentication state management with React Router
- **User Session Management**: Persistent login state with Zustand store

### Dashboard & Data Visualization

- **Interactive Charts**: Chart.js integration for dynamic data visualization
- **KPI Cards**: Real-time key performance indicators display
- **Profit Analysis**: Customizable profit analysis charts and metrics
- **Scenario Results**: Advanced scenario modeling and result visualization
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Variable Configuration Panel

- **Dynamic Variable Selection**: Flexible variable configuration system
- **Collapsible Sections**: Organized variable management with expandable sections
- **Search Functionality**: Quick variable search and filtering
- **Information Cards**: Detailed variable information and metadata display

### Modern UI/UX

- **Design System**: Consistent component library built with Radix UI
- **Dark/Light Mode**: Theme switching with persistent preferences
- **Sidebar Navigation**: Collapsible navigation with smooth animations
- **Toast Notifications**: User feedback with Sonner toast system
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices

## 🛠️ Tech Stack

### Frontend Framework

- **React 19.1.0**: Latest React with concurrent features
- **TypeScript 5.8.3**: Type-safe development experience
- **Vite 6.3.5**: Fast build tool and development server

### UI & Styling

- **Tailwind CSS 4.1.10**: Utility-first CSS framework
- **Radix UI**: Accessible, unstyled UI primitives
- **Lucide React**: Beautiful, customizable icons
- **Heroicons**: Additional icon set for enhanced UI

### State Management & Data

- **Zustand 5.0.5**: Lightweight state management
- **React Hook Form 7.56.4**: Performant form handling
- **Chart.js 4.5.0**: Flexible charting library
- **TanStack Table 8.21.3**: Powerful table component

### Backend & Authentication

- **Firebase 11.9.1**: Authentication, database, and hosting
- **React Router DOM 7.6.2**: Client-side routing

### Development Tools

- **ESLint 9.25.0**: Code linting and quality
- **SWC**: Fast TypeScript/JavaScript compiler
- **Class Variance Authority**: Type-safe component variants

## 📦 Installation & Setup

### Prerequisites

- **Node.js**: Version 16 or higher
- **Package Manager**: npm, yarn, or pnpm
- **Firebase Account**: For authentication and backend services

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/suraj1294/data-viz-platform.git
   cd data-viz-platform
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Configuration**

   ```bash
   # Copy environment template
   cp .env.example .env
   ```

   Configure your Firebase settings in `.env`:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
data-viz-platform/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── dashboard/       # Dashboard-specific components
│   │   ├── layout/          # Layout components
│   │   ├── ui/             # Base UI components (Radix UI)
│   │   └── VariablePanel/  # Variable configuration components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and configurations
│   ├── pages/              # Page components
│   ├── providers/          # Context providers
│   ├── router/             # Routing configuration
│   ├── stores/             # Zustand state stores
│   └── styles/             # Global styles and CSS
├── public/                 # Static assets
└── docs/                   # Documentation
```

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Type checking
npm run type-check   # Check TypeScript types
```

## 🎨 Customization

### Theme Configuration

The app supports dark/light mode with customizable themes. Theme preferences are persisted in localStorage.

### Component Styling

All components use Tailwind CSS with custom design tokens. Modify `tailwind.config.js` for theme customization.

### Chart Customization

Chart.js components can be customized by modifying the chart configurations in the dashboard components.

## 🔧 Development Guidelines

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Code formatting (if configured)
- **Component Structure**: Functional components with hooks

### State Management

- **Global State**: Zustand stores for authentication and user data
- **Local State**: React useState/useReducer for component-specific state
- **Form State**: React Hook Form for form management

### Performance Optimizations

- **Code Splitting**: Lazy loading with React.lazy and Suspense
- **Memoization**: React.memo and useMemo for expensive calculations
- **Bundle Optimization**: Vite for fast builds and HMR

## 🧪 Testing

Currently, the project doesn't include automated tests. Future improvements should include:

- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Component integration testing
- **E2E Tests**: Playwright or Cypress
- **Visual Regression**: Storybook for component testing

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel with automatic builds
```

### Netlify

```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Firebase Hosting

```bash
npm run build
firebase deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🕒 Development Timeline

- **Project Setup**: 2 hours
- **Authentication System**: 1.5 hours
- **Dashboard & Visualizations**: 5-6 hours
- **Variable Configuration**: 1 hour
- **UI Components & Styling**: 0.5 hours
- **Testing & Bug Fixes**: 2 hours
- **Documentation**: 1 hour

**Total Development Time**: ~12 hours

## 🔮 Future Roadmap

### Phase 1: Core Enhancements

- [ ] Comprehensive test suite implementation
- [ ] Data persistence with Firestore
- [ ] User profile management system
- [ ] Advanced chart customization options

### Phase 2: Advanced Features

- [ ] Real-time data synchronization
- [ ] Export functionality (PDF, CSV, PNG)
- [ ] Collaborative features
- [ ] Advanced analytics dashboard

### Phase 3: Performance & UX

- [ ] Server-side rendering (SSR)
- [ ] Progressive Web App (PWA) features
- [ ] Advanced mobile optimizations
- [ ] Accessibility improvements

## 🐛 Known Issues & Limitations

- Mobile experience needs enhancement for complex visualizations
- No automated testing implemented
- Limited error handling for edge cases

## 📞 Support

For support and questions:

- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation in the `/docs` folder

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
