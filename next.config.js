/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals.push({
            "utf-8-validate": "commonjs utf-8-validate",
            bufferutil: "commonjs bufferutil"
        });

        return config;
    },
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "res.cloudinary.com",
            "danain-win.s3.ap-southeast-1.amazonaws.com",
            "media.licdn.com",
            "drive.google.com",
            "www.angin.id",
            "i.pinimg.com"
        ],
    },
}

module.exports = nextConfig;
