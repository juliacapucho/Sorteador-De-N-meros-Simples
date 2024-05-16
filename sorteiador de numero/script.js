document.getElementById('generate-button').addEventListener('click', function() 

{// Gera um número aleatório entre 1 e 2000  
var randomNumber = Math.floor(Math.random() * 2000) + 1;

// Exibe o número gerado na página   
 
document.getElementById('number-display').textContent = randomNumber;});