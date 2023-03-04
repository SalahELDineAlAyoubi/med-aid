 const userReducer = (
   state = {
     users:{},
     loading: false,
     error: false,
   },
   action
 ) => {
   switch (action.type) {
      case "GETING_START":
       return { ...state,loading: true , error: false };
     case "GETING_SUCCESS":
       return {
         ...state,
         users:action.data, 
         loading: false,
         error: false,
       };
     case "GETING_FAIL":
       return { ...state, loading: false, error: true };
     default:
       return state;
   }
 };

 export default userReducer;
