/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://chanakyalegalchamber.com',
  generateRobotsTxt: true,
  outDir: './out',
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  transform: async (config, path) => {
    let priority = 0.6
    let changefreq = 'monthly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'weekly'
    } else if (path.startsWith('/practice-areas')) {
      priority = 0.9
      changefreq = 'monthly'
    } else if (path.startsWith('/blog')) {
      priority = 0.8
      changefreq = 'weekly'
    } else if (path === '/contact') {
      priority = 0.8
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
