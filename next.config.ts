import type { NextConfig } from "next";
import nextra from 'nextra'

const nextConfig: NextConfig = {
	/* config options here */
	basePath: "/test_astro",
	assetPrefix: "/test_astro/",
};

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

export default withNextra(nextConfig)
