<template>
<div id='box'>
    <ul class="container">
        <li class="course" v-for="(item) in courseList" :key="item.name">
            <img :src="item.poster" class="image" alt="">
            <div class="course-info">
                <h3 class="title">{{item.name}}</h3>
                <div class="info">
                    <span class="price" v-if="item.price > 0">￥{{item.price}}</span>
                    <span class="free" v-else>免费</span>
                    <span class="institution">渡一教育</span>
                </div>
            </div>
        </li>
    </ul>

</div>
</template>

<script>
import { mapState} from 'vuex'
export default {
    computed:{
         ...mapState('course',['courseList']),
    },
    created(){
        // mapMutations(['computedCourse'])
        // computedCourse()
        this.$store.commit('course/computedCourse')
    }
}

</script>

<style scoped>
/* #box{
    width:100%;
    height: 100%; 
    border:1px solid blue;
} */
 .course-info{
     min-height:70px;
     width: 350px;
     display: flex;
     flex-direction:column;
     justify-content: space-between;
 }
 .info{
     display:flex;
     justify-content: space-between;
 }
 .institution{
     color:darkgrey;
 }
 .image{
     width:350px;
     height: 196px;
     /* height:200px */
 }
 .price{
     color:mediumvioletred;
 }
 .free{
     color:seagreen;
 }
  .course{
      margin-bottom:10px;
      border:1px solid transparent;
      /* width: 350px; */
      
  }
  .course:hover{
     border:1px solid rgba(24, 24, 23, 0.3);
     opacity: .5;
     box-shadow: 1px 2px 3px gray;
  }
  .container{
      width:100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      /* align-content: center; */
  }
</style>