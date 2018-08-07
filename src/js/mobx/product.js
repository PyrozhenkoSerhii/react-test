import { observable, action, computed, when} from "mobx";
import { persist, create } from 'mobx-persist'

export const Product = class Product {
    constructor(id, title, price, count) {
        this.id = id
        this.title = title
        this.price = price
        this.count = count
    }

    @persist @observable id
    @persist @observable title
    @persist @observable price
    @persist @observable count
}

class ProductStore {
    constructor(){
        when(
            () => this.products.some(el => el.price < 100),
            () => this.hotProducts = this.products.filter(el => el.price < 100)
        )
    }

    @persist('list', Product) @observable products = []
    @observable hotProducts = [];

    @computed get generalPrice() { return this.products.reduce((result, element) => result + element.price) }
    @computed get productById(id) { return this.products.find(el => el.id === id) }

    @action addProduct = Product => this.products.push(Product)
    @action deleteProduct = id => this.products = this.products.filter(el => el.id !== id)
}

const hydrate = create({ storage: localStorage, jsonify: false })

export const productStore = new ProductStore()

hydrate('productStore', productStore)

