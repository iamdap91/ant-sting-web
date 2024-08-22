/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [{ source: "/", destination: "/dashboard", permanent: true }];
  },
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "http://211.106.184.250:8080/api/:path*",
      },
    ];
  },
};

export default nextConfig;
