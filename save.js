const link = document.createElement('a');
link.style.display = 'none';
document.body.appendChild(link); // Firefox workaround, see #6594

const saveBlob = (blob, filename) => {
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

export const saveString = (str, filename) => {
  const output = JSON.stringify(str, null, 2);
  const blob = new Blob([output], { type: 'text/plain' });
  saveBlob(blob, filename);
};

export const saveBinary = (data, filename) => {
  const blob = new Blob([data], { type: 'application/octet-stream' });
  saveBlob(blob, filename);
};

export const saveCanvas = (canvas, filename) => {
  const dataURL = canvas.toDataURL('image/png');
  const blob = dataURLToBlob(dataURL);
  saveBlob(blob, filename);
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
