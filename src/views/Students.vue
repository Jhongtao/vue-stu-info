<template>
<div>
    <!-- <add @add="addStudent"></add>
    <student-info :student-list="studentList"></student-info> -->
    <add></add>
    <student-info></student-info>
</div>
</template>

<script>
import Add from '@/components/student/Add'
import StudentInfo from '@/components/student/StudentInfo'
export default {
    components:{
        'add':Add,
        'student-info':StudentInfo
        
    },
    // data(){
    //     return {
    //         studentList:[]
    //     }
    // },
    // methods:{
    //     addStudent(data){
    //         console.log(222)
    //        this.studentList.push(data)
    //     }
    // }
}

</script>

<style scoped>

</style>