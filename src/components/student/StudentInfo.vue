<template>
  <div>
    <ul>
      <li 
      v-for="(item,index) in newStudent" 
      :key="index">
      {{index}}-{{item}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  // props:['student-list']
  data() {
    return {
      // studentList: []
    };
  },
  created() {
      // this.duyi.$on('add',data=>{
      //     this.studentList.push(data)
      // })
  },
  computed:{
      ...mapState({
        mystudent:state=>state.student.studentList,
        Ostudent(state){
          return state.student.studentList
        }
      }),
      student(){
        return this.$store.state.student.studentList
      },
      starsStudent(){
        return this.$store.getters['student/computeStudent']
      },
      ...mapGetters({
        newStudent:'student/computeStudent'
      })
      
  }
};
</script>

<style scoped>
ul {
  margin-top: 10px;
}
li {
  font-size: 20px;
}
</style>