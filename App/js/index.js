/*
	MythDeck - index.js
	Por mitosan/mscore/misto_quente
	Help me - please
*/
var fs;
$id = 1;
var buff;
var decr;
var cPlay;
var seeking;
var canLoad;
var loading;
var getPads;
var grabKey;
var what = 0;
var logoAnim;
var jsGamepad;
var transAnim;
var fOutAtivo;
var gamepadId;
var fadeT = 1;
var winH = 560;
var checkTempo;
var onSettings;
var fadeTracks;
var micWaveSpec;
var selectTrack;
var winW = 1340;
var DEBUG = true;
$version = '1.0';
$currentSong = '';
var updateBrowser;
var canShowNotify;
$fadeInTime = 2000;
$fadeOuTime = 2000;
$firstAudioVol = 0;
$secondAudioVol = 0;
$saveInFile = false;
var musicTxt = false;
var bandNotCount = 0;
var dummyCounter = 0;
var checkPlayerTempo;
var logoAnimCount = 0;
var btnCurrent = null;
var currentTrackNumber;
var enableMicVU = true;
var mutedTrans = false;
var mutedTracks = false;
var currentTrackPersonSet;
var playlistActive = false;
var rocketBroadcasterCompatMode = false;

////////////////////////////////////////////////////////////////////////////////////////\
//_____________________________________________________________________________________||
//																					   ||
// 						Setup de configurações personalizadas 						   ||
//_____________________________________________________________________________________||
//																					   ||
$track1LoopMin = 0;//																   ||
$track1LoopMax = 1;//																   ||
$track2LoopMin = 0;//																   ||
$track2LoopMax = 1;//																   ||
$track3LoopMin = 0;//																   ||
$track3LoopMax = 1;//																   ||
$track4LoopMin = 0;//																   ||
$track4LoopMax = 1;//																   ||
$track5LoopMin = 0;//																   ||
$track5LoopMax = 1;//																   ||
$track6LoopMin = 0;//																   ||
$track6LoopMax = 1;//																   ||
$track7LoopMin = 0;//																   ||
$track7LoopMax = 1;//																   ||
$track1FusionTime = 1000;//															   ||
$track2FusionTime = 1000;//															   ||
$track3FusionTime = 1000;//															   ||
$track4FusionTime = 1000;//															   ||
$track5FusionTime = 1000;//															   ||
$track6FusionTime = 1000;//															   ||
$track7FusionTime = 1000;//															   ||
$customLoopTrack1 = false;//														   ||
$customLoopTrack2 = false;//														   ||
$customLoopTrack3 = false;//														   ||
$customLoopTrack4 = false;//														   ||
$customLoopTrack5 = false;//														   ||
$customLoopTrack6 = false;//														   ||
$customLoopTrack7 = false;//														   ||
$track1customFadeOut = 0.08;//														   ||
$track2customFadeOut = 0.08;//														   ||
$track3customFadeOut = 0.08;//														   ||
$track4customFadeOut = 0.08;//														   ||
$track5customFadeOut = 0.08;//														   ||
$track6customFadeOut = 0.08;//														   ||
$track7customFadeOut = 0.08;//														   ||
//_____________________________________________________________________________________||
//																					   ||
// 						Setup de teclas de atalho do MythDeck 						   ||
//_____________________________________________________________________________________||
// 							-- Tracks --											   ||
$keyTrack1 = 49; 		    // Tecla 1												   ||
$keyTrack2 = 50; 		    // Tecla 2												   ||
$keyTrack3 = 51; 		    // Tecla 3												   ||
$keyTrack4 = 52; 		    // Tecla 4												   ||
$keyTrack5 = 53; 		    // Tecla 5												   ||
$keyTrack6 = 54; 		    // Tecla 6												   ||
$keyTrack7 = 55; 		    // Tecla 7												   ||
$keyPause = 32;  		    // Tecla Espaço											   ||
$keyTogglePlaylist = 112;   // Tecla P												   ||
$keyEnableVolumeTrack = 99; // Tecla C												   ||
$keyApplyVolTrack = 92;		// Tecla \ *											   ||
$keyMutePlayer = 109;		// Tecla M												   ||
$keySeekForward = 98;		// Tecla B												   ||
$keySeekBackward = 118;		// Tecla V												   ||
// 							-- Transições --										   ||
$keyTrans1 = 56;     		// Tecla 8												   ||
$keyTrans2 = 57;     		// Tecla 9												   ||
$keyTrans3 = 48;     		// Tecla 0												   ||
$keyTrans4 = 45;     		// Tecla -												   ||
$keyTrans5 = 61;     		// Tecla =												   ||
$keyStopTrans = 13   		// Tecla Enter 											   ||
$keyMuteTrans = 110;		// Tecla N												   ||
$keyShowTrans = 103;		// Tecla G												   ||
$keyHideTrans = 104;		// Tecla H												   ||
// 							-- Volume --											   ||
$keyVolUp = 119;			// Tecla W												   ||
$keyVolDown = 113;			// Tecla Q												   ||
// 							// Fade In - Fade Out  									   ||
$keyFadeMasterIn = 46;		// Tecla .												   ||
$keyFadeMasterOut = 44;		// Tecka ,												   ||
$keyApplyFadeIn = 120;  	// Tecla Z												   ||
$keyApplyFadeOut = 122; 	// Tecla X												   ||
// 							-- Speed --												   ||
$keySpeedUp = 47;			// Tecla /												   ||
$keySpeedDown = 59;			// Tecla ;												   ||
$keyResetSpeed = 93;		// Tecla ]												   ||
// 							-- Save - Load --  										   ||
$keyLoad = 108;				// Tecla L												   ||
$keySave = 115;				// Tecla S												   ||
$keyReload = 114;			// Tecla R												   ||
//							-- Teclas de Buff --									   ||
$keyBuff = 192;				// Tecla ' (onkeydown/up)								   ||
// 							-- Sets -- 												   ||
$keyNextSet = 100;			// Tecla D												   ||
$keyPreviousSet = 97;		// Tecla A												   ||
//_____________________________________________________________________________________||
//																					   ||
// Volume das Transições	     													   ||
//_____________________________________________________________________________________||
// 																					   ||
$trans1Vol = 0.5;//																	   ||
$trans2Vol = 0.5;//																	   ||
$trans3Vol = 0.5;//																	   ||
$trans4Vol = 0.5;//																	   ||
$trans5Vol = 0.5;//																	   ||
//_____________________________________________________________________________________||
//																					   ||
// Funções																			   ||
//______________________________________________________________________________________/

