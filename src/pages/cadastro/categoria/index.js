import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState('valoresIniciais');
  
  function setValue(chave, valor) {
    
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function HandlerChange(infosDoEvento){
    const { getAttribute, value } = infosDoEvento.target;
    setValue(
      getAttribute('name'), 
      value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Campeonatos: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>
        <FormField 
          label="Nome do Campeonato"
          type="text"
          value={values.nome}
          name="nome"
          onChange={HandlerChange}
        />

        <FormField 
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={HandlerChange}
        />

        {/* <div>
        <label>
            Descrição:
            <textarea 
              type="text" 
              value={values.descricao}
              name="descricao"
              onChange={HandlerChange}/>
          </label>
        </div> */}

        <FormField 
        label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={HandlerChange}
        />
        {/* <div>
        <label>
            Cor:
            <input 
              type="color" 
              value={values.cor}
              name="cor"
              onChange={HandlerChange}/>
          </label>
        </div> */}

        <button class="btn btn-primary" >
          Cadastrar
        </button>
      </form>
      <ul>
        {categorias.map((categorias) => {
          return (
            <li key={categorias}>
              {categorias.nome}
            </li>
          )
        }) }
      </ul>
      <Link to="/">
          Voltar para Home
      </Link>
    </PageDefault>
  )
}

  export default CadastroCategoria;