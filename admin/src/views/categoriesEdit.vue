<template>
  <div>
    <h1>创建分类</h1>

    <el-form @submit.native.prevent="save" label-width="100px">
      <el-form-item label-width="100px" label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import http from "../http";
export default {
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async save() {
      let res = await http.post("categories", this.model);
      // eslint-disable-next-line no-console
      console.log(res);

      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    }
  }

};
</script>