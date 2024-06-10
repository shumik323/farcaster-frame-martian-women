/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/martianwomen',
        destination: 'https://t.me/cryptodudeess',
        permanent: false
      },
    ]
  }
};

export default nextConfig;
