//jest.disableAutomock();
jest.unmock('../App.js');
jest.unmock('../app/components/MatchDay.jsx');
jest.unmock('../app/actions/ViewActionCreators.js');
jest.unmock('../app/Constants.js');
jest.unmock('../app/utils/ApiUtil.js');
jest.unmock('../app/lib/http.js');
jest.unmock('keymirror');
jest.unmock('../app/lib/MockXMLHttpRequest.js');
jest.unmock('../app/actions/ServerActionCreators.js');
jest.unmock('../app/actions/ViewActionCreators.js');
jest.unmock('../app/AppDispatcher.js');
jest.unmock('../app/stores/MatchStore.js');
jest.unmock('flux');
jest.mock('react-native');

import App from '../App.js';

let propName = 'date';
let componentName = 'someComponent';

describe('App', () => {
  let apiKey = 'myKey';
  let app;
  let date;

  beforeEach(() => {
    app = new App(apiKey);
    date = (new Date()).toISOString().slice(0,10).replace(/-/g,'')
  });

  it('getMatchDayUrl should return a valid API url with the given date', done => {
    let myDate = '20160501';
    let url = app.getMatchDayUrl(myDate);
    let expected = `http://pads6.pa-sport.com/api/football/competitions/matchDay/${apiKey}/${myDate}/json`;
    expect(url).toEqual(expected);
    done();
  });

  it('getMatchDayUrl should return a valid API url with the current date if not passed', done => {
    let url = app.getMatchDayUrl();
    let expected = `http://pads6.pa-sport.com/api/football/competitions/matchDay/${apiKey}/${date}/json`;
    expect(url).toEqual(expected);
    done();
  });

  it('getMatchActionsUrl should return a valid API url with the given matchID', done => {
    let matchID = 1234;
    let url = app.getMatchActionsUrl(matchID);
    let expected = `http://pads6.pa-sport.com/api/football/match/actions/${apiKey}/${matchID}/json`;
    expect(url).toEqual(expected);
    done();
  });

  it('getMatchActionsUrl should return falsy if no matchID is passed', done => {
    let url = app.getMatchActionsUrl();
    expect(url).toBeFalsy();
    done();
  });
});
