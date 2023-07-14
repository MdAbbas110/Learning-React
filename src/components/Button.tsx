interface Props {
  button: string;
  color?: 'primary' | 'danger' | 'dark';
  setOnClick: () => void;
}

const Button = ({ button, setOnClick, color = 'dark' }: Props) => {
  return (
    <button
      type='button'
      className={'p-4 btn btn-' + color}
      onClick={setOnClick}
    >
      {button}
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
