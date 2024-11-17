import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui_slice";
import { selectors } from "../../store/selectors";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(selectors.selectTotalQuantity);
  const onBtnClick = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={onBtnClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
