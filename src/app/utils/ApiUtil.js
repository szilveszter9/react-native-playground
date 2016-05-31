import { getJSON } from '../lib/http.js';
import { API, ActionTypes } from '../Constants.js';
import ServerActionCreators from '../actions/ServerActionCreators.js';

import App from '../../App.js';

let app = new App();

let matchCache;

const ApiUtils = {
  loadMatch () {
    if(matchCache)
      ServerActionCreators.loadedMatch(matchCache);
    else
      getJSON(app.getMatchDayUrl(), (err, res) => {
        if(!err)
          matchCache = res;
        ServerActionCreators.loadedMatch(res);
      });
  }
};

export default ApiUtils;
