const {mySqlConnect: db} = require('../config/db')
const table = 'rc'

export const all = () => {
    return db.select('*').from(table).then((data) => data).finally(() => db.destroy())
}

export const count = (active = true) => {
    const model =  db.count({count: 'id'}).from(table)

    if (active) {
        model.whereNull('deleted_at')
    }

    return model.then((data) => data)
}