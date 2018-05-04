const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');

jsdoc2md
  .render({ files: './src/*.js', separators: true })
  .then(markdown => {
    fs.writeFileSync('./docs.md', markdown);
  })
  .catch(err => {
    console.log(err);
  });
