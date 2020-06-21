/*
	MythDeck - player.js
	Por mitosan/mscore/misto_quente
	Help me - please
*/
function dontLookAtMeLikeThisPlease(){
	var breath = currentTrackPersonSet;
	if (breath == 1){
		document.getElementById('fadeoutCustom').value = $track1customFadeOut;
	}
	if (breath == 2){
		document.getElementById('fadeoutCustom').value = $track2customFadeOut;
	}
	if (breath == 3){
		document.getElementById('fadeoutCustom').value = $track3customFadeOut;
	}
	if (breath == 4){
		document.getElementById('fadeoutCustom').value = $track4customFadeOut;
	}
	if (breath == 5){
		document.getElementById('fadeoutCustom').value = $track5customFadeOut;
	}
	if (breath == 6){
		document.getElementById('fadeoutCustom').value = $track6customFadeOut;
	}
	if (breath == 7){
		document.getElementById('fadeoutCustom').value = $track7customFadeOut;
	}
}
function updateCustomFadeOut(){
	var onemoretime = currentTrackPersonSet;
	var lblz = document.getElementById('fadeoutCustom').value;
	if (onemoretime == 1){
		$track1customFadeOut = lblz;
	}
	if (onemoretime == 2){
		$track2customFadeOut = lblz;
	}
	if (onemoretime == 3){
		$track3customFadeOut = lblz;
	}
	if (onemoretime == 4){
		$track4customFadeOut = lblz;
	}
	if (onemoretime == 5){
		$track5customFadeOut = lblz;
	}
	if (onemoretime == 6){
		$track6customFadeOut = lblz;
	}
	if (onemoretime == 7){
		$track7customFadeOut = lblz;
	}
}
function fadeOutAll(){
	var f = document.getElementById('fadeInAllBtn').disabled;
	var playing = document.getElementById('audioCurrentTrack').paused;
	var secondPlaying = document.getElementById('secondAudioCurrentTrack').paused;
	if (playing == false || secondPlaying == false){
		if (f == true){
			fOutAtivo = true;
			$(fadeInAllBtn).addClass('fadeBtn');
			$(fadeOutAllBtn).removeClass('fadeBtn');
			$(fadeOutAllBtn).addClass('fadeBtnDisabled');
			$(fadeInAllBtn).removeClass('fadeBtnDisabled');
			document.getElementById('fadeInAllBtn').disabled = '';
			document.getElementById('fadeOutAllBtn').disabled = 'disabled';
			if (playing == false){
				fadeOutTrack(1, 1);
			} else {
				fadeOutTrack(2, 1);
			}
		} else {
			if (DEBUG == true){
				console.warn('Fade Out manual não pode ser executado a não ser que Fade In manual seja executado antes');
			}
		}
	} else {
		if (DEBUG == true){
			console.warn('Fade In / Fade Out: Essa ação não pode ser executada se o player estiver parado!');
		}
	}
}
function fadeInAll(){
	var f = document.getElementById('fadeOutAllBtn').disabled;
	var playing = document.getElementById('audioCurrentTrack').paused;
	var secondPlaying = document.getElementById('secondAudioCurrentTrack').paused;
	if (playing == false || secondPlaying == false){
		if (f == true){
			fOutAtivo = false;
			$(fadeInAllBtn).addClass('fadeBtnDisabled');
			$(fadeInAllBtn).removeClass('fadeBtn');
			$(fadeOutAllBtn).addClass('fadeBtn');
			$(fadeOutAllBtn).removeClass('fadeBtnDisabled');
			document.getElementById('fadeOutAllBtn').disabled = '';
			document.getElementById('fadeInAllBtn').disabled = 'disabled';
			if (document.getElementById('audioCurrentTrack').paused == false){
				fadeInTrack(1, btnCurrent);
			} else {
				fadeInTrack(2, btnCurrent);
			}
		} else {
			if (DEBUG == true){
				console.warn('Fade In manual não pode ser executado a não ser que Fade Out manual seja executado antes');
			}
		}
	} else {
		if (DEBUG == true){
			console.warn('Fade In / Fade Out: Essa ação não pode ser executada se o player estiver parado.');
		}
	}
}
function toggleVzCheck(vzId){
	if (vzId == undefined || vzId < 1){
		vzId = 1;
	}
	if (document.getElementById('chkVz' + vzId).checked == true){
		document.getElementById('chkVz' + vzId).checked = false;
	} else {
		document.getElementById('chkVz' + vzId).checked = true;
	}
	enableVz(vzId);
}
function playlistMode(){
	if (playlistActive == false){
		playlistActive = true;
		$(playlistBtn).addClass('btnActive');
		$(playlistBtn).removeClass('PUTAQUEPARIU');
		document.getElementById('audioCurrentTrack').loop = '';
		document.getElementById('secondAudioCurrentTrack').loop = '';
		document.getElementById('playlistBtn').value = 'Playlist Mode: ON';
	} else {
		playlistActive = false;
		$(playlistBtn).addClass('PUTAQUEPARIU');
		$(playlistBtn).removeClass('btnActive');
		document.getElementById('audioCurrentTrack').loop = 'loop';
		document.getElementById('secondAudioCurrentTrack').loop = 'loop';
		document.getElementById('playlistBtn').value = 'Playlist Mode: OFF';
	}
}
function customPreferences(tracc){
	currentTrackPersonSet = tracc;
	var fil = document.getElementById('lbl' + tracc).value;
	if (fil == "Nenhum arquivo foi selecionado"){
		if (DEBUG == true){
			console.warn("(Track " + tracc + ") - Você precisa colocar alguma musíca na track antes de acessar esse menu!");
		}
		alert("(Track " +  tracc + ") - Você precisa colocar alguma musíca na track antes de acessar esse menu!");
	} else {
		dontLookAtMeLikeThisPlease();
		$(trackIdCurrent).html(tracc);
		$(trackName).html(getFileName(fil));
		var tocador = undefined;
		if (tracc == 1){
			document.getElementById('checkboxCustomLoop').checked = $customLoopTrack1;
			document.getElementById('minTimeProgram').value = $track1LoopMin;
			document.getElementById('maxTimeProgram').value = $track1LoopMax;
		}
		if (tracc == 2){
			document.getElementById('checkboxCustomLoop').checked = $customLoopTrack2;
			document.getElementById('minTimeProgram').value = $track2LoopMin;
			document.getElementById('maxTimeProgram').value = $track2LoopMax;
		}
		if (tracc == 3){
			document.getElementById('checkboxCustomLoop').checked = $customLoopTrack3;
			document.getElementById('minTimeProgram').value = $track3LoopMin;
			document.getElementById('maxTimeProgram').value = $track3LoopMax;
		}
		if (tracc == 4){
			document.getElementById('checkboxCustomLoop').checked = $customLoopTrack4;
			document.getElementById('minTimeProgram').value = $track4LoopMin;
			document.getElementById('maxTimeProgram').value = $track4LoopMax;
		}
		if (tracc == 5){
			document.getElementById('checkboxCustomLoop').checked = $customLoopTrack5;
			document.getElementById('minTimeProgram').value = $track5LoopMin;
			document.getElementById('maxTimeProgram').value = $track5LoopMax;
		}
		if (tracc == 6){
			document.getElementById('checkboxCustomLoop').checked = $customLoopTrack6;
			document.getElementById('minTimeProgram').value = $track6LoopMin;
			document.getElementById('maxTimeProgram').value = $track6LoopMax;
		}
		if (tracc == 7){
			document.getElementById('checkboxCustomLoop').checked = $customLoopTrack7;
			document.getElementById('minTimeProgram').value = $track7LoopMin;
			document.getElementById('maxTimeProgram').value = $track7LoopMax;
		}
		checkCTime();
		animSettings(5);
	}
}

