/*
	MythDeck - design.js
	Por mitosan/mscore/misto_quente
	Help me - please
*/
function loadKeysConfigFile(caminho){
	var rawd = fs.readFileSync(caminho);
	try {
		decr = JSON.parse(atob(rawd));
		var neime = getFileName(caminho);
		var time = decr["tempo"];
		$keyTrack1 = decr['keys'][0]
		$keyTrack2 = decr['keys'][1]
		$keyTrack3 = decr['keys'][2]
		$keyTrack4 = decr['keys'][3]
		$keyTrack5 = decr['keys'][4]
		$keyTrack6 = decr['keys'][5]
		$keyTrack7 = decr['keys'][6]
		$keyPause = decr['keys'][7]
		$keyTogglePlaylist = decr['keys'][8]
		$keyEnableVolumeTrack = decr['keys'][9]
		$keyMutePlayer = decr['keys'][10]
		$keySeekForward = decr['keys'][11]
		$keySeekBackward = decr['keys'][12]
		$keyTrans1 = decr['keys'][13]
		$keyTrans2 = decr['keys'][14]
		$keyTrans3 = decr['keys'][15]
		$keyTrans4 = decr['keys'][16]
		$keyTrans5 = decr['keys'][17]
		$keyStopTrans = decr['keys'][18]
		$keyMuteTrans = decr['keys'][19]
		$keyShowTrans = decr['keys'][20]
		$keyHideTrans = decr['keys'][21]
		$keyVolUp = decr['keys'][22]
		$keyVolDown = decr['keys'][23]
		$keyFadeMasterIn = decr['keys'][24]
		$keyFadeMasterOut = decr['keys'][25]
		$keyApplyFadeIn = decr['keys'][26]
		$keyApplyFadeOut = decr['keys'][27]
		$keySpeedUp = decr['keys'][28]
		$keySpeedDown = decr['keys'][29]
		$keyResetSpeed = decr['keys'][30]
		$keyLoad = decr['keys'][31]
		$keySave = decr['keys'][32]
		$keyReload = decr['keys'][33]
		$keyNextSet = decr['keys'][34]
		$keyPreviousSet = decr['keys'][35]
		$keyApplyVolTrack = decr['keys'][36]
		$(lblPlayTrack1).html(String.fromCharCode(decr['keys'][0]).toUpperCase().replace(' ', 'Espaço'));
		$(lblPlayTrack2).html(String.fromCharCode(decr['keys'][1]).toUpperCase().replace(' ', 'Espaço'));
		$(lblPlayTrack3).html(String.fromCharCode(decr['keys'][2]).toUpperCase().replace(' ', 'Espaço'));
		$(lblPlayTrack4).html(String.fromCharCode(decr['keys'][3]).toUpperCase().replace(' ', 'Espaço'));
		$(lblPlayTrack5).html(String.fromCharCode(decr['keys'][4]).toUpperCase().replace(' ', 'Espaço'));
		$(lblPlayTrack6).html(String.fromCharCode(decr['keys'][5]).toUpperCase().replace(' ', 'Espaço'));
		$(lblPlayTrack7).html(String.fromCharCode(decr['keys'][6]).toUpperCase().replace(' ', 'Espaço'));
		$(lblPauseTrack).html(String.fromCharCode(decr['keys'][7]).toUpperCase().replace(' ', 'Espaço'));
		$(lblPlaylistMode).html(String.fromCharCode(decr['keys'][8]).toUpperCase().replace(' ', 'Espaço'));
		$(lblEnableVolumeTrack).html(String.fromCharCode(decr['keys'][9]).toUpperCase().replace(' ', 'Espaço'));
		$(lblMutePlayer).html(String.fromCharCode(decr['keys'][10]).toUpperCase().replace(' ', 'Espaço'));
		$(lblSeekForward).html(String.fromCharCode(decr['keys'][11]).toUpperCase().replace(' ', 'Espaço'));
		$(lblSeekBackwards).html(String.fromCharCode(decr['keys'][12]).toUpperCase().replace(' ', 'Espaço'));
		$(lblPlayTrans1).html(String.fromCharCode(decr['keys'][13]).toUpperCase().replace(' ', 'Espaço'));
		$(lblPlayTrans2).html(String.fromCharCode(decr['keys'][14]).toUpperCase().replace(' ', 'Espaço'));
		$(lblPlayTrans3).html(String.fromCharCode(decr['keys'][15]).toUpperCase().replace(' ', 'Espaço'));
		$(lblPlayTrans4).html(String.fromCharCode(decr['keys'][16]).toUpperCase().replace(' ', 'Espaço'));
		$(lblPlayTrans5).html(String.fromCharCode(decr['keys'][17]).toUpperCase().replace(' ', 'Espaço'));
		$(lblStopTrans).html(String.fromCharCode(decr['keys'][18]).toUpperCase().replace(' ', 'Espaço'));
		$(lblMuteTrans).html(String.fromCharCode(decr['keys'][19]).toUpperCase().replace(' ', 'Espaço'));
		$(lblShowTrans).html(String.fromCharCode(decr['keys'][20]).toUpperCase().replace(' ', 'Espaço'));
		$(lblHideTrans).html(String.fromCharCode(decr['keys'][21]).toUpperCase().replace(' ', 'Espaço'));
		$(lblVolUp).html(String.fromCharCode(decr['keys'][22]).toUpperCase().replace(' ', 'Espaço'));
		$(lblVolDown).html(String.fromCharCode(decr['keys'][23]).toUpperCase().replace(' ', 'Espaço'));
		$(lblFadeMasterIn).html(String.fromCharCode(decr['keys'][24]).toUpperCase().replace(' ', 'Espaço'));
		$(lblFadeMasterOut).html(String.fromCharCode(decr['keys'][25]).toUpperCase().replace(' ', 'Espaço'));
		$(lblApplyFadeIn).html(String.fromCharCode(decr['keys'][26]).toUpperCase().replace(' ', 'Espaço'));
		$(lblApplyFadeOut).html(String.fromCharCode(decr['keys'][27]).toUpperCase().replace(' ', 'Espaço'));
		$(lblSpeedUp).html(String.fromCharCode(decr['keys'][28]).toUpperCase().replace(' ', 'Espaço'));
		$(lblSpeedDown).html(String.fromCharCode(decr['keys'][29]).toUpperCase().replace(' ', 'Espaço'));
		$(lblResetSpeed).html(String.fromCharCode(decr['keys'][30]).toUpperCase().replace(' ', 'Espaço'));
		$(lblLoadConfigs).html(String.fromCharCode(decr['keys'][31]).toUpperCase().replace(' ', 'Espaço'));
		$(lblSaveConfigs).html(String.fromCharCode(decr['keys'][32]).toUpperCase().replace(' ', 'Espaço'));
		$(lblReboot).html(String.fromCharCode(decr['keys'][33]).toUpperCase().replace(' ', 'Espaço'));
		$(lblNextSet).html(String.fromCharCode(decr['keys'][34]).toUpperCase().replace(' ', 'Espaço'));
		$(lblPreviousSet).html(String.fromCharCode(decr['keys'][35]).toUpperCase().replace(' ', 'Espaço'));
		alert('Configurações carregadas com sucesso! \n\nNome: ' + neime + '\nData de criação: ' + time + '\nCaminho: ' + caminho);
		$('#loadKeysConfigFile').val(null);
	}
	catch(e){
		document.title = 'Erro!';
		if (DEBUG === true){
			console.error('Erro ao carregar configs!\n\n' + e);
		}
		alert('Erro ao carregar configurações de teclado!\n\n' + e);
	}
}
function generateKeysConfigFile(){
	var ask = prompt("Insira o nome do arquivo a ser salvo", "Configs de teclado");
	if (ask != null){
		var horaGerada = getTime(2);
		var settingsContents = {
			"keys": [
				$keyTrack1,
				$keyTrack2,
				$keyTrack3,
				$keyTrack4,
				$keyTrack5,
				$keyTrack6,
				$keyTrack7,
				$keyPause,
				$keyTogglePlaylist,
				$keyEnableVolumeTrack,
				$keyMutePlayer,
				$keySeekForward,
				$keySeekBackward,
				$keyTrans1,
				$keyTrans2,
				$keyTrans3,
				$keyTrans4,
				$keyTrans5,
				$keyStopTrans,
				$keyMuteTrans,
				$keyShowTrans,
				$keyHideTrans,
				$keyVolUp,
				$keyVolDown,
				$keyFadeMasterIn,
				$keyFadeMasterOut,
				$keyApplyFadeIn,
				$keyApplyFadeOut,
				$keySpeedUp,
				$keySpeedDown,
				$keyResetSpeed,
				$keyLoad,
				$keySave,
				$keyReload,
				$keyNextSet,
				$keyPreviousSet,
				$keyApplyVolTrack
			],
			"tempo": horaGerada
		}
		var raw = JSON.stringify(settingsContents);
		fs.writeFile("Sets/" + ask + ".mdkeys", btoa(raw), function(error){
			if (error){
				if (DEBUG === true){
					console.error("Erro ao gerar arquivo de configurações (teclas): " + error);
				}
			} else {
				if (DEBUG === true){
					console.info("Save Arquivo: " + ask + ".mdkeys - Save OK!");
				}
				showNotify("Sucesso!", "Seu arquivo foi gerado com exito! \n\nNome: " + ask + "\nData de Criação: " + horaGerada + "\nCaminho: Sets/" + ask + ".mdkeys", 4000);
			}
		});
	}	
}

