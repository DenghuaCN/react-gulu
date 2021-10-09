import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import FunProduct from './FunProduct/FilterableProductTable/';
import { CounterWithNameAndSideEffect, Example } from './hook/learnUseEffect';

const root = document.getElementById('root');

const App = (
    <div>
        <FunProduct />
        <hr />
        <Button />
        <hr />
        <CounterWithNameAndSideEffect />
        <hr />
        <Example />
        <br />
    </div>
);

ReactDOM.render(App, root);
