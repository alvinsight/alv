const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');

jsdoc2md
  .render({ files: './src/**/*.js', separators: true })
  .then(markdown => {
    fs.writeFile('./docs.md', markdown, () => {
      console.log('Docs Generated!');
    });
  })
  .catch(err => {
    console.log(err);
  });
