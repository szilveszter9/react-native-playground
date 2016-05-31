import { ActionTypes } from '../Constants.js';
import AppDispatcher from '../AppDispatcher.js';

const ServerActionCreators = {
  loadedMatch(data) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.MATCH_LOADED,
      data: data
    });
  }
};

export default ServerActionCreators;
