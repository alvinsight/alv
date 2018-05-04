/** @module random */

const link = document.createElement('a');
link.style.display = 'none';
document.body.appendChild(link);

/**
 * Saves a Blob as a binary file
 * @param {Blob} blob
 * @param {String} filename
 */
const saveBlob = (blob, filename = 'blob.bin') => {
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.onclick = () => {
    requestAnimationFrame(() => {
      URL.revokeObjectURL(blob);
      link.removeAttribute('href');
    });
  };
  link.click();
};

/**
 * Saves a string in a [.txt] file
 * @param  {String} str
 * @param  {String} [filename='file.txt']
 */
export const saveString = (str, filename = 'file.txt') => {
  const blob = new Blob([str], { type: 'text/plain' });
  saveBlob(blob, filename);
};

/**
 * saves a binary data in a [.bin] file
 * @param  {any} data
 * @param  {String} [filename='file.bin']
 */
export const saveBinary = (data, filename = 'file.bin') => {
  const blob = new Blob([data], { type: 'application/octet-stream' });
  saveBlob(blob, filename);
};

/**
 * Turns a canvas element into a png file and saves it
 * @param  {HTMLCanvasElement} canvas
 * @param  {String} [filename='canvas.png']
 * @return {DOMString} A data URL representation of the canvas
 */
export const saveCanvas = (canvas, filename = 'canvas.png') => {
  const dataURL = canvas.toDataURL('image/png');
  const blob = dataURLToBlob(dataURL);
  saveBlob(blob, filename);
  return dataURL;
};

function dataURLToBlob(dataURL) {
  const binStr = window.atob(dataURL.split(',')[1]);
  const len = binStr.length;
  const arr = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = binStr.charCodeAt(i);
  }
  return new Blob([arr]);
}
