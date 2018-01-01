const link = document.createElement('a');
link.style.display = 'none';
document.body.appendChild(link); // Firefox workaround, see #6594

const saveBlob = (blob, filename) => {
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};

export const saveString = (str, filename) => {
  const output = JSON.stringify(str, null, 2);
  const blob = new Blob([output], { type: 'text/plain' });
  saveBlob(blob, filename);
};

export const saveBinary = (data, filename) => {
  const blob = new Blob([output], { type: 'application/octet-stream' });
  saveBlob(blob, filename);
};
