console.log('-------------------------------------')
console.log('     Projeto Guiado I         ')
console.log('         Bem vindo!          ')
console.log('-------------------------------------')


//vamos instanciar, o nosso banco de dados

const livros = require('./database')

livros.sort((a, b) => a.paginas - b.paginas)
console.table(livros)

const entry = require('readline-sync');

const perguntaLivro = entry.question('Você quer ver os livros por gênero? {S/N} ').toLocaleLowerCase()
console.log(perguntaLivro)

if (perguntaLivro === 's') {
    console.log('ESCREVA COM LETRAS MINUSCULAS E SEM ACENTO OU Ç')
    console.log('Qual gênero você quer ler? {romance, drama, autoajuda, autobiografia, terror}.')

    const generoEscolhido = entry.question('Qual gênero você quer ver?').toLocaleLowerCase()
    console.log('Seguem os livros:')

    function selecionados(livros) {
        return livros.genero === generoEscolhido
        
    }
    const filtroLivros = livros.filter(selecionados)
    console.table(filtroLivros)



const livrosLidos = entry.question('Você quer ler minhas lista de desejos?{S/N}').toLocaleLowerCase()
console.log ('Minha lista de desejos no momento:')

if (livrosLidos === 's') {
    function livrosNaoLidos(livros) {
        return livros.lido === false 
        
    }
    const listaDesejos = livros.filter(livrosNaoLidos)
    console.table(listaDesejos)
}
}else {
    console.log('Obrigada pela visita!')
}
