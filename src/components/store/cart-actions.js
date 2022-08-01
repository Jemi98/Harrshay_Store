import { cartActions } from "./cart-slice";

// using react thunk/middlewear or custom createActions

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-585c7-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        console.log("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      console.log("Fetching cart data failed!");
    }
  };
};

export const sendCartData = (cart) => {
  return async () => {
    console.log("Sending cart data!");

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-585c7-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        console.log("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      console.log("Sent cart data successfully!");
    } catch (error) {
      console.log("Sending cart data failed!");
    }
  };
};
