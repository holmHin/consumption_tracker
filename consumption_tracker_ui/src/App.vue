
<script lang="ts" src="./app.ts"></script>
<template>
  <Toast position="bottom-right" group="br" />
  <div id="app">
    <TabMenu :model="items" />
    <router-view />

  </div>
</template>


<style lang="css" src="./assets/css/app.css"></style>
<style lang="css" src="./assets/css/primevue.css"></style>
<style lang="css" src="./assets/css/primeicons.css"></style>
<style lang="css" src="./assets/css/themes/saga-blue/theme.css"></style>
<style lang="scss" src="./assets/scss/app.scss"></style>
