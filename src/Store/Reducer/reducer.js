
const initialState = {
  loading: false,
  error: '',
  number:0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state,   number: state.number + 1,loading: true, error: null };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;



// const initialState = {
//     cartItems: 0,
//   };
  
  // const cartReducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case 'ADDTOCART':
  //       return {
  //         ...state,
  //         cartItems: state.payload,
  //       };
  
  //     default:
  //       return state;
  //   }
  // };
  // export default cartReducer;
  