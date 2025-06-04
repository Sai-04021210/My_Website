import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  experimental: {
    mdxRs: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to install it
    // remarkPlugins: [],
    // rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line. Note that your
    // MDXProvider components must be present in this file (or imported here).
    // providerImportSource: "@mdx-js/react",
  },
});

// Merge MDX MJS Next.js config with your Next.js config
export default withMDX(nextConfig);
