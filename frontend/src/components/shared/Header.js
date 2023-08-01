import {
  Container,
  Link,
  Badge,
  LinkContainer,
  NavBar,
  axios,
  useContext,
  Store,
  addToCartHandler,
  NavDropdown,
  USER_SIGNOUT,
  useLocation,
  useNavigate,
} from '../../Imports';
import SearchBox from './SearchBox';

function Header({ cart }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
    userInfo,
  } = state;

  //Cancels out default behaviour when the mouse is on the cart-icon
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  //When item card is dragged to the icon, it add it to the cart (provided it is in-stock).
  const handleDrop = async (event) => {
    event.preventDefault();

    //Gets the item-id from the dragged item.
    const productId = event.dataTransfer.getData('text/plain');

    const { data } = await axios.get(`/api/v1/products/${productId}`);

    await addToCartHandler(data, cartItems, ctxDispatch);
  };

  const signoutHandler = () => {
    ctxDispatch({ type: USER_SIGNOUT });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };

  return (
    <div>
      <header className="header">
        <NavBar bg="dark" variant="dark">
          <Link onClick={() => navigate(-1)}>
            {location.pathname !== '/' && (
              <>
                <i className="fa fa-arrow-left text-white">
                  {'  '}
                  <i className="fa fa-home text-white "> </i>
                </i>
              </>
            )}
          </Link>
          <Container>
            <LinkContainer to="/">
              <NavBar.Brand>
                <img
                  src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
                  width={100}
                  alt="AMZN"
                />
              </NavBar.Brand>
            </LinkContainer>
            <nav
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="d-flex mx-auto align-items-center"
            >
              <SearchBox />
            </nav>
            <Link to="/cart" className="nav-link me-4 ms-4">
              <i className="fas fa-shopping-cart text-white"></i>
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
            {userInfo ? (
              <NavDropdown
                className="text-white me-5"
                title={userInfo.name}
                id="basic-nav-dropdown"
              >
                {/* <LinkContainer to="/profile">
                  <NavDropdown.Item>User Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/orderhistory">
                  <NavDropdown.Item>Order History</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider /> */}
                <Link
                  onClick={signoutHandler}
                  to="#signout"
                  className="dropdown-item"
                >
                  Sign Out
                </Link>
              </NavDropdown>
            ) : (
              <>
                <Link className="nav-link text-white" to="/signin">
                  Sign In
                </Link>
              </>
            )}
          </Container>
        </NavBar>
      </header>
    </div>
  );
}
export default Header;
