<template>

  <p style="text-align: center">
    <!--    <p>{{ searchRequest }}</p>-->
    <input type="text" :placeholder="tip.tip1" v-model="searchRequest.entity.name"/>
    <input type="text" :placeholder="tip.tip2" v-model="searchRequest.pageSize"/>
    <input type="text" :placeholder="tip.tip3" v-model="searchRequest.pageNum"/>
    <button @click="searchPage">搜索</button>
    <!--    <a href="https://www.baidu.com" @click.prevent="searchPage" >链接</a>-->
    <!--    <input type="submit" @submit.prevent="searchPage" />-->
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
      tip: {
        tip1: "请输入查询关键字",
        tip2: "每页个数",
        tip3: "第几页",
      },
      showProducts: true,
      products: [],
      total: 0,
      searchRequest: {
        entity: {
          name: ""
        },
        pageNum: "",
        pageSize: "",
      },
    }
  },
  methods: {
    toggleProduct() {
      this.showProducts = !this.showProducts;
    },
    axiosPost1() {
      // console.log("axiosPost1");
      // axios.post("http://localhost:8080/v1/testos/searchPage", {
      this.$axios.post("/v1/testos/searchPage", {
        "entity": {
          "name": "pytorch"
        },
        "pageNum": 1,
        "pageSize": 10
      }).then((response) => {
        // console.log(response.data);
        this.products = response.data.data.list;
        this.total = response.data.data.total;
      }).catch(function (error) {

      }).then(function () {

      });
    },
    axiosPost2() {
      // console.log("axiosPost2");
      this.$axios({
        method: "post",
        url: "/v1/testos/searchPage",
        data: this.searchRequest,
      }).then((response) => {
        // console.log(response.data);
        this.products = response.data.data.list;
        this.total = response.data.data.total;
      }).catch((error) => {

      }).then({})
    },
    searchPage() {
      // console.log(this.searchRequest);
      this.axiosPost2();
    },
  },
  created() {

  }
}


</script>

<style scoped>

</style>