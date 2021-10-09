import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

interface ProductTableProps {
    productList: Product[];
    filterText: string;
    inStockOnly: boolean;
}

const ProductTable: React.FunctionComponent<ProductTableProps> = (props) => {
    const productList = props.productList;
    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;

    const rows: React.ReactElement[] = [];
    let lastCategory: string | null = null;

    productList.forEach((item) => {
        if (item.name.indexOf(filterText) === -1) {
            return;
        }

        if (inStockOnly && !item.stocked) {
            return;
        }

        if (item.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={item.category} key={item.category} />);
        }
        rows.push(<ProductRow product={item} key={item.name} />);

        lastCategory = item.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};

export default ProductTable;
