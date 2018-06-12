import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import serverRender from './serverRender';
import config from './config';
import router from './api';

const server = express();

server.set('view engine', 'ejs');

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));


server.get('/', (req, res) => {
  serverRender()
    .then(content =>
      res.render('index', {
        content
      })
    )
    .catch(error => console.error(error))
});

server.get('/about.html', (req, res) => {
  res.send('The about html');
});

server.use('/api', router);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
