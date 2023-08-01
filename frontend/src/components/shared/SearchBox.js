import {
  Button,
  useState,
  Form,
  useNavigate,
  useLocation,
} from '../../Imports';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useEffect } from 'react';
import { getFilterUrl } from '../../Utils';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { search } = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
    const link = getFilterUrl(search, { query: query ? query : 'all' });
    navigate(link);
  };

  useEffect(() => {
    if (!query) return;
    const link = getFilterUrl(search, { query: query ? query : 'all' });
    navigate(link);
  }, [query]);

  return (
    <Form onSubmit={(e) => submitHandler(e)} className="d-flex me-auto w-120">
      <InputGroup>
        <FormControl
          area-descrybeby="button-search"
          type="text"
          name="q"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products"
        ></FormControl>
        <Button variant="outline-primary" type="submit" id="button-search">
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBox;
