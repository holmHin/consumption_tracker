<script type="ts" src="./home.ts">
</script>
<template>
  <Dashboard @showDetailsOfResource="showDetailsOfResource"/><br/>
  <Details v-if="showDetails" ref="Details"/>
</template>
<style lang="scss" src="./home.scss"></style>
