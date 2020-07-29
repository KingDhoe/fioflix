import React from 'react';
import Menu from './components/Menu';
import dados_iniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={<p>País do Futebol</p>}
        url={dados_iniciais.categorias[0].videos[0].url}
        videoDescription={"O futebol é uma paixão mundial, conhecido como o esporte mais praticado no mundo todo. E quando se fala em futebol, o Brasil é o país mais apaixonado pelo esporte e o mais vitorioso nele, considerado, por isso, como o país do futebol."}
      />

      <Carousel
        ignoreFirstVideo
        category={dados_iniciais.categorias[0]}
      />

      <Carousel
        category={dados_iniciais.categorias[1]}
      />

      <Carousel
        category={dados_iniciais.categorias[2]}
      />      

      <Carousel
        category={dados_iniciais.categorias[3]}
      />      

      <Footer />
    </div>
  );
}

export default App;
