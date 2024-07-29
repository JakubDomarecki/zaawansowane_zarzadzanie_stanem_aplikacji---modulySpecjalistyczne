import { useCallback, useEffect, useMemo, useReducer, useState } from "react";

const initialState  = {
  users: []
}

const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return{
        ...state,
        users: [...state.users, action.payload]
      }
      default:
        return state
  }
}

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return  () => {
      clearTimeout(handler);
    }
  }, [value, delay])

  return debounceValue;
} 


export const UserManagementPanel = () => {
  const [state, dispatch] = useReducer(userReducer, initialState );
  const [newUser, setNewUser] = useState({ name: '', role: '' });
  const [filter, setFilter] = useState('');
  const debouncedSearchTerm = useDebounce(filter, 300)

  const handleAddUser = useCallback(() => {
    dispatch({ type: 'ADD_USER', payload: newUser });
    setNewUser({ name: '', role: '' }); 
  }, [newUser, dispatch]);
 
 const filteredUsers = useMemo(() => {
  return state.users.filter((user) => user.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()));
}, [state.users, debouncedSearchTerm]);


  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>User Management Panel</h2>


      <div style={{ marginBottom: '20px' }}>

        <input type="text" placeholder="Name" style={{ marginRight: '10px', padding: '10px' }} value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})}/>
        <input type="text" placeholder="Role" style={{ marginRight: '10px', padding: '10px' }} value={newUser.role} onChange={(e) => setNewUser({...newUser, role: e.target.value})}/>
        <button style={{ padding: '10px' }} onClick={handleAddUser}>Add User</button>

      </div>


      <input
        type="text"
        placeholder="Search by name..."
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        onChange={(e) => setFilter(e.target.value)}
      />


      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredUsers.map((user) => (
          <li key={user.name} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>


    </div>
  );
};
