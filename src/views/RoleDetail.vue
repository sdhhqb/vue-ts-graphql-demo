<template>
  <div class="about">
    <h2>角色详情</h2>
    <div>
      <el-row>
        <el-col :span="18" :offset="3">
          <el-form label-width="auto">
            <el-form-item label="角色：">
              <div class="info-row">{{ roleDetail.name }}</div>
            </el-form-item>
            <el-form-item label="演员：">
              <div class="info-row">{{ roleDetail.actor }}</div>
            </el-form-item>
            <el-form-item label="经典台词：">
              <div class="info-row">{{ roleDetail.classicLine }}</div>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="18" :offset="3">
          <h3>角色关系</h3>
          <el-table
            :data="relationList"
            style="width: 100%"
            @row-click="handleRowClick"
          >
            <el-table-column type="index"> </el-table-column>
            <el-table-column prop="person.name" label="关联角色">
            </el-table-column>
            <el-table-column prop="relation" label="关系"> </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import client from "@/api";
import { getRoleDetail } from "@/api/common";

export default {
  name: "RoleDetail",
  data() {
    console.log(this, this.$route);
    return {
      roleDetail: {}
    };
  },
  computed: {
    curId() {
      return this.$route.params.id;
    },
    relationList() {
      return this.roleDetail.related || [];
    }
  },
  watch: {
    curId(val, oldVal) {
      if (val) {
        this.getRoleDetail();
      }
    }
  },
  mounted() {
    this.getRoleDetail();
  },
  methods: {
    // 获取角色详情
    getRoleDetail() {
      console.log("get detail");
      client
        .query({
          query: getRoleDetail,
          variables: {
            id: this.$route.params.id
          }
        })
        .then(res => (this.roleDetail = res.data.person));
    },
    handleRowClick(row) {
      this.$router.push({
        name: "roleDetail",
        params: {
          id: row.person.id
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.info-row {
  text-align: left;
}
</style>
