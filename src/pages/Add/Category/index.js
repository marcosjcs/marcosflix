import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Default from '../../../pages/Default'
import FormField from '../../../components/FormField';

export default function AddCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(initialValues);

  function setValue(chave, valor) {
    setCategory({
      ...category,
      [chave]: valor,
    })
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value
    );
  }

  function handleNewCategory(e){
    e.preventDefault();
    
    setCategories([...categories, category]);
    setCategory(initialValues);
  }

  return (
    <Default>
      <h1>Cadastro de Categoria</h1>
      <form style={{background: category.color}} onSubmit={handleNewCategory}>
        
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={category.name}
          onChange={handleChange}
        />

       
          {/* <label>
            Nome
            <input 
              type="text"
              value={category.name}
              name="name"
              onChange={handleChange}
            />
          </label> */}
       
          {/* <label>
            Descrição
            <textarea 
              value={category.description}
              name="description"
              onChange={handleChange}
            />
          </label> */}
           <FormField
          label="Descrição"
          type="????"
          name="description"
          value={category.description}
          onChange={handleChange}
        />
        
        <FormField
          label="Cor"
          type="color"
          name="color"
          value={category.color}
          onChange={handleChange}
        />
          {/* <label>
            Cor
            <input 
              type="color" 
              value={category.color}
              name="color"
              onChange={handleChange}
            />
          </label> */}
        
        <button type="submit">
            Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return (
            <li key={index}>{category.name}</li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para Home
      </Link>
    </Default>      
  )
};