function checkInpuNumber(id){
	if (id == 1){
		var tag = document.getElementById('minTimeProgram').value;
		if (tag < 0 || tag == ""){
			document.getElementById('minTimeProgram').value = 0.1;
		}
	} else {
		var tag = document.getElementById('maxTimeProgram').value;
		if (tag < 0 || tag == ""){
			document.getElementById('maxTimeProgram').value = 1;
		}
	}
}

function testTime(input){
	var tempoMin = document.getElementById('minTimeProgram').value;
	var tempoMax = document.getElementById('maxTimeProgram').value;
	if ($id == 1){
		if (input == 1){
			document.getElementById('secondAudioCurrentTrack').currentTime = tempoMin;
		} else {
			document.getElementById('secondAudioCurrentTrack').currentTime = tempoMax;
		}
	} else {
		if (input == 1){
			document.getElementById('audioCurrentTrack').currentTime = tempoMin;
		} else {
			document.getElementById('audioCurrentTrack').currentTime = tempoMax;
		}
	}
}

function eLaVamosNos(ee, id){
	if (ee.keyCode == 13){
		testTime(id);
	}
}

function testEffectCustomLoop(){
	var timeLoop = document.getElementById("maxTimeProgram").value;
	var possivel = document.getElementById('checkboxCustomLoop').checked;
	if (possivel == true){
		playMusic(currentTrackPersonSet);
		var desired = parseInt(timeLoop) - 4; // Quatro segundos de diferença
		if ($id == 1){
			document.getElementById('secondAudioCurrentTrack').currentTime = desired;
			document.getElementById('secondAudioCurrentTrack').play();
		} else {
			document.getElementById('audioCurrentTrack').currentTime = desired;
			document.getElementById('audioCurrentTrack').play();
		}
	} else {
		if (DEBUG == true){
			console.warn("(Custom Loop) - Não é possivel testar se o efeito não está ativo!");
		}
		alert("(Custom Loop) - Não é possivel testar se o efeito não está ativo!");
	}
}

function getCurrentTime(input){
	if (input == 1){
		document.getElementById('minTimeProgram').value = updateLabels().toFixed(3);
	}
	if (input == 2){
		document.getElementById('maxTimeProgram').value = updateLabels().toFixed(3);
	}
	checkCTime();
}

function checkCTime(){
	var aa = document.getElementById('minTimeProgram').value;
	var bb = document.getElementById('maxTimeProgram').value;
	if (parseInt(aa) > bb){
		document.getElementById('maxTimeProgram').value = parseInt(aa) + 2;
	}
	if (parseInt(bb) < aa){
		document.getElementById('maxTimeProgram').value = parseInt(aa) + 2;
	}
	if (currentTrackPersonSet == 1){
		$track1LoopMin = document.getElementById('minTimeProgram').value;
		$track1LoopMax = document.getElementById('maxTimeProgram').value;
	}
	if (currentTrackPersonSet == 2){
		$track2LoopMin = document.getElementById('minTimeProgram').value;
		$track2LoopMax = document.getElementById('maxTimeProgram').value;
	}
	if (currentTrackPersonSet == 3){
		$track3LoopMin = document.getElementById('minTimeProgram').value;
		$track3LoopMax = document.getElementById('maxTimeProgram').value;
	}
	if (currentTrackPersonSet == 4){
		$track4LoopMin = document.getElementById('minTimeProgram').value;
		$track4LoopMax = document.getElementById('maxTimeProgram').value;
	}
	if (currentTrackPersonSet == 5){
		$track5LoopMin = document.getElementById('minTimeProgram').value;
		$track5LoopMax = document.getElementById('maxTimeProgram').value;
	}
	if (currentTrackPersonSet == 6){
		$track6LoopMin = document.getElementById('minTimeProgram').value;
		$track6LoopMax = document.getElementById('maxTimeProgram').value;
	}
	if (currentTrackPersonSet == 7){
		$track7LoopMin = document.getElementById('minTimeProgram').value;
		$track7LoopMax = document.getElementById('maxTimeProgram').value;
	}
}

function onCheckNormalLoop(){
	var chec = document.getElementById('checkboxTrackLoop').checked;
	var playe = undefined;
	if ($id == 1){
		playe = document.getElementById('secondAudioCurrentTrack')
	} else {
		playe = document.getElementById('audioCurrentTrack')
	}
	if (chec === false){
		playe.loop = false;
	} else {
		playe.loop = true;
	}
}

