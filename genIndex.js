const fs = require('fs');
const fileNames = getFileNamesRecursively('./src/components')
let content = '';
fileNames.forEach((fileName) => {
  if (fileName.indexOf('stories.tsx') !== -1 || fileName.indexOf('test.tsx') !== -1) return;
  const component = fileName.substring(fileName.lastIndexOf('/') + 1, fileName.indexOf('.tsx'));
  content += `export {${component}} from "${fileName.replace('/src', '').replace('.tsx', '')}";\n`
});
fs.writeFile('./src/index.ts', content, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('src/index.ts was generated!');
});

function getFileNamesRecursively(root) {
  let results = [];
  const fileNames = fs.readdirSync(root);
  fileNames.forEach((fileName) => {
    if (fs.statSync(root + '/' + fileName).isDirectory()) {
      results = [...results, ...getFileNamesRecursively(root + '/' + fileName)];
    } else {
      results.push(root + '/' + fileName);
    }
  });
  return results;
}
