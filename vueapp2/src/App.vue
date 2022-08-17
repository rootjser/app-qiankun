<template>
  <div id="app">
    <img alt="Vue logo" style="height: 40px" src="./assets/big.jpg" />
    <br />
    <router-link to="/">子应用2：首页</router-link>
    <br />
    <router-link to="/hello">子应用2: hello 页</router-link>
    <br />
    <router-link to="/world">子应用2：world 页</router-link>
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>