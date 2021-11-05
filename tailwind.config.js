module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
}
