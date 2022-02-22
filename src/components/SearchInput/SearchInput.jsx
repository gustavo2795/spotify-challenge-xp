import React from 'react';

import { Input } from './styles';

const SearchInput = ({ setSearchString, searchString }) => {
  return (
    <Input
      placeholder='Comece a escrever...'
      onChange={(e) => setSearchString(e.target.value)}
      value={searchString}
    />
  )
};

export default SearchInput;