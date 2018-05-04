const knownTypes = [
  { extension: 'webm', type: 'video/webm; codecs="vp8, vorbis"' },
  { extension: 'mp4', type: 'video/mp4; codecs="avc1.42E01E"' },
  { extension: 'ogv', type: 'video/ogg; codecs="theora"' },
  { extension: 'hls', type: 'application/x-mpegURL; codecs="avc1.42E01E"' }
];

const findSupportedType = types => {
  return () => {
    let element = document.createElement('video');

    for (let i = 0; i < types.length; i++) {
      let { extension, type } = types[i];
      if (element.canPlayType(type) === 'probably') {
        element = null;
        return extension;
      }
    }
  };
};

const determineSupportedVideoFormat = findSupportedType(knownTypes);

export default determineSupportedVideoFormat;
