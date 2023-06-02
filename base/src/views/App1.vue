<!-- my-page.vue -->
<template>
  <div>
    App1 页面
    <!--
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/app1`
     -->
<!--    <micro-app name='app1' url='http://localhost:8082/' baseroute='/app1'></micro-app>-->
    <micro-app name='app1' url='http://localhost:3005/' baseroute='/app1'></micro-app>
<!--    <micro-app name='app2' url='http://localhost:8082/' baseroute='/app2'></micro-app>-->
  </div>
</template>
