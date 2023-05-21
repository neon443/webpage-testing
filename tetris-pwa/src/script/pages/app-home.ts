import { LitElement, css, html, customElement } from 'lit-element';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';
// import Tetris from 'tetris-ts';
// import * as Tetris from 'tetris-ts';
// import { Tetris } from 'tetris-ts';

// console.dir(Tetris);
const el = document.getElementById("tetris");
// const canvas = document.getElementById("tetris-canvas");
 
const callback = function(data) {
    // Do something with the data returned from the game
    console.log(data);
};

const tetris = new Tetris(el, callback, {
    frameConstant: 60,
    linesPerLevel: 10,
});


@customElement('app-home')
export class AppHome extends LitElement {

  static get styles() {
    return css`
      #welcomeBlock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      #welcomeBlock h2 {
        margin-bottom: 0;
      }

      #welcomeBlock p {
        max-width: 22em;
      }

      #welcomeBlock img {
        width: 6em;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      button {
        cursor: pointer;
      }

      @media(spanning: single-fold-vertical) {
        #welcomeBlock {
          width: 50%;
        }
      }

      #tetris-canvas {
        border: 1px solid purple;
      }
    `;
  }

  constructor() {
    super();
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      })
    }
  }

  render() {
    return html`
      <div>
        <div id="welcomeBlock">

          <!-- <img src="assets/icons/icon_512.png" alt="app icon"> -->
          <h2>Tetris PWA By Eimert</h2>
          <button>button</button>
          <a href="/play">play</a>
          <div id="tetris" style="width: 300px;">

          <!-- <canvas id='tetris-canvas' width='300' height='500'></canvas>
          <div>
            <label for='level-input'>Start level:</label>
            <input id='level-input' name='level-input' type='number' min='0' max='19' value='5'/>
            <button id='start-stop-btn'>Play/Pause</button>
            <button id='quit-btn'>Quit</button>
          </div> -->


        <pwa-install>Install Tetris</pwa-install>
      </div>
    `;
  }
}