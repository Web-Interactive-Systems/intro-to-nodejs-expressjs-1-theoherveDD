import http from 'http';
import { readFile, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 Todo Complete this app to serve the content inside `static` folder
 
 - Create an http server that serves the app in: `static/html/index.html`
 - The app shows navigation pages that should be created and placed inside `static/html`
 - If an url is not found the app should serve "Page not found"

 -- Hint, it possible to read a file using `readFileSync` of fs module and serve it to the client
 */

const APP_JS_URL = "./src/static/js/app.js";

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const filePath = join(__dirname, 'static', 'html', 'index.html');
    readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf8');
      }
    });
  }else if (req.url === '/about.html') {
    const filePath = join(__dirname, 'static', 'html', 'about.html');
    readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf8');
      }
    });
  } else if (req.url === '/js/app.js') {
    console.log("serving the app .js");
    res.writeHead(200, { "Content-Type": "application/javascript" });
    const appJs = readFileSync(APP_JS_URL);
    res.end(appJs);
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});
 
 const PORT = process.env.PORT || 3000;
 server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));