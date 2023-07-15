interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Delete</button>
    </>
  );
};

export default Cart;

/*
const [product, setProduct] = useState([
  'Acer Monitor',
  'Boat Atom',
  'Slider',

  <NavBar cartCount={product.length} />
<Cart cartItems={product} onClear={() => setProduct([])} />
]);
*/
