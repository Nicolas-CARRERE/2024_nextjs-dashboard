/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  env: {
    POSTGRES_URL: process.env.POSTGRES_URL,
  },
};