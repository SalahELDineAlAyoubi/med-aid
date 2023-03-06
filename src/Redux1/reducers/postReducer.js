const postReducer = (
  state = {
    posts: [],
    post: {},
    updateLoading : false,
    loading: false,
    error: false,
    uploading: false,
  },
  action
) => {
  switch (action.type) {
    // belongs to PostShare.jsx
    case "UPLOAD_START":
      return { ...state, error: false, uploading: true };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        uploading: false,
        error: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };
    // belongs to Posts.jsx
    case "RETREIVING_START":
      return { ...state, loading: true, error: false };
    case "RETREIVING_SUCCESS":
      return { ...state, posts: action.data, loading: false, error: false };
    case "RETREIVING_FAIL":
      return { ...state, loading: false, error: true };

    case "UPDATE_POST_START":
      return { ...state, updateLoading: true, error: false };
    case "UPDATE_POST_SUCCESS":
      return {
        ...state,
        post: action.data,
        updateLoading: false,
        error: false,
      };
    case "UPDATE_POST_FAIL":
      return { ...state, updateLoading: false, error: true };

    /* case "DELETE_POST_START":
      return { ...state, loading: true, error: false };
    case "DELETE_POST_SUCCESS":
      const filteredPosts = state.posts.filter(
        (post) => post._id !== action.payload
      );
      return { ...state, posts: filteredPosts, loading: false, error: false };
    case "DELETE_POST_FAIL":
      return { ...state, loading: false, error: true };
*/
    default:
      return state;
  }
};

export default postReducer;
