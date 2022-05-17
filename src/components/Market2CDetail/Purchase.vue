<template>
  <div class="m2csp">
    <el-row :gutter="30">
      <el-col :span="8">
        <el-row>
          <img class="m2csp-main-img" :src="data.imgs[currentImgIndex]" />
        </el-row>
        <el-row>
          <div class="m2csp-img-div">
            <el-button
              class="m2csp-img-scale"
              v-for="(item, index) in data.imgs"
              :key="index"
              @click="setImage(index)"
            >
              <img class="m2csp-img" :src="item" />
            </el-button>
          </div>
        </el-row>
      </el-col>
      <el-col :span="16">
        <div class="m2csp-right">
          <el-row>
            <h2>{{ data.name }}</h2>
          </el-row>
          <el-row>
            <el-col :span="12">
              <p>单价: ¥{{ data.unitPrice }}</p>
            </el-col>
            <el-col :span="12">
              <p>
                数量:
                <el-input-number
                  v-model="amount"
                  @change="changeAmount"
                  :min="1"
                  label="数量"
                ></el-input-number>
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <p>发货地: {{ data.location }}</p>
            </el-col>
            <el-col :span="12">
              <p>货品单位: {{ data.unit }}</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="12" :span="12">
              <el-button type="primary">下单</el-button>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      currentImgIndex: 0,
      amount: 1,
      selectedPayment: 0,
      data: {
        imgs: [
          "static/img/test.jpeg",
          "static/img/test.jpeg",
          "static/img/test.jpeg",
          "static/img/test.jpeg",
          "static/img/test.jpeg",
        ],
        name: "name",
        unitPrice: 20,
        location: "location",
        unit: "unit",
      },
    };
  },
  methods: {
    getData() {
      this.axios({
        method: "get",
        url: "/get/market2cpurchase",
        params: {
          itemId: this.id,
        },
      }).then((response) => {
        this.data = response.data;
      });
    },
    setImage(index) {
      this.currentImgIndex = index;
    },
    changeAmount(value) {
      console.log(value);
    },
  },
};
</script>

<style>
.m2csp {
  width: 1000px;
  margin: 20px auto 0 auto;
}
.m2csp-main-img {
  width: 300px;
  height: 300px;
}
.m2csp-img-div {
  display: flex;
  width: 300px;
  justify-content: center;
  margin: 0 auto 0 auto;
}
.m2csp-img-scale {
  padding: 0;
  width: 55px;
  height: 55px;
}
.m2csp-img {
  width: 100%;
  height: 100%;
}
.m2csp-right {
  padding: 0 20px;
  text-align: left;
  height: 358px;
  background: white;
}
</style>