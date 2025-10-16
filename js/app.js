let soma = 0;
function adicionar (){
	let produtoEscolhido = document.getElementById('produto').value;
	let quantidadeProduto = document.getElementById('quantidade').value;
	let quantidade = parseInt(quantidadeProduto);
	let valor = parseFloat(produtoEscolhido.match(/\d/g).join(''));
	soma = somaValorDeProdutosAdicionados(valor * quantidade);
	alteraListaDeProdutos(produtoEscolhido, quantidadeProduto, soma);
	console.log(soma);
	
	
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
	let valorTotal = document.getElementById('valor-total');
	console.log(soma);
	valorTotal.textContent = `R$${soma}`;
	//let novoProduto = document.getElementById();
}