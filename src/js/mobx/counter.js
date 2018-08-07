import _ from 'lodash';

import { observable, action, computed, autorun, when, reaction } from "mobx"
import { persist, create } from 'mobx-persist';

class History {
    constructor(id, count, price) {
        this.id = id
        this.count = count;
        this.price = price;
    }

    @persist @observable id
    @persist @observable count
    @persist @observable price
}

class ObservableCounter {
    constructor() {
        when(
            () => this.orders > 20,
            () => console.log("You've sold more than 20 items!")
        )
    }

    @persist @observable count = 0
    @persist @observable price = 100
    @persist('list', History) @observable history = []
    @observable orders = 0


    @action increment = () => this.count++
    @action decrement = () => this.count--

    @action setPrice = (price) => this.price = price

    @action waitForOrders = () => setTimeout(() => this.orders = _.random(30), 3000)

    @action addHistoryItem = id => this.history.push(new History(id, this.count, this.price))
    @action deleteHistoryItem = id => this.history = this.history.filter(el => el.id !== id)

    @action clearHistory = () => this.history = []
    @action clearState = () => {
        this.count = 0
        this.price = 100
        this.orders = 0
        this.history = []
    }

    @computed get resultPrice() { return this.count * this.price }
    @computed get income() { return this.price * this.orders }
    
    priceAutorun = autorun(() => console.log('price logger: ', this.price))

    priceReaction = reaction(
        () => this.price > 10000,
        () => console.log(`really? there is too much! (${this.price}`)
    )

    historyReaction = reaction(
        () => this.history.length > 5,
        () => {
            this.history.splice(0, 1)
            console.log('first history was deleted!')
        }
        
    )
}
const hydrate = create({ storage: localStorage, jsonify: true })

/**
 * ========Note==========
 * The order is important
 * Export at first, then hydrate
 */
export const counterStore = new ObservableCounter();

hydrate('mobxPersist', counterStore).then(() => console.log('Store was saved'))