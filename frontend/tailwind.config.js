const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    // purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                '2xl': '600px',
            },
            spacing: {
                '2xl': '100rem'
            },
            colors: {
                green: {
                    superlight: '#66ff8a',
                    light: '#42ff6e',
                    DEFAULT: '#11fe48',
                    dark: '#10e645',
                },
                blue: {
                    superlight: '#cfe1ff',
                    '200': '#e8f3fc',
                    light: '#478dfc',
                    DEFAULT: '#3b83f6',
                    dark: '#3375de',
                    superdark: '#1F2937'
                },
                primary: {
                    superlight: '#8CFFA8',
                    light: '#5EFF84',
                    DEFAULT: '#11fe48',
                    dark: '#02CC5F',
                    superdark: '#044012'
                },
                secondary: {
                    ultralight: '#D7AEEB',
                    superlight: '#CA98EA',
                    light: '#AC50E6',
                    DEFAULT: '#900BE0',
                    dark: '#6E09AD'
                },
                superdark: {
                    DEFAULT: '#1F2937'
                },
                light: {
                    DEFAULT: '#e8f3fc'
                }
            }
        }
    },
    variants: {
        extend: {
            backgroundColor: ['active', 'hover'],
            translate: ['hover'],
            scale: ['hover']
        },
    },
    plugins: [],
}