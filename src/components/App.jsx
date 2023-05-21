import { About } from 'pages/About';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Products } from 'pages/Products';
import { Route, Routes } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
import { ProductDetails } from 'pages/ProductDetails';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
