<template>
  <header id="header">
    <h1>Github Rank（China）</h1>
    <h2>
      更新时间：{{ date }}
      <span class="shown lg">
        ，来自 <strong>Github</strong> API v4
      </span>
    </h2>
    <h3>
      作者：
      <a href="https://github.com/willin" target="_blank">
        <strong>willin</strong>
        <img src="https://img.shields.io/github/followers/willin.svg?label=关注者">
      </a>
      <span class="shown lg">
        (Rank: {{ rank }})
      </span>
    </h3>
  </header>
</template>

<script>
import { date, total, list } from '@/assets/data.json';

export default {
  data: () => ({
    date,
    total,
    rank: (list.find(x => x.login === 'willin') || {}).rank || '1000+'
  })
};
</script>

<style lang="stylus">
#header
  color: #eee
  background: rgba(0,0,0,.5)
  position: fixed
  height: 32px
  line-height: 32px
  left: 0
  top: 0
  right: 0
  display: flex
  justify-content: space-between
  padding: 0 0.5em
  h1
    display: none
  h2
    text-shadow: 1px 1px 1px rgba(0,0,0,.5)
  a
    color: #69f
  img
    vertical-align: sub
</style>
