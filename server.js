import express from 'express';

import config from './config';
import router from './api';

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: 'Hello world!',
  }); 
});

server.get('/about.html', (req, res) => {
  res.send('The about html');
});

server.use('/api', router);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
