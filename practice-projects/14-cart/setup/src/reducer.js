const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'REMOVE':
      const removedItemCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: removedItemCart };
    case 'CHANGE_AMOUNT':
      const cartItemChangedAmount = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              amount: item.amount + (action.payload.type === 'inc' ? 1 : -1),
            };
          }
          return item;
        })
        .filter((item) => item.amount > 0);
      return { ...state, cart: cartItemChangedAmount };
    case 'GET_TOTAL': {
      const total = state.cart
        .reduce((total, curr) => total + curr.price * curr.amount, 0)
        .toFixed(2);
      const count = state.cart.reduce((count, curr) => count + curr.amount, 0);
      console.log(count);
      return { ...state, total, count };
    }
    case 'FETCHING_DATA': {
      return { ...state, isLoading: true };
    }
    case 'DATA_FETCHED': {
      return { ...state, isLoading: false, cart: action.payload };
    }

    default:
      throw new Error('No matching action found');
  }
};

export default reducer;
