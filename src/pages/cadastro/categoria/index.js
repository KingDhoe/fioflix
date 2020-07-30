import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState('valoresIniciais');

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function HandlerChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://futflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {
    //   setCategorias(() => [
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Alemanha',
    //       descricao: 'Bundesliga',
    //       cor: 'cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Portugal',
    //       descricao: 'Português',
    //       cor: 'cbd1ff',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Campeonatos:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="País"
          type="text"
          value={values.nome}
          name="nome"
          onChange={HandlerChange}
        />

        <FormField
          label="Nomde do Campeonato"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={HandlerChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={HandlerChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        Voltar para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