function getKey(idDessaMerda){
	$(btnSetKeyReset).css({display: "none"});
	$(btnSaveKeysCfg).css({display: "none"});
	$(btnLoadKeysCfg).css({display: "none"});
	$(btnSetKeyBack).css({display: "none"});
	$(keyHolder).slideUp(100);
	$(keyWaitLBL).css({display: "inline"});
	$(keyHolder).fadeOut(90);
	$(keySetttingsTitle).html("Pressione Alguma Tecla");
	$(keyConfigs).animate({width: "27%", height: "62px"}, 120);
	seeking = true;
	$(this).on('keypress', function(event) {
		if (event.keyCode){
			seeking = false;
			grabKey = event.keyCode;
			if (DEBUG === true){
				console.log('Event Keycode: ' + grabKey + ' - Letra: ' + event.key + ' - ID: ' + idDessaMerda);
			}
			setKey(idDessaMerda, event.keyCode, event.key);
			$(this).off('keypress');
			event.keyCode = null;
		}
	});
}

function setKey(key, value, letra){
	$(this).off('keypress');
	if (letra === ' '){
		letra = 'Espaço';
	}
	//
	//	Tracks
	//
	if (key === 1){ // Play Track 1
		$keyTrack1 = value;
		document.getElementById('lblPlayTrack1').innerText = letra.toUpperCase();
	}
	if (key === 2){ // Play Track 2
		$keyTrack2 = value;
		document.getElementById('lblPlayTrack2').innerText = letra.toUpperCase();
	}
	if (key === 3){ // Play Track 3
		$keyTrack3 = value;
		document.getElementById('lblPlayTrack3').innerText = letra.toUpperCase();
	}
	if (key === 4){ // Play Track 4
		$keyTrack4 = value;
		document.getElementById('lblPlayTrack4').innerText = letra.toUpperCase();
	}
	if (key === 5){ // Play Track 5
		$keyTrack5 = value;
		document.getElementById('lblPlayTrack5').innerText = letra.toUpperCase();
	}
	if (key === 6){ // Play Track 6
		$keyTrack6 = value;
		document.getElementById('lblPlayTrack6').innerText = letra.toUpperCase();
	}
	if (key === 7){ // Play Track 7
		$keyTrack7 = value;
		document.getElementById('lblPlayTrack7').innerText = letra.toUpperCase();
	}
	//
	//	Transições
	//
	if (key === 8){ // Play Trans 1
		$keyTrans1 = value;
		document.getElementById('lblPlayTrans1').innerText = letra.toUpperCase();
	}
	if (key === 9){ // Play Trans 2
		$keyTrans2 = value;
		document.getElementById('lblPlayTrans2').innerText = letra.toUpperCase();
	}
	if (key === 10){ // Play Trans 3
		$keyTrans3 = value;
		document.getElementById('lblPlayTrans3').innerText = letra.toUpperCase();
	}
	if (key === 11){ // Play Trans 4
		$keyTrans4 = value;
		document.getElementById('lblPlayTrans4').innerText = letra.toUpperCase();
	}
	if (key === 12){ // Play Trans 5
		$keyTrans5 = value;
		document.getElementById('lblPlayTrans5').innerText = letra.toUpperCase();
	}
	//
	//	Player
	//
	if (key === 13){ // Pausar Player
		$keyPause = value;
		document.getElementById('lblPauseTrack').innerText = letra.toUpperCase();
	}
	if (key === 14){ // Parar Transição
		$keyStopTrans = value;
		document.getElementById('lblStopTrans').innerText = letra.toUpperCase();
	}
	if (key === 15){ // Aumentar Volume
		$keyVolUp = value;
		document.getElementById('lblVolUp').innerText = letra.toUpperCase();
	}
	if (key === 16){ // Diminuir Volume
		$keyVolDown = value;
		document.getElementById('lblVolDown').innerText = letra.toUpperCase();
	}
	if (key === 17){ // Playlist Mode
		$keyTogglePlaylist = value;
		document.getElementById('lblPlaylistMode').innerText = letra.toUpperCase();
	}
	if (key === 18){ // Avançar tempo na track
		$keySeekForward = value;
		document.getElementById('lblSeekForward').innerText = letra.toUpperCase();
	}
	if (key === 19){ // Voltar tempo na track
		$keySeekBackward = value;
		document.getElementById('lblSeekBackwards').innerText = letra.toUpperCase();
	}
	if (key === 20){ // Mutar Player
		$keyMutePlayer = value;
		document.getElementById('lblMutePlayer').innerText = letra.toUpperCase();
	}
	if (key === 21){ // Mutar Transição
		$keyMuteTrans = value;
		document.getElementById('lblMuteTrans').innerText = letra.toUpperCase();
	}
	if (key === 22){ // Habilitar volume da track
		$keyEnableVolumeTrack = value;
		document.getElementById('lblEnableVolumeTrack').innerText = letra.toUpperCase();
	}
	if (key === 23){ // Aumentar velocidade da track
		$keySpeedUp = value;
		document.getElementById('lblSpeedUp').innerText = letra.toUpperCase();
	}
	if (key === 24){ // Diminuir velocidade da track
		$keySpeedDown = value;
		document.getElementById('lblSpeedDown').innerText = letra.toUpperCase();
	}
	if (key === 25){ // Resetar velocidade da track
		$keyResetSpeed = value;
		document.getElementById('lblResetSpeed').innerText = letra.toUpperCase();
	}
	//
	//	Faders
	//
	if (key === 26){ // Aumentar fade master
		$keyFadeMasterIn = value;
		document.getElementById('lblFadeMasterIn').innerText = letra.toUpperCase();
	}
	if (key === 27){ // Diminuir fade master
		$keyFadeMasterOut = value;
		document.getElementById('lblFadeMasterOut').innerText = letra.toUpperCase();
	}
	if (key === 28){ // Aplicar fade in
		$keyApplyFadeIn = value;
		document.getElementById('lblApplyFadeIn').innerText = letra.toUpperCase();
	}
	if (key === 29){ // Aplicar fade out
		$keyApplyFadeOut = value;
		document.getElementById('lblApplyFadeOut').innerText = letra.toUpperCase();
	}
	//
	//	 Interface
	//
	if (key === 30){ // Mostrar menu de transições
		$keyShowTrans = value;
		document.getElementById('lblShowTrans').innerText = letra.toUpperCase();
	}
	if (key === 31){ // Esconder menu de transições
		$keyHideTrans = value;
		document.getElementById('lblHideTrans').innerText = letra.toUpperCase();
	}
	if (key === 32){ // Reiniciar MythDeck
		$keyReload = value;
		document.getElementById('lblReboot').innerText = letra.toUpperCase();
	}
	//
	//	Salvar, Carregar & Sets
	//
	if (key === 33){ // Salvar configs
		$keySave = value;
		document.getElementById('lblSaveConfigs').innerText = letra.toUpperCase();
	}
	if (key === 34){ // Guardar configs
		$keyLoad = value;
		document.getElementById('lblLoadConfigs').innerText = letra.toUpperCase();
	}
	if (key === 35){ // Avançar Set
		$keyNextSet = value;
		document.getElementById('lblNextSet').innerText = letra.toUpperCase();
	}
	if (key === 36){ // Voltar Set
		$keyPreviousSet = value;
		document.getElementById('lblPreviousSet').innerText = letra.toUpperCase();
	}
	if (key === 37){ // Aplicar volume na track
		$keyApplyVolTrack = value;
		document.getElementById('lblAplVolTrack').innerText = letra.toUpperCase();
	}
	$(keyConfigs).animate({width: "47%", height: "530px"}, 120);
	$(keyWaitLBL).css({display: "none"});
	$(keySetttingsTitle).html("Configurações de Teclado");
	$(keyHolder).slideDown(100);
	$(btnSetKeyReset).fadeIn(150);
	$(btnSetKeyBack).fadeIn(150);
	$(btnSaveKeysCfg).fadeIn(150);
	$(btnLoadKeysCfg).fadeIn(150);
	$(keyHolder).fadeIn(120);
	grabKey = undefined;
	seeking = false;
}

