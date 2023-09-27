function ValidarSenha(senha) {
    var requisitos = "1,2,3,@";
    return requisitos;
}
var senha = "Batat@";
var senhaValida = ValidarSenha(senha);
if (senhaValida && senha.length > 7) {
    console.log("Ta top paezão");
}
else {
    console.log("Nah ah ta wrong, vai ve os criterios mulinha.");
}
