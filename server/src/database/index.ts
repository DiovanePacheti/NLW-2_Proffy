import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'sqlite3',
  connection:{
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true
});

export default db;













/*
const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '123',
      database : 'postgres'
    }
  });
*/
 // export default db;