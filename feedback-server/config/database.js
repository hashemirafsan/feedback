module.exports = {
    process: "dev",
    type: "mongodb",
    database: {
        mongodb_dev: {
            host: "127.0.0.1:27017",
            database: "sj_innovation"
        },
        mongodb_prod: {
            user: "hashemirafsan",
            password: "01625903501RrR",
            host: "ds239903.mlab.com:39903",
            database: "sj_innovation"
        }
    }
}