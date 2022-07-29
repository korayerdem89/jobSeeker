export default (state, action) => {
switch (state, action) {
    case "ADD_FAVORITE":
        const {favoritedItem} = action.payload;
        return {
            ...state,
            favoritedItem:[...state.favoritedItem, favoritedItem]
        }
    default:
        return state;
}
  };