function MDK_load(){
	loading = true;
	fs  = require('fs');
	console.info('MythDeck V. ' + $version);
	$(loadingDiv).fadeIn(50);
	doBootProgressBar('10%', '...Programa Iniciado...', 50);
	setUpDivs();
	// Checando se há configurações para ser carregadas
	document.title = 'Aguarde - Checando Configs de Preload...';
	doBootProgressBar('50%', '...Checando Configs de Preload...', 50);
	canShowNotify = false;
	if (localStorage.getItem("Preload") === null){
		document.title = "Aguarde - Criando variáveis no bando de dados...";
		canLoad = false;
		fadeTracks = false;
		localStorage.setItem("Preload", false);
		if (DEBUG == true){
			console.log("Preload Inexistente...");
		}
	} else {
		if (JSON.parse(localStorage.getItem("Preload")) === false){
			if (localStorage.getItem("playlistMode") === null){
				canLoad = false;
				if (DEBUG == true){
					console.log("Preload está desligado, pulando essa parte...");
				}
			} else {
				canLoad = true;
			}
		} else {
			canLoad = true;
			loadSettings(0);
			if (DEBUG == true){
				console.log("Preload está ligado!");
			}
		}
	}
	// Hack
	bandNotCount = localStorage.getItem('contBandNot');
	if (bandNotCount === 0 || bandNotCount === null){
		saveSettings(2, 1);
		saveSettings(2, 2);
		saveSettings(2, 3);
		saveSettings(2, 4);
		saveSettings(2, 5);
		saveSettings(2, 6);
		saveSettings(2, 7);
		saveSettings(2, 8);
		saveSettings(2, 9);
		bandNotCount++;
	} else {
		bandNotCount++;
	}
	localStorage.setItem('contBandNot', bandNotCount);
	musicTxt = JSON.parse(localStorage.getItem("musicOnTxt"));
	if (musicTxt === true){
		document.getElementById("cfgEnableMusicTxtCompat").checked = true;
	} else {
		document.getElementById("cfgEnableMusicTxtCompat").checked = false;
	}

	// VU Mic
	document.title = "Aguarde - Iniciando WaveSurfer.js...";
	doBootProgressBar("70%", "...Iniciando WaveSurfer.js...", 50);
	enableMicVU = JSON.parse(localStorage.getItem("enableMicVU"));
	if (enableMicVU === true){
		document.getElementById("cfgEnableWaveJs").checked = true;
		$(scripts).html('<script type="text/javascript" src="js/wavesurfer.min.js"></script><script type="text/javascript" src="js/wavesurfer.microphone.min.js"></script>');
		micWaveSpec = WaveSurfer.create({
			container: '#micVU', 
			waveColor: 'lime', 
			plugins: [WaveSurfer.microphone.create()]
		});
		micWaveSpec.microphone.start();
	} else {
		animSettings(9);
	}

	// 100%
	document.title = "MythDeck - Load Ok!";
	doBootProgressBar("90%", "Load Ok!", 50);
	setTimeout(function(){
		$(loadingDiv).css({filter: "blur(4px)"});
		$(loadingDiv).fadeOut({duration: 1000, queue: false});
	}, 250);
	$(this).off('keypress');
	$(app).fadeIn(250);
	onSettings = false;
	cPlay = true;
	$(app).css({filter: "blur(0px)"});
	document.title = "MythDeck V. " + $version;
	var update = setInterval(function(){ 
		updateTitleBar();
		updateLabels();
		loseFocus(); 
		
		getTime(1);
	}, 20);
	transAnim = true;
	selectTrack = true;
	$id = 1;
	buff = 0;
	loading = false;
	LISTEN();
}


