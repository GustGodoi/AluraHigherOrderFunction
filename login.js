// const lukeLogin = () => {
//     let array = [];
//     for (let i = 0; i < 90000; i++) {
//         array.push(i);
//     }
//     return "Bem vindo, Luke!";
// }

// const leiaLogin = () => {
//     let array = [];
//     for (let i = 0; i < 90000; i++) {
//         array.push(i);
//     }
//     return "Bem vinda, Leia!";
// }

// console.log(lukeLogin());
// console.log(leiaLogin());

// As duas funcões acima efetuam a mesma coisa, isso é uma repetição desnecessária.
// Para corrigir a repetição, podemos fazer da seguinte forma:
// const usuarioLogin = (pessoa) => {
//     let array = [];
//     for (let i = 0; i < 90000; i++) {
//         array.push(i);
//     }
//     return `${pessoa} logou com sucesso no sistema.`
// }

// console.log(usuarioLogin("Luke"));

// O código acima utiliza a mesma função para "logar" a pessoa e também printar o
// resultado. Devemos melhorar isso, fracionando mais o código, distribuindo melhor 
// as funções. Daí vem a ideia do HIGHER ORDER FUNCTION, onde se compõem funções para
// separar tarefas diferentes. O mesmo código fica da seguinte forma:
// const acesso = (nome) => {
//     return `${nome} logou com sucesso no sistema.`
// }

// const usuarioLogin = (nome) => {
//     let array = [];
//     for (let i = 0; i < 90000; i++) {
//         array.push(i);
//     }
//     return acesso(nome);
// }

// console.log(usuarioLogin("Luke"));

// Exemplo 2:
// const acesso = (nome) => {
//     return `${nome} logou com sucesso no sistema.`
// }

// const usuarioLogin = (nome) => {
//     let array = [];
//     for (let i = 0; i < 90000; i++) {
//         array.push(i);
//     }
//     return acesso(nome);
// }

// const diretoriaLogin = (nome) => {
//     let array = [];
//     for (let i = 0; i < 90000; i++) {
//         array.push(i);
//     }
//     return acesso(nome);
// }

// console.log(diretoriaLogin("Leia"));

// Exemplo 3
const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
}

const autentica = (cargo) => {
    let array = [];
    for (let i = 0; i < cargo; i++) {
        array.push(i);
    }
    return true;
}

const login = (pessoa, autentica) => {
    if (pessoa.cargo === `funcionário`) {
        autentica(90000)
    } else if (pessoa.cargo === `diretoria`) {
        autentica(900000)
    }
    return acesso(pessoa.nome)
}

console.log(login({cargo: `diretoria`, nome: `Leia`}, autentica))

// O código acima exemplifica o conceito de HIGHER ORDER bem, sendo a função "login" de 
// maior importância, ela utiliza outras funções de menor importância, que devem ser
// criadas anteriormente. Funções no JS podem receber objetos como parâmetro, assim 
// também como outras funções.
