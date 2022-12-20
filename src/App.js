import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/store";
import Success from "./pages/success";
import Cancle from "./pages/cancle";
import CartProvider from "./CartContext";
const App = () => {
  return (
    <CartProvider>
      <Container>
        <NavBar />
        <BrowserRouter>
          <Routes>
            {/* index means the root page  */}
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancle" element={<Cancle />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
};

export default App;
