<template>
  <div id="app">
    <x-header />
    <nuxt />
  </div>
</template>

<script>
import XHeader from '@/components/header';

export default {
  components: {
    XHeader
  }
};
</script>

<style src="~/assets/reset.css"></style>

<style lang="stylus">
*,*::before, *::after
  transition: all 350ms linear

body
  font-family: Baskerville, Georgia, "Liberation Serif", "Kaiti SC", STKaiti, "AR PL UKai CN", "AR PL UKai HK",
  "AR PL UKai TW", "AR PL UKai TW MBE", "AR PL KaitiM GB", KaiTi, KaiTi_GB2312, DFKai-SB, "TW\-Kai", serif
  font-weight: 400
  font-size: 16px
  -webkit-font-smoothing: antialiased
  -webkit-tap-highlight-color: transparent
  background-image: url(/background.png)
  background-size: cover

*
  cursor: url('/default.cur'),default

a, a *
  cursor: url('/pointer.cur'),pointer !important

#app
  padding-top: 32px
</style>
