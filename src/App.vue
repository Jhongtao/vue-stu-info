<template>
  <div id="app">
    <header>
      <img src="./assets/images/logo.png" alt>
      <ul id="nav">
        <router-link tag="li" :to="{name:'home'}">首页</router-link>
        <router-link tag="li" to="/course">课程学习</router-link>
        <router-link tag="li" to="/students">学员展示</router-link>
        <router-link tag="li" to="/about">关于</router-link>
        <router-link tag="li" to="/community">社区</router-link>
      </ul>
    </header>
    <div class="content">
      <router-view/>
      <router-view name='information'></router-view>
    </div>
    <footer></footer>
  </div>
</template>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
header {
  width: 100%;
  height: 12%;
  padding: 0 80px;
  box-sizing: border-box;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border:1px solid red; */
}
img {
  width: 80px;
  height: 80px;
  border: 1px soild red;
  vertical-align: middle;
}
li {
  display: inline-block;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  padding: 0 30px 20px;
  cursor: pointer;
}
.active{
  border-bottom:2px solid #fff;
}
.content {
  width: 100%;
  height: 70%;
  box-sizing: border-box;
  overflow-y:auto;
  margin-top: 30px;
  padding: 0 90px;
  /* border:1px solid blue; */
}
footer {
  width: 100%;
  height: 15%;
  background-color: #000;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
