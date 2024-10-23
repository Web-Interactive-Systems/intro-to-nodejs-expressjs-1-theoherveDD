import express from 'express';
const app = express();





/**
 Todo Complete this app
 
 - Check the documentation of expressjs
 - Create an express server
 - The server should implements the following APIs
  // app.get
  // app.post
  // app.put
  // app.delete
  // app.all
  // app.use
  // app.listen

  -- Hint, use postman to interact with the server 
  
 */
  app.use(express.json());

  app.get('/get', (req, res) => {
    res.send('GET request received');
  });
  

  app.post('/post', (req, res) => {
    console.log('body :', req.body);
    res.send('POST request received');
  });
  

  app.put('/put', (req, res) => {
    res.send('PUT request received');
  });
  

  app.delete('/delete', (req, res) => {
    res.send('CACA');
  });
  

  app.all('/all', (req, res) => {
    res.send('Request received with method: ' + req.method);
  });
  

  

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});