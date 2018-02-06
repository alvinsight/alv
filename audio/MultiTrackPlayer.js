export default class AudioPlayer {
  constructor() {
    this.context = getAudioContext();

    this.master = this.context.createGain();
    this.master.connect(this.context.destination);

    this.tracks = [];
  }

  createTracks(buffers) {
    for (var key in buffers) {
      var buffer = buffers[key];
      this.addTrack(buffer, key);
    }
  }

  startAll() {
    Object.keys(this.tracks).forEach(key => {
      this.startTrack(key);
    });
  }

  startTrack(name) {
    let track = this.getTrack(name);
    track.source.start(0);
  }

  getTrack(name) {
    let track = this.tracks.find(track => {
      return track.name === name;
    });

    if (!track) {
      console.error('Unknown track : ' + name);
      console.log(this.tracks);
    }

    return track;
  }

  addTrack(decodedBuffer, name, fftSize = 1024) {
    let context = this.context;
    // TODO check context.sampleRate and IOS quirks
    let analyser = this.context.createAnalyser();

    // fft size (defaults to 2048)
    analyser.fftSize = fftSize;

    // analyser.frequencyBinCount = half the fft size
    let frequencyData = new Uint8Array(analyser.frequencyBinCount);
    let normalisedData = new Array(analyser.frequencyBinCount).fill(0);

    // analyser.minDecibels = -140;
    // analyser.maxDecibels = 0;

    let source = this.context.createBufferSource();

    source.buffer = decodedBuffer;

    source.connect(analyser);
    analyser.connect(this.master);

    // TODO add gain
    // let gain = context.createGain();
    // analyser.connect(gain);
    // gain.connect(this.master);

    let track = {
      analyser,
      source,
      normalisedData,
      name
    };

    this.tracks.push(track);
  }

  update() {
    for (let i = 0; i < this.tracks.length; i++) {
      let track = this.tracks[i];
      let { analyser, normalisedData } = track;

      // getByteFrequencyData copies a normalized array of values between 0 and 255
      // to the array that gets passed-in
      var freqData = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(freqData);

      track.frequencyData = freqData;

      // frequencyBinCount is half the fftSize
      for (let j = 0; j < analyser.frequencyBinCount; j++) {
        var value = freqData[j];
        var percent = value / 255;

        normalisedData[j] = percent;
        var hue = j / analyser.frequencyBinCount * 360;
      }

      // console.log(freqData.length);
    }
  }
}

const getAudioContext = () => {
  let audioContext = null;

  if (typeof AudioContext !== 'undefined') {
    audioContext = new AudioContext();
  } else if (typeof webkitAudioContext !== 'undefined') {
    audioContext = new webkitAudioContext();
  } else {
    throw new Error('AudioContext not supported. :(');
  }
  return audioContext;
};
