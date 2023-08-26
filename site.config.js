const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Junha Jang",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "고등학교 1학년 (만 16세)",
    bio: "창업을 준비하고 있어요.",
    email: "me@junha.me",
    linkedin: "wkdd",
    github: "jjhox",
    instagram: "wkdd",
  },
  projects: [
    {
      name: `TJIS`,
      href: "https://tj.is",
    },
  ],
  // blog setting (required)
  blog: {
    title: "JunhaME",
    description: "장준하의 개발, 일상 블로그입니다.",
  },

  // CONFIG configration (required)
  link: "https://www.junha.me",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "30dda9da-3933-4248-9211-b37994f2f8eb", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
