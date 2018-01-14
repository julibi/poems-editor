import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import PhotosReducer from './reducer_photos';

const rootReducer = combineReducers({
  users: UsersReducer,
  photos: PhotosReducer
});

export default rootReducer;