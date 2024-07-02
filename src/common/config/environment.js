import * as dotenv from 'dotenv'
dotenv.config()

export const ENVIRONMENT = {
    APP: {
        NAME: process.env.APP_NAME,
        PORT: process.env.PORT || 3000,
        ENV: process.env.APP_ENV,
    },
    OPEN_WEATHER: {
        API_KEY: process.env.OPEN_WEATHER_API_KEY,
    },
}