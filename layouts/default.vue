<template>
  <div id="app">
    <x-source />
    <x-header />
    <nuxt />
    <x-footer />
  </div>
</template>

<script>
import XSource from '@/components/source';
import XHeader from '@/components/header';
import XFooter from '@/components/footer';

export default {
  components: {
    XSource,
    XHeader,
    XFooter
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

*
  cursor: url('/default.cur'),default

a, a *
  cursor: url('/pointer.cur'),pointer !important

a, a:link, a:visited
  color: #369
  text-decoration: none
  text-shadow: 1px 1px 1px rgba(0,0,255,0.25)

a:hover
  text-shadow: 3px 3px 3px rgba(0,0,0,0.5)

#app
  padding-top: 32px

</style>
