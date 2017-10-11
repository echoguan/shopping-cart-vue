/**
 * Created by echo.guan on 9/5/2017.
 */

new Vue({
  el:"#app",
  data:{
    totalMoney:0,
    productList:[ ],
    checkAllFlag:false,
    delFlag:false,
    currentDelProduct:''
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
      this.countTotalMoney();
    },
    selectProduct:function (product) {
      if(typeof product.isCheck == 'undefined'){
        Vue.set(product, "isCheck", true);
      } else {
        product.isCheck = !product.isCheck;
      }
      this.countTotalMoney();
    },
    selectAll:function (flag) {
      this.checkAllFlag = flag;
      var _this = this;
      this.productList.forEach(function (item) {
        if(typeof item.isCheck == 'undefined'){
          Vue.set(item, "isCheck", _this.checkAllFlag);
        } else {
          item.isCheck = _this.checkAllFlag;
        }
      })
      this.countTotalMoney();
    },
    countTotalMoney:function () {
      var _this = this;
      this.totalMoney = 0;
      this.productList.forEach(function (item) {
        if(item.isCheck == true){
          _this.totalMoney += item.productPrice * item.productQuantity;
        }
      })
    },
    delConfirm:function (product) {
      this.delFlag = true;
      this.currentDelProduct = product;
    },
    delProduct:function () {
      var index = this.productList.indexOf(this.currentDelProduct);
      this.productList.splice(index, 1);
      this.delFlag = false;
      this.countTotalMoney();
    }
  }
});

Vue.filter("money", function (value, type) {
  return "￥ " + value.toFixed(2) + type;
})
