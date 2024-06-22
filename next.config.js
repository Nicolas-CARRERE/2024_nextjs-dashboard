/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  env: {
    POSTGRES_URL: process.env.POSTGRES_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_URL: process.env.AUTH_URL,
  },
};