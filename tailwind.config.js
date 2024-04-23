/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: { // Add new class "<prop>-<name>" for prop color
        'darken-bg': '#222831',
        'dark-bg': '#011627',
        'hover-bg': '#455c8575',
        'gray-text': '#6583a1',
        'green-text': '#07a787'
      },
      fontFamily: { // Add new class "font-fira_<weight>" for font
        fira_light: "Fira Code Light",
        fira_regular: "Fira Code Regular",
        fira_medium: "Fira Code Medium",
        fira_semibold: "Fira Code SemiBold",
        fira_bold: "Fira Code Bold",
        fira_variable: "Fira Code Variable",
      }
    },
  },
  plugins: [],
}

