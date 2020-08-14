import Knex from "knex";

export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table =>{
        table.increments('id').primary();

        table.integer('week_day').notNullable(); //Vai armazenar o dia da semana de domingo a sabado
        table.integer('from').notNullable(); // Vai armazenar o horario que o profissional começa a trabalhar
        table.integer('to').notNullable(); //Vai armazenar o horario que o profissional termina de atender

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
}


export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule');
}
