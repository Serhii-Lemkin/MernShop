import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  HomePage,
  ProductPage,
  Container,
  useContext,
  Store,
  CartPage,
  SigninPage,
  Header,
  Footer,
  ToastContainer,
  SignupPage,
  PaymentPage,
  ShippingAddressPage,
} from './Imports';
import 'react-toastify/dist/ReactToastify.css';
import SubmitOrderPage from './pages/SubmitOrderPage';
import OrderPage from './pages/OrderPage';
import SearchPage from './pages/SearchPage';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <BrowserRouter>
      <div className="d-flex flex-column side-allPage minWidth">
        <ToastContainer position="bottom-center" limit={1} />
        <Header cart={cart} />
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:token" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/signin" element={<SigninPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/shipping" element={<ShippingAddressPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/placeorder" element={<SubmitOrderPage />} />
              <Route path="/order/:id" element={<OrderPage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
