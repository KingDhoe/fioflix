import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo(){
  const history = useHistory();
  const [categorias, setCategorias] = useState();
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { HandlerChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=0XGqmGuqKKs',
    categoria: 'Brasil',
  });

  useEffect(() => {
    categoriasRepository
    .getAll()
    .then((categoriasFormServer) => { 
      setCategorias(categoriasFormServer);
    });
  }, []);

    return (
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={(event) =>{
          event.preventDefault();
            //alert('Vídeo Cadastrado com sucesso!');

            const categoriaEscolhida = categorias.find((categoria) => {
              return categoria.titulo === values.categoria;
            });
            console.log('categoriaEscolhida', categoriaEscolhida);

            videosRepository.create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaEscolhida.id,
            })
              .then(() => {
                console.log('Cadastrou com sucesso!');
                history.push('/');
              });
              
            
        }}>
          <FormField
            label="Titulo do Video"
            value={values.titulo}
            name="titulo"
            onChange={HandlerChange}
            required
          />

          <FormField
            label="URL"
            value={values.url}
            name="url"
            onChange={HandlerChange}
            required
          />

          <FormField
            label="Campeonato"
            value={values.categoria}
            name="categoria"
            onChange={HandlerChange}
            suggestions={categoryTitles}
            required
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>


        <Link to="/cadastro/categoria">
            Cadastrar Campeonato
        </Link>
      </PageDefault>
    );
  }

  export default CadastroVideo;