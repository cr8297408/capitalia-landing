/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core Logic (Base Surfaces - Optimized for Dark Mode)
        surface: {
          primary: '#000000',
          secondary: '#1C1C1E',
          tertiary: '#2C2C2E',
        },
        // Typography (Optimized for Dark Mode)
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1A6',
          tertiary: '#86868B',
          quaternary: '#424245',
        },
        // Borders & Dividers (Optimized for Dark Mode)
        border: {
          primary: 'rgba(255, 255, 255, 0.12)',
          secondary: 'rgba(255, 255, 255, 0.08)',
          tertiary: 'rgba(255, 255, 255, 0.18)',
        },
        // Accents (Apple Palette)
        accent: {
          blue: '#0066CC',
          'blue-tint': 'rgba(0, 102, 204, 0.2)',
          purple: '#AF52DE',
          pink: '#FF2D55',
          gray: '#8E8E93',
        },
        // States (Semantic)
        status: {
          success: '#34C759',
          warning: '#FF9500',
          error: '#FF3B30',
          info: '#007AFF',
        },
        // Legacy Apple namespace (for compatibility)
        apple: {
          blue: '#0066CC',
          gray: {
            50: '#F5F5F7',
            100: '#E8E8ED',
            400: '#86868B',
            900: '#1D1D1F',
          }
        }
      },
      borderRadius: {
        'apple': '20px',
        'apple-sm': '12px',
        'apple-lg': '24px',
        'apple-xl': '32px',
      },
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'apple-md': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'apple-lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'apple-xl': '0 12px 48px rgba(0, 0, 0, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'apple-float': 'apple-float 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'apple-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
        }
      },
      transitionProperty: {
        'apple': 'all',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'apple': '400ms',
        'apple-slow': '700ms',
      }
    },
  },
  plugins: [],
}
