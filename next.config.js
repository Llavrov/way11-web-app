require('dotenv').config()
const withImages = require('next-images'); // Для обработки изображений

module.exports = withImages({
    env: {
        TG_BOT_API_KEY: process.env.TG_BOT_API_KEY,
        TG_BOT_USER: process.env.TG_BOT_USER,
    },
    images: {
        domains: ['www.w3.org'],
    },
});
