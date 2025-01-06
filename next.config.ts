import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    // Remove unsupported or invalid experimental options
    // If needed, use a canary version of Next.js and re-enable valid features
    // ppr: true, // Uncomment this only if using the latest Next.js canary version
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;

// Uncomment this block only if Sentry is set up in your project
// export default withSentryConfig(nextConfig, {
//   org: "js-mastery-dk",
//   project: "javascript-nextjs",
//   silent: !process.env.CI,
//   widenClientFileUpload: true,
//   reactComponentAnnotation: {
//     enabled: true,
//   },
//   hideSourceMaps: true,
//   disableLogger: true,
//   automaticVercelMonitors: true,
// });
