/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [{ source: "/", destination: "/dashboard", permanent: true }];
  },
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: `http://${process.env.ANT_STING_API_URI}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
