	let modelo = document.querySelector('.modelo');
	let modelos;
	let quadradinhos = document.querySelector('.quadradinhos');
	let size;
	let typedLetter = document.querySelector('.typed-letter');
	let play = document.querySelector('.play');
	let palavra;
	let hintButton = document.querySelector('.hint-button button');
	let novaPalavra = document.querySelector('.new-word--button button');
	let ajuda = document.querySelector('.help--button button');
	let restart = document.querySelector('.restart--button button');
	let instructions = document.querySelector('.Instruction-button button');
	let vitorias = 0;
	let ajudas = 0;
	function proximaRodada(){
	palavra = Math.floor(Math.random() * (palavras.length - 1));
	size = palavras[palavra].length;
	for(let i = 0; i < size; i++){
	let clone = document.createElement("div");
	clone.classList.add('modelo', 'mystyle');
	quadradinhos.appendChild(clone);
	}
	modelos = document.querySelectorAll('.mystyle');
	}
	proximaRodada();
	function comecarJogo(){
	let acertos = 0;
	let j = 0;
	while(j < palavras[palavra].length){
		if(palavras[palavra][j] == typedLetter.value.toLowerCase()){
		modelos[j].innerHTML = typedLetter.value.toUpperCase();
		}
		if(modelos[j].innerHTML !== ''){
		acertos++;
		if(acertos == palavras[palavra].length){
			vitorias++;
			quadradinhos.innerHTML = '';
			proximaRodada();
			}
		}
		if(vitorias == 3){
			alert("3 jogos vencidos!\nGanhe mais 3!");
			vitorias = 0;
		}
			j++;
	}
	typedLetter.value = '';
	typedLetter.focus();
	}
	play.addEventListener('click', comecarJogo);
	hintButton.addEventListener('click',()=>{
		alert('Aqui teremos dicas sobre a palavra!');
	});
	novaPalavra.addEventListener('click',(e)=>{
		if(ajudas >= 2){
			e.target.setAttribute('disabled','disabled');
			ajuda.setAttribute('disabled','disabled');
		}else{
			quadradinhos.innerHTML = '';
			proximaRodada();
		}
		ajudas++;
	});
	ajuda.addEventListener('click',(e)=>{
		ajudas++;
		if(ajudas >= 2){
			e.target.setAttribute('disabled','disabled');
			novaPalavra.setAttribute('disabled','disabled');
		}else{
			for(let i = 0; i < palavras[palavra].length; i+=2){
				modelos[i].innerHTML = palavras[palavra][i].toUpperCase();
			}
		}
	});
	restart.addEventListener('click',()=>{
		vitorias = 0;
		ajudas = 0;
		ajuda.removeAttribute('disabled');
		novaPalavra.removeAttribute('disabled');
		quadradinhos.innerHTML = '';
		proximaRodada();
		comecarJogo();
	});
	instructions.addEventListener('click',()=>{
		alert('Aqui teremos instruções do jogo!');
	});
	typedLetter.addEventListener('keyup',(e)=>{
	if(e.keyCode == 13 && typedLetter.value.length > 0){
	comecarJogo();
	}
	});