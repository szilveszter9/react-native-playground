const fs = require('fs');
let API_KEY = fs.readFileSync(__dirname + '/../config/API_KEY').toString().trim();
let DATE_YYYYMMDD;

export default class App {
  constructor(apiKey) {
    this.API_KEY = apiKey || API_KEY;
  }

  getMatchDayUrl(date) {
    let DATE_YYYYMMDD = date || (new Date()).toISOString().slice(0,10).replace(/-/g,'')
    return `http://pads6.pa-sport.com/api/football/competitions/matchDay/${this.API_KEY}/${DATE_YYYYMMDD}/json`;
  }

  getMatchDataUrl(MATCH_ID) {
    if(!MATCH_ID) return;
    return `http://pads6.pa-sport.com/api/football/match/actions/${this.API_KEY}/${MATCH_ID}/json`;
  }

}
