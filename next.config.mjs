/** @type {import('next').NextConfig} */
const nextConfig = {env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_API_OPENAI_KEY: process.env.NEXT_PUBLIC_API_OPENAI_KEY,
  },};

export default nextConfig;
