import React from 'react';

interface Props {
    filterText: string;
    inStockOnly: boolean;
    onInputChange: Function;
    onCheckChange: Function;
}

export default class SearchBar extends React.Component<Props> {
    public constructor(props: Props) {
        super(props);

        // 如果不使用 (event) => { this.xxx(event) }绑定，则需要显式绑定this
        // this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    /**
     * @func handleFilterTextChange
     * @param {Event} evt
     */
    handleFilterTextChange(evt: React.ChangeEvent<HTMLInputElement>) {
        // this => <SearchBar />
        console.log('handleFilterTextChange', this);
        this.props.onInputChange(evt.target.value);
    }

    /**
     * @func handleStockOnlyChange
     * @param {Event} evt
     */
    handleStockOnlyChange(evt: React.ChangeEvent<HTMLInputElement>) {
        this.props.onCheckChange(evt.target.checked);
    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(event) => {
                        this.handleFilterTextChange(event);
                    }}
                    value={filterText}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(event) => {
                            this.handleStockOnlyChange(event);
                        }}
                        /**
                         * onChange={window.addEventListener('change', handelStockOnlyChange)}
                         */
                    />{' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}
