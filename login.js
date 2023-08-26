const lukeLogin = () => {
    let array = [];
    for (let i = 0; i < 90000; i++) {
        array.push(i);
    }
    return "Bem vindo, Luke!";
}

const leiaLogin = () => {
    let array = [];
    for (let i = 0; i < 90000; i++) {
        array.push(i);
    }
    return "Bem vinda, Leia!";
}

console.log(lukeLogin());
console.log(leiaLogin());