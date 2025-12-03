module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
module.exports = {
  content: [
    "./index.html",  // 确保 Tailwind 扫描 index.html 文件
    "./**/*.js",     // 扫描所有 JavaScript 文件
    "./**/*.jsx",    // 扫描所有 JSX 文件
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
