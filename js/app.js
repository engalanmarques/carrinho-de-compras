function adicionar (){
	let produtoEscolhido = document.getElementById('produto').value;
	let quantidadeProduto = document.getElementById('quantidade').value;
	let valor = parseFloat(produtoEscolhido.match(/\d/g).join(''));
	somaValorDeProdutosAdicionados(valor);
	
	
}

function limpar (){
	let
}

function somaValorDeProdutosAdicionados(valor){
	let produtoInicial = document.getElementById('valor-total');
	let valorInicial = parseFloat(produtoInicial.textContent.match(/\d/g).join(''));
	
	
}