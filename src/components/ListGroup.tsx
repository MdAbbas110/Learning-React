import { useState } from 'react';

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
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
                onSelectItem(item);
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
//? Props are immutable that means we alway treat props are immutable or un changeable .. like we can't re assign the props in component body
//* states on the other hand are mutable or changeable that we are telling the react that its data will change dynamically
//? one thing that is common in states and props that each time any of it will change react will *re-render* the component and update the dom accordingly
