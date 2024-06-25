/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.pinimg.com",
      "uploads.mangadex.org",
      "cmdxd98sb0x3yprd.mangadex.network",
      "localhost",
      "noonu-57jgcrfry-angelos-projects-45570967.vercel.app",
      "noonu-57jgcrfry-angelos-projects-45570967",
    ],
  },
  //   async rewrites() {
  //     return [
  //       {
  //         source: "/api/manga/:path*",
  //         destination: "https://api.mangadex.org/:path*",
  //       },
  //       {
  //         source: "/api/manga/cover-art/:path*",
  //         destination: "https://uploads.mangadex.org/covers/:path*",
  //       },
  //     ];
  //   },
};

export default nextConfig;
