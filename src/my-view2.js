/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="logo logo2"></div>
        <h1>eTherapy</h1>
        <p class="text-a">
          eTHERAPY delivers cognitive behavioral therapy (CBT) for 
          substance use disorder (SUD) digitally when and where patients need it.
        </p>
        <p class="text-a">
          In partnership with Dr. Kathleen Carroll of Yale University, 
          eTHERAPY is comprosed of three CBT4CBT programs.
        </p>
      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