function openLink(link){
	if (navigator.onLine == true){
		window.open(link, 'popUpWindow');
	} else {
		alert("Não é possivel abrir o link selecionado pois você está sem conexão com a internet!");
	}
}
function reload(){
	location.reload();
}
function deleteSettings(){
	canLoad = false;
	localStorage.clear();
	alert("Suas configurações foram excluídas com exito!");
	warnBack();
}
// Obrigado StackOverflow! 
// https://stackoverflow.com/questions/857618/javascript-how-to-extract-filename-from-a-file-input-control
function getFileName(fileName){ 
	var removePath = fileName.split(/(\\|\/)/g).pop();
	var filterA = removePath.replace('.mp3', '');
	var filterB = filterA.replace('.wav', '');
	var filterC = filterB.replace('.ogg', '');
	var filterD = filterC.replace('.flac', '');
	var filterE = filterD.replace('.mdeck', '');
	var filterF = filterE.replace('.mdkeys', '');
	return filterF;
}

function showNotify(titulo, texto, tempo){
	if (titulo === ''){
		titulo = 'MythDeck - Notificação';
	}
	if (texto === '') {
		texto = 'Mensagem';
	}
	try{
		var iconPath = process.cwd() + '\\App\\img\\logo.png';
		var NOTIFY = new Notification(titulo, {
			icon: iconPath,
			body: texto,
		});
		setTimeout(NOTIFY.close.bind(NOTIFY), tempo);
	}
	catch(err){
		if (DEBUG == true){
			console.error('(Notificação) Erro: ' + err);
		}
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Triggers ////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function triggerBatchLoad(){
	$('#batchLoadFileDialog').trigger('click');
}
function triggerLoadKeysCfg(){
	$('#loadKeysConfigFile').trigger('click');
}
function triggerLoadSetFromFile(){
	$('#loadSetFileDialog').trigger('click');
}
// Tracks
function triggerTrack(trId){
	if (trId === 1){
		$('#file1').trigger('click');
	}
	if (trId === 2){
		$('#file2').trigger('click');
	}
	if (trId === 3){
		$('#file3').trigger('click');
	}
	if (trId === 4){
		$('#file4').trigger('click');
	}
	if (trId === 5){
		$('#file5').trigger('click');
	}
	if (trId === 6){
		$('#file6').trigger('click');
	}
	if (trId === 7){
		$('#file7').trigger('click');
	}
}
// Transições
function triggerTrans(traId){
	if (traId === 1){
		$("#loadTrans1").trigger('click');
	}
	if (traId === 2){
		$("#loadTrans2").trigger('click');
	}
	if (traId === 3){
		$("#loadTrans3").trigger('click');
	}
	if (traId === 4){
		$("#loadTrans4").trigger('click');
	}
	if (traId === 5){
		$("#loadTrans5").trigger('click');
	}
}

function getTime(modo){
	var t = new Date;
	var internetStatus;
	var Dia = t.getDate();
	var Hora = t.getHours();
	var Ano = t.getFullYear();
	var Mes = t.getMonth() + 1;
	var Minuto = t.getMinutes();
	var Segundos = t.getSeconds();
	if (Hora.toString().length < 2){
		Hora = "0" + t.getHours(); 
	}
	if (Minuto.toString().length < 2){
		Minuto = "0" + t.getMinutes(); 
	}
	if (Segundos.toString().length < 2){
		Segundos = "0" + t.getSeconds(); 
	}
	if (navigator.onLine === false){
		internetStatus = '<b>OFFLINE</b> - ';
	} else {
		internetStatus = '';
	}
	$(time).html(internetStatus + "Dia " + Dia + " do mês " + Mes + ", " + Ano + " - " + Hora + ":" + Minuto + ":" + Segundos);
	if (modo == 1){
		return Hora + ":" + Minuto + ":" + Segundos;
	} else {
		return Dia + "/" + Mes + "/" + Ano + " - " + Hora + ":" + Minuto + ":" + Segundos;
	}
}
function getMusicNameToFile(musicName){
	if (musicTxt === true){
		if (musicName === '' || musicName === null || musicName === undefined){
			console.log("ERRO: Não foi possivel obter o nome da musica atual");
		} else {
			setTimeout(function(){
				var n = 'Musica Atual: ' + musicName;
				var APP_PATH = process.cwd();
				fs.writeFileSync(APP_PATH + "MusicaAtual.txt", n, 'utf-8');
			}, parseInt($fadeInTime) + 500);
		}
	}
}