function onCheckPerson(){
	var che = document.getElementById('checkboxCustomLoop').checked;
	if (che === false){
		clearInterval(checkPlayerTempo);
		if (currentTrackPersonSet == 1){
			$customLoopTrack1 = false;
		}
		if (currentTrackPersonSet == 2){
			$customLoopTrack2 = false;
		}
		if (currentTrackPersonSet == 3){
			$customLoopTrack3 = false;
		}
		if (currentTrackPersonSet == 4){
			$customLoopTrack4 = false;
		}
		if (currentTrackPersonSet == 5){
			$customLoopTrack5 = false;
		}
		if (currentTrackPersonSet == 6){
			$customLoopTrack6 = false;
		}
		if (currentTrackPersonSet == 7){
			$customLoopTrack7 = false;
		}
		document.getElementById('checkboxCustomLoop').checked = false;
	} else {
		clearInterval(checkPlayerTempo);
		checkCustomLOOP(currentTrackNumber);
		if (currentTrackPersonSet == 1){
			$customLoopTrack1 = true;
		}
		if (currentTrackPersonSet == 2){
			$customLoopTrack2 = true;
		}
		if (currentTrackPersonSet == 3){
			$customLoopTrack3 = true;
		}
		if (currentTrackPersonSet == 4){
			$customLoopTrack4 = true;
		}
		if (currentTrackPersonSet == 5){
			$customLoopTrack5 = true;
		}
		if (currentTrackPersonSet == 6){
			$customLoopTrack6 = true;
		}
		if (currentTrackPersonSet == 7){
			$customLoopTrack7 = true;
		}
		document.getElementById('checkboxCustomLoop').checked = true;
	}
}
function resetCustomFadeOut(){
	document.getElementById('fadeoutCustom').value = 0.08;
	$(customVolumeSliderLbl).html("0.08");
	updateCustomFadeOut();
}
function excluirTrack(track){
	var arqu = document.getElementById('lbl' + track).value;
	if (arqu != 'Nenhum arquivo foi selecionado'){
		var pergunta = confirm("Track: " + track + " Você tem certeza que quer remover?");
		if (pergunta == true){
			var arch = document.getElementById('file' + track).files[0]
			if (arch != undefined){
				document.getElementById('file' + track).files[0].path = undefined;
			}
			document.getElementById('file' + track).file = "";
			document.getElementById('lbl' + track).value = "Nenhum arquivo foi selecionado";
			document.getElementById('vz' + track).value = 0.5;
			document.getElementById('chkVz' + track).checked = false;
			updateVolFinalRange(track);
		}
	}
}
function enableVz(vz){
	var en = document.getElementById('vz' + vz);
	var ch = document.getElementById('chkVz' + vz);
	if (ch.checked == false){
		en.disabled = 'disabled';	
	} else {
		en.disabled = '';
	}
}

function pausePlayers(){
	try{
		if ($id == 2){
		    paused = document.getElementById("audioCurrentTrack").paused;
		    if (paused == false){
		    	document.getElementById("audioCurrentTrack").pause();
		    } else {
		    	document.getElementById("audioCurrentTrack").play();
		    }
		} else {
			paused = document.getElementById("secondAudioCurrentTrack").paused;
			if (paused == false){
				document.getElementById("secondAudioCurrentTrack").pause();
			} else {
				document.getElementById("secondAudioCurrentTrack").play();
			}
		}
	} catch (erru){
		console.error("Não foi possivel pausar o player: " + erru);
	}
}
// Buffs
$(this).on('keydown', function(eventis){
	if (eventis.keyCode === $keyBuff){
		buff = 20;
	}
})
$(this).on('keyup', function(eventie){
	if (eventie.keyCode === $keyBuff){
		buff = 0;
	}
})
function LISTEN(){
	$(this).on('keypress', function(event) {
		if (DEBUG == true){
			console.log("event.keyCode = " + event.keyCode);
		}
		if (onSettings == false){
			// Pause and play
			if (event.keyCode == $keyPause) { 
				pausePlayers();
		    }
		    // Tracks Principais
		    if (selectTrack == true){
			    if (event.keyCode == $keyTrack1) { // numero 1
			        playMusic(1);
			    }
			    if (event.keyCode == $keyTrack2) { // numero 2
			        playMusic(2);
			    }
			    if (event.keyCode == $keyTrack3) { // numero 3
			        playMusic(3);
			    }
			    if (event.keyCode == $keyTrack4) { // numero 4
			        playMusic(4);
			    }
			    if (event.keyCode == $keyTrack5) { // numero 5
			        playMusic(5);
			    }
			    if (event.keyCode == $keyTrack6) { // numero 6
			        playMusic(6);
			    }
			    if (event.keyCode == $keyTrack7) { // numero 7
			        playMusic(7);
			    }
		    }
		    // Transições
		    if (event.keyCode == $keyTrans1) { // numero 8
		        playTrans(1);
		    }
		    if (event.keyCode == $keyTrans2) { // numero 9
		        playTrans(2);
		    }
		    if (event.keyCode == $keyTrans3) { // numero 0
		        playTrans(3);
		    }
			if (event.keyCode == $keyTrans4) { // Tecla -
		        playTrans(4);
		    }
			if (event.keyCode == $keyTrans5) { // Tecla =
		        playTrans(5);
		    }
		    // Efeitos
		    if (event.keyCode == $keyApplyFadeOut){ // Z - Fade Out All
		    	fadeOutAll();
		    }
		    if (event.keyCode == $keyApplyFadeIn){ // X - Fade In All
		    	fadeInAll();
		    }
		    // Outras Funções
		    if (event.keyCode == $keyStopTrans) { // Parar todas as transições (ENTER) 
		        document.getElementById('audioTrans1').pause();
		        document.getElementById('audioTrans2').pause();
		        document.getElementById('audioTrans3').pause();
		    }
		    if (event.keyCode == $keyTogglePlaylist){ // P - Toggle Playlist Mode
		    	playlistMode();
		    }
		    if (event.keyCode == $keyMutePlayer){ // M - Mute Tracks
		    	muteTracks();
		    }
		    if (event.keyCode == $keyMuteTrans){ // N - Mute Trans
		    	muteTrans();
		    }
		   	if (event.keyCode == $keyHideTrans){ // H - Esconder transições
		    	minTrans(1);
		    }
		    if (event.keyCode == $keyShowTrans){ // G - Mostrar transições
		    	maxTrans(1);
		    }
		    if (event.keyCode == $keySave){ // S - Salvar Set
		    	saveSettings(2, undefined);
		    }
		    if (event.keyCode == $keyReload){ // R - Recarregar App
		    	reload(1);
		    }
		    if (event.keyCode == $keySpeedUp){ // / - Mais Velocidade
		    	manche(1);
		    }
		    if (event.keyCode == $keySpeedDown){ // ; - Menos Velocidade
		    	manche(2);
		    }
		    if (event.keyCode == $keyFadeMasterIn){ // . - Fade Master++
		    	manche(3);
		    }
		    if (event.keyCode == $keyFadeMasterOut){ // , - Fade Master--
		    	manche(4);
		    }
		    if (event.keyCode == $keyLoad){ // L - Load Set
		    	loadSettings(1);
		    }
		    if (event.keyCode == $keyNextSet){ // D - Set ++
		    	manche(5);
		    }
		    if (event.keyCode == $keyPreviousSet){ // A - Set --
		    	manche(6);
		    }
		    if (event.keyCode == $keyVolUp){ // W - Volume ++
		    	manche(7);
		    }
		    if (event.keyCode == $keyVolDown){ // Q - Volume --
		    	manche(8);
		    }
		    if (event.keyCode == $keyResetSpeed){ // ] - Reset Velocidade
		    	manche(9);
		    }
		    if (event.keyCode == $keySeekForward){ // B - Avançar Tempo
		    	manche(10);
		    }
		    if (event.keyCode == $keySeekBackward){ // V - Voltar Tempo
		    	manche(11);
		    }
		    if (event.keyCode == $keyEnableVolumeTrack){ // C - Habilitar Custom Number
		    	toggleVzCheck(currentTrackNumber);
		    }
		    if (event.keyCode == $keyApplyVolTrack){ // \ - Apliccar volume na track
		    	aplVolTrack(currentTrackNumber);
		    }
		}
	});
}
function solveShenanigans(){
	if ($track1LoopMin < 0){
		$track1LoopMin = 0;
	}
	if ($track2LoopMin < 0){
		$track2LoopMin = 0;
	}
	if ($track3LoopMin < 0){
		$track3LoopMin = 0;
	}
	if ($track4LoopMin < 0){
		$track4LoopMin = 0;
	}
	if ($track5LoopMin < 0){
		$track5LoopMin = 0;
	}
	if ($track6LoopMin < 0){
		$track6LoopMin = 0;
	}
	if ($track7LoopMin < 0){
		$track7LoopMin = 0;
	}
}
function updateVolumeRange(ids){
	updateTitleBar();
	if (ids == 1){
		var volume = document.getElementById('audioCurrentTrack').volume;
		document.getElementById('currentTrackVolume').value = volume;
		$firstAudioVol = volume;
	} else {
		var volume = document.getElementById('secondAudioCurrentTrack').volume;
		document.getElementById('secondCurrentTrackVolume').value = volume;
		$secondAudioVol = volume;
	}
}
function updateFadeTracks(){
	var f = document.getElementById('fadeTracksRange').value;
	$(LabelFadeTracksNumber).html(f);
	fadeT = f;
}
function enableFadeTracks(){
	var a = document.getElementById('fadeTracksCheckbox').checked;
	if (a == true){
		showFadeTracksRange(1);
		if (loading == false){
			alert('Fade entre tracks ativado! Dica: Esse efeito só estará ativo caso a opção "Playlist Mode" também estiver ativo!');
		}
		fadeTracks = true;
	} else {
		showFadeTracksRange(2);
		fadeTracks = false;
	}
}
function enableLoadSet(){
	var l = document.getElementById('cfgPreloadSet').checked;
	if (l == true){
		animLoadSet(1);
	} else {
		animLoadSet(2);
	}
}
function updateFadeRange(id){
	if (id == 1){
		// Fade In
		var tempo = document.getElementById('fadeInRange').value;
		$(fadeInText).html(tempo);
		$fadeInTime = tempo;
	} else {
		// Fade Out
		var tempo = document.getElementById('fadeOutRange').value;
		$(fadeOuText).html(tempo);
		$fadeOuTime = tempo;
	}
	updateTitleBar();
}
function changePlaybackSpeed(){
	var speed = document.getElementById('playbackSpeed').value;
	$(playbackSpeedText).html(speed);
	document.getElementById('audioCurrentTrack').playbackRate = speed;
	document.getElementById('secondAudioCurrentTrack').playbackRate = speed;
}

