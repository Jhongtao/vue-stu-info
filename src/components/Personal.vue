<template>
<div>个人中心
    <button @click="login">{{islogin?'退出':'登入'}}</button>
</div>
</template>

<script>
export default {
    data(){
        return {
            islogin:this.$route.matched[0].meta.islogin
        }
    },
    methods:{
        login(){
            this.islogin = !this.islogin;
            this.$route.matched[0].meta.islogin = this.islogin;
            // console.log(this.$route.matched[0].meta.islogin)
        }
    }
}

</script>

<style scoped>
   button{
       background: darkgrey;
       padding: 5px;
   }
</style>