<script type="ts" src="./home.ts">
</script>
<template>
  <Dashboard @showDetailsOfResource="showDetailsOfResource"/><br/>
  <Details ref="Details" :selectedResourceId="selectedDetailResourceId"/>
</template>
<style lang="scss" src="./home.scss"></style>
