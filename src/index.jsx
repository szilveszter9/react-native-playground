'use strict';
'use runtime-nodent';

import {App, startApp} from './app/components/App.jsx';


const loadedStates = ['complete', 'loaded', 'interactive'];

if(loadedStates.includes(document.readyState) && document.body) {
  startApp();
} else {
  window.addEventListener('DOMContentLoaded', startApp, false);
}
