import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';


function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { HandlerChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);
  

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
    //       titulo: 'Alemanha',
    //       descricao: 'Bundesliga',
    //       cor: 'cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       titulo: 'Portugal',
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
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >
        <FormField
          label="País"
          type="text"
          value={values.titulo}
          name="titulo"
          onChange={HandlerChange}
          required
        />

        <FormField
          label="Nomde do Campeonato"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={HandlerChange}
          required
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={HandlerChange}
          required
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
          <li key={`${categoria.titulo}`}>
            <strong>Titulo</strong>
            <p>{categoria.titulo}</p>

            <strong>Descrição</strong>
            <p>{categoria.descricao}</p>

            <strong>Cor</strong>
            <p>{categoria.cor}</p>

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
