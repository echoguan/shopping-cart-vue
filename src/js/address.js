/**
 * Created by echo on 2017/9/17.
 */

new Vue({
  el: '.container',
  data: {
    addressList:[ ],
    filterNum: 3,
    currentSelect: 0
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getAddress();
    });
  },
  computed: {
    filterAddress:function () {
      return this.addressList.slice(0,this.filterNum);
    }
  },
  methods: {
    getAddress:function () {
      this.$http.get("data/address.json").then(function (res) {
        this.addressList = res.data.result;
      })
    }
  }
});
