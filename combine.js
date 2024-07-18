require('./serve.js')
var fs = require('fs');

// The root directory
const root = './chatmd'
// Main file
const mainmd = 'main.md'
// Destination file
const destination = './chat.txt'

const colorStart = '\x1b[36m\x1b[1m\x1b[44m';
const colorEnd = '\x1b[0m';

console.log (colorStart, '😼 ChatMD', colorEnd)
console.log (colorStart, ' Un chatbot personnalisé à partir de fichiers en Markdown', colorEnd, '\n')

function nextFile(files, directory, options) {
  const file = files.shift();
  if (!file) {
    if (directory === root) {
      console.log(colorStart, 
        options.nb + ' files (' + options.nbdir + ' directories) ', 
        colorEnd
      )
    }
    //finish
    return
  }
  const isDir = fs.lstatSync(directory + '/' + file).isDirectory() 
  if (isDir) {
    options.nbdir++;
    // Process dir
    const files2 = fs.readdirSync(directory + '/' + file);
    nextFile(files2, directory + '/' + file, options)
  } else {
    options.nb++;
    // Process file
    let content = fs.readFileSync(directory + '/' + file, { encoding: 'utf8' });
    // Process local ref [](./ref) or [](../ref)
    const locals = content.matchAll(/\]\(\.(\.)?\/[^)]*(\.md)\)/g);
    for (const match of locals) {
      // File name without '.md' and '_'
      let st = match[0].replace(/\]\(\.(\.)?\/(\.\.\/)?/,'').replace(/\.md\)$/,'').replace(/\)$/,'').replace(/_/g,' ')
      // Path from the root
      if (/\]\(\.\//.test(match[0])) {
        st = (directory + '/').replace(root+'/', '') + st;
      }
      // Replace
      content = content.replace(match[0], ']('+st+')')
    }
    // Path for images ../img
    content = content.replace(/(\.\.\/){1,}img\//g,'./img/');
    // Path from the root
    if (directory !== root) {
      const name = file.replace(/_/g,' ').replace(/\.md$/,'');
      content = '## ' + (directory + '/' + name).replace(root + '/', '') + '\n' + content;
    }
    // Write file
    fs.appendFileSync(destination, content + '\n\n')
    // console.log(directory + '/' + file)
  }
  nextFile(files, directory, options);
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
  nextFile(files, root, { nb:0, nbdir:0 })
}

// Start
combine();

fs.watch(root, { recursive: true }, combine);
