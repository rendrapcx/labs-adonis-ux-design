/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{edge,js,ts,vue,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  variants: {
    lineClamp: ['responsive', 'hover'],
    aspectRatio: ['responsive', 'hover']
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // require("@tailwindcss/forms")({
    //   strategy: 'base', // only generate global styles
    //   strategy: 'class', // only generate classes
    // }),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tw-elements/dist/plugin')
  ],
}
