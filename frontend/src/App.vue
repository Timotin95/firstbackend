<template>
  <div id="app">
    <h1 v-if="randomNumber">Your random number is: {{ randomNumber }}</h1>
    <button @click="generateRandomNumber">Generate random number</button>
    <button @click="resetRandomNumber">Reset random number</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      randomNumber: null,
    };
  },
  methods: {
    generateRandomNumber() {
      this.randomNumber = Math.round(Math.random() * 100) + 1;
    },
    resetRandomNumber() {
      this.randomNumber = null;
    },
  },
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
