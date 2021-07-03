const livros = require('./database');


const readline = require('readline-sync');

var entrada1 = readline.question('Deseja buscar um lirvo? S/N');

switch (entrada1.toLocaleLowerCase()){
    case 's':
        console.log("Essas sao as categorias: ")
        console.log('Produtividade e estilo de vida', '/Historia brasileira', '/Americas', '/Tecnologia', '/Estilo de vida');

        const entradaCategoria = readline.question('QUal categoria você escolhe:')
        const retorno = livros.filter( livro => livro.categoria === entradaCategoria);

        console.table(retorno)
        break;
    case 'n':
        console.log("Esses são todos os livros disponiveis:")
        const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas);
        console.table(livrosOrdenados);
        break;
    default:
        break;

};