import sqlite3 from 'sqlite3';

const sql = sqlite3.verbose();

const db = new sql.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

export default db;