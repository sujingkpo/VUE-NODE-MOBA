<template>
  <div>
    <h1>创建分类</h1>

    <el-form @submit.native.prevent="save">
      <el-form-item label-width="100px" label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button native-type="submit"></el-button>
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
    save() {
      //http.post()
    }
  }
};
</script>