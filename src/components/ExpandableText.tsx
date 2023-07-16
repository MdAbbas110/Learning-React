import { useState } from 'react';
interface Props {
  children: string;
  maxChar?: number;
}
//Substring allow us to cut the string and print it from where we need
const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [isExpanded, setExpended] = useState(false);

  if (children.length <= maxChar) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChar);
  //  not using useState for everything just the things that needs to be a dynamic value
  return (
    // returning the text that we get after substing value
    <p>
      {' '}
      {text}...
      <button onClick={() => setExpended(!isExpanded)}>
        {isExpanded ? 'Less' : 'More'}
      </button>
    </p>
  );
};

export default ExpandableText;
