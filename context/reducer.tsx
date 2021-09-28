const Reducer = (state : any, action: any) => {
  switch (action.type) {
      case 'SET_KEYWORD':
          return {
              ...state,
              keyword: action.payload
          };
      default:
          return state;
  }
};

export default Reducer;