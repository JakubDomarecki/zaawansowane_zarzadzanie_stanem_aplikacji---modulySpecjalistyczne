import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAdded, productRemoved, productUpdated } from "./Redux";
import { object } from "zod";

export const Products = () => {

  const products = useSelector(state => state.products.entities)
  const dispatch = useDispatch()

  const [newProductName, setNewProductName] = useState("") 
  const [editingProductName, setEditingProductName] = useState("");
  const [editingProductId, setEditingProductId] = useState(null);

  const handleAddNewProduct = () => {
    const newProduct = {
      id: Math.random().toString(36).substring(7),
      name: newProductName,
    }
    dispatch(productAdded(newProduct))
    setNewProductName('');
  }

  const handleEditProduct = (id) => {
    setEditingProductId(id),
    setEditingProductName(products[id]?.name || "")
  }

  const handleSaveEditProduct = () => {
    dispatch(productUpdated({id: editingProductId, changes: {name: editingProductName}}))
    setEditingProductId(null)
    setEditingProductName("")
  }

  const handleRemoveProduct = (id) => {
    dispatch(productRemoved(id))
  }

  return (
    <>
      <input type="text" value={newProductName} onChange={(e) => setNewProductName(e.target.value)}/>
      <button onClick={handleAddNewProduct}>Dodaj</button>

      {Object.values(products).map(item => (
        <div key={item.id}>

        {editingProductId === item.id ? (
          <>
            <input type="text" value={editingProductName} onChange={(e) => setEditingProductName(e.target.value)}/>
            <button onClick={handleSaveEditProduct} >Zapisz</button>      
          </>
         ): (
         <>
              <span>{item.name}</span>
              <button onClick={() => handleEditProduct(item.id)}>Edytuj</button>
              <button onClick={() => handleRemoveProduct(item.id)}>Usuń</button>
            </>

        )}
        </div>
      ))}
    </>
  )
};
