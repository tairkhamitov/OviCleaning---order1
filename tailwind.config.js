module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#F2B705", // gold-500
          light: "#FFD700", // gold-400
          dark: "#D4A004", // gold-600
          50: "#FFFBEB", // gold-50
          100: "#FEF3C7", // gold-100
          200: "#FDE68A", // gold-200
          300: "#FFED4A", // gold-300
          400: "#FFD700", // gold-400
          500: "#F2B705", // gold-500
          600: "#D4A004", // gold-600
          700: "#B7901F", // gold-700
          800: "#92400E", // gold-800
          900: "#78350F", // gold-900
        },
        
        // Secondary Colors
        secondary: {
          DEFAULT: "#FFD700", // gold-light
          light: "#FFED4A", // gold-300
          dark: "#F2B705", // gold-500
        },
        
        // Accent Colors
        accent: {
          DEFAULT: "#1A1A1A", // charcoal-800
          light: "#232323", // charcoal-700
          dark: "#0F0F0F", // charcoal-900
        },
        
        // Background Colors
        background: {
          DEFAULT: "#0F0F0F", // black-900
          light: "#1A1A1A", // charcoal-800
          dark: "#000000", // black-950
        },
        
        // Surface Colors
        surface: {
          DEFAULT: "#232323", // charcoal-700
          light: "#2A2A2A", // charcoal-600
          dark: "#1A1A1A", // charcoal-800
        },
        
        // Text Colors
        text: {
          primary: "#F5F5F5", // gray-100
          secondary: "#B8B8B8", // gray-400
          muted: "#8A8A8A", // gray-500
          inverse: "#0F0F0F", // black-900
        },
        
        // Status Colors
        success: {
          DEFAULT: "#10B981", // emerald-500
          light: "#34D399", // emerald-400
          dark: "#059669", // emerald-600
        },
        
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          light: "#FBBF24", // amber-400
          dark: "#D97706", // amber-600
        },
        
        error: {
          DEFAULT: "#EF4444", // red-500
          light: "#F87171", // red-400
          dark: "#DC2626", // red-600
        },
        
        // Border Colors
        border: {
          DEFAULT: "rgba(245, 245, 245, 0.1)", // white-10
          light: "rgba(245, 245, 245, 0.05)", // white-5
          strong: "rgba(245, 245, 245, 0.2)", // white-20
        },
      },
      
      fontFamily: {
        unbounded: ['"Unbounded"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      
      boxShadow: {
        'elevated': '0 16px 40px rgba(0, 0, 0, 0.35)',
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'card': '0 8px 24px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 20px rgba(242, 183, 5, 0.3)',
        'glow-strong': '0 0 30px rgba(242, 183, 5, 0.5)',
      },
      
      animation: {
        'sparkle': 'sparkle 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 240ms cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      keyframes: {
        sparkle: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      
      transitionDuration: {
        '240': '240ms',
        '200': '200ms',
      },
      
      transitionTimingFunction: {
        'default': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      
      backdropBlur: {
        'xs': '2px',
      },
      
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}