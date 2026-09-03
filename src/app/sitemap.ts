import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.design1123.com';

  const parties = [
    "bjp-election-banner",
    "congress-election-banner",
    "shiv-sena-banner",
    "shiv-sena-ubt-banner",
    "ncp-election-banner",
    "sharad-pawar-banner",
    "mns-election-banner",
    "aap-election-banner",
    "bsp-election-banner",
    "samajwadi-party-banner",
    "apna-dal-banner"
  ];

  const partyRoutes = parties.map((party) => ({
    url: `${baseUrl}/political-banner/${party}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/political-banner`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/business-banners`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...partyRoutes,
  ]
}
