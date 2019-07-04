import { html, css } from 'lit-element';
// Import {SharedStyles} from './shared-styles.js';
import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import legacyStyles from '../../style/legacy.css';

import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';
import { PageViewElement } from './page-view-element.js';

class OAEHomepage extends PageViewElement {
  static get styles() {
    // return [SharedStyles];
    return [homepageStyles, sharedStyles, legacyStyles];
  }

  render() {
    return html`
      <style include="legacy"></style>
      <style include="homepage"></style>
      <style include="app"></style>
      <section>
        <h2>This is the homepage</h2>
        <button class="foo-button mdc-button">Submit</button>

        <div class="mdc-text-field">
          <input type="text" id="my-text-field" class="mdc-text-field__input" />
          <label class="mdc-floating-label" for="my-text-field">Label</label>
          <div class="mdc-line-ripple"></div>
        </div>
      </section>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('Just connected to the DOM!');
  }

  firstUpdated() {
    console.log('First updated!');

    // Enable ripple effect on button
    console.dir(myButton);
    const myButton = this.shadowRoot.querySelector('.foo-button');
    const ripple = new MDCRipple(myButton);

    // enable effects on textfield
    const myTextField = this.shadowRoot.querySelector('.mdc-text-field');
    const textField = new MDCTextField(myTextField);
  }
}

window.customElements.define('oae-landing-page', OAEHomepage);
