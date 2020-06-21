/*
	MythDeck - design.js
	Por mitosan/mscore/misto_quente
	Help me - please
*/
function animSettings(anim){
	if (anim === 1){
		$(this).off('keypress');
		onSettings = true;
		$(configsDiv).css({width: '850px'});
		$(app).fadeOut({duration: 300, queue: false});
		$(bo).animate({backgroundColor: '#222'}, 600);
		$(theSets).fadeOut({duration: 100, queue: false});
		$(configsDiv).fadeIn({duration: 350, queue: false});
		$(bo).css({'background-image': 'linear-gradient(to right bottom, rgb(18, 11, 33), rgb(5, 3, 8))'});
		if (canLoad == false){
			$(loadBtn).fadeOut(1);
		} else {
			$(loadBtn).fadeIn(1);
		}
	}
	if (anim === 2){
		LISTEN();
		onSettings = false;
		$(bo).css({backgroundColor: '#000'});
		$(app).fadeIn({duration: 300, queue: false});
		$(theSets).fadeIn({duration: 100, queue: false});
		$(configsDiv).fadeOut({duration: 100, queue: false});
	}
	if (anim === 3){
		$(bo).css({'background-image': 'linear-gradient(to right bottom, rgb(46, 22, 56), rgb(9, 6, 10))'});
		$(keyConfigs).slideDown(300);
		$(keyConfigs).animate({width: '47%'}, 300);
		$(configsDiv).fadeOut(100);
		$(keyHolder).fadeIn(250);
		$(keyHolder).animate({scrollTop: 0}, 500);
	}
	if (anim === 4){
		$(bo).css({'background-image': 'linear-gradient(to right bottom, black, #0a0a0a)'});
		$(keyConfigs).animate({width: '40%'}, 100);
		$(keyHolder).animate({scrollTop: 200}, 500);
		$(keyConfigs).fadeOut({duration: 200, queue: false});
		$(keyHolder).fadeOut({duration: 150, queue: false});
		$(configsDiv).fadeIn({duration: 150, queue: false});
	}
	if (anim === 5){ // Entrando Modo Custom
		onSettings = true;
		$(app).fadeOut(100);
		setTimeout(function(){
			$(trackParameter).fadeIn({duration: 101, queue: false});
		}, 101);
	}
	if (anim === 6){ // Saindo modo custom
		saveCustomTrackSettings();
		clearInterval(checkTempo);
		$(trackParameter).fadeOut({duration: 100, queue: false});
		setTimeout(function(){
			$(app).fadeIn({duration: 101, queue: false});
			onSettings = false;
		}, 101);
	}
	if (anim === 7){ // Abrindo Browser
		$(this).off('keypress');
		$(configsDiv).fadeOut(100);
		$(internalBrowser).fadeIn(200);
	}
	if (anim == 8){ // Fechando Browser
		onSettings = false;
		$(internalBrowser).fadeOut(100);
		$(theSets).fadeIn(200);
		$(app).fadeIn(200);
		LISTEN();
	}
	if (anim === 9){ // Desabilitando wavesurfer.js
		$(wsVU).css({display: 'none'});
		$(track2Canvas).css({width: '100%'});
		$(track1Canvas).css({width: '100%'});
		$(trackAVU).css({width: '88%'});
		$(trackBVU).css({width: '88%'});
		$(vuA).css({width: '49.5%'});
		$(vuB).css({width: '49.5%'});
	}
}
function showHelp(anim){
	if (anim == 1){
		$(configsDiv).fadeOut(150);
		$(bo).css({'background-image': 'linear-gradient(to right bottom, black, rgb(30, 4, 39));'});
		$(helpContents).css({'opacity': '1', 'filter': 'blur(0px)'});
		setTimeout(function(){ 
			$(helpForm).slideDown(150);
			$(helpContents).animate({scrollTop: 0}, 500);
		}, 151);
		setTimeout(function(){ 
			$(helpForm).animate({'width': '60%'}); 
		}, 200);
	} else {
		$(helpContents).css({'opacity': '0.4', 'filter': 'blur(400px)'});
		$(helpContents).animate({scrollTop: 200}, 500);
		$(helpForm).slideUp(155);
		$(bo).css({'background-image': 'linear-gradient(to right bottom, black, #0a0a0a)'});
		setTimeout(function(){ 
			$(configsDiv).fadeIn(155);
			$(helpForm).css({'width': '51%'});
		}, 161);
		setTimeout(function(){ 
			$(helpForm).css({'width': '36%'}); 
		}, 161);
	}
}
function doBootProgressBar(porcentagem, mensagem, speedzu){
	// 90% = 100% de loading
	$(bootProgressBar).animate({width: porcentagem}, {duration: speedzu, queue: false});
	$(loadLabel).html(mensagem);
}
function helpBtn(h){
	if (h === 1){
		alert('Ao ativar essa opção, o player irá reproduzir a track atual até um ponto específico (Tempo máximo) e voltará o tempo até o tempo mínimo, formando um loop personalizado.\n\nIMPORTANTE: Essa função não funcionará mesmo quando ativa caso o modo playlist estiver ativo.');
	}
	if (h === 2){
		alert('Com essa opção você pode mudar o volume final da função \nFade Out (Tecla ' + String.fromCharCode($keyApplyFadeOut).toUpperCase() + ')');
	}
	if (h === 3){
		alert('Com essa opção você pode habilitar ou deshabilitar o loop dessa track.\nEssa opção vem ativa por padrão.');
	}
}
function clearGreenPlay(){
	var set = 1;
	while (set < 8){
		document.getElementById('m' + set).className = "itemList";
		set++;
	}
}
function warnDel(){
	$(warnForm).fadeIn({duration: 600, queue: false});
	$(configsDiv).fadeOut({duration: 500, queue: false});
	$(bo).css({"background-image": "linear-gradient(to right bottom, black, rgb(45, 0, 0))"});
}
function backToSettings(scene){
	if (scene == 1){
		$(warnForm).fadeOut({duration: 500, queue: false});
		$(configsDiv).fadeIn({duration: 500, queue: false});
		$(bo).css({'background-image': 'linear-gradient(to right bottom, black, #0a0a0a)'});
	} else {
		clearInterval(logoAnim);
		$(configsDiv).fadeIn({duration: 500, queue: false});
		$(aboutMythDeck).fadeOut({duration: 500, queue: false});
		$(bo).css({'background-image': 'linear-gradient(to right bottom, black, #0a0a0a)'});
	}
}
function warnBack(){
	$(bo).css({"background-image": "linear-gradient(to right bottom, black, #0a0a0a)"});
	$(app).fadeIn(600);
	$(theSets).fadeIn(600);
	$(warnForm).fadeOut(500);
}
function loseFocus(){
	document.getElementById('micVU').focus();
}
function aboutMyth(){
	if (DEBUG == true){
		$(bo).css({backgroundColor: "rgb(176, 122, 220)", backgroundImage: "none"});
	} else {
		$(bo).css({"background-image": "linear-gradient(to right bottom, #000, rgba(167, 0, 255, 0.08))"});
	}
	$(configsDiv).fadeOut(500);
	$(aboutMythDeck).fadeIn(500);
	logoAnim = setInterval(function(){
		$(mythLogo).css({filter: "hue-rotate(" + logoAnimCount + "deg)"});
		if (logoAnimCount == 360 || logoAnimCount > 360){
			logoAnimCount = 0;
		} else {
			logoAnimCount++;
		}
	}, 90);
}
function updateTitleBar(){
	var fi = parseInt($fadeInTime);
	var fo = parseInt($fadeOuTime);
	var id = document.getElementById('setSelect').value;
	var internetStatus = undefined;
	var CSong = "";
	if (navigator.onLine == true){
		dummyCounter = 0;
		$(currentTrack).css({backgroundImage: "linear-gradient(to right bottom, #717171, #3600da30)"});
		$(trans1).css({backgroundImage: "linear-gradient(to right bottom, #38433f, #42433dba)"});
		internetStatus = "";
	} else {
		if (dummyCounter == 1){
			showNotify("Aviso", "Você está sem conexão com a internet!\nVerifique a sua conexão.", 7000);
			dummyCounter++;
		}
		$(currentTrack).css({backgroundImage: "linear-gradient(to right bottom, #090909, rgb(255, 0, 0))"});
		$(trans1).css({backgroundImage: "linear-gradient(to right bottom, #090909, rgb(255, 0, 0))"});
		internetStatus = "OFFLINE - ";
		dummyCounter++;
	}
	if ($currentSong == ""){
		CSong = "Nenhuma Musica Foi Selecionada";
	} else {
		CSong = "Música Atual: " + getFileName($currentSong);
	}
	if (rocketBroadcasterCompatMode === false){
		document.title = internetStatus + "MythDeck V." + $version + " - " + getTime(1) + " - " + CSong + " - Set: " + id + " - Volume A: " + parseFloat($firstAudioVol).toFixed(2) + " - Volume B: " + parseFloat($secondAudioVol).toFixed(2) +" (Fade In: " + fi + "ms, Fade Out: " + fo + "ms)";
	} else {
		document.title = getFileName($currentSong) + " - MythDeck V." + $version;
	}
}
function showFadeTracksRange(anim){
	if (anim == 1){
		$(LabelFadeTracks).fadeOut(250);
		setTimeout(function(){
			$(fadeTracksRange).fadeIn(250);
			$(LabelFadeTracksInfo).fadeIn(250);
			$(LabelFadeTracksNumber).fadeIn(250);
		}, 251);
		updateFadeTracks();
		document.getElementById('fadeTracksRange').disabled = '';
	} else {
		$(fadeTracksRange).fadeOut(250);
		$(LabelFadeTracksInfo).fadeOut(250);
		$(LabelFadeTracksInfo).fadeOut(250);
		$(LabelFadeTracksNumber).fadeOut(250);
		setTimeout(function(){
			$(LabelFadeTracks).fadeIn(250);
		}, 251);
		updateFadeTracks();
		document.getElementById('fadeTracksRange').disabled = 'disabled';
	}
}
function animLoadSet(anim){
	$(configsDiv).css({height: 'auto'});
	if (anim == 1){
		$(labelPreloadSetInicial).fadeOut(250);
		setTimeout(function(){
			$(labelPreloadSet).fadeIn(250);
		}, 251);
	} else {
		$(labelPreloadSet).fadeOut(250);
		setTimeout(function(){
			$(labelPreloadSetInicial).fadeIn(250);
		}, 251);
	}
}
function updateLabels(){
	var ko;
	if ($id == 1){
		ko = document.getElementById('secondAudioCurrentTrack').currentTime;
	} else {
		ko = document.getElementById('audioCurrentTrack').currentTime;
	}
	$(customVolumeSliderLbl).html(getCustomFadeOut(currentTrackPersonSet));
	$(currentTimeForProgram).html(ko.toFixed(3));
	var v = document.getElementById('currentTrackVolume').value;
	var b = document.getElementById('secondCurrentTrackVolume').value;
	if (mutedTracks === false){
		$(audioVolumeLabel1).html(v);
		$(audioVolumeLabel2).html(b);
	} else {
		$(audioVolumeLabel1).html('Mutado');
		$(audioVolumeLabel2).html('Mutado');
	}
	return ko;
}
function showHidePlayers(playerId){
	if (playerId == 1){
		$(playerA).css({display: "inline"});
		$(playerB).css({display: "none"});
	} else {
		$(playerB).css({display: "inline"});
		$(playerA).css({display: "none"});
	}
}
function setUpDivs(){
	document.title = "Aguarde - Aplicando CSS...";
	$(appVer).html($version);
	$(app).css({filter: "blur(10px)"});
	$(trans1).animate({height: "368px"}, 1);
	$(divFinal).animate({height: "230px"}, 1);
	$(bo).css({"background-image": "linear-gradient(to right bottom, black, rgb(33, 0, 47))"});
	document.getElementById('checkboxTrackLoop').checked = true;
	$(secondAudioCurrentTrack).animate({volume: 0}, 10);
	$(audioCurrentTrack).animate({volume: 0}, 10);
	$(keyHolder).animate({scrollTop: 200}, 1);
	$(nwVer).html("Web");
	updateFusionTime();
	
	try{
		$(nwVer).html("Nw.js: " + process.versions['node-webkit'] + " - " + process.arch);
	}
	catch(err){
		if (DEBUG == true){
			console.error("Erro: " + err);
		}
	}
}
function updateFileLabel(id){
	var name = document.getElementById('file' + id).value;
	if (name === ''){
		document.getElementById('lbl' + id).title = '';
		document.getElementById('lbl' + id).value = 'Nenhum arquivo foi selecionado';
	} else {
		document.getElementById('lbl' + id).value = name;
		document.getElementById('lbl' + id).title = getFileName(name);
	}
}

