/**
 * Created by echo.guan on 9/5/2017.
 */

new Vue({
  el:"#app",
  data:{
    totalMoney:0,
    productList:[]
  },
  filters:{
    formatMoney:function (value) {
      return "￥ " +value.toFixed(2);
    }
  },
  mounted:function () {
    this.$nextTick(function () {
      this.cartView();
    });
  },
  methods:{
    cartView:function () {
      this.$http.get("data/cartData.json").then(function (res) {
        this.productList = res.data.result.list;
        this.totalMoney = res.data.result.totalMoney;
      })
    },
    changeQuantity:function (product, type) {
      if(type>0){
        product.productQuantity++;
      }else{
        product.productQuantity--;
        if(product.productQuantity<1){
          product.productQuantity=1;
        }
      }
    },
    selectProduct:function (product) {
      if(typeof product.isCheck == 'undefined'){
        Vue.set(product, "isCheck, true);
      } else {
        product.isCheck = !product.isCheck;
      }

    }
  }
});

Vue.filter("money", function (value, type) {
  return "￥ " + value.toFixed(2) + type;
})
