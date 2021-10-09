import React from 'react';

interface productItem {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

interface Props {
    product: productItem;
    key: string;
}

const ProductRow: React.FunctionComponent<Props> = (props) => {
    const product = props.product;
    const name = product.stocked ? (
        product.name
    ) : (
        <span style={{ color: 'red' }}>{product.name}</span>
    );

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
};

export default ProductRow;

// export default class ProductRow extends React.Component<Props> {
//     render() {
//         const product = this.props.product;
//         const name = product.stocked ? (
//             product.name
//         ) : (
//             <span style={{ color: 'red' }}>{product.name}</span>
//         );

//         return (
//             <tr>
//                 <td>{name}</td>
//                 <td>{product.price}</td>
//             </tr>
//         );
//     }
// }
