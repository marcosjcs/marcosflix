import React from 'react';
import { Link } from 'react-router-dom';
import Default from '../../../pages/Default'
export default function AddCategory(){
  return (      
    <Default>
      <h1>Cadastro de Categoria</h1>
      <form action="" method="post">
        <label htmlFor="">
          Nome da Categoria: 
          <input type="text"/>
        </label>
        <button type="submit">
            Cadastrar
        </button>
      </form>
      <Link to="/">
        Ir para Home
      </Link>
    </Default>      
  )
};