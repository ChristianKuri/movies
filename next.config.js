/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
    loader: "custom",
    path: "/"
  }
}
