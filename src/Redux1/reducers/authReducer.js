const authReducer = (
  state = {
    authData: null,
    loading: false,
    error: false,
    errorMessage:"" 
  },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false, errorMessage: "" };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return {
        ...state,
        authData: action.data,
        loading: false,
        error: false,
        errorMessage: "",
      };

    case "AUTH_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    case "CLEAR_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: "",
      };
    case "UPDATING_START":
      return { ...state, updateLoading: true, error: false };
    case "UPDATING_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        updateLoading: false,
        error: false,
      };

    case "UPDATING_FAIL":
      return { ...state, updateLoading: true, error: true };

    case "LOG_OUT":
      localStorage.clear();
      return {
        ...state,
        authData: null,
        loading: false,
        error: false,
        //updateLoading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
