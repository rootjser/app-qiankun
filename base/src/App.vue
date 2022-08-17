<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <router-link to="/">基座： Go to Home</router-link>
    <br />
    <router-link to="/mypage1">基座： 去子应用1</router-link>
    <br />
    <router-link to="/mypage2">基座： 去子应用2</router-link>
    <br />
    <router-view></router-view>
    <div id="container"></div>
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