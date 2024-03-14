<template>
    <div>
        <el-container>
            <el-header>司法行政典例筛选平台</el-header>
          </el-container>
        <br>
        <el-row>
            <el-button icon="el-icon-user-solid" circle></el-button>
            <el-button type="info" round id="blue">编写案例</el-button>
            <el-button type="info" round disabled id="blue">润色案例</el-button>
        </el-row>
        <br>
          <div id="searchsize">
            <el-input placeholder="搜索案例" v-model="input3">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        <el-row :gutter="50" id="blocktop">
            <el-col :span="5" offset="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="50" id="blocktop">
            <el-col :span="5" offset="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="50" id="blocktop">
            <el-col :span="5" offset="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }

}
</script>

<style>
#searchsize{
    width: 50%;
    margin-left:25%;
}
#blue{
    margin-left: 2%;
    background-color:#f0f4f7;
    color:#08070c;
    font-family: 楷体;
    font-size: 15px;
}
.el-header{
    font-size: 40px;
    font-family: 华文行楷;
    background-color: #c6dce8;
    color: #08070c;
    text-align: center;
    line-height: 60px;
  }
#blocktop{
    margin-top:5%;
    margin-bottom: 6%;
  }
.el-col {
    border-radius: 4px;
  }
.bg-purple {
    background: #d3dce6;
  }
.grid-content {
    border-radius: 4px;
    min-height: 100px;
    height: 100%;
    aspect-ratio: 1/0.8;
  }
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>