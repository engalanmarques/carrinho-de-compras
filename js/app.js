let soma = 0;
function adicionar (){
	let produtoEscolhido = document.getElementById('produto').value;
	let quantidadeProduto = document.getElementById('quantidade').value;
	let quantidade = parseInt(quantidadeProduto);
	let valor = parseFloat(produtoEscolhido.match(/\d/g).join(''));
	soma = somaValorDeProdutosAdicionados(valor * quantidade);
	alteraListaDeProdutos(produtoEscolhido, quantidadeProduto, soma);	
}

function limpar (){
	let
}

function somaValorDeProdutosAdicionados(valor){
	let produtoInicial = document.getElementById('valor-total');
	let valorInicial = parseFloat(produtoInicial.textContent.match(/\d/g).join(''));
	let novaSoma = valorInicial + valor;
	return novaSoma;
	
}
function alteraListaDeProdutos(produto, quantidade, soma){
	let textoSeparado = produto.split('-');
	let nomeProduto = textoSeparado[0];
	let valor = textoSeparado[1]
	let valorTotal = document.getElementById('valor-total');
	valorTotal.textContent = `R$${soma}`;
	let listaProduto = document.getElementById('lista-produtos');
	let produtoNovo = listaProduto.querySelector('.carrinho__produtos__produto');
	produtoNovo.innerHTML += `<br> <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${valor}</span>`
	console.log(produtoNovo);
}