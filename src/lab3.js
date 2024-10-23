/**
 Todo Complete this app
 
 - Check the documentation of expressjs
 - Create a server that serves a static folder: `public`
 - If an url is not found, the server should serve 'Page not found'
 */


 import express from 'express';
 
const app = express();

const staticMiddleware = express.static('public');

app.use(staticMiddleware);

 app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });