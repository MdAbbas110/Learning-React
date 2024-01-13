let count = 0;
function Message() {
  // JSX javaScript XML this code under the hood compile down to js
  console.log('message', count);
  count++;
  const name = 'Abbas';
  if (name) return <h1>YA Ali Madad {count} </h1>;
  return <h1>GOD Bless you</h1>;
}
//JSX allow write code dynamically on run time in curly braces called Expression
export default Message;
