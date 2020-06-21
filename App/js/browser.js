/*
	MythDeck - design.js
	Por mitosan/mscore/misto_quente
	Help me - please
*/

function browser_GO(){
	var url = document.getElementById("brUrl").value;
	if (url === ''){
		alert("Insira uma URL antes de acessar");
	} else {
		browser_hide();
		document.getElementById('brow').src = url;
	}
}

function browser_Rel(){
	var url = document.getElementById('brow')
	if (url.src === ""){
		console.log("algo está errado!");
	} else {
		var a = url.src;
		url.src = "about:blank";
		url.src = a;
	}
}

function browser_reveal(){
	document.getElementById("brUrl").type = "text";
}

function browser_hide(){
	document.getElementById("brUrl").type = "password";
}

function stopUpdateBrowser() {
	clearInterval(updateBrowser);
}

function startUpdateBrowser() {
	var url = document.getElementById("brow").src;
	if (url !== "" && url !== location.href){
		updateBrowser = setInterval(function(){
			browser_Rel();
		}, 5000)
	} else {
		console.log("Essa ação não pode ser executada");
	}
}

function browser_sair(){
	stopUpdateBrowser();
	animSettings(8);
}