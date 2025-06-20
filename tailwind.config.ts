
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// New enhanced Moroccan luxury color palette
				pearl: {
					50: '#FEFDFB',
					100: '#FAF8F5',
					200: '#F5F1E8',
					300: '#F0E9D6',
					400: '#E8DFC4',
					500: '#E0D5B2',
					600: '#D4C49F',
					700: '#C6B18C',
					800: '#B69E79',
					900: '#A48B66',
				},
				copper: {
					50: '#FDF6E3',
					100: '#F9E6B8',
					200: '#F5D68C',
					300: '#F1C660',
					400: '#EDB634',
					500: '#B8860B',
					600: '#A17609',
					700: '#8A6608',
					800: '#735606',
					900: '#5C4605',
				},
				clay: {
					50: '#F7F1ED',
					100: '#E8D5C4',
					200: '#D9B99B',
					300: '#CA9D72',
					400: '#BB8149',
					500: '#A0522D',
					600: '#8B4726',
					700: '#763C1F',
					800: '#613118',
					900: '#4C2611',
				},
				beige: {
					50: '#FEFCF9',
					100: '#F5F1E8',
					200: '#EBE3D1',
					300: '#E1D5BA',
					400: '#D7C7A3',
					500: '#CDB98C',
					600: '#BAA578',
					700: '#A79164',
					800: '#947D50',
					900: '#81693C',
				},
				// Legacy colors for backward compatibility
				sand: {
					50: '#FEFCF9',
					100: '#F5F1E8',
					200: '#EBE3D1',
					300: '#E1D5BA',
					400: '#D7C7A3',
					500: '#CDB98C',
					600: '#BAA578',
					700: '#A79164',
					800: '#947D50',
					900: '#81693C',
				},
				amber: {
					50: '#FDF6E3',
					100: '#F9E6B8',
					200: '#F5D68C',
					300: '#F1C660',
					400: '#EDB634',
					500: '#B8860B',
					600: '#A17609',
					700: '#8A6608',
					800: '#735606',
					900: '#5C4605',
				},
				gold: {
					50: '#FDF6E3',
					100: '#F9E6B8',
					200: '#F5D68C',
					300: '#F1C660',
					400: '#EDB634',
					500: '#B8860B',
					600: '#A17609',
					700: '#8A6608',
					800: '#735606',
					900: '#5C4605',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
			},
			fontFamily: {
				'serif': ['Playfair Display', 'Georgia', 'serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'display': ['Playfair Display', 'Georgia', 'serif'],
			},
			letterSpacing: {
				'extra-wide': '0.15em',
				'ultra-wide': '0.25em',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