function resetKeys(){
	$keyTrack1 = 49;
	$keyTrack2 = 50;
	$keyTrack3 = 51;
	$keyTrack4 = 52;
	$keyTrack5 = 53;
	$keyTrack6 = 54;
	$keyTrack7 = 55;
	$keyPause = 32;
	$keyTogglePlaylist = 112;
	$keyEnableVolumeTrack = 99;
	$keyMutePlayer = 109;
	$keySeekForward = 98;
	$keySeekBackward = 118;
	$keyTrans1 = 56;
	$keyTrans2 = 57;
	$keyTrans3 = 48;
	$keyTrans4 = 45;
	$keyTrans5 = 61;
	$keyStopTrans = 13
	$keyMuteTrans = 110;
	$keyShowTrans = 103;
	$keyHideTrans = 104;
	$keyVolUp = 119;
	$keyVolDown = 113;
	$keyFadeMasterIn = 46;
	$keyFadeMasterOut = 44;
	$keyApplyFadeIn = 120;
	$keyApplyFadeOut = 122;
	$keySpeedUp = 47;
	$keySpeedDown = 59;
	$keyResetSpeed = 93;
	$keyLoad = 108;
	$keySave = 115;
	$keyReload = 114;
	$keyNextSet = 100;
	$keyPreviousSet = 97;
	$keyApplyVolTrack = 92;
	$(lblPlayTrack1).html("1");
	$(lblPlayTrack2).html("2");
	$(lblPlayTrack3).html("3");
	$(lblPlayTrack4).html("4");
	$(lblPlayTrack5).html("5");
	$(lblPlayTrack6).html("6");
	$(lblPlayTrack7).html("7");
	$(lblPlayTrans1).html("8");
	$(lblPlayTrans2).html("9");
	$(lblPlayTrans3).html("0");
	$(lblPlayTrans4).html("-");
	$(lblPlayTrans5).html("=");
	$(lblPauseTrack).html("Espaço");
	$(lblStopTrans).html("Enter");
	$(lblVolUp).html("W");
	$(lblVolDown).html("Q");
	$(lblPlaylistMode).html("P");
	$(lblSeekForward).html("B");
	$(lblSeekBackwards).html("V");
	$(lblMutePlayer).html("M");
	$(lblMuteTrans).html("N");
	$(lblEnableVolumeTrack).html("C");
	$(lblSpeedUp).html("/");
	$(lblSpeedDown).html(";");
	$(lblResetSpeed).html("]");
	$(lblFadeMasterIn).html(".");
	$(lblFadeMasterOut).html(",");
	$(lblApplyFadeIn).html("X");
	$(lblApplyFadeOut).html("Z");
	$(lblShowTrans).html("G");
	$(lblHideTrans).html("H");
	$(lblReboot).html("R");
	$(lblSaveConfigs).html("S");
	$(lblLoadConfigs).html("L");
	$(lblNextSet).html("D");
	$(lblPreviousSet).html("A");
	$(lblAplVolTrack).html("\\");
}
function saveCustomTrackSettings(){
	var minT = document.getElementById('minTimeProgram').value;
	var maxT = document.getElementById('maxTimeProgram').value;
	if (currentTrackPersonSet == 1){
		$track1LoopMin = minT;
		$track1LoopMax = maxT;
	}
	if (currentTrackPersonSet == 2){
		$track2LoopMin = minT;
		$track2LoopMax = maxT;
	}
	if (currentTrackPersonSet == 3){
		$track3LoopMin = minT;
		$track3LoopMax = maxT;
	}
	if (currentTrackPersonSet == 4){
		$track4LoopMin = minT;
		$track4LoopMax = maxT;
	}
	if (currentTrackPersonSet == 5){
		$track5LoopMin = minT;
		$track5LoopMax = maxT;
	}
	if (currentTrackPersonSet == 6){
		$track6LoopMin = minT;
		$track6LoopMax = maxT;
	}
	if (currentTrackPersonSet == 7){
		$track7LoopMin = minT;
		$track7LoopMax = maxT;
	}
}
function setFileToLoadSet(){
	var fili = document.getElementById('loadSetFileDialog');
	if (fili.files[0].path === null || fili.files[0].path === undefined || fili.files[0].path === ''){
		if (DEBUG == true){
			console.log('Load Set From File: Usuário cancelou o formulário');
		}
	} else {
		loadSetFromFile(fili.files[0].path);
	}
}
function batchLoad(){
	var loader = document.getElementById('batchLoadFileDialog')
	if (loader.files[0] == undefined){
		if (DEBUG == true){
			console.log("Batch Load: Usuário cancelou o formulário!");
		}
	} else {
		var cu = 1;
		var xo = 0;
		while (cu < 8 && loader.files[xo] != undefined){
			var lo = loader.files[xo].path;
			document.getElementById('lbl' + cu).value = lo;
			document.getElementById('chkVz' + cu).checked = false;
			document.getElementById('vz' + cu).value = 0.5;
			if (cu == 1){
				$customLoopTrack1 = false;
				$track1LoopMin = 0.1;
				$track1LoopMax = 1;
				$track1customFadeOut = 0.08;
			}
			if (cu == 2){
				$customLoopTrack2 = false;
				$track2LoopMin = 0.1;
				$track2LoopMax = 1;
				$track2customFadeOut = 0.08;
			}
			if (cu == 3){
				$customLoopTrack3 = false;
				$track3LoopMin = 0.1;
				$track3LoopMax = 1;
				$track3customFadeOut = 0.08;
			}
			if (cu == 4){
				$customLoopTrack4 = false;
				$track4LoopMin = 0.1;
				$track4LoopMax = 1;
				$track4customFadeOut = 0.08;
			}
			if (cu == 5){
				$customLoopTrack5 = false;
				$track5LoopMin = 0.1;
				$track5LoopMax = 1;
				$track5customFadeOut = 0.08;
			}
			if (cu == 6){
				$customLoopTrack6 = false;
				$track6LoopMin = 0.1;
				$track6LoopMax = 1;
				$track6customFadeOut = 0.08;
			}
			if (cu == 7){
				$customLoopTrack7 = false;
				$track7LoopMin = 0.1;
				$track7LoopMax = 1;
				$track7customFadeOut = 0.08;
			}
			if (DEBUG == true){
				console.log("Batch Load - Carregando Track " + cu + ": " + lo);
			}
			cu++;
			xo++;
		}
	}
}
function setLoadKeysConfigFile(){
	var cFile = document.getElementById('loadKeysConfigFile')
	if (cFile.files[0].path === null || cFile.files[0].path === undefined || cFile.files[0].path === ""){
		if (DEBUG == true){
			console.log("Load Keys Configs: Usuário cancelou o formulário");
		}
	} else {
		loadKeysConfigFile(cFile.files[0].path);
	}
}
function loadSetFromFile(path){
	var rawd = fs.readFileSync(path);
	try {
		decr = JSON.parse(atob(rawd));
		var neime = getFileName(path);
		var time = decr["hora"];
		var notepad = 0;
		// Tracks
		while (notepad < 7){ 
			var musica = decr["tracks"][notepad];
			if (musica === "" || musica === null || musica === undefined){
				document.getElementById("lbl" + parseInt(notepad + 1)).value = "Nenhum arquivo foi selecionado";
				document.getElementById("file" + parseInt(notepad + 1)).title = "";
			} else {
				document.getElementById("file" + parseInt(notepad + 1)).title = musica;
				document.getElementById("lbl" + parseInt(notepad + 1)).value = musica;
			}
			if (DEBUG == true){
				console.log("Load Arquivo: Track " + parseInt(notepad + 1) + " - " + musica);
			}
			notepad++;
		}
		notepad = 0;
		// Transição
		while (notepad < 5){
			var transicao = decr["trans"][notepad];
			if (transicao === "" || transicao === null || transicao === undefined){
				document.getElementById('transLabel' + parseInt(notepad + 1)).value = "Nenhum arquivo foi selecionado";
			} else {
				document.getElementById('transLabel' + parseInt(notepad + 1)).value = transicao;
			}
			if (DEBUG == true){
				console.log("Load Arquivo: Transição " + parseInt(notepad + 1) + " - " + transicao);
			}
			notepad++;
		}
		notepad = 0;
		// Volume Faders
		while (notepad < 7){
			var volumi = decr["volume"][notepad];
			document.getElementById('vz' + parseInt(notepad + 1)).value = volumi;
			updateVolFinalRange(parseInt(notepad + 1));
			notepad++;
		}
		notepad = 0;
		// Volume aplicavel (Check)
		while (notepad < 7){
			var checkers = decr["check"][notepad];
			document.getElementById('chkVz' + parseInt(notepad + 1)).checked = checkers;
			if (checkers == false){
				document.getElementById('vz' + parseInt(notepad + 1)).disabled = 'disabled';
			}
			notepad++;
		}
		// Carregar Custom
		$customLoopTrack1 = decr["custom"][0]
		$customLoopTrack2 = decr["custom"][1]
		$customLoopTrack3 = decr["custom"][2]
		$customLoopTrack4 = decr["custom"][3]
		$customLoopTrack5 = decr["custom"][4]
		$customLoopTrack6 = decr["custom"][5]
		$customLoopTrack7 = decr["custom"][6]
		$track1LoopMin = decr["custom"][7]
		$track1LoopMax = decr["custom"][8]
		$track2LoopMin = decr["custom"][9]
		$track2LoopMax = decr["custom"][10]
		$track3LoopMin = decr["custom"][11]
		$track3LoopMax = decr["custom"][12]
		$track4LoopMin = decr["custom"][13]
		$track4LoopMax = decr["custom"][14]
		$track5LoopMin = decr["custom"][15]
		$track5LoopMax = decr["custom"][16]
		$track6LoopMin = decr["custom"][17]
		$track6LoopMax = decr["custom"][18]
		$track7LoopMin = decr["custom"][19]
		$track7LoopMax = decr["custom"][20]
		$track1customFadeOut = decr["custom"][21]
		$track2customFadeOut = decr["custom"][22]
		$track3customFadeOut = decr["custom"][23]
		$track4customFadeOut = decr["custom"][24]
		$track5customFadeOut = decr["custom"][25]
		$track6customFadeOut = decr["custom"][26]
		$track7customFadeOut = decr["custom"][27]
		$track1FusionTime = decr["custom"][28]
		$track2FusionTime = decr["custom"][29]
		$track3FusionTime = decr["custom"][30]
		$track4FusionTime = decr["custom"][31]
		$track5FusionTime = decr["custom"][32]
		$track6FusionTime = decr["custom"][33]
		$track7FusionTime = decr["custom"][34]
		//
		solveShenanigans();
		var notepad = 0;
		while (notepad < 8){
			updateFusionTime(notepad);
			notepad++;
		}
		alert("Set Carregado Com Sucesso! \n\nNome: " + neime + "\nData de Criação: " + time + "\nCaminho: " + path);
		$("#loadSetFileDialog").val(null);
	}
	catch(e){
		document.title = "Erro!";
		if (DEBUG == true){
			console.error("Erro ao carregar set! \n\n" + e);
		}
		alert("Erro ao carregar set! \n\n" + e);
	}
}
function saveSettings(mode, setId){
	$(this).off('keypress');
	var notepad = 1;
	var id = undefined;
	if (bandNotCount > 0){
		id = document.getElementById('setSelect').value;
	} else {
		if (setId === undefined || setId === null){
			id = document.getElementById('setSelect').value;
		} else {
			id = setId;
		}
	}
	var fin = document.getElementById('fadeInRange').value;
	var fou = document.getElementById('fadeOutRange').value;
	var preloadW = document.getElementById('setLoad').value;
	var fMas = document.getElementById('fadeInMaster').value;
	var pl = document.getElementById('cfgPreloadSet').checked;
	var playl = playlistActive;
	localStorage.setItem('contBandNot', bandNotCount);
	if (fadeTracks == undefined){
		fadeTracks = false;
	}
	if (canShowNotify == null){
		canShowNotify = false;
	}
	if ($saveInFile == false){ // Salvando no LocalStorage
		// Salvando Músicas
		while (notepad < 8){
			var file = document.getElementById('lbl' + notepad).value;
			localStorage.setItem("track" + id + notepad, file);
			notepad++; // Saudades da época em que eu usava esse editor...
		}
		notepad = 1;
		// Salvando Transições
		while (notepad < 6){
			var trans = document.getElementById('transLabel' + notepad).value;
			localStorage.setItem("transi" + id + notepad, trans);
			notepad++;
		}
		notepad = 1;
		// Salvando Volume
		while (notepad < 8){
			var vol = document.getElementById('vz' + notepad).value;
			localStorage.setItem("volume" + id + notepad, vol);
			notepad++;
		}
		// Salvando Volume das transições
		localStorage.setItem("trans1" + id + "vol", $trans1Vol);
		localStorage.setItem("trans2" + id + "vol", $trans2Vol);
		localStorage.setItem("trans3" + id + "vol", $trans3Vol);
		localStorage.setItem("trans4" + id + "vol", $trans4Vol);
		localStorage.setItem("trans5" + id + "vol", $trans5Vol);
		notepad = 1;
		// Salvando volume aplicavel (vz)
		while (notepad < 8){
			var checkVz = document.getElementById('chkVz' + notepad).checked;
			localStorage.setItem('vzCheck' + id + notepad, checkVz);
			notepad++;
		}
		// Salvando custom
		localStorage.setItem(id + "customLoop1", $customLoopTrack1);
		localStorage.setItem(id + "customLoop2", $customLoopTrack2);
		localStorage.setItem(id + "customLoop3", $customLoopTrack3);
		localStorage.setItem(id + "customLoop4", $customLoopTrack4);
		localStorage.setItem(id + "customLoop5", $customLoopTrack5);
		localStorage.setItem(id + "customLoop6", $customLoopTrack6);
		localStorage.setItem(id + "customLoop7", $customLoopTrack7);
		localStorage.setItem(id + "track1LoopMin", $track1LoopMin);
		localStorage.setItem(id + "track1LoopMax", $track1LoopMax);
		localStorage.setItem(id + "track2LoopMin", $track2LoopMin);
		localStorage.setItem(id + "track2LoopMax", $track2LoopMax);
		localStorage.setItem(id + "track3LoopMin", $track3LoopMin);
		localStorage.setItem(id + "track3LoopMax", $track3LoopMax);
		localStorage.setItem(id + "track4LoopMin", $track4LoopMin);
		localStorage.setItem(id + "track4LoopMax", $track4LoopMax);
		localStorage.setItem(id + "track5LoopMin", $track5LoopMin);
		localStorage.setItem(id + "track5LoopMax", $track5LoopMax);
		localStorage.setItem(id + "track6LoopMin", $track6LoopMin);
		localStorage.setItem(id + "track6LoopMax", $track6LoopMax);
		localStorage.setItem(id + "track7LoopMin", $track7LoopMin);
		localStorage.setItem(id + "track7LoopMax", $track7LoopMax);
		localStorage.setItem(id + "track1CustFadeOut", $track1customFadeOut);
		localStorage.setItem(id + "track2CustFadeOut", $track2customFadeOut);
		localStorage.setItem(id + "track3CustFadeOut", $track3customFadeOut);
		localStorage.setItem(id + "track4CustFadeOut", $track4customFadeOut);
		localStorage.setItem(id + "track5CustFadeOut", $track5customFadeOut);
		localStorage.setItem(id + "track6CustFadeOut", $track6customFadeOut);
		localStorage.setItem(id + "track7CustFadeOut", $track7customFadeOut);
		localStorage.setItem(id + "track1FusionT", $track1FusionTime);
		localStorage.setItem(id + "track2FusionT", $track2FusionTime);
		localStorage.setItem(id + "track3FusionT", $track3FusionTime);
		localStorage.setItem(id + "track4FusionT", $track4FusionTime);
		localStorage.setItem(id + "track5FusionT", $track5FusionTime);
		localStorage.setItem(id + "track6FusionT", $track6FusionTime);
		localStorage.setItem(id + "track7FusionT", $track7FusionTime);
		//
		localStorage.setItem("Preload", pl);
		localStorage.setItem("fadeIn", fin);
		localStorage.setItem("fadeOut", fou);
		localStorage.setItem("fadeTime", fadeT);
		localStorage.setItem("fadeMaster", fMas);
		localStorage.setItem("playlistMode", playl);
		localStorage.setItem("preloadSetNumber", preloadW);
		localStorage.setItem("enableFadeTracks", fadeTracks);
		localStorage.setItem("notify", canShowNotify);
		localStorage.setItem("rocketBroadcasterCompat", rocketBroadcasterCompatMode);
		//
		localStorage.setItem("keys-1", $keyTrack1);
		localStorage.setItem("keys-2", $keyTrack2);
		localStorage.setItem("keys-3", $keyTrack3);
		localStorage.setItem("keys-4", $keyTrack4);
		localStorage.setItem("keys-5", $keyTrack5);
		localStorage.setItem("keys-6", $keyTrack6);
		localStorage.setItem("keys-7", $keyTrack7);
		localStorage.setItem("keys-8", $keyPause);
		localStorage.setItem("keys-9", $keyTogglePlaylist);
		localStorage.setItem("keys-10", $keyEnableVolumeTrack);
		localStorage.setItem("keys-11", $keyMutePlayer);
		localStorage.setItem("keys-12", $keySeekForward);
		localStorage.setItem("keys-13", $keySeekBackward);
		localStorage.setItem("keys-14", $keyTrans1);
		localStorage.setItem("keys-15", $keyTrans2);
		localStorage.setItem("keys-16", $keyTrans3);
		localStorage.setItem("keys-17", $keyTrans4);
		localStorage.setItem("keys-18", $keyTrans5);
		localStorage.setItem("keys-19", $keyStopTrans);
		localStorage.setItem("keys-20", $keyMuteTrans);
		localStorage.setItem("keys-21", $keyShowTrans);
		localStorage.setItem("keys-22", $keyHideTrans);
		localStorage.setItem("keys-23", $keyVolUp);
		localStorage.setItem("keys-24", $keyVolDown);
		localStorage.setItem("keys-25", $keyFadeMasterIn);
		localStorage.setItem("keys-26", $keyFadeMasterOut);
		localStorage.setItem("keys-27", $keyApplyFadeIn);
		localStorage.setItem("keys-28", $keyApplyFadeOut);
		localStorage.setItem("keys-29", $keySpeedUp);
		localStorage.setItem("keys-30", $keySpeedDown);
		localStorage.setItem("keys-31", $keyResetSpeed);
		localStorage.setItem("keys-32", $keyLoad);
		localStorage.setItem("keys-33", $keySave);
		localStorage.setItem("keys-34", $keyReload);
		localStorage.setItem("keys-35", $keyNextSet);
		localStorage.setItem("keys-36", $keyPreviousSet);
		localStorage.setItem("keys-37", $keyApplyVolTrack);
		//
		if (DEBUG == true){
			console.info("Save LocalStorage: Save OK!");
		}
		if (bandNotCount > 0){
			alert("Set " + id + " - Suas configurações foram guardadas com exito!");
		} else {
			if (DEBUG === true){
				console.log("(FIRST RUN) Set " + id + " - Suas configurações foram guardadas com exito!");
			}
		}
		if (canLoad == false){
			$(loadBtn).fadeIn(1);
			canLoad = true;
		}
		if (mode == 1){
			animSettings(2);
		}
	} else { // Salvando no arquivo
		var ask = prompt("Insira o nome do arquivo a ser salvo", "Meu Set");
		if (ask != null){
			$saveInFile = false;
			var horaGerada = getTime(2);
			var fs = require('fs');
			var settingsContents = {
				"hora": horaGerada,
				// Tracks
				"tracks": [
					document.getElementById('lbl1').value, 
					document.getElementById('lbl2').value,
					document.getElementById('lbl3').value,
					document.getElementById('lbl4').value,
					document.getElementById('lbl5').value,
					document.getElementById('lbl6').value,
					document.getElementById('lbl7').value
				],
				// Transições
				"trans": [
					document.getElementById('transLabel1').value,
					document.getElementById('transLabel2').value,
					document.getElementById('transLabel3').value,
					document.getElementById('transLabel4').value,
					document.getElementById('transLabel5').value
				],
				// Volume
				"volume": [
					document.getElementById('vz1').value,
					document.getElementById('vz2').value,
					document.getElementById('vz3').value,
					document.getElementById('vz4').value,
					document.getElementById('vz5').value,
					document.getElementById('vz6').value,
					document.getElementById('vz7').value	
				],
				// Volume Aplicavel (vz)
				"check": [
					document.getElementById('chkVz1').checked,
					document.getElementById('chkVz2').checked,
					document.getElementById('chkVz3').checked,
					document.getElementById('chkVz4').checked,
					document.getElementById('chkVz5').checked,
					document.getElementById('chkVz6').checked,
					document.getElementById('chkVz7').checked
				], 
				// Custom
				"custom": [
					$customLoopTrack1,
					$customLoopTrack2,
					$customLoopTrack3,
					$customLoopTrack4,
					$customLoopTrack5,
					$customLoopTrack6,
					$customLoopTrack7,
					$track1LoopMin,
					$track1LoopMax,
					$track2LoopMin,
					$track2LoopMax,
					$track3LoopMin,
					$track3LoopMax,
					$track4LoopMin,
					$track4LoopMax,
					$track5LoopMin,
					$track5LoopMax,
					$track6LoopMin,
					$track6LoopMax,
					$track7LoopMin,
					$track7LoopMax,
					$track1customFadeOut,
					$track2customFadeOut,
					$track3customFadeOut,
					$track4customFadeOut,
					$track5customFadeOut,
					$track6customFadeOut,
					$track7customFadeOut,
					$track1FusionTime,
					$track2FusionTime,
					$track3FusionTime,
					$track4FusionTime,
					$track5FusionTime,
					$track6FusionTime,
					$track7FusionTime
				]
			};
			var raw = JSON.stringify(settingsContents);
			fs.writeFile("Sets/" + ask + ".mdeck", btoa(raw), function(error){
				if (error){
					if (DEBUG == true){
						console.error("Erro ao gerar arquivo de Set: " + error);
					}
				} else {
					if (DEBUG == true){
						console.info("Save Arquivo: " + ask + ".mdeck - Save OK!");
					}
					showNotify("Sucesso!", "Seu set foi gerado com exito! \n\nNome: " + ask + "\nData de Criação: " + horaGerada + "\nCaminho: Sets/" + ask + ".mdeck", 4000);
				}
			});
		}
	}
	LISTEN();
}
function checkboxMusicOnTxtCompat(){
	if (musicTxt == true){
		var n = ' ';
		musicTxt = false;
		document.getElementById('cfgEnableMusicTxtCompat').checked = false;
		var APP_PATH = process.cwd();
		fs.writeFileSync(APP_PATH + "MusicaAtual.txt", n, 'utf-8');
	} else {
		musicTxt = true;
		document.getElementById('cfgEnableMusicTxtCompat').checked = true;
	}
	localStorage.setItem("musicOnTxt", musicTxt);
}
function loadSettings(mode){
	$(this).off('keypress');
	if (canLoad == true){
		var id;
		loading = true;
		var pl = JSON.parse(localStorage.getItem("Preload"));
		document.getElementById('setLoad').value = localStorage.getItem('preloadSetNumber');
		document.getElementById('fadeInMaster').value = localStorage.getItem('fadeMaster');
		document.getElementById('fadeInRange').value = localStorage.getItem("fadeIn");
		document.getElementById('fadeOutRange').value = localStorage.getItem("fadeOut");
		playlistActive = JSON.parse(localStorage.getItem('playlistMode'));
		fadeTracks = JSON.parse(localStorage.getItem('enableFadeTracks'));
		fadeT = parseInt(localStorage.getItem('fadeTime'));
		canShowNotify = JSON.parse(localStorage.getItem('notify'));
		rocketBroadcasterCompatMode = JSON.parse(localStorage.getItem("rocketBroadcasterCompat"));
		if (rocketBroadcasterCompatMode === true){
			document.getElementById("cfgEnableTitleCompat").checked = true;
		} else {
			document.getElementById("cfgEnableTitleCompat").checked = false;
		}
		if (canShowNotify === null){
			canShowNotify = false;
		}
		if (canShowNotify == true){
			document.getElementById('cfgEnableNotify').checked = true;
		} else {
			document.getElementById('cfgEnableNotify').checked = false;
		}
		document.getElementById('fadeTracksRange').value = fadeT;
		if (mode != 1){
			if (pl == false){
				document.getElementById('cfgPreloadSet').checked = false;
				id = document.getElementById('setSelect').value;
			} else {
				id = document.getElementById('setLoad').value;
				document.getElementById('cfgPreloadSet').checked = true;
				$(labelPreloadSetInicial).css({display: "none"});
				$(configsDiv).css({height: "134px"});
			}
		} else {
			id = document.getElementById('setSelect').value;
		}
		if (fadeTracks == true){
			document.getElementById('fadeTracksCheckbox').checked = true;
			$(LabelFadeTracks).css({display: "none"});
		}
		if (playlistActive == true){
			document.getElementById('playlistBtn').value = "Playlist Mode: ON";
			$(playlistBtn).addClass('btnActive');
			$(playlistBtn).removeClass('PUTAQUEPARIU');
			document.getElementById('audioCurrentTrack').loop = '';
			document.getElementById('secondAudioCurrentTrack').loop = '';
		} else {
			$(playlistBtn).addClass('PUTAQUEPARIU');
			$(playlistBtn).removeClass('btnActive');
			document.getElementById('audioCurrentTrack').loop = 'loop';
			document.getElementById('secondAudioCurrentTrack').loop = 'loop';
			document.getElementById('playlistBtn').value = 'Playlist Mode: OFF';
		}
		updateFadeRange(1);
		updateFadeRange(2);
		updateFadeTracks();
		enableFadeTracks();
		clearGreenPlay();
		var notepad = 1;
		// Carregando Músicas
		while (notepad < 8){
			var c = localStorage.getItem('track' + id + notepad);
			if (c === '' || c == null){
				document.getElementById('lbl' + notepad).title = '';
				document.getElementById('file' + notepad).title = '';
				document.getElementById('lbl' + notepad).value = 'Nenhum arquivo foi selecionado';
			} else {
				document.getElementById('lbl' + notepad).value = c;
				document.getElementById('file' + notepad).title = c;
				document.getElementById('lbl' + notepad).title = getFileName(c);
			}
			if (DEBUG == true){
				console.log("Carregando Músicas: Set: " + id +" - Nº " + notepad + " - " + c);
			}
			notepad++;
		}
		// Carregando volume das transições
		$trans1Vol = localStorage.getItem('trans1' + id + 'vol');
		$trans2Vol = localStorage.getItem('trans2' + id + 'vol');
		$trans3Vol = localStorage.getItem('trans3' + id + 'vol');
		$trans4Vol = localStorage.getItem('trans4' + id + 'vol');
		$trans5Vol = localStorage.getItem('trans5' + id + 'vol');
		if ($trans1Vol === null){
			$trans1Vol = 0.5;
		}
		if ($trans2Vol === null){
			$trans2Vol = 0.5;
		}
		if ($trans3Vol === null){
			$trans3Vol = 0.5;
		}
		if ($trans4Vol === null){
			$trans4Vol = 0.5;
		}
		if ($trans5Vol === null){
			$trans5Vol = 0.5;
		}
		document.getElementById("audioTrans1").volume = $trans1Vol;
		document.getElementById("audioTrans2").volume = $trans2Vol;
		document.getElementById("audioTrans3").volume = $trans3Vol;
		document.getElementById("audioTrans4").volume = $trans4Vol;
		document.getElementById("audioTrans5").volume = $trans5Vol;
		// Carregando Transições
		notepad = 1;
		while (notepad < 6){
			updateTransVolume(notepad);
			var tran = localStorage.getItem('transi' + id + notepad);
			if (tran == "" || tran == null){
				document.getElementById('transLabel' + notepad).value = "Nenhum arquivo foi selecionado";
			} else {
				document.getElementById('transLabel' + notepad).value = tran;
			}
			if (DEBUG == true){
				console.log("Carregando Transições: Set: " + id +" - Nº " + notepad + " - " + tran);
			}
			notepad++;
		}
		// Carregando Volume
		notepad = 1;
		while (notepad < 8){
			var volumz = localStorage.getItem("volume" + id + notepad);
			document.getElementById('vz' + notepad).value = volumz;
			updateVolFinalRange(notepad);
			notepad++;
		}
		// Carregando Volume Aplicável (vz)
		notepad = 1;
		while (notepad < 8){
			var che = JSON.parse(localStorage.getItem('vzCheck' + id + notepad))
			document.getElementById('chkVz' + notepad).checked = che;
			if (che == false){
				document.getElementById('vz' + notepad).disabled = 'disabled';
			}
			notepad++;
		}
		if (mode == 1){
			alert("Set: " + id + " - Suas configurações foram carregadas com sucesso!");
			if (DEBUG == true){
				console.info("Set: " + id + " - Load OK!");
			}
		} else {
			document.title = "Aguarde - Carregando Set de Músicas...";
			if (DEBUG == true){
				console.info("Preload OK!");
			}
		}
		// Carregando custom
		$customLoopTrack1 = JSON.parse(localStorage.getItem(id + "customLoop1"));
		$customLoopTrack2 = JSON.parse(localStorage.getItem(id + "customLoop2"));
		$customLoopTrack3 = JSON.parse(localStorage.getItem(id + "customLoop3"));
		$customLoopTrack4 = JSON.parse(localStorage.getItem(id + "customLoop4"));
		$customLoopTrack5 = JSON.parse(localStorage.getItem(id + "customLoop5"));
		$customLoopTrack6 = JSON.parse(localStorage.getItem(id + "customLoop6"));
		$customLoopTrack7 = JSON.parse(localStorage.getItem(id + "customLoop7"));
		$track1LoopMin = localStorage.getItem(id + "track1LoopMin");
		$track1LoopMax = localStorage.getItem(id + "track1LoopMax");
		$track2LoopMin = localStorage.getItem(id + "track2LoopMin");
		$track2LoopMax = localStorage.getItem(id + "track2LoopMax");
		$track3LoopMin = localStorage.getItem(id + "track3LoopMin");
		$track3LoopMax = localStorage.getItem(id + "track3LoopMax");
		$track4LoopMin = localStorage.getItem(id + "track4LoopMin");
		$track4LoopMax = localStorage.getItem(id + "track4LoopMax");
		$track5LoopMin = localStorage.getItem(id + "track5LoopMin");
		$track5LoopMax = localStorage.getItem(id + "track5LoopMax");
		$track6LoopMin = localStorage.getItem(id + "track6LoopMin");
		$track6LoopMax = localStorage.getItem(id + "track6LoopMax");
		$track7LoopMin = localStorage.getItem(id + "track7LoopMin");
		$track7LoopMax = localStorage.getItem(id + "track7LoopMax");
		$track1customFadeOut = parseFloat(localStorage.getItem(id + "track1CustFadeOut"));
		$track2customFadeOut = parseFloat(localStorage.getItem(id + "track2CustFadeOut"));
		$track3customFadeOut = parseFloat(localStorage.getItem(id + "track3CustFadeOut"));
		$track4customFadeOut = parseFloat(localStorage.getItem(id + "track4CustFadeOut"));
		$track5customFadeOut = parseFloat(localStorage.getItem(id + "track5CustFadeOut"));
		$track6customFadeOut = parseFloat(localStorage.getItem(id + "track6CustFadeOut"));
		$track7customFadeOut = parseFloat(localStorage.getItem(id + "track7CustFadeOut"));
		$track1FusionTime = parseInt(localStorage.getItem(id + "track1FusionT"));
		$track2FusionTime = parseInt(localStorage.getItem(id + "track2FusionT"));
		$track3FusionTime = parseInt(localStorage.getItem(id + "track3FusionT"));
		$track4FusionTime = parseInt(localStorage.getItem(id + "track4FusionT"));
		$track5FusionTime = parseInt(localStorage.getItem(id + "track5FusionT"));
		$track6FusionTime = parseInt(localStorage.getItem(id + "track6FusionT"));
		$track7FusionTime = parseInt(localStorage.getItem(id + "track7FusionT"));
		// keys
		$keyTrack1 = JSON.parse(localStorage.getItem("keys-1"));
		$keyTrack2 = JSON.parse(localStorage.getItem("keys-2"));
		$keyTrack3 = JSON.parse(localStorage.getItem("keys-3"));
		$keyTrack4 = JSON.parse(localStorage.getItem("keys-4"));
		$keyTrack5 = JSON.parse(localStorage.getItem("keys-5"));
		$keyTrack6 = JSON.parse(localStorage.getItem("keys-6"));
		$keyTrack7 = JSON.parse(localStorage.getItem("keys-7"));
		$keyPause = JSON.parse(localStorage.getItem("keys-8"));
		$keyTogglePlaylist = JSON.parse(localStorage.getItem("keys-9"));
		$keyEnableVolumeTrack = JSON.parse(localStorage.getItem("keys-10"));
		$keyMutePlayer = JSON.parse(localStorage.getItem("keys-11"));
		$keySeekForward = JSON.parse(localStorage.getItem("keys-12"));
		$keySeekBackward = JSON.parse(localStorage.getItem("keys-13"));
		$keyTrans1 = JSON.parse(localStorage.getItem("keys-14"));
		$keyTrans2 = JSON.parse(localStorage.getItem("keys-15"));
		$keyTrans3 = JSON.parse(localStorage.getItem("keys-16"));
		$keyTrans4 = JSON.parse(localStorage.getItem("keys-17"));
		$keyTrans5 = JSON.parse(localStorage.getItem("keys-18"));
		$keyStopTrans = JSON.parse(localStorage.getItem("keys-19"));
		$keyMuteTrans = JSON.parse(localStorage.getItem("keys-20"));
		$keyShowTrans = JSON.parse(localStorage.getItem("keys-21"));
		$keyHideTrans = JSON.parse(localStorage.getItem("keys-22"));
		$keyVolUp = JSON.parse(localStorage.getItem("keys-23"));
		$keyVolDown = JSON.parse(localStorage.getItem("keys-24"));
		$keyFadeMasterIn = JSON.parse(localStorage.getItem("keys-25"));
		$keyFadeMasterOut = JSON.parse(localStorage.getItem("keys-26"));
		$keyApplyFadeIn = JSON.parse(localStorage.getItem("keys-27"));
		$keyApplyFadeOut = JSON.parse(localStorage.getItem("keys-28"));
		$keySpeedUp = JSON.parse(localStorage.getItem("keys-29"));
		$keySpeedDown = JSON.parse(localStorage.getItem("keys-30"));
		$keyResetSpeed = JSON.parse(localStorage.getItem("keys-31"));
		$keyLoad = JSON.parse(localStorage.getItem("keys-32"));
		$keySave = JSON.parse(localStorage.getItem("keys-33"));
		$keyReload = JSON.parse(localStorage.getItem("keys-34"));
		$keyNextSet = JSON.parse(localStorage.getItem("keys-35"));
		$keyPreviousSet = JSON.parse(localStorage.getItem("keys-36"));
		$keyApplyVolTrack = JSON.parse(localStorage.getItem("keys-37"));
		//
		notepad = 0;
		while (notepad < 8){
			updateFusionTime(notepad);
			notepad++;
		}
		solveShenanigans();
		updateFadeMaster();
		enableLoadSet();
		animSettings(2);
	} else {
		document.title = 'Erro!';
		var message = 'ERRO: Você não pode carregar as configurações se você não as guardou anteriormente!';
		if (DEBUG == true){
			console.error(message);
		}
		alert(message);
	}
	$(this).off('keypress');
	loading = false;
	LISTEN();
}