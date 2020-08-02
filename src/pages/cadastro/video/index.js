import React,{useState,useEffect} from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';



function CadastroVideo() {
  const history = useHistory();
  const [categorias,setcCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const { HandleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer)=>{
      setcCategorias(categoriasFromServer);
    });
  },[]);

  return (
    <PageDefault>

      <h1>Cadastro de Video</h1>
      <form onSubmit={(e) => {
        e.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });
        console.log('categoria Escolhida',categoriaEscolhida);
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(()=>{
          history.push('/');
        });

        
      }}>

        <FormField
          label="Titulo do video"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={HandleChange}
          placeholder="Vídeo Padrão"
        />

        <FormField
          label="URL do video"
          name="url"
          type="text"
          value={values.url}
          onChange={HandleChange}
          placeholder="https://www.youtube.com/watch?v=5qPuKhBa7Ag"
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={HandleChange}
          suggestions={categoryTitles}
          placeholder="Brasil"
        />

        <Button type="submit">Cadastrar</Button>
      </form>


      <Link to="/cadastro/categoria">
        Cadastrar Categoria
        </Link>
    </PageDefault>
  )
}


export default CadastroVideo;