// Imports
const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())
app.use(function(req, res, next) {
    res.header("Cross-Origin-Embedder-Policy", "require-corp");
    res.header("Cross-Origin-Opener-Policy", "same-origin");
    next();
  });
// Static Files
app.use(express.static('public'))
/app.use('/app', express.static(__dirname + 'app/wasm'))
//app.use('/css', express.static(__dirname + 'app/css'))
app.use('/app', express.static(__dirname + 'app/js'))
//app.use('/img', express.static(__dirname + 'app/img'))
//app.use('/wasm', express.static(__dirname + 'app/wasm'))

app.use(express.static(__dirname + '/app'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('', (req, res) => {

    res.sendFile(path.join(__dirname, 'app/index.html'));
})

app.listen(port, () => console.info(`Listening on port ${port}`))