function updateFadeMaster(){
	var v = document.getElementById('fadeInMaster').value;
	document.getElementById('fadeInRange').value = v;
	document.getElementById('fadeOutRange').value = v;
	$(fadeMasterText).html(v);
	updateFadeRange(1);
	updateFadeRange(2);
}

function updateVolFinalRange(ids){
	if (ids == undefined){
		ids = 1;
	} else {
		if (ids < 0 || ids > 7){
			ids = 1;
		}
	}
	var v = document.getElementById('vz' + ids).value;
}

function muteTrans(){
	var num = 1;
	if (mutedTrans == false){
		mutedTrans = true;
		while (num < 6){
			document.getElementById('audioTrans' + num).muted = true;
			document.getElementById('transVolume' + num).disabled = 'disabled';
			$("#transVolumeLabel" + num).html('Mutado');
			num++;
		}
	} else {
		mutedTrans = false;
		while (num < 6){
			document.getElementById('audioTrans' + num).muted = false;
			document.getElementById('transVolume' + num).disabled = '';
			changeTransVolume(num);
			num++;
		}
	}
}

function muteTracks(){
	if (mutedTracks == false){
		document.getElementById('audioCurrentTrack').muted = true;
		document.getElementById('secondAudioCurrentTrack').muted = true;
		mutedTracks = true;
	} else {
		document.getElementById('audioCurrentTrack').muted = false;
		document.getElementById('secondAudioCurrentTrack').muted = false;
		mutedTracks = false;
	}
}

function getCustomFadeOut(tr){
	var RE = undefined;
	if (tr == 1){
		RE = $track1customFadeOut;
	}
	if (tr == 2){
		RE = $track2customFadeOut;
	}
	if (tr == 3){
		RE = $track3customFadeOut;
	}
	if (tr == 4){
		RE = $track4customFadeOut;
	}
	if (tr == 5){
		RE = $track5customFadeOut;
	}
	if (tr == 6){
		RE = $track6customFadeOut;
	}
	if (tr == 7){
		RE = $track7customFadeOut;
	}
	return RE;
}

function getCustomFUSION(tr){
	var REs = undefined;
	if (tr == 1){
		REs = $track1FusionTime;
	}
	if (tr == 2){
		REs = $track2FusionTime;
	}
	if (tr == 3){
		REs = $track3FusionTime;
	}
	if (tr == 4){
		REs = $track4FusionTime;
	}
	if (tr == 5){
		REs = $track5FusionTime;
	}
	if (tr == 6){
		REs = $track6FusionTime;
	}
	if (tr == 7){
		REs = $track7FusionTime;
	}
	return REs;
}

