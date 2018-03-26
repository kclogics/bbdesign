

import express from 'express';
import 'babel-polyfill';
import config from './config';
import serverRender from './renderes/serverRender';
import {dependencies} from '../package.json';




/*------------------------------------------------------------------ */


const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');




/*------------------------------------------------------------------ */



app.get('/', (req, res) => {
  const initialContent = serverRender();
  res.render('index', { initialContent });
});



/*------------------------------------------------------------------ */


app.get('/data', (req, res) => {
 res.send(dependencies);

});


/*------------------------------------------------------------------ */


app.get('/main', (req, res) => {
  res.render('style');
});

/*------------------------------------------------------------------ */

app.get('/radium1', (req, res) => {
  res.render('radium1');
});



/*------------------------------------------------------------------ */

app.get('/web1', (req, res) => {
  res.render('web1');
});


/*------------------------------------------------------------------ */

app.get('/tictac', (req, res) => {
  res.render('tictac');
});

/*------------------------------------------------------------------ */

app.get('/learn', (req, res) => {
  res.render('learning');
});

/*------------------------------------------------------------------ */

app.get('/game', (req, res) => {
  res.render('game');
});

/*------------------------------------------------------------------ */
/*------------------------------------------------------------------ */

app.get('/bames', (req, res) => {
  res.render('bames');
});

/*------------------------------------------------------------------ */

app.listen(config.port, function listenHandler(){
  console.info(`Running on ${config.port}`);
});


/*------------------------------------------------------------------ */



