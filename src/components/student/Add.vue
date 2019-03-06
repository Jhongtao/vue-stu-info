<template>
<div>
    <input type="text" v-model="addStudent" @keyup.enter="add({name:addStudent});empty()"><button  @click="add({name:addStudent})">增加学员</button>
</div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data(){
       return {
           addStudent:''
       }
    },
    methods:{
        // add(){
        //     this.$store.dispatch('setStudent',{name:this.addStudent})
        // },
        ...mapActions({
            add:'student/setStudent'
        }),
        // ...mapMutations({
        //     add : 'changeStudent'
        // }),
        // add(){
            // this.$store.commit('changeStudent',{name:this.addStudent})
            // console.log(this.$store.state.studentList)
            // console.log(this.duyi)
            // this.duyi.$emit('add',this.addStudent)
            // this.$store.state.studentList.push(this.addStudent)
            // console.log(mapState(['studentList']).studentList)
                        // this.addStudent = '';
        // }
        empty(){
            console.log(this.$store)
            this.addStudent = ''
        }
    }
}

</script>

<style scoped>
     input{
         width: 200px;
         height: 30px;
     }
     button{
         background: gray;
         padding: 8px;
         margin-left:20px;
     }
</style>