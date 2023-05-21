import { LitElement, css, html, customElement } from 'lit-element';


@customElement('app-play')
export class AppPlay extends LitElement {

  static get styles() {
    return css`

        .game {
            // padding-left: 0;
            // padding-right: 0;
            // margin-left: auto;
            // margin-right: auto;
            // display: block;
            // width: 800px;
            // border: 14px solid red;
        }


        .game canvas {
            margin: 0 auto;

            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: stretch;
            align-content: stretch;

            // width: 300px;
            // height: 500px;
            position:relative; /* needed for footer positioning*/
            // height:auto !important; /* real browsers */
            // min-height: 100%; /* real browsers */
            

            max-width: 40%;

            // min-height: 280px;
            // max-height: 580px;

            border: 1px solid purple;
        }

        @media only screen and (max-width: 600px) {
            .game canvas {
                background-color: lightblue;
                max-width: 100%;
                min-height: 100%;
            }
        }

        #score p {
            background-color: yellow;
            margin: 0 auto;
            width: 100px;
            text-align: center;
        }]

        #block {
            
        }

    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <div class="game">
            <canvas width='300' height='500'></canvas>
            

        </div>

        <div id="score"></div>

        <div id="touch-controls">
            <div id="left"></div>
            <div id="center"></div>
            <div id="right"></div>
        </div>
        
      </div>
    `;
  }
}