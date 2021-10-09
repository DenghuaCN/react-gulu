import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

/**
 * 定义产品数组中每一个产品的类型
 */
interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}
/**
 * 定义产品数组的类型
 */
interface ProductListProps {
    productList: Product[];
    filterText: string;
    inStockOnly: boolean;
}

export default class ProductTable extends React.Component<ProductListProps> {
    public constructor(props: ProductListProps) {
        super(props);
    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows: React.ReactElement[] = [];
        let lastCategory: string | null = null;

        this.props.productList.forEach((item) => {
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
    }
}
