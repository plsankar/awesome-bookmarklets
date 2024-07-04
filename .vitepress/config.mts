import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/awesome-bookmarklets/',
  title: 'Awesome Bookmarklets',
  description:
    'Awesome Bookmarklets, a curated collection of powerful and handy bookmarklets to enhance your browsing experience.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [
      {
        text: 'Home',
        link: '/',
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/plsankar/awesome-bookmarklets' }],
  },
  srcExclude: ['README.md'],
});