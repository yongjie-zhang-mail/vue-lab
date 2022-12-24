<template>
  <div v-if="showProduct">
    <h1>MyProduct2</h1>
    <img :src="products[0].img" alt="jd商品"/>
    <div>
      {{ products[0].name }}
    </div>
    <div>
      {{ products[0].price }}
    </div>
  </div>
  <button @click="toggleProduct">{{ showProduct ? "隐藏" : "显示" }}商品</button>
</template>

<script>
export default {
  name: "MyProduct2",
  data() {
    return {
      products: [
        {
          id: "10036574031502",
          img: "//img12.360buyimg.com/n1/s200x200_jfs/t1/214693/28/22196/130578/634cd246Eb4271b11/7044fc65b92826bc.jpg",
          name: "抖音推荐用钱赚钱正版10册 有钱人和你想的不一样思考致富财富自由犹太人的赚钱智慧精进戒了吧拖延症等 用钱赚钱正版10册",
          price: "￥36.80",
        },
        {
          id: "12731283",
          img: "//img13.360buyimg.com/n1/s200x200_jfs/t1/154726/15/2411/202137/5f890287E4f71832f/256fbdb50b7bc660.jpg",
          name: "预算大师的理财课（舵手经典136）",
          price: "￥48.00",
        },
        {
          id: "36913878089",
          img: "//img14.360buyimg.com/n1/s200x200_jfs/t1/51626/37/17877/113198/6322bdd3E6714d045/3d1e6483e657c4ea.jpg",
          name: "正版6册巴菲特之道 跟巴菲特学投资 投资大师炼金术 经济学金融股票证券基金投资法则 个人理财书籍套装",
          price: "￥39.90",
        },
      ],
      showProduct: true,
    }
  },
  methods: {
    toggleProduct() {
      this.showProduct = !this.showProduct;
    }
  },
}
</script>

<style scoped>

</style>