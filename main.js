var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/sample-img.jpg',
    inStock: true,
    something: ["something 1", "something 2", "something 3", "something 4"],
    variants: [{
        variantID: 2234,
        variantColor: "green",
        variantImage: './assets/sample-img.jpg'
      },
      {
        variantID: 2235,
        variantColor: "blue",
        variantImage: './assets/sample-img2.jpg'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1
    },
    updateProduct: function(variantImage) {
      this.image = variantImage
    }
  }
})
