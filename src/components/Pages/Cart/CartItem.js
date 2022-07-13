import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = ({ id, title, quantity, totalPrice, price, content, src }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        content,
        price,
        src,
      })
    );
  };
  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <>
      <Card sx={{ maxWidth: "800px", display: "flex" }} key={id}>
        <CardMedia
          component="img"
          sx={{ width: "200px", height: "200px" }}
          src={src}
        />
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={{ textAlign: "left", pb: 2 }}
            >
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${totalPrice}
            </Typography>
          </div>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            sx={{ textAlign: "left" }}
          >
            {content}
          </Typography>
          <CardActions disableSpacing>
            <ButtonGroup sx={{ pt: 3, alignItems: "end" }}>
              <Button>
                <AddIcon onClick={addToCartHandler} />
              </Button>
              <Button>{quantity}</Button>
              <Button>
                <RemoveIcon onClick={removeFromCartHandler} />
              </Button>
            </ButtonGroup>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default CartItem;
