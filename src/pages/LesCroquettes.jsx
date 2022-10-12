import React, { useCallback, useEffect, useState } from 'react';
import datas from '../datas/datas.js';
import '../CSS/LesCroquettes.css';
import Filter from '../components/Filter.jsx';
import CardList from '../components/CardList.jsx';

function LesCroquettes() {
  const categories = ['adulte', 'sénior', 'chaton'];

  const [state, setState] = useState({
    products: datas,
  });
  console.log(state);

  const handleFilterChange = useCallback(
    (event) => {
      setState((previousState) => {
        let filters = new Set(previousState.filters);
        let products = datas;

        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }

        if (filters.size) {
          products = products.filter((product) => {
            return filters.has(product.age);
          });
        }

        return {
          filters,
          products,
        };
      });
    },
    [setState]
  );

  return (
    <div className='card-container'>
      <Filter categories={categories} handleFilterChange={handleFilterChange} />
      <CardList products={state.products} />
    </div>
  );
}

export default LesCroquettes;
