// interface Props {
// button: string;
// color?: 'primary' | 'danger' | 'dark';
// setOnClick: () => void;
// }

import style from './Button.module.css';

const Button = () => {
  return (
    <button
      type='button'
      className={[style.btn, style.btnPrimary, style.btnText].join(' ')}
    >
      Click ME
    </button>
  );
};

export default Button;

/*
const [alertVisible, setAlertVisibility] = useState(false);
{alertVisible && (
  <Alert onClose={() => setAlertVisibility(false)}> Alert</Alert>
)}
<Button
  color='dark'
  button='Green'
  setOnClick={() => setAlertVisibility(true)}
  
/>
*/
