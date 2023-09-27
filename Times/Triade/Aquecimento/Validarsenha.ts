function validarSenha(senha: string): boolean {
    // Verificar se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
      return false;
    }
  
    // Verificar se a senha contém pelo menos uma letra maiúscula
    if (!/[A-Z]/.test(senha)) {
      return false;
    }
  
    // Verificar se a senha contém pelo menos uma letra minúscula
    if (!/[a-z]/.test(senha)) {
      return false;
    }
  
    // Verificar se a senha contém pelo menos um número
    if (!/\d/.test(senha)) {
      return false;
    }
  
    // Se todas as verificações passarem, a senha é válida
    return true;
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Digite sua senha: ', (senha) => {
    const senhaValida = validarSenha(senha);
    if (senhaValida) {
      console.log('Senha válida! 😃');
    } else {
      console.log('Senha inválida. Certifique-se de que ela tenha pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números.');
    }
  
    rl.close();
  });