//import dirToJson from "dir-to-json";

const fs = require('fs');
const path = require('path');
const dirToJson = require('dir-to-json');

const jsonToFrontEndWeb = path.resolve(__dirname, './../frontend-web/src/sites/acs-test/data/svg.tokens.json');
const compiledSvgToFrontEnd = path.resolve(__dirname, './../frontend-web/src/sites/acs-test/public/acs-test-icons.svg');
const jsonToCompiled = path.resolve(__dirname, './icons/svg/compiled/svg.tokens.json');

dirToJson('./icons/svg/optimized', { sortType: false })
  .then(function (dirTree) {
    dirTree.children.map((item) => {
      item.id = item.path;
      item.id = item.id.replace('.svg', '');
      item.name = item.name.replaceAll(/.svg|acs-test-icon--/gi, '');
      item.name = item.name.replaceAll(/_|-/g, ' ');
      item.name = item.name.replace(/\w+/g, (word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      });

      delete item['parent'];
      delete item['type'];
      delete item['path'];
      return item;
    });

    console.log(dirTree);

    fs.writeFileSync(jsonToFrontEndWeb, JSON.stringify(Object.values(dirTree)[4], null, '\t'));
    fs.cp('./icons/svg/compiled/acs-test-icons.svg', compiledSvgToFrontEnd, (err) => {
      if (err) throw err;
      console.log('Originals SVGs were copied to destination');
    });
    fs.writeFileSync(jsonToCompiled, JSON.stringify(Object.values(dirTree)[4], null, '\t'));
  })
  .catch(function (err) {
    console.log('Error in assets build', err);
    throw err;
  });

console.log('\n==============================================');
console.log('\nBuild completed!');
