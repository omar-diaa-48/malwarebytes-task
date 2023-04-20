import { combineReducers } from '@reduxjs/toolkit';

import user from "./slices/user";

const reducer = combineReducers({
	user,
});

export default reducer;