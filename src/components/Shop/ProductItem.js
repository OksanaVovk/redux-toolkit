import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart_slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const onBtnClick = () => {
    const data = {
      title: title,
      price: price,
      id: id,
    };
    dispatch(cartActions.addItemToCart(data));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onBtnClick}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
