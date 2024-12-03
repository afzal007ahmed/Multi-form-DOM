/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html' ],
  theme: {
    extend: {
      colors:
      {
        'custom-blue' : '#eff6ff',
        'new-blue' : 'hsl(206, 94%, 87%)'  ,
        'custom-blue-2' : '#20639B',
        'strawberry-red' : '#FB2943'
      }
    },
  },
  plugins: [],
}

