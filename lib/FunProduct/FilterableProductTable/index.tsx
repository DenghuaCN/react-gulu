import React, { useState } from 'react';
import productList from './product';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable: React.FunctionComponent = () => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setStockOnly] = useState(false);

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                setFilterText={setFilterText}
                setStockOnly={setStockOnly}
            />
            <ProductTable
                productList={productList}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
};

export default FilterableProductTable;
