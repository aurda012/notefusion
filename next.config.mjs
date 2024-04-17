/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fpmedzgdkvaxrhtfjqey.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
