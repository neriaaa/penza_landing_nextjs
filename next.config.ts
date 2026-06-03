/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Указываем имя твоего репозитория, чтобы не сломались стили
  basePath: '/penza_landing_nextjs',
};

export default nextConfig;