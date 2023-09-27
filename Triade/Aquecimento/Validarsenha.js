function validarSenha(senha) {
    
    if (senha.length < 8) {
        return false;
    }
    
    if (!/[A-Z]/.test(senha)) {
        return false;
    }

    if (!/[a-z]/.test(senha)) {
        return false;
    }
    
    if (!/\d/.test(senha)) {
        return false;
    }
    
    return true;
}
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Digite sua senha: ', function (senha) {
    var senhaValida = validarSenha(senha);
    if (senhaValida) {
        console.log('Senha válida! 😃');
    }
    else {
        console.log('Senha inválida. Certifique-se de que ela tenha pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números.');
    }
    rl.close();
});
