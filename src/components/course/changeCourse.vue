<template>
  <div>
    <div class="alter-course" v-if="ishow">
      <div class="title">
        <label for="title">课程名称:</label>
        <input type="text" id="title" v-model="title">
      </div>
      <div class="price">
        <label for="price">价格:</label>
        <input type="text" v-model="price">
      </div>
      <button class="sure" @click="alterCourse({title,price,index});ishow=false">确认修改</button>
    </div>
    <div class="course-list" v-else>
      <ul>
        <li class="course" v-for="(item,index) in courseList" :key="index+item">
          <span>{{item.name}} - ￥{{item.price}}</span>
          <button class="alter" @click="enterAlter(item.name,item.price,index)">点击修改</button>
        </li>
      </ul>
      <router-link class="sure" tag="button" :to="{name:'course'}">全部修改完成</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      ishow: false,
      title: "",
      price: "",
      index: 0
    };
  },
  computed: {
    ...mapState("course",["courseList"])
  },
  methods: {
    enterAlter(name, price, index) {
      this.ishow = true;
      this.title = name;
      this.price = price;
      this.index = index;
    },
    ...mapMutations({
      alterCourse: "course/alterCourse"
    })
  }
};
</script>

<style scoped>
.course {
  line-height: 50px;
  width: 50%;
  border-bottom: 1px solid #eee;
}
input{
    margin-top:20px;
    margin-left: 10px;
    width: 30%;
    height: 35px;
}
button {
  cursor: pointer;
}
.alter {
  margin-left: 20px;
  background-color: #000;
  padding: 5px 8px;
  color: #fff;
}
.sure {
  background-color: #000;
  padding: 10px 15px;
  color: #fff;
  margin-top: 20px;
}
</style>