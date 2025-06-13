

const users = [
  { id: 1, name: 'Amit' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'John' },
];

function UserList() {
  return (
    <>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </>
  );
}

export default UserList; 