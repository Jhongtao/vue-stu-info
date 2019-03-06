<template>
    <div class="container"> 
        <course-list></course-list>
            <!-- <button>修改课程</button> -->
            <router-link
            tag="button"
            :to="{name:'alter'}"
            >修改课程</router-link>
    </div>
</template>

<script>
const courseList = ()=> import('@/components/course/courseList') 
export default {
    components:{
        courseList
    }
}

</script>

<style scoped>
    button{
        position: relative;
        left:50%;
        transform: translateX(-50%);
        background-color:#000;
        padding:10px 15px;
        color:#fff;
        margin-bottom: 20px;
        cursor:pointer;

    }
</style>