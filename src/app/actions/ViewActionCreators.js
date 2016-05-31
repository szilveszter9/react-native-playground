import { ActionTypes } from '../Constants.js';
import AppDispatcher from '../AppDispatcher.js';
import ApiUtil from '../utils/ApiUtil.js';

const ViewActionCreators = {
  loadMatch() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_MATCH
    });
    ApiUtil.loadMatch();
  }
};

export default ViewActionCreators;
