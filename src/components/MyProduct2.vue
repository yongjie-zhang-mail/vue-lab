<template>

  <p style="text-align: center">
    <input type="text" :placeholder="tip"/>
    <input type="submit">
  </p>

  <button @click="toggleProduct">{{ showProducts ? "隐藏" : "显示" }}商品</button>

  <div v-if="showProducts">
    <h1>{{ title }}</h1>
    <div>总共: {{ total }} 个商品</div>

    <!--
    <div>总共: {{ total }} 个商品</div>
    <div v-for="product in products" :key="product.id">
      <img :src="product.img" alt="jd商品"/>
      <div>
        {{ product.name }}
      </div>
      <div>
        {{ product.price }}
      </div>
    </div>
    -->

    <el-row>
      <el-col v-for="product in products" :key="product.id" :span="8">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="product.img" alt="jd商品" class="image"/>
          <div style="padding: 14px">
            <span>{{ product.name }}</span>
            <div class="bottom">
              <time class="time">{{ product.price }}</time>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>

</template>

<script>
// import axios from "axios";

export default {
  name: "MyProduct2",
  props: [
    "title"
  ],
  data() {
    return {
      tip: "请输入查询关键字",
      showProducts: true,
      products: [],
      total: 0,
    }
  },
  methods: {
    toggleProduct() {
      this.showProducts = !this.showProducts;
    }
  },
  created() {
    // console.log("组件MyProduct2被创建了");
    // axios.post("http://localhost:8080/v1/testos/searchPage", {
    this.$axios.post("/v1/testos/searchPage", {
      "entity": {
        "name": "pytorch"
      },
      "pageNum": 1,
      "pageSize": 10
    }).then((response) => {
      console.log(response.data);
      this.products = response.data.data.list;
      this.total = response.data.data.total;

    }).catch(function (error) {

    }).then(function () {

    });

  }
}


</script>

<style scoped>

</style>