import keyMirror from 'keymirror';

export const API = 'http://pads6.pa-sport.com/api';

export const ActionTypes = keyMirror({
  MATCH_LOADED: null,
  LOAD_MATCH: null
});

export const PayloadSources = keyMirror({
  SERVER_ACTION: null,
  VIEW_ACTION: null
});

export const Texts = {
  dateGenerated: 'Date',
  datePeriod: 'Period',
  dateSeparator: '–',
  errorMessage: 'An error occured. Please try again later.',
  goBack: 'Go Back',
  loading: 'Loading...',
};
