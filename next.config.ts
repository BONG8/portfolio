import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "export",
  // Required for GitHub Pages as it doesn't support Next.js default image optimization
  images: {
    unoptimized: true,
  },
};

// Explicitly specify the path to your i18n request configuration
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
