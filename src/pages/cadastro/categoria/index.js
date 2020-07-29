import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria(){
    return (
      <PageDefault>
        <h1>Cadastro de Categoria</h1>

        <form>
          <label>
            Nome da Categoria:
            <input type="text" class="form-control" id="usr"/>
          </label>

          <button class="btn btn-primary">
            Cadastrar
          </button>
        </form>

        <Link to="/">
            Voltar para Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;