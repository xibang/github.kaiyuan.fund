<template>
  <header id="header">
    <h1>Github Rank（China）</h1>
    <h2>
      更新时间：{{ date }}
      <span class="shown lg">
        ，来自 <strong>Github</strong> API v4
      </span>
    </h2>
  </header>
</template>

<script>
import { date } from '@/assets/data.json';

export default {
  data: () => ({
    date
  })
};
</script>


<style lang="stylus">
#header
  background: rgba(0,0,0,0.25)
  position: fixed
  height: 32px
  line-height: 32px
  left: 0
  top: 0
  right: 0
  h1
    display: none
  h2
    text-shadow: 1px 1px 1px rgba(255,255,255,0.5)

</style>
