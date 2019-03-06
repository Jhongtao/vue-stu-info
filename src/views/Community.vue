<template>
   <div>
      <ul class='nav'>
          <router-link tag='li' :to="{name:'talk'}">学术讨论</router-link>
          <router-link tag='li' :to="{name:'source'}">资源下载</router-link>
          <router-link tag='li' :to="{name:'personal'}">个人中心</router-link>
      </ul>
      <div class="context">
      <router-view/>
      </div>
   </div>
</template>

<script>
export default{
    
}

</script>

<style scoped>
   
   li{
       display: inline-block;
       cursor:pointer;
       font-size:18px;
       font-weight: 600;
       padding: 5px 8px;
       color:#000;
   }
   .active{
       color:#fff;
       background-color:#000;
   }
   .context{
       margin-top:10px;
      padding-left: 8px;
      font-size: 20px;
   }
</style>