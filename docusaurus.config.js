// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Necronomicon',
  tagline: 'Collection of documentation & knowledge',
  url: 'https://cruciblemc.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CrucibleMC', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/CrucibleMC/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'Necronomicon',
          logo: {
            alt: 'CrucibleMC',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'crucible/intro',
              position: 'left',
              label: 'Crucible',
            },
            {
              type: 'doc',
              docId: 'modding/intro',
              position: 'left',
              label: 'Modding',
            },
            {
              type: 'doc',
              docId: 'mp-db/intro',
              position: 'left',
              label: 'Mod & Plugin DB',
            },
            {
              href: 'https://discord.gg/jWSTJ4d',
              label: 'Discord',
              position: 'right',
            },
            {
              href: 'https://github.com/CrucibleMC/docs',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Crucible',
                  to: '/docs/crucible/intro',
                },
                {
                  label: 'Modding',
                  to: '/docs/modding/intro',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Discord',
                  href: 'https://discord.gg/jWSTJ4d',
                }
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/CrucibleMC',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} CrucibleMC & Contributors`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        respectPrefersColorScheme: true,
      }),
};

module.exports = config;
