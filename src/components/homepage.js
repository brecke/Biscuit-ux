import {html, css} from 'lit-element';
import {PageViewElement} from './page-view-element.js';

import homepageStyles from './../../style/homepage.scss';
import sharedStyles from './../../style/app.scss';
import legacyStyles from '../../style/legacy.css';

class OAEHomepage extends PageViewElement {
  static get styles() {
    return [homepageStyles, sharedStyles, legacyStyles];
  }

  render() {
    return html`
      <style include="legacy"></style>
      <style include="homepage"></style>
      <style include="app"></style>
      <h2 class="text-center text-4xl italic font-extrabold">This is the homepage</h2>
      <p class="text-3xl text-gray-500">
        This is tailwind
        </p>
        `;
  }
}
window.customElements.define('oae-landing-page', OAEHomepage);
