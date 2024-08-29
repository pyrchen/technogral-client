/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      // setting this will override the default for all environments.
      displayName: true,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      fileName: true,
      // Defaults to ["index"].
      meaninglessFileNames: ['index'],
      // Enabled by default.
      minify: true,
      // Enabled by default.
      transpileTemplateLiterals: true,
      // Enabled by default.
      cssProp: true,
    },
  },
};

export default nextConfig;
