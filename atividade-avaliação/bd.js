const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./node-scripts/database/DB_ALUNO_DISCIPLINA.db', (error) => {
    if (error) console.log(error);
});

db.serialize(() => {
    db.run('create table "alunos" ( "cd_aluno"	integer unique, "nm_alun0"	text not null, primary key("cd_aluno"))', (error) => {
        if (error) console.log(error);
    });
});

db.serialize(() => {
    db.run('create table "disciplinas" ( "cd_di"	integer unique, "nm_di"	text, primary key("cd_di"))', (error) => {
        if (error) console.log(error);
    });
});

db.serialize(() => {
    db.run('create table "aluno_disciplina" ("periodo"	integer, "nota"	real, "cd_aluno"	integer, "cd_di"	integer, primary key("cd_aluno","cd_di"), foreign key("cd_aluno") references "alunos"("cd_aluno"), foreign key("cd_di") references "disciplinas"("cd_di"))', (error) => {
        if (error) console.log(error);
    });
});
