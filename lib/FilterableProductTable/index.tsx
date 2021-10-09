import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import productList from './productList';

/**
 * 定义产品数组中每一个产品的类型
 */
interface ProductElement {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}
/**
 * 定义产品数组的类型
 */
interface ProductListProps {
    productList: ProductElement[];
}

/**
 * 导出<FilterableProductTable />
 * react.d.ts 文件定义了 React.Component<Props,State>，你应该使用自己所需的 Props 和 State 声明扩展它：
 */
class FilterableProductTable extends React.Component<ProductListProps, any> {
    constructor(props: ProductListProps) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };

        // 在<Search />中是通过this.props.onInputChange调用父组件的方法，this => Props对象
        // 需要将其this绑定为父组件上下文，否则导致this.setState等方法undefined
        this.handleCheckboxChangeHandle = this.handleCheckboxChangeHandle.bind(this);
    }

    /**
     * 定义一个回调函数，传给<Search />组件，当SearchBar组件监听到input值变化，使用回调函数调用
     * @func handleInputChangeHandle
     * @param {string} inputValue
     * @return {void}
     */
    handleInputChangeHandle(inputValue: string): void {
        this.setState({
            filterText: inputValue
        });
    }

    /**
     * @func handleCheckboxChangeHandle
     * @param {string} checkboxValue
     * @return {void
     */
    handleCheckboxChangeHandle(checkboxValue: boolean): void {
        this.setState({
            inStockOnly: checkboxValue
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onInputChange={this.handleInputChangeHandle.bind(this)}
                    onCheckChange={this.handleCheckboxChangeHandle}
                />
                <ProductTable
                    productList={this.props.productList}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

/**
 * 导出<Product />
 */
export default class Product extends React.Component {
    constructor(props: any) {
        super(props);

        this.state = {
            productList: []
        };
    }

    componentDidMount() {
        let data = this.getProductList();

        this.setState({
            productList: data
        });
    }

    getProductList() {
        setTimeout(() => {
            return productList;
        }, 500);
    }

    render() {
        return <FilterableProductTable productList={productList} />;
    }
}
