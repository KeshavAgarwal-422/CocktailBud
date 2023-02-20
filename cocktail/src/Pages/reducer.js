const reducer = (state, action) => {
  if (action.type === "loading") {
    return { ...state, loading: true };
  }
  if (action.type === "notloading") {
    return { ...state, loading: false };
  }
  if (action.type === "UPDATELIST") {
    return { ...state, cocktail: action.payload };
  }
  if (action.type === "EMPTYLIST") {
    return { ...state, cocktail: [] };
  }
};

export default reducer;
