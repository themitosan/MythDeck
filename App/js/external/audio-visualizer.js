//
// HTML5 audio visualizer
// "Modificações" foram feitas para se adaptar ao MythDeck
//

/* * 
 * Audio visualizer with html5 audio element
 *
 * v0.1.0
 * 
 * licenced under the MIT license
 * 
 * see my related repos:
 * - HTML5_Audio_Visualizer https://github.com/wayou/HTML5_Audio_Visualizer
 * - 3D_Audio_Spectrum_VIsualizer https://github.com/wayou/3D_Audio_Spectrum_VIsualizer
 * - selected https://github.com/wayou/selected
 * - MeowmeowPlayer https://github.com/wayou/MeowmeowPlayer
 * 
 * reference: http://www.patrick-wied.at/blog/how-to-create-audio-visualizations-with-javascript-html
 */
window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
    var RISOS = 10;
    var audio = document.getElementById('audioCurrentTrack');
    var ctx = new AudioContext();
    var analyser = ctx.createAnalyser();
    var audioSrc = ctx.createMediaElementSource(audio);
    // we have to connect the MediaElementSource with the analyser 
    audioSrc.connect(analyser);
    analyser.connect(ctx.destination);
    // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
    // analyser.fftSize = 64;
    // frequencyBinCount tells you how many values you'll receive from the analyser
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);

    // we're ready to receive some data!
    var canvas = document.getElementById('track1Canvas'),
        cwidth = canvas.width,
        cheight = canvas.height - 2,
        meterWidth = 10, //width of the meters in the spectrum - 10
        gap = 2, //gap between meters - 2
        capHeight = 2, // 2
        capStyle = '#00000000',
        meterNum = 800 / (10 + 2), //count of the meters - 800 / (10 + 2)
        capYPositionArray = []; ////store the vertical position of hte caps for the preivous frame
    ctx = canvas.getContext('2d'),
    gradient = ctx.createLinearGradient(0, 0, 0, 90);
    gradient.addColorStop(1, '#0f0');
    gradient.addColorStop(0.5, '#ff0'); 
    gradient.addColorStop(0, '#f00');
    // loop
    function renderFrame() {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        var step = Math.round(array.length / meterNum); //sample limited data from the total array
        ctx.clearRect(0, 0, cwidth, cheight);
        for (var i = 0; i < meterNum; i++) { // var i = 0
            var value = array[i * step];
            if (capYPositionArray.length < Math.round(meterNum)) {
                capYPositionArray.push(value);
            };
            ctx.fillStyle = capStyle;
            //draw the cap, with transition effect
            if (value < capYPositionArray[i]) {
                ctx.fillRect(i * RISOS, cheight - (--capYPositionArray[i]), meterWidth, capHeight); // i * 12
            } else {
                ctx.fillRect(i * RISOS, cheight - value, meterWidth, capHeight); // i * 12
                capYPositionArray[i] = value;
            };
            ctx.fillStyle = gradient; //set the filllStyle to gradient for a better look
            ctx.fillRect(i * RISOS /*meterWidth+gap*/ , cheight - value + capHeight, meterWidth, cheight); //the meter
        }
        requestAnimationFrame(renderFrame);
    }
    renderFrame();

    // Honestamente, eu não fico orgulhoso de ver o que eu tive que fazer aqui, mas pelo menos funciona!
    // Logo não me julgue!

    var audiu = document.getElementById('secondAudioCurrentTrack');
    var ctz = new AudioContext();
    var analizer = ctz.createAnalyser();
    var audiuSrc = ctz.createMediaElementSource(audiu);
    audiuSrc.connect(analizer);
    analizer.connect(ctz.destination);
    var freqData = new Uint8Array(analizer.frequencyBinCount);

    // we're ready to receive some data!
    var canvaz = document.getElementById('track2Canvas'),
        cwidth = canvaz.width,
        cheight = canvaz.height - 2,
        meterWidth = 10, //width of the meters in the spectrum
        gap = 2, //gap between meters
        capHeight = 1, // 2
        capStyle = '#00000000',
        meterNum = 800 / (10 + 2), //count of the meters
        capYPositionArray = []; ////store the vertical position of hte caps for the preivous frame
    ctz = canvaz.getContext('2d'),
    gradient = ctz.createLinearGradient(0, 0, 0, 90); // 0,0,0,300
    gradient.addColorStop(1, '#0f0');
    gradient.addColorStop(0.5, '#ff0'); //ff0
    gradient.addColorStop(0, '#f00');
    // loop
    function renderFramez() {
        var arrai = new Uint8Array(analizer.frequencyBinCount);
        analizer.getByteFrequencyData(arrai);
        var step = Math.round(arrai.length / meterNum); //sample limited data from the total arrai
        ctz.clearRect(0, 0, cwidth, cheight);
        for (var i = 0; i < meterNum; i++) {
            var value = arrai[i * step];
            if (capYPositionArray.length < Math.round(meterNum)) {
                capYPositionArray.push(value);
            };
            ctz.fillStyle = capStyle;
            //draw the cap, with transition effect
            if (value < capYPositionArray[i]) {
                ctz.fillRect(i * RISOS, cheight - (--capYPositionArray[i]), meterWidth, capHeight);
            } else {
                ctz.fillRect(i * RISOS, cheight - value, meterWidth, capHeight);
                capYPositionArray[i] = value;
            };
            ctz.fillStyle = gradient; //set the filllStyle to gradient for a better look
            ctz.fillRect(i * RISOS /*meterWidth+gap*/ , cheight - value + capHeight, meterWidth, cheight); //the meter
        }
        requestAnimationFrame(renderFramez);
    }
    renderFramez();