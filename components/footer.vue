<template>
  <footer id="footer">
    <p>
      <small>
        Copyright 2019-{{ year }} &copy; 南京西邦智能科技有限公司
      </small>
    </p>
    <p>
      <small>
        Github: <a href="https://github.com/xibang" target="_blank">
          xibang
        </a>
      </small>
    </p>
  </footer>
</template>

<script>
export default {
  data: () => ({
    year: new Date().getFullYear()
  })
};
</script>


<style lang="stylus">
#footer
  text-align: center
</style>
