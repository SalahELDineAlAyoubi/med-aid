const requestReducer = (
  state = {
    requests: [],
    request: {},
myRequests:[],
getting:false,
    error: false,
    uploadingreq: false,
  },
  action
) => {
  switch (action.type) {
    // belongs to PostShare.jsx
    case "UPLOAD_REQUEST_START":
      return { ...state, error: false, uploading: true };
    case "UPLOAD_REQUEST_SUCCESS":
      return {
        ...state,
        requests: [action.data, ...state.requests],
        uploading: false,
        error: false,
      };
    case "UPLOAD_REQUEST_FAIL":
      return { ...state, uploading: false, error: true };
    // belongs to Posts.jsx
    case "RETREIVING_REQUEST_START":
      return { ...state, loading: true, error: false };
    case "RETREIVING_REQUEST_SUCCESS":
      return { ...state, requests: action.data, loading: false, error: false };
    case "RETREIVING_REQUEST_FAIL":
      return { ...state, loading: false, error: true };
//get my booked medecine by others
    case "RETREIVING_ALL_START":
      return { ...state, getting: true, error: false };
    case "RETREIVING_ALL_SUCCESS":
      return { ...state, myRequests: action.data, getting: false, error: false };
    case "RETREIVING_ALL_FAIL":
      return { ...state, getting: false, error: true };

    default:
      return state;
  }
};

export default requestReducer;
