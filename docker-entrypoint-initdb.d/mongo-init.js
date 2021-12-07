db = new Mongo().getDB('crud_nestjs');

db.createCollection('users', { capped: false });
