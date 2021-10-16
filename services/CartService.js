import CartShema from "../shemas/CartShema.js";

class CartService {
    async addToCart(product) {
        return await CartShema.create(product);
    }

    async showProductsForCart() {
        return CartShema.find();
    }

    async deleteItemFromCart(id) {
        return CartShema.findByIdAndDelete(id);
    }
}

export default new CartService()