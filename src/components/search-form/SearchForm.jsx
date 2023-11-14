import PropTypes from 'prop-types';
import { Input, SearchButton } from './SearchForm.styled';

export const SearchForm = ({ fnOnFormSubmit, fnOnChange, value }) => {
  const handleSubmit = event => {
    fnOnFormSubmit(event);
  };
  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      onChange={e => fnOnChange(e.target.value)}
      value={value}
    >
      <Input
        id="input"
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <SubmitBtn />
    </form>
  );
};

export const SubmitBtn = () => (
  <SearchButton type="submit" className="button">
    Search
  </SearchButton>
);

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
  fnOnFormSubmit: PropTypes.func,
  fnOnChange: PropTypes.func,
};
