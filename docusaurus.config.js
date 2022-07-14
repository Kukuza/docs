const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Sargo',
  tagline: 'The purpose of Sargo is to facilitate end user adoption of Celo and cUSD in emerging markets. Sargo is meant to be a highly resilient system, a fully decentralized open source protocol that minimizes third party dependencies. While being loosely inspired by the M-PESA agent network in Kenya, Sargo aspires to be a global solution for the whole Celo ecosystem.',
  url: 'https://docs.sargo.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kukuza',
  projectName: 'docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Kukuza',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Kukuza',
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
        title: 'Sargo',
        logo: {
          alt: 'Sargo Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Kukuza',
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
                label: 'Kukuza Wallet',
                to: '/docs/intro',
              },
              {
                label: 'Sargo',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/85d6NCXzyM',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/KukuzaDAO',
              },
            ],
          },
          {
            title: 'More',
            items: [
              /* {
                label: 'Blog',
                to: '/blog',
              }, */
              {
                label: 'GitHub',
                href: 'https://github.com/Kukuza',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sargo.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
