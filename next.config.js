/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "secret",
    secondSecret: process.env.AZURE_STORAGE_CONNECTION_STRING, // Pass through env variables
  },
};

module.exports = nextConfig;
