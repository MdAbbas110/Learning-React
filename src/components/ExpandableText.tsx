import { useState } from 'react';
interface Props {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [isExpanded, setExpended] = useState(false);

  if (children.length <= maxChar) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChar);

  return (
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
