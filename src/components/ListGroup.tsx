import { MouseEvent } from 'react';

function ListGroup() {
  const items = ['New York', 'Delhi', 'Jaipur', 'Tokyo', 'Las Vegas'];

  // on click event handler
  const Handler = (event: MouseEvent) => console.log(event.target);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>List not available</p>}
      <ul className='list-group'>
        {items.map((item) => (
          <li className='list-group-item' key={item} onClick={Handler}>
            {item}
          </li>
        ))}
      </ul>
    </>
  ); // this brackets are necessary to break the JSX into multiple line make sure to add it after return keyword
}
// in react a component can't return more then one element JSX won't allow it
export default ListGroup;
