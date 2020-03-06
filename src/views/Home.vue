<template>
  <div class="home">
    <el-row>
      <el-col :span="6" :offset="3" :xs="12">
        <img class="poster" src="../assets/part2.webp" alt="" />
      </el-col>
      <el-col :span="12" :xs="18">
        <ul class="info-rows">
          <li>
            <h1>{{ mainData.name }}</h1>
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
          <li>导演: {{ mainData.director }}</li>
          <li>主演: {{ mainData.cast }}</li>
          <li>简介: {{ mainData.description }}</li>
        </ul>
      </el-col>
      <el-col :span="18" :offset="3">
        <h2>角色列表</h2>
        <el-table
          :data="roleList"
          style="width: 100%"
          @row-click="handleRowClick"
        >
          <el-table-column type="index"> </el-table-column>
          <el-table-column prop="name" label="角色名"> </el-table-column>
          <el-table-column prop="actor" label="演员"> </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import client from "@/api";
import { getMovieInfo, getRoleList } from "@/api/common";

export default {
  name: "home",
  components: {},
  data() {
    return {
      mainData: {},
      roleList: []
    };
  },
  computed: {
    rate() {
      return this.mainData.rate ? this.mainData.rate / 2 : -1;
    },
    rateTemplate() {
      return this.mainData.rate + "";
    }
  },
  mounted() {
    this.getMainData();
    this.getRoleList();
  },
  methods: {
    // 获取电影主数据
    getMainData() {
      client
        .query({ query: getMovieInfo, variables: {} })
        .then(res => (this.mainData = res.data));
    },
    // 获取角色列表
    getRoleList() {
      client
        .query({ query: getRoleList })
        .then(res => (this.roleList = res.data.allPeople));
    },
    handleRowClick(row, column, event) {
      this.$router.push({
        name: "roleDetail",
        params: {
          id: row.id
        }
      });
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
