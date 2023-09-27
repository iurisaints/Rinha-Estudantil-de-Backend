function calcularIdade(anoNascimento) {
    var anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}
function main() {
    var anoNascimento = 2003; 
    var idade = calcularIdade(anoNascimento);
    console.log("Sua idade atual \u00E9 ".concat(idade, " anos."));
}
main();
