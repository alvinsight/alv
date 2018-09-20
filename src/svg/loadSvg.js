const loadSvg = url => {
  return fetch(url)
    .then(response => response.text())
    .then(svgString => {
      var doc = new DOMParser();
      var xml = doc.parseFromString(svgString, "image/svg+xml");
      return xml;
    })
    .catch(err => {
      console.log(err);
    });
};

export default loadSvg;
