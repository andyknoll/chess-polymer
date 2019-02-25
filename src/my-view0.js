// my-view0.js - Introduction screen

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView0 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Introduction</h1>
        <p>
          I called Joey O. today at 9:00 am and we had a nice introduction phone interview.
          He told me a bit about the company and the position and I told him a little more about myself.
        </p>
        <p>
          I told him I would start looking into Polymer and after several false starts and routing issues
          and hosting problems, I was able to put this small app together.
        </p>
        <p>
          It is based on the Polymer 3 Starter Kit and covers the Polymer CLI command line tool, routing,
          bundling, basic styling, image paths and Polymer views.
        </p>
      </div>
    `;
  }
}

window.customElements.define('my-view0', MyView0);
