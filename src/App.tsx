import axios from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUser = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete(`https://jsonplaceholder.typicode.com/users/` + user.id)
      .then((e) => console.log(user.id))
      .catch((e) => {
        console.log(e);
        setUsers(originalUser);
      });
  };

  const addUser = () => {
    const originalUser = [...users];
    const newUser = { id: 0, name: 'Abbas' };
    setUsers([newUser, ...users]);

    axios
      .post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err);
        setUsers(originalUser);
      });
  };

  const updateUser = (user: User) => {
    const originalUser = [...users];
    const updatedUser = { ...users, name: user.name + '!' };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    axios
      .patch(
        'https://jsonplaceholder.typicode.com/users/' + user.id,
        updateUser
      )
      .then((er) => console.log(er))
      .catch((e) => {
        setError(e);
        originalUser;
      });
  };

  return (
    <>
      {isLoading && (
        <div className='spinner-border'>
          <p>X</p>
        </div>
      )}
      <button className='btn btn-primary' onClick={addUser}>
        Add
      </button>
      <ul className='list-group'>
        {users.map((user) => (
          <li
            className='list-group-item d-flex justify-content-between'
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className='btn btn-outline-secondary mx-1'
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className='btn btn-outline-danger'
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
