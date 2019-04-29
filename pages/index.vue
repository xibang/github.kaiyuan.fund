<template>
  <main>
    <p id="info">
      P.S. 目前共计
      <strong>{{ total }}</strong>
      名开发者参与中国区排名。
    </p>
    <table id="table">
      <thead>
        <tr>
          <th>排名</th>
          <th>头像</th>
          <th>用户名</th>
          <th>昵称</th>
          <th>公司</th>
          <th>位置</th>
          <th>被关注</th>
          <th>关注</th>
          <th>项目</th>
          <th>组织</th>
          <th>注册时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.login">
          <td>{{ item.rank }}</td>
          <td>
            <img :src="item.avatarUrl">
          </td>
          <td>
            <a :href="`https://github.com/${item.login}`" target="_blank">
              {{ item.login }}
            </a>
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.company }}</td>
          <td>{{ item.location }}</td>
          <td>{{ item.followers }}</td>
          <td>{{ item.following }}</td>
          <td>{{ item.repositories }}</td>
          <td>{{ item.organizations }}</td>
          <td>{{ item.createdAt.substr(0,10) }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import { list, total } from '@/assets/data.json';

export default {
  data: () => ({
    list,
    total
  })
};
</script>

<style lang="stylus">
main
  padding: 0 0.5em
#info
  line-height: 80px
#table
  width: 100%
  th:last-child, td:last-child
    width: 100px
  th:nth-child(2),td:nth-child(2)
    width: 50px
  th:nth-child(5),td:nth-child(5)
    max-width: 20%
  th:nth-child(7),td:nth-child(7)
    width: 80px
  td,th
    border: 1px solid rgba(0,0,0,0.5)
    padding: 0.5em
    min-width: 50px
  img
    width: 32px
    height: 32px

</style>
