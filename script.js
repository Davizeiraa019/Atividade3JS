// 1. O Porteiro Virtual (Usando +prompt e if)
// Objetivo: Transformar a entrada do usuário em número para realizar uma validação de idade.
// Crie uma variável chamada idadeUsuario e use o +prompt("Qual é a sua idade?") para capturar a resposta já convertida para número.
// Crie uma estrutura if para verificar se a idade é maior ou igual (>=) a 18.
// Se for verdadeiro, exiba no console: "Acesso liberado! Divirta-se."
// Se NÃO for verdadeiro, exibir: "Acesso negado. Você é menor de idade." caso a condição seja falsa.

const idadeUsuario = Number(prompt('Qual a sua idade?'));

if (idadeUsuario >= 18) {
    console.log('Acesso liberado! Divirta-se');
}

else {
    console.log("Aceso negado");
}


// 2. Sistema de Login Secreto (Usando prompt normal)
// Objetivo: Mostrar que nem sempre queremos converter para número. Senhas e textos precisam continuar como Strings.
// Crie uma variável const senhaCorreta com o valor "front123".
// Crie uma variável senhaDigitada e use apenas prompt("Digite a senha de acesso:") (sem o sinal de +, pois a senha contém letras).
// Use um if para verificar se a senhaDigitada é estritamente igual (===) à senhaCorreta.
// Se for igual, imprima "Login efetuado com sucesso!".
// Se NÃO for igual, imprima "Senha incorreta. Tente novamente."

const senhaCorreta = 'front123';
const senhaDigitada = prompt('Digite a senha de acesso:');
if (senhaDigitada === senhaCorreta) {
    console.log('Login efetuado com sucesso');
}
else {
    console.log('Senha incorreta');
}



// 3. A Loja com Desconto Surpresa (Lógica de estado)
// Objetivo: Usar o if não apenas para exibir mensagens, mas para modificar o valor de uma variável em tempo de execução.
// Peça para o usuário digitar o valor total da compra usando: let valorCompra = +prompt("Digite o valor da compra:"). Lembre-se de usar let porque o valor pode mudar!
// Crie um if que verifique se o valor da compra é maior que 100 (> 100).
// Dentro do bloco do if, dê um desconto de 10 reais. (Dica: valorCompra = valorCompra - 10).
// Fora do if, dê um console.log mostrando o valor final que o cliente deve pagar (ex: "O total a pagar é: " + valorCompra).
// Explicação para a turma: Se o cliente digitar 50, o if é ignorado e ele paga 50. Se digitar 150, o if entra em ação e altera o valor para 140 antes do console.log final!

let valorCompra = +prompt("Digite o valor da compra:");
if (valorCompra >= 100){
    valorCompra = valorCompra - 10;
} 
console.log('O valor total da compra será', valorCompra);
