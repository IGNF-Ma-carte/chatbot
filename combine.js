require('./serve.js')
var fs = require('fs');

// The root directory
const root = './chatmd'
// Main file
const mainmd = 'main.md'
// Destination file
const destination = './chat.txt'

function nextFile(files, directory) {
  const file = files.shift();
  if (!file) {
    //finish
    return
  }
  const isDir = fs.lstatSync(directory + '/' + file).isDirectory() 
  if (isDir) {
    // Process dir
    const files2 = fs.readdirSync(directory + '/' + file);
    nextFile(files2, directory + '/' + file)
  } else {
    // Process file
    let content = fs.readFileSync(directory + '/' + file, { encoding: 'utf8' });
    // Process local ref
    const locals = content.matchAll(/\]\(\.(\.)?\/[^)]*(\.md)?\)/g);
    for (const match of locals) {
      let st = match[0].replace(/\]\(\.(\.)?\/(\.\.\/)?/,'').replace(/\.md\)$/,'').replace(/\)$/,'').replace(/_/g,' ')
      if (/\]\(\.\//.test(match[0])) {
        st = (directory + '/').replace(root+'/', '') + st;
      }
      content = content.replace(match[0], ']('+st+')')
    }
    /*
    // remove './' and '../'
    content = content.replace(/\]\(\.\.\//g,'](')
    content = content.replace(/\]\(\.\//g,'](')
    // remove mainmd
    const rmmain = new RegExp('\\]\\('+mainmd+'\\)', 'g')
    content = content.replace(rmmain,']()')
    */
    if (directory !== root) {
      const name = file.replace(/_/g,' ').replace(/\.md$/,'');
      content = '## ' + (directory + '/' + name).replace(root + '/', '') + '\n' + content;
    }
    fs.appendFileSync(destination, content + '\n\n')
    console.log(directory + '/' + file)
  }
  nextFile(files, directory);
}

function combine() {
  let files = fs.readdirSync(root);
  // Place main on top
  const index = files.indexOf(mainmd);
  if (index > -1) { 
    files.splice(index, 1);
  }
  files.unshift(mainmd)
  // Clear file
  fs.writeFileSync(destination, '');
  nextFile(files, root)
}

// Start
combine();

fs.watch(root, { recursive: true }, combine);
