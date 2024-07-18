import { useState } from "react";

export const ShoppingList = () => {

  const [shoppingList, setShoppingList] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addToBasket = () => {
    if (inputValue.trim().length > 0) {
      setShoppingList(prev => [...prev, {id: Date.now(), name: inputValue}])
      setInputValue('');
    }
  }

  const handleRemoveItem = (itemID) => {
    setShoppingList(shoppingList.filter(item => item.id !== itemID));
  }


  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={addToBasket}>ADD</button>
      <ul>
        {shoppingList.map((item) => (
          <li key={item.id}>{item.name}
          <button onClick={() => handleRemoveItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
};
