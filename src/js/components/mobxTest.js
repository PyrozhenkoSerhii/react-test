import { observer } from 'mobx-react'
import React, { Component } from 'react';

import DevTools from 'mobx-react-devtools';

@observer
class MobxTest extends Component {
    onBlurEvents = () => {
        this.props.store.addHistoryItem(this.props.store.history.length + 1);
        this.props.store.waitForOrders();
    }

    render() {
        const store = this.props.store;
        return (
            <div>
                <DevTools />
                <h3>MobX test</h3>

                <p>Count: {store.count}</p>
                <button onClick={store.increment}>+</button>
                <button onClick={store.decrement}>-</button><br />

                <label>Price:</label>
                <input
                    onChange={(e) => store.setPrice(e.target.value)}
                    onBlur={this.onBlurEvents}
                    value={store.price}>
                </input>

                <p>Whole price: {store.resultPrice}</p>

                <p>People ordered: {store.orders}</p>
                <p>Income: {store.income}</p>

                <h3>History</h3>
                {this.props.store.history.map(element => (
                    <li key={element.id} onClick={() => store.deleteHistoryItem(element.id)}>
                        <HistoryElement element={element} />
                    </li>
                ))}
                <button onClick={store.clearHistory}>Clear history</button>
                <button onClick={store.clearState}>Clear state</button>
            </div>
        )
    }
}

@observer
class HistoryElement extends Component {
    render() {
        const el = this.props.element;
        return (
            <div >
                <p>Count: {el.count}</p>
                <p>Price: {el.price}</p>
            </div>
        )
    }

}


export default MobxTest;