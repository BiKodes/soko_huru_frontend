import axios from 'axios'

import { createStore } from 'vuex'

export default createStore({
  state: {  
    cart: {
      items: [],
    },
    products:[],
    orders: [],
    cartItemCount: 0,
    watchingItems: [],
    watchListCount: 0,
    isAuthenticated: false,
    token: '',
    isLoading: false,
  },
  
  mutations: {
    
    INITIALIZE_STORE(state){

      if(localStorage.getItem('cart')){
        state.cart = JSON.parse(localStorage.getItem('cart'));
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }

      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token');
        state.isAuthenticated = true;
      } else {
          state.token = '';
          state.isAuthenticated = false;
      }
    },

    SET_IS_LOADING(state, status){
      state.isLoading = status;
    },

    ADD_TO_CART(state, item){
      this.cartItemCount++;
      const exist = state.cart.items.filter(i => i.id === item.id);

      if(exist.length){
        exist[0].quantity = parseInt(exist[0].quantity) + parseInt(item.quantity);
      } else {
        state.cart.items.push(item);
      }
   
    },

    REMOVE_FROM_CART(state, product) {
      state.cart.items = state.cart.items.filter(i => i.id !== product.id);
    },

    UPDATE_CART(state) {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    SET_TOKEN(state, token) {
      state.token = token;
      state.isAuthenticated = true;
    },
      
    REMOVE_TOKEN(state) {
      state.token = '';
      state.isAuthenticated = false;
    },

    SET_CATEGORIES(state, products) {
      state.products = products;
    },

    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    
    ADD_TO_WATCHLIST(state, product) {
      this.watchListCount++;
      
      if (product) {
        state.watchingItems.splice(
          this.watchingItems.findIndex(
            (p) => p.id === product.id
          ),
          1
        );
     
      } else {
        state.watchingItems.push(product);
      }

    },

    REMOVE_FROM_WATCHLIST(state, product) {
      state.watchingItems.splice(
        state.watchingItems.findIndex((p) => p.id === product.id),
        1
      );

    },

    UPDATE_WATCHLIST(){
      localStorage.setItem('watchingItems', JSON.stringify(state.watchingItems));
    }

  },

  actions: {

    setIsLoading({commit}, status){
      commit('SET_IS_LOADING', status);
    },

    addToCart({commit}, item){
      commit('ADD_TO_CART', item);
      commit('UPDATE_CART');
    },
    
    removeFromCart({commit}, product){
      commit('REMOVE_FROM_CART', product);
      commit('UPDATE_CART');
    },

    setToken({commit}, token){
      commit('SET_TOKEN', token);
    },

    removeToken({commit}, token){
      commit('REMOVE_TOKEN', token);
    },

    setCategories({commit}, products){
      commit('SET_CATEGORIES', products);
    },

    addToWatchList({commit}, item){
      commit('ADD_TO_WATCHLIST', item);
      commit('UPDATE_WATCHLIST');
    },

    removeFromWatchList({commit}, product){
      commit('REMOVE_FROM_WATCHLIST', product);
      commit('UPDATE_WATCHLIST');
    },

    async fetchCategory({commit}, categorySlug) {
      
      commit('SET_IS_LOADING', true);

      axios
          .get(`/api/v1/products/${categorySlug}/`)
          .then(response => {
              commit("SET_CATEGORIES", response.data);
          })
          .catch(error => {
              console.log(error);
          })
      
      commit('SET_IS_LOADING', false);
    },

    async getAllOrders({commit}) {
      commit('SET_IS_LOADING', true)

      await axios
          .get('/api/v1/orders/' )
          .then(response => {
              this.orders = response.data
          })
          .catch(error => {
              console.log(error)
          })

      commit('SET_IS_LOADING', false)
    },

    async getLatestProducts({commit}){
      commit('SET_IS_LOADING', true)
      try {
        const response = await axios.get('api/v1/products/latest-products/')
        commit('SET_PRODUCTS', response.data);
      } catch (error) {
        console.log(error)
      }
      commit('SET_IS_LOADING', false)
    },

    addToCartNew(product_id){
      console.log('Product_ID', product_id)

      var data = {
        'product_id': product_id, 
        'quantity': 1,
        'update': false
      };

      fetch('api/v1/products/add_to_cart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSFToken': '{{ csrf_token }}'
        },
        credentials: 'same-origin',
        body: JSON.stringify(data)
      })
      .then((response) => {
        console.log(response)
      })
      .catch(function(error){
        console.log('Error 2')
        console.log(error)
      })
      
    },

    removeromCartNew(product_id){
      console.log('Product_ID', product_id)

      var data = {
        'product_id': product_id, 
      };

      fetch('api/v1/products/remove_from_cart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSFToken': '{{ csrf_token }}'
        },
        credentials: 'same-origin',
        body: JSON.stringify(data)
      })
      .then((response) => {
        console.log(response)
      })
      .catch(function(error){
        console.log('Error 2')
        console.log(error)
      })
      
    },

    incrementQuantityNew(product_id){
      console.log('Product_ID', product_id)

      console.log('Product_ID', product_id)

      var data = {
        'product_id': product_id, 
        'update': true,
        'quantity': parseInt(quantity) + 1
      };

      fetch('api/v1/products/add_to_cart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSFToken': '{{ csrf_token }}'
        },
        credentials: 'same-origin',
        body: JSON.stringify(data)
      })
      .then((response) => {
        console.log(response)
      })
      .catch(function(error){
        console.log('Error 2')
        console.log(error)
      })
      
    }
},

  getters: {

    getCartItems: state => {
      return state.cart.items;
    },

    cartTotalPrice: state => {
      let total = 0.0;
      state.cart.items.forEach( (record) => {
        total += record.price * record.quantity;
      })
      return total;
    },

    getCategories: state => {
      return state.products;
    },

    getWatchingItems: state => {
      return state.watchingItems;
    },

    getMyOrdersList: state => {
      return state.orders;
    },

    getProducts: state => {
      return state.products;
    },

    getProductByName(state){
      console.log(state.products)
      
      const query = state.products.filter( product => {
        console.log(product.name),
        product.name == 'TEST'; 
      })
      console.log(query)
      return query
    },

    getProductByID(state, productID) {
      return state.watchingItems.find(
        (p) => p.id === productID
      );
    },

    getToken: state => {
      return state.token;
    },

    getIsLoading: state => {
      return state.isLoading;
    },

  },

  modules: {
  }
})
