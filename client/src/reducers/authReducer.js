import { FETCH_USER } from "../actions/types";

// by default, we have no clue if the user is logged in (state = null)
// if the payload returns empty string(''), we should be returning false
// if the user is not logged in, action.payload returns empty string - which
// is not we want.

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;

    default:
      return state;
  }
}
