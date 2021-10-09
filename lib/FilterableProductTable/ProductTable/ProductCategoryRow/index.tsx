import React from 'react';

interface Props {
    category: string;
    key: string;
}

export default class ProductCategoryRow extends React.Component<Props> {
    render() {
        const category = this.props.category;

        return (
            <tr>
                <th colSpan={2}>{category}</th>
            </tr>
        );
    }
}
