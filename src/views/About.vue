<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <input type="text" v-model="student">
    <button class="test" @click="addStu({name:student})">增加学员</button>
    <li v-for="(item,index) in studentList" :key="item+index">{{item}}</li> -->
    <!-- <button class="test" @click="computedCourse">text - modules</button> -->
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions, mapGetters} from "vuex"
export default {
  // data(){
  //    return {
  //      student:''
  //    }
  // },
  // methods:{
  //   ...mapMutations({
  //     computedCourse:'course/computedCourse',
  //     addStu:'student/addStu'
  //   }),
  //   test(){
  //     const data = this.$store._modules;
  //     // console.log(this.courseList)
  //   },
  //   // addStudnt(){

  //   // }
  // },
  // computed:{
  //   // ...mapState('courseList',['courseList'])
  //   ...mapGetters({
  //     studentList:'student/changeStu'
  //   }),
  //   ...mapState({
  //     courseList:state => state.course.courseList
  //   })
  // },

  // created(){
    
  // }
}
</script>
<style scoped>
  .test{
    color:white;
    background-color:black;
    padding:5px 8px;
    cursor:pointer;
  }
</style>

