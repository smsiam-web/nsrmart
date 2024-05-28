/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "lh3.googleusercontent.com"],
  },
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  env: {
    FIREBASE_API_KEY: "AIzaSyCunsjEfqUhjQUyNOF_USNqPGS_Lj-SY88",
    FIREBASE_AUTH_DOMAIN: "nsrmart-959f4.firebaseapp.com",
    FIREBASE_PROJECT_ID: "nsrmart-959f4",
    FIREBASE_STORAGE_BUCKET: "nsrmart-959f4.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "691161732373",
    FIREBASE_APP_ID: "1:691161732373:web:6d342416a3a3201b13451c",
    FIREBASE_MEASUREMENT_ID: "G-PSQMFYBVBJ",
  },
};

module.exports = nextConfig;
