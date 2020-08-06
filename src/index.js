import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

// Desafio master blaster na descrição
// Colocar um jogo ou brincadeira nessa página:
const Pagina404 = () => (
  <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
  }}
  >
    <h1>Quebrou tudo *_*</h1>
    <p>
      <a href="/">Você pode voltar pra home</a>
    </p>
    <p>
      Ou aprender a fazer o jogo
    </p>
    {/*
        Desafio do Flappy Bird, da pra usar esse iframe aqui:
      - https://codepen.io/omariosouto/pen/pogmdGE

      programar o jogo:
      - https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej
    */}

    Pagina Erro 404 !!
    {/* <iframe
      title="Flappy Bird Game"
      src="https://mariosouto.com/flappy-bird-devsoutinho/"
      width="340"
      height="600" /> */}
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
