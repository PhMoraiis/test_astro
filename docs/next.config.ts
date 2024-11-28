import type { NextConfig } from "next";
import nextra from 'nextra'

const nextConfig: NextConfig = {
	/* config options here */
	basePath: "/test_astro/docs",
	assetPrefix: "https://phmoraiis.github.io",
};

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

export default withNextra(nextConfig)
