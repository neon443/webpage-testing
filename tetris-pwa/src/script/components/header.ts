import { LitElement, css, html, customElement, property } from 'lit-element';


@customElement('app-header')
export class AppHeader extends LitElement {

  @property({ type: String }) title: string = 'Tetris PWA';

  static get styles() {
    return css`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        background: var(--app-color-primary);
        color: white;
        height: 1.5em;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 16px;
        font-weight: bold;
      }

      header a {
        text-decoration: none;
        
      }

      a:visited {
        color: white;
        style: normal;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
        <div class="item"><p>next:</p></div>
        <div class="item"><a href="/"><h1>${this.title}</h1></a></div>
        <div class="item"><p>score</p></div>
      </header>
    `;
  }
}