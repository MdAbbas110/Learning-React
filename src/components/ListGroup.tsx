import { useState } from 'react';

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  // this is a Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>List not available</p>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              {
                setSelectedIndex(index);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

//? this brackets are necessary to break the JSX into multiple line make sure to add it after return keyword
// in react a component can't return more then one element JSX won't allow it
// useState is hook function of react that allow react to tack state hook is one of them
//* using useState hook function we can tell react that this component will have data that changes over time
//* useState fun return us the array with 2 values one is variable name and next is updater fun tht will update the dom dynamically
