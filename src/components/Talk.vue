<template>
  <div>
    <ul class="context">
      <router-link
        tag="li"
        :to="{name:'questions',params:{id:item.questionId}}"
        v-for="item in questionList"
        :key="item.questionId"
      >{{item.title}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // console.log(to.matched[0].meta.islogin)
    if (to.matched[0].meta.islogin) {
      next();
      return;
    }
    let key = confirm("进入社区，请先登入");
    if (key) {
      next("community/personal");
    } else {
      next(false);
    }
  },
  beforeRouteLeave(to, from, next) {
    //   console.log(to.path.match(/community/g))
    if (/community|question/g.test(to.path)) {
    //   console.log("go");
      next();
    } else {
      let key = confirm("确定要离开吗");
      if (key) {
        next();
      } else {
        next(false);
      }
    }
  },
  data() {
    return {
      questionList: [
        {
          questionId: 201801,
          title: "到底什么是es6中的class（类）？怎么实现class（类）？"
        },
        {
          questionId: 201802,
          title:
            "什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？"
        },
        {
          questionId: 201803,
          title:
            "什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
li {
  margin-top: 10px;
  cursor: pointer;
}
</style>