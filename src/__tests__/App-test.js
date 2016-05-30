jest.disableAutomock();

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

  it('getMatchDataUrl should return a valid API url with the given matchID', done => {
    let matchID = 1234;
    let url = app.getMatchDataUrl(matchID);
    let expected = `http://pads6.pa-sport.com/api/football/match/actions/${apiKey}/${matchID}/json`;
    expect(url).toEqual(expected);
    done();
  });

  it('getMatchDataUrl should return falsy if no matchID is passed', done => {
    let url = app.getMatchDataUrl();
    expect(url).toBeFalsy();
    done();
  });
});
