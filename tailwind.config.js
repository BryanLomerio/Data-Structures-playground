module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hover-label': {
          '@apply absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 px-2 py-1 text-sm text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap': {},
        },
      });
    },
  ],
};
