import React from 'react';

interface Props {
    filterText: string;
    inStockOnly: boolean;
    setFilterText: Function;
    setStockOnly: Function;
}

const SearchBar: React.FunctionComponent<Props> = (props) => {
    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                onChange={(event) => {
                    props.setFilterText(event.target.value);
                }}
                value={props.filterText}
            />
            <p>
                <input
                    type="checkbox"
                    checked={props.inStockOnly}
                    onChange={(event) => {
                        props.setStockOnly(event);
                    }}
                />{' '}
                Only show products in stock
            </p>
        </form>
    );
};

export default SearchBar;
