<template>
  <div class="home">
    <el-row>
      <el-col :span="6" :offset="3">
        <img class="poster" src="../assets/part2.webp" alt="" />
      </el-col>
      <el-col :span="12">
        <ul class="info-rows">
          <li>
            <h1>{{ metaData.name }}</h1>
          </li>
          <li>
            评分:
            <el-rate
              v-if="rate > 0"
              :value="rate"
              :score-template="rateTemplate"
              disabled
              show-score
              text-color="#ff9900"
            ></el-rate>
          </li>
          <li>导演: {{ metaData.director }}</li>
          <li>主演: {{ metaData.cast }}</li>
          <li>简介: {{ metaData.description }}</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import client from "@/api";
import { getMovieInfo } from "@/api/common";

export default {
  name: "home",
  components: {},
  data() {
    return {
      metaData: {}
    };
  },
  computed: {
    rate() {
      return this.metaData.rate ? this.metaData.rate / 2 : -1;
    },
    rateTemplate() {
      return this.metaData.rate + "";
    }
  },
  mounted() {
    this.getMetaData();
  },
  methods: {
    log(data) {
      console.log(123);
    },
    getMetaData() {
      client
        .query({ query: getMovieInfo, variables: {} })
        .then(res => (this.metaData = res.data));
    }
  }
};
</script>

<style lang="scss" scoped>
.poster {
  width: 100%;
}

.info-rows {
  list-style: none;
  text-align: left;
  line-height: 1.5;

  & > li {
    margin-bottom: 10px;
  }
}

.el-rate {
  display: inline-block;
  vertical-align: middle;
}
</style>
