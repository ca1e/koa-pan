export const port = process.env.PORT || 3000

export const db = {
    DB_URL: 'mongodb://localhost:27017/cols',
    user: 'dbuser',
    pass: 'dbpass'
}

export const sec = {
    key: '<my secret appkey!>',
    iv: '<offset>'
}
