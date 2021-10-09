import React, { useEffect, useState } from 'react';
// import getData from './getGitHubData';

const CounterWithNameAndSideEffect: React.FunctionComponent = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Flavio');

    useEffect(() => {
        // 该函数在组件首次渲染时运行，并在每次后续重新渲染/更新时运行
        /**
         * 如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做
         * componentDidMount，componentDidUpdate 和 componentWillUnmount
         * 这三个函数的组合。
         *
         * useEffect 会在每次渲染后都执行吗？
         * 是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行。（我们稍后会谈到如何控制它。）
         * 你可能会更容易接受 effect 发生在“渲染之后”这种概念，不用再去考虑“挂载”还是“更新”。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。(即，effect始终调用在render after)
         *
         * 每次我们重新渲染，都会生成新的 effect，替换掉之前的。某种意义上讲，effect 更像是渲染结果的一部分 —— 每个 effect “属于”一次特定的渲染。我们将在本章节后续部分更清楚地了解这样做的意义。
         */
        console.log(`${name}, 点击了${count}次`);
    }, [name]);

    return (
        <div>
            <p>
                你好{name} 点击了 {count}次
            </p>

            <button onClick={() => setCount(count + 1)}>click me</button>
            <button onClick={() => setName(name === 'Flavio' ? 'Roger' : 'Flavio')}>
                更改名称
            </button>
            <br />
        </div>
    );
};

class Example extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        };
    }
    increase = () => {
        let newCount = this.state.count;

        newCount += 1;

        console.log(newCount);

        this.setState({
            count: newCount
        });
    };

    /**
     * 我们希望在组件加载和更新时执行同样的操作。
     * 从概念上说，我们希望它在每次渲染之后执行 —— 但 React 的 class 组件没有提供这样的方法。
     * 即使我们提取出一个方法，我们还是要在两个地方调用它。
     */
    // componentDidMount() {
    //     // 首次挂载后调用
    //     console.log('componentDidMount');

    //     document.title = `you click ${this.state.count} time`;
    // }

    // componentDidUpdate() {
    //     // 每次更新UI后调用
    //     console.log('componentDidUpdate');

    //     document.title = `you click ${this.state.count} time`;
    // }

    render() {
        let count = this.state.count;

        return (
            <div>
                <p>you click ${count} time</p>
                <button onClick={this.increase}>click me</button>
            </div>
        );
    }
}

export { CounterWithNameAndSideEffect, Example };
