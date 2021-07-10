const path = require('path')

require('dotenv').config({ path: path.resolve(process.cwd(), 'render_server/.env') })

module.exports = {
    isDev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 8000,
    apiUrl: `http://localhost:3000`,
    apiKeyToken: process.env.PUBLIC_API_KEY_TOKEN
}
