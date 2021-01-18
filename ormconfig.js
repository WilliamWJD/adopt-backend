module.exports={
  "name":"default",
  "type":"postgres",
  "host":'localhost',
  "port":5432,
  "username":"postgres",
  "password":"docker",
  "database":"adopt-db",
  "entities":[
    "./src/modules/**/infra/typeorm/entities/*.ts"
  ],
  "migrations": [
    "./src/shared/infra/typeorm/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}