function updateTransLabel(id){
	loseFocus();
	var transFile = document.getElementById('loadTrans' + id).value;
	if (transFile === ''){
		document.getElementById('transLabel' + id).value = "Nenhum arquivo foi selecionado";
	} else {
		document.getElementById('transLabel' + id).value = transFile;
	}
}

function updateTransVolume(id){
	if (id === 1){
		document.getElementById('transVolume' + id).value = $trans1Vol;
		document.getElementById('transVolumeLabel' + id).innerHTML = $trans1Vol;
	}
	if (id === 2){
		document.getElementById('transVolume' + id).value = $trans2Vol;
		document.getElementById('transVolumeLabel' + id).innerHTML = $trans2Vol;
	}
	if (id === 3){
		document.getElementById('transVolume' + id).value = $trans3Vol;
		document.getElementById('transVolumeLabel' + id).innerHTML = $trans3Vol;
	}
	if (id === 4){
		document.getElementById('transVolume' + id).value = $trans4Vol;
		document.getElementById('transVolumeLabel' + id).innerHTML = $trans4Vol;
	}
	if (id === 5){
		document.getElementById('transVolume' + id).value = $trans5Vol;
		document.getElementById('transVolumeLabel' + id).innerHTML = $trans5Vol;
	}
}
function checkboxNotify(){
	if (canShowNotify == true){
		canShowNotify = false;
		document.getElementById('cfgEnableNotify').checked = false;
	} else {
		canShowNotify = true;
		document.getElementById('cfgEnableNotify').checked = true;
	}
}
function checkboxRocketBroadcasterCompat(){
	if (rocketBroadcasterCompatMode == true){
		rocketBroadcasterCompatMode = false;
		document.getElementById('lblEnableTitleCompat').checked = false;
	} else {
		rocketBroadcasterCompatMode = true;
		document.getElementById('lblEnableTitleCompat').checked = true;
		alert("Modo de compatibilidade ativado!\nPara usar, insira a configuração a seguir em \"Metadata Capture\"\n\n %title% - %appname%");
	}
}
function checkboxUseWaveJs(){
	if (enableMicVU == true){
		enableMicVU = false;
		document.getElementById('cfgEnableWaveJs').checked = false;
	} else {
		enableMicVU = true;
		document.getElementById('cfgEnableWaveJs').checked = true;
	}
	localStorage.setItem('enableMicVU', enableMicVU);
}