function ahNaoMano(tr){
	var REsi = undefined;
	if (tr == 1){
		REsi = $customLoopTrack1;
	}
	if (tr == 2){
		REsi = $customLoopTrack2;
	}
	if (tr == 3){
		REsi = $customLoopTrack3;
	}
	if (tr == 4){
		REsi = $customLoopTrack4;
	}
	if (tr == 5){
		REsi = $customLoopTrack5;
	}
	if (tr == 6){
		REsi = $customLoopTrack6;
	}
	if (tr == 7){
		REsi = $customLoopTrack7;
	}
	return REsi;
}

function fadeOutTrack(id, mode){
	if (id == 1){
		// Track A
		var volume = document.getElementById('audioCurrentTrack').volume;
		if (volume == 0){
			if (DEBUG == true){
				console.warn("Fade Out não pode ser executado por que o volume já está no minimo");
			}
		} else {
			if (mode == 1){
				$(audioCurrentTrack).animate({volume: getCustomFadeOut(currentTrackNumber)}, parseInt($fadeOuTime));
			} else {
				var vFinal = undefined;
				if (ahNaoMano(currentTrackNumber) == false){
					vFinal = parseInt($fadeOuTime);
				} else {
					vFinal = parseInt(getCustomFUSION(currentTrackNumber)); /// WIPZU
				}
				$(audioCurrentTrack).animate({volume: 0}, vFinal);
				setTimeout(function(){ 
					document.getElementById('audioCurrentTrack').pause(); 
				}, parseInt($fadeOuTime) + 10);
			}
		}
	} else {
		// Track B
		var volume = document.getElementById('secondAudioCurrentTrack').volume;
		if (volume == 0){
			if (DEBUG == true){
				console.warn("Fade Out não pode ser executado por que o volume já está no minimo");
			}
		} else {
			if (mode == 1){
				$(secondAudioCurrentTrack).animate({volume: getCustomFadeOut(currentTrackNumber)}, parseInt($fadeOuTime));
			} else {
				var vFinal = undefined;
				if (ahNaoMano(currentTrackNumber) == false){
					vFinal = parseInt($fadeOuTime);
				} else {
					vFinal = parseInt(getCustomFUSION(currentTrackNumber)); /// WIPZU
				}
				$(secondAudioCurrentTrack).animate({volume: 0}, vFinal);
				setTimeout(function(){ 
					document.getElementById('secondAudioCurrentTrack').pause(); 
				}, parseInt($fadeOuTime) + 10);
			}
		}
	}
}

function fadeInTrack(idz, w){
	var vo = document.getElementById('vz' + w).value;
	var pos = document.getElementById('chkVz' + w).checked;
	var volumeAlternativo = document.getElementById('fadeoutCustom').value;
	var vFinal = undefined;
	if (ahNaoMano(currentTrackNumber) == false){
		vFinal = parseInt($fadeInTime);
	} else {
		vFinal = getCustomFUSION(currentTrackNumber); /// WIPZU
	}
	if (idz == 1){
		// Track A
		var volume = document.getElementById('audioCurrentTrack').volume;
		if (volume == 1){
			if (DEBUG == true){
				console.warn("Fade In não pode ser executado por que o volume já está no máximo");
			}
		} else {
			document.getElementById('audioCurrentTrack').disabled = '';
			if (pos == true){
				if (fOutAtivo == true){
					$(audioCurrentTrack).animate({volume: volumeAlternativo}, vFinal);
				} else {
					$(audioCurrentTrack).animate({volume: vo}, vFinal);
				}
			} else {
				$(audioCurrentTrack).animate({volume: 0.5}, vFinal);
			}
		}
	} else {
		// Track B
		var volume = document.getElementById('secondAudioCurrentTrack').volume;
		if (volume == 1){
			if (DEBUG == true){
				console.warn("Fade In não pode ser executado por que o volume já está no máximo");
			}
		} else {
			document.getElementById('secondAudioCurrentTrack').disabled = '';
			if (pos == true){
				if (fOutAtivo == true){
					$(secondAudioCurrentTrack).animate({volume: volumeAlternativo}, vFinal);
				} else {
					$(secondAudioCurrentTrack).animate({volume: vo}, vFinal);
				}
			} else {
				$(secondAudioCurrentTrack).animate({volume: 0.5}, vFinal);
			}
		}
	}
	setTimeout(function(){ 
		selectTrack = true;
	}, $fadeInTime);
}

function useCurrentVolume(){
	var cuVol = undefined;
	if ($id == 1){
		cuVol = document.getElementById('secondCurrentTrackVolume').value;
	} else {
		cuVol = document.getElementById('currentTrackVolume').value;
	}
	if (cuVol === 0.12 || cuVol > 0.12){
		cuVol = 0.12;
	}
	document.getElementById('fadeoutCustom').value = cuVol;
	updateCustomFadeOut();
}

function changeTrackVolume(trackId){
	var ida = parseInt(trackId);
	// Trilha principal
	if (ida == 0){
		var v = document.getElementById("currentTrackVolume").value;
		document.getElementById("audioCurrentTrack").volume = v;
		$(audioVolumeLabel1).html(v);
	}
	// Segunda Trilha principal
	if (ida == 1){
		var v = document.getElementById("secondCurrentTrackVolume").value;
		document.getElementById("secondAudioCurrentTrack").volume = v;
		$(audioVolumeLabel2).html(v);
	}
}

function changeTransVolume(transId){
	var ida = parseInt(transId);
	var v = document.getElementById("transVolume" + ida).value;
	document.getElementById("audioTrans" + ida).volume = v;
	$("#transVolumeLabel" + ida).html(v);
	if (ida === 1){
		$trans1Vol = parseFloat(v);
	}
	if (ida === 2){
		$trans2Vol = parseFloat(v);
	}
	if (ida === 3){
		$trans3Vol = parseFloat(v);
	}
	if (ida === 4){
		$trans4Vol = parseFloat(v);
	}
	if (ida === 5){
		$trans5Vol = parseFloat(v);
	}
}

function playTrans(transId){
	var id = parseInt(transId);
	var path = document.getElementById('transLabel' + id).value;
	if (id < 0){
		id = 1;
	}
	if (path == "Nenhum arquivo foi selecionado"){
		alert("(Transição " + id + ") - Você precisa selecionar um arquivo de audio antes!");
	} else {
		$("#textCurrentTrans" + id).html(getFileName(path));
		$("#textCurrentTrans").html(getFileName(path));
		document.getElementById('audioTrans' + id).src = path;
		document.getElementById('audioTrans' + id).play();
		if (DEBUG == true){
			console.log("Transição: ID: " + id + path);
		}
	}
}

function applyFadeTrack(player, trackId){
	var currentTime = undefined;
	var duration = undefined;
	var climax = undefined;
	var an = trackId - 1;
	var timer = setInterval(function(){
		var tempoDeFade = document.getElementById('fadeTracksRange').value;
		if (player == 1){ // ID audioCurrentTrack
			currentTime = parseInt(document.getElementById('audioCurrentTrack').currentTime);
			duration = parseInt(document.getElementById('audioCurrentTrack').duration);
		} else {		  // ID secondAudioCurrentTrack
			currentTime = parseInt(document.getElementById('secondAudioCurrentTrack').currentTime);
			duration = parseInt(document.getElementById('secondAudioCurrentTrack').duration);
		}
		climax = duration - tempoDeFade;
		if (currentTime == climax || currentTime > climax){
			if (trackId < 8){
				if (DEBUG == true){
					console.log("Aplicando fade entre a track " + an + " e " + trackId);
				}
				playMusic(trackId);
				clearInterval(timer);
			} else {
				finishPlaylist();
				clearInterval(timer);
			}
		}
	}, 10);
}

function finishPlaylist(){
	document.getElementById('audioCurrentTrack').loop = '';
	document.getElementById('secondAudioCurrentTrack').loop = '';
	document.getElementById('secondAudioCurrentTrack').addEventListener('ended', function(){
		playlistDone();
	});
	document.getElementById('audioCurrentTrack').addEventListener('ended', function(){
		playlistDone();
	});
}

function playlistDone(){
	playlistActive = false;
	selectTrack = true;
	fadeOutTrack(1);
	fadeOutTrack(2);
	clearGreenPlay();
	document.getElementById('playlistBtn').value = "Playlist Mode: OFF";
	$(playlistBtn).addClass('PUTAQUEPARIU');
	$(playlistBtn).removeClass('btnActive');
	document.getElementById('audioCurrentTrack').loop = 'loop';
	document.getElementById('secondAudioCurrentTrack').loop = 'loop';
	$(currentId).html("N/A");
	$(textCurrentTrack).html("Playlist Concluída!");
	if (DEBUG == true){
		console.info("Playlist Mode: A playlist foi concluída!");
	}
}

function checkCustomLOOP(trackNumber){
	if (playlistActive === false){
		if (trackNumber < 0 || trackNumber > 7){
			trackNumber = 1;
		}
		if (trackNumber == 1){
			var tempoMinimo = $track1LoopMin;
			var tempoMaximo = $track1LoopMax;
			if ($customLoopTrack1 == true){
				cPlay = false;
				checkPlayerTempo = setInterval(function(){
					if ($id == 1){ // secondAudioCurrentTrack => audioCurrentTrack
						var plyy = document.getElementById('secondAudioCurrentTrack').currentTime;
						if (plyy === tempoMaximo || plyy > tempoMaximo){
							playMusic(trackNumber);
							document.getElementById('audioCurrentTrack').currentTime = tempoMinimo;
							document.getElementById('audioCurrentTrack').play();
						}
					} else {
						var plyy = document.getElementById('audioCurrentTrack').currentTime;
						if (plyy === tempoMaximo || plyy > tempoMaximo){
							playMusic(trackNumber);
							document.getElementById('secondAudioCurrentTrack').currentTime = tempoMinimo;
							document.getElementById('secondAudioCurrentTrack').play();
						}
					}
				}, 25);
			}
		}
		if (trackNumber == 2){
			var tempoMinimo = $track2LoopMin;
			var tempoMaximo = $track2LoopMax;
			if ($customLoopTrack2 == true){
				cPlay = false;
				checkPlayerTempo = setInterval(function(){
					if ($id == 1){ // secondAudioCurrentTrack => audioCurrentTrack
						var plyy = document.getElementById('secondAudioCurrentTrack').currentTime;
						if (plyy === tempoMaximo || plyy > tempoMaximo){
							playMusic(trackNumber);
							document.getElementById('audioCurrentTrack').currentTime = tempoMinimo;
							document.getElementById('audioCurrentTrack').play();
						}
					} else {
						var plyy = document.getElementById('audioCurrentTrack').currentTime;
						if (plyy === tempoMaximo || plyy > tempoMaximo){
							playMusic(trackNumber);
							document.getElementById('secondAudioCurrentTrack').currentTime = tempoMinimo;
							document.getElementById('secondAudioCurrentTrack').play();
						}
					}
				}, 25);
			}
		}
		if (trackNumber == 3){
			var tempoMinimo = $track3LoopMin;
			var tempoMaximo = $track3LoopMax;
			if ($customLoopTrack3 == true){
				cPlay = false;
				checkPlayerTempo = setInterval(function(){
					if ($id == 1){ // secondAudioCurrentTrack => audioCurrentTrack
						var plyy = document.getElementById('secondAudioCurrentTrack').currentTime;
						if (plyy === tempoMaximo || plyy > tempoMaximo){
							playMusic(trackNumber);
							document.getElementById('audioCurrentTrack').currentTime = tempoMinimo;
							document.getElementById('audioCurrentTrack').play();
						}
					} else {
						var plyy = document.getElementById('audioCurrentTrack').currentTime;
						if (plyy === tempoMaximo || plyy > tempoMaximo){
							playMusic(trackNumber);
							document.getElementById('secondAudioCurrentTrack').currentTime = tempoMinimo;
							document.getElementById('secondAudioCurrentTrack').play();
						}
					}
				}, 25);
			}
		}
		if (trackNumber == 4){
			var tempoMinimo = $track4LoopMin;
			var tempoMaximo = $track4LoopMax;
			if ($customLoopTrack4 == true){
				cPlay = false;
				checkPlayerTempo = setInterval(function(){
					if ($id == 1){ // secondAudioCurrentTrack => audioCurrentTrack
						var plyy = document.getElementById('secondAudioCurrentTrack').currentTime;
						if (plyy === tempoMaximo || plyy > tempoMaximo){
							playMusic(trackNumber);
							document.getElementById('audioCurrentTrack').currentTime = tempoMinimo;
							document.getElementById('audioCurrentTrack').play();
						}
					} else {
						var plyy = document.getElementById('audioCurrentTrack').currentTime;
						if (plyy === tempoMaximo || plyy > tempoMaximo){
							playMusic(trackNumber);
							document.getElementById('secondAudioCurrentTrack').currentTime = tempoMinimo;
							document.getElementById('secondAudioCurrentTrack').play();
						}
					}
				}, 25);
			}
		}
		if (trackNumber == 5){
			var tempoMinimo = $track5LoopMin;
			var tempoMaximo = $track5LoopMax;
			if ($customLoopTrack5 == true){
				cPlay = false;
				checkPlayerTempo = setInterval(function(){
					if ($id == 1){ // secondAudioCurrentTrack => audioCurrentTrack
						var plyy = document.getElementById('secondAudioCurrentTrack').currentTime;
						if (plyy === tempoMaximo || plyy > tempoMaximo){
							playMusic(trackNumber);
							document.getElementById('audioCurrentTrack').currentTime = tempoMinimo;
							document.getElementById('audioCurrentTrack').play();
						}
					} else {
						var plyy = document.getElementById('audioCurrentTrack').currentTime;
						if (plyy === tempoMaximo || plyy > tempoMaximo){
							playMusic(trackNumber);
							document.getElementById('secondAudioCurrentTrack').currentTime = tempoMinimo;
							document.getElementById('secondAudioCurrentTrack').play();
						}
					}
				}, 25);
			}
		}
		if (trackNumber == 6){
			var tempoMinimo = $track6LoopMin;
			var tempoMaximo = $track6LoopMax;
			if ($customLoopTrack6 == true){
				cPlay = false;
				checkPlayerTempo = setInterval(function(){
					if ($id == 1){ // secondAudioCurrentTrack => audioCurrentTrack
						var plyy = document.getElementById('secondAudioCurrentTrack').currentTime;
						if (plyy === tempoMaximo || plyy > tempoMaximo){
							playMusic(trackNumber);
							document.getElementById('audioCurrentTrack').currentTime = tempoMinimo;
							document.getElementById('audioCurrentTrack').play();
						}
					} else {
						var plyy = document.getElementById('audioCurrentTrack').currentTime;
						if (plyy === tempoMaximo || plyy > tempoMaximo){
							playMusic(trackNumber);
							document.getElementById('secondAudioCurrentTrack').currentTime = tempoMinimo;
							document.getElementById('secondAudioCurrentTrack').play();
						}
					}
				}, 25);
			}
		}
		if (trackNumber == 7){
			var tempoMinimo = $track7LoopMin;
			var tempoMaximo = $track7LoopMax;
			if ($customLoopTrack7 == true){
				cPlay = false;
				checkPlayerTempo = setInterval(function(){
					if ($id == 1){ // secondAudioCurrentTrack => audioCurrentTrack
						var plyy = document.getElementById('secondAudioCurrentTrack').currentTime;
						if (plyy === tempoMaximo || plyy > tempoMaximo){
							playMusic(trackNumber);
							document.getElementById('audioCurrentTrack').currentTime = tempoMinimo;
							document.getElementById('audioCurrentTrack').play();
						}
					} else {
						var plyy = document.getElementById('audioCurrentTrack').currentTime;
						if (plyy === tempoMaximo || plyy > tempoMaximo){
							playMusic(trackNumber);
							document.getElementById('secondAudioCurrentTrack').currentTime = tempoMinimo;
							document.getElementById('secondAudioCurrentTrack').play();
						}
					}
				}, 25);
			}
		}
		cPlay = true;
	} else {
		console.log("Modo de repetição não pode ser ativo caso a playlist estiver ativa");
	}
}
function playMusic(trackId){
	try{
		clearInterval(checkPlayerTempo);
		var set = parseInt(trackId);
		if (set < 0 || set > 7){
			if (playlistActive == true && fadeTracks == true){
				playlistDone();
			} else {
				set = 1;
			}
		}
		var path = document.getElementById('lbl' + set).value;
		if (path == "Nenhum arquivo foi selecionado"){
			if (playlistActive == true && fadeTracks == true){
				playlistDone();
			} else {
				alert("(Track " + set + ") - Você precisa selecionar um arquivo de audio antes!");
			}
		} else {
			clearGreenPlay();
			btnCurrent = set;
			selectTrack = false;
		    setTimeout(function(){ 
		    	selectTrack = true; 
		    }, parseInt($fadeInTime / 3));
			if ($id == 1){
				fadeOutTrack(2);
				fadeInTrack(1, set); // 1
				showHidePlayers(1);
				document.getElementById('audioCurrentTrack').src = path;
				if (cPlay == true){
					document.getElementById('audioCurrentTrack').play();
				}
				$secondAudioVol = document.getElementById('secondAudioCurrentTrack').volume;
				document.getElementById('secondCurrentTrackVolume').disabled = 'disabled';
				document.getElementById('currentTrackVolume').disabled = '';
				if (fadeTracks == true && playlistActive == true){
					btnCurrent++;
					applyFadeTrack(1, btnCurrent);
				}
				$id = 2;
			} else {
				fadeOutTrack(1);
				fadeInTrack(2, set); // 2
				showHidePlayers(2);
				document.getElementById('secondAudioCurrentTrack').src = path;
				if (cPlay == true){
					document.getElementById('secondAudioCurrentTrack').play();
				}
				$firstAudioVol = document.getElementById('audioCurrentTrack').volume;
				document.getElementById('currentTrackVolume').disabled = 'disabled';
				document.getElementById('secondCurrentTrackVolume').disabled = '';
				if (fadeTracks == true && playlistActive == true){
					btnCurrent++;
					applyFadeTrack(2, btnCurrent);
				}
				$id = 1;
			}
			$currentSong = path;
			getMusicNameToFile(getFileName($currentSong));
			document.getElementById('m' + set).className = "itemPlay";
			var nome = getFileName(path);
			if (nome.length > 85){
				var trim = nome.substring(28, 200);
				$(textCurrentTrack).html("..." + trim);
			} else {
				$(textCurrentTrack).html(nome);
			}
			currentTrackNumber = set;
			$(currentId).html(currentTrackNumber);
			var CSet = document.getElementById('setSelect').value;
			if (canShowNotify == true){
				showNotify("MythDeck - Musica atual", "Track: " + currentTrackNumber + "\nNome: " + getFileName(path), 5000);
			}
			if (DEBUG == true){
				console.info("Track: " + set + " - Nome: " + nome);
			}
			changePlaybackSpeed();
			if (playlistActive === false){
				checkCustomLOOP(currentTrackNumber);
			}
			// Modo de Playlist SEM fade Tracks
			if (fadeTracks == false){
				document.getElementById('audioCurrentTrack').addEventListener('ended', function(){
				    if (playlistActive == true){
				    	btnCurrent++;
				    	if (btnCurrent > 7){
				    		btnCurrent = 1;
				    		playlistDone();
				    	} else {
				    		if ($id == 2){
				    			playMusic(btnCurrent);
				    		}
				    	}
				    }
				});
				document.getElementById('secondAudioCurrentTrack').addEventListener('ended', function(){
				    if (playlistActive == true){
				    	btnCurrent++;
				    	if (btnCurrent > 7){
				    		btnCurrent = 1;
				    		playlistDone();
				    	} else {
				    		if ($id == 1){
				    			playMusic(btnCurrent);
				    		}
				    	}
				    }
				});
			}
		}
	} catch (errorzu){
		console.log("Erro ao reproduzir música " + trackId + " - " + errorzu);
	}
};
function minTrans(t){
	if (transAnim == true){
		transAnim = false;
		document.getElementById('minTrans0' + t).disabled = 'disabled';
		document.getElementById('maxTrans0' + t).disabled = '';
		$('#transContent' + t).fadeOut(250);
		$('#trans' + t).animate({height: '1px'}, 250);
		setTimeout(function(){ 
			transAnim = true;
		}, 251);
	}
}
function maxTrans(t){
	if (transAnim == true){
		transAnim = false;
		$('#trans' + t).animate({height: '368px'}, 250);
		$('#transContent' + t).fadeIn(500);
		document.getElementById('maxTrans0' + t).disabled = 'disabled';
		document.getElementById('minTrans0' + t).disabled = '';
		setTimeout(function(){ 
			transAnim = true;
		}, 251);
	}
}
function resetFusionTime(){
	document.getElementById('fadeInOutCustom').value = 1000;
	updateFusionTime(currentTrackPersonSet);
}
function updateFusionTime(vall){
	var valor = document.getElementById('fadeInOutCustom').value;
	if (valor < 1){
		valor = 1;
		document.getElementById('fadeInOutCustom').value = valor;
	}
	if (vall == 1){
		$track1FusionTime = valor;
	}
	if (vall == 2){
		$track2FusionTime = valor;
	}
	if (vall == 3){
		$track3FusionTime = valor;
	}
	if (vall == 4){
		$track4FusionTime = valor;
	}
	if (vall == 5){
		$track5FusionTime = valor;
	}
	if (vall == 6){
		$track6FusionTime = valor;
	}
	if (vall == 7){
		$track7FusionTime = valor;
	}
}
function manche(mov){
	var pleier;
	var pbPORRA;
	if ($id == 1){
		pleier = document.getElementById('secondCurrentTrackVolume');
		pbPORRA = document.getElementById('secondAudioCurrentTrack');
	} else {
		pleier = document.getElementById('currentTrackVolume');
		pbPORRA = document.getElementById('audioCurrentTrack');
	}
	var veloc = document.getElementById('playbackSpeed');
	var outraVezFadeMaster = document.getElementById('fadeInMaster');
	var sete = document.getElementById('setSelect');
	if (mov == 1){ // Mais Velocidade
		if (buff != 0){
			buff = 20 / 200 * 4;
		}
		var speedz = parseFloat(veloc.value) + parseFloat(0.1 + buff);
		veloc.value = speedz;
	}
	if (mov == 2){ // Menos Velocidade
		if (buff != 0){
			buff = 20 / 200 * 4;
		}
		var speedz = parseFloat(veloc.value) - parseFloat(0.1 + buff);
		veloc.value = speedz;
	}
	if (mov == 3){ // Fade Master ++
		if (buff != 0){
			buff = 480;
		}
		var adic = parseInt(outraVezFadeMaster.value) + parseInt(buff + 20);
		outraVezFadeMaster.value = adic;
	}
	if (mov == 4){ // Fade Master --
		if (buff != 0){
			buff = 480;
		}
		var adic = parseInt(outraVezFadeMaster.value) - parseInt(buff + 20);
		outraVezFadeMaster.value = adic;
	}
	if (mov == 5){ // Set ++
		var umaVar = parseInt(sete.value) + 1;
		if (umaVar > 9){
			umaVar = 9;
		} else {
			sete.value = umaVar;
		} // WIP
	}
	if (mov == 6){ // Set --
		var umaVar = parseInt(sete.value) - 1;
		if (umaVar < 1){
			umaVar = 1;
		} else {
			sete.value = umaVar;
		}
	}
	if (mov == 7){ // Aumentar o volume da track atual
		if (buff != 0){
			buff = 20 / 200 * 4;
		}
		var volum = parseFloat(pleier.value) + parseFloat(0.01 + buff);
		if (volum > 1){
			volum = 1;
		}
		pleier.value = volum;
	}
	if (mov == 8){ // Diminuir o volume da track atual
		if (buff != 0){
			buff = 20 / 200 * 4;
		}
		var volum = parseFloat(pleier.value) - parseFloat(0.01 + buff);
		if (volum < 0){
			volum = 0;
		}
		pleier.value = volum;
	}
	if (mov == 9){ // Reset Velocidade
		veloc.value = 1;
	}
	if (mov == 10){ // Avançar 5 Segundos
		var temp = parseInt(pbPORRA.currentTime) + parseInt(buff);
		pbPORRA.currentTime = temp + 5;
	}
	if (mov == 11){ // Voltar 5 Segundos
		var temp = parseInt(pbPORRA.currentTime) - parseInt(buff);
		pbPORRA.currentTime = temp - 5;
	}
	changeTrackVolume(0);
	changeTrackVolume(1);
	changePlaybackSpeed();
	updateFadeMaster();
}
function aplVolTrack(track){
	var possible;
	var actPlayer;
	if ($id == 1){
		actPlayer = document.getElementById('secondCurrentTrackVolume');
	} else {
		actPlayer = document.getElementById('currentTrackVolume');
	}
	possible = document.getElementById('chkVz' + track).checked;
	if (possible == true){
		if (actPlayer.value > 0){
			document.getElementById('vz' + track).value = actPlayer.value;
			updateVolFinalRange(track);
		} else {
			if (DEBUG == true){
				console.warn('Não é possivel modificar o volume caso o mesmo seja igual ou menor que zero!');
			}
		}
	} else {
		if (DEBUG == true){
			console.warn('Não é possivel modificar o volume caso o mesmo não estiver habilitado!');
		}
	}
}