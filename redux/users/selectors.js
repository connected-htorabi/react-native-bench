import { api } from '../services/restaurant';

// TODO - think of making this dynamic
const selectUserResults = api.endpoints.getUser.select(1);
export const selectUser = (state) => selectUserResults(state)?.data || {};
