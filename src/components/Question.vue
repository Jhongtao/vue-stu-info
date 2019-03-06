<template>
    <div>
        <p>问题:{{question}}</p>
    </div>
</template>

<script>
export default {
    created(){
    this.questionList.forEach(item=>{
        if(item.questionId == this.$route.params.id){
           this.question = item.title
        }
    })
    if(!this.question){
        this.$router.replace('/err')
    }
    // console.log(this.question)
    },
    data(){
        return {
            question:'',
            questionList: [
                {
                    questionId: 201801,
                    title: '到底什么是es6中的class（类）？怎么实现class（类）？'
                },
                {
                    questionId: 201802,
                    title: '什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？'
                },
                {
                    questionId: 201803,
                    title: '什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？'
                }
            ]
        }
    }
}

</script>
    
<style scoped>

</style>