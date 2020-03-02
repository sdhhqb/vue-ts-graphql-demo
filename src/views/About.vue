<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <el-table :data="tableData">
        <el-table-column
          prop="date"
          label="日期"
          sortable
          :sort-method="sortMethod"
          width="180"
        >
        </el-table-column>
        <el-table-column prop="name" label="姓名" sortable width="180">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    console.log(this, this.$route);
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        }
      ]
    };
  },
  methods: {
    sortMethod(a, b) {
      console.log(arguments);
      return -1;
    }
  }
};
</script>
