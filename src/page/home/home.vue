<template>
  <!--div>
      <h1>{{ msg }}</h1>
      <span> {{discoveries}}</span>
  </div-->

    <div class="discover-body common-wrapper clearfix">
    <div class="discover-body-main content">
        <div class="list">
        <ul>
            <li class="discover-item" v-for="disInfo in discoveries">
            <h2>
                <a target="_blank" v-bind:href="disInfo.articleHref">{{ disInfo.articleTitle}}</a>
            </h2>
            <p class="desc">{{ disInfo.articleDesc }}</p>
            <div class="info">
                <i>来源 | {{ disInfo.articleWebsite }}</i>
                <i>发布日期 | {{ disInfo.articleDate }}</i>
            </div>
            </li>
        </ul>
        </div>
        <div class="pager"></div>
    </div>
    </div>
</template>

<script>
import {findDiscover} from '../../service/getData'

export default {
  name: 'home',  
  data() {
      return{
          discoveries:[], //发现文章列表
          msg: 'Welcome to Your Vue.js App2',
      }
  },
  mounted() {
      //获取发现文章
      findDiscover().then(res =>{
          this.discoveries = res.data.discoveries;
      })
  },
}
</script>

<style scoped>

.discover-body {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.common-wrapper {
    max-width: 77.5rem;
    margin: 0 auto;
}

.discover-body-main {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding: 1rem 0;
    padding-right: 6rem;
    min-height: 12.5rem;
}
.discover-body-main .discover-item {
    max-width: 48.125rem;
    font-size: 1rem;
    padding: 0.8rem 0 0.2rem 0;
    text-align: left;
    line-height: 1.5rem;
}

.discover-body-main .discover-item h2 {
    padding: 0.6rem 0;
    padding-bottom: 0.3rem;
}

.discover-body-main .discover-item h2 a:link, .discover-body-main .discover-item h2 a:visited {
    color: #1075d4;
}
.discover-body-main .discover-item h2 a {
    font-size: 1.125rem;
}

.discover-body-main .discover-item .desc {
    font-size: 0.875rem;
    color: #353535;
    font-weight: 400;
}
.discover-body-main .discover-item .info {
    margin-top: 0.4rem;
    font-weight: 400;
}
.discover-body-main .discover-item .info i {
    color: #888;
    font-style: normal;
    font-size: 0.75rem;
    margin-right: 1rem;
}
</style>


