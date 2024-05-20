# Encontrar Palavras em Parágrafos

Este é um script JavaScript para encontrar palavras específicas em parágrafos de uma página da web.

## Instalação

Para usar este script, basta incluí-lo no código HTML da sua página da seguinte maneira:

```html
<script src="encontrarPalavras.js"></script>

## Uso

Depois de incluir o script na sua página, você pode usar a função encontrarPalavras(paragrafos, palavras) para encontrar palavras em parágrafos. Veja um exemplo de uso:

const palavras = [
    "abus","acident","acusa","adult","aglomerac","agred","agress","agrid","agu","ai",
    // Adicione as palavras que deseja encontrar aqui
];

const paragrafos = document.querySelectorAll('p');
const resultados = [];

paragrafos.forEach(paragrafo => {
  const resultado = encontrarPalavras(paragrafo, palavras);
  if (resultado.contagem > 0) {
    resultados.push(resultado);
  }
});

console.log(resultados);


Certifique-se de ter um arquivo `encontrarPalavras.js` na mesma pasta do README.md ou ajuste o caminho do script conforme necessário.
