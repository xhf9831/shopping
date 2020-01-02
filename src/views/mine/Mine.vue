<template>
 <div>
   <my-top>
     <div class="header" slot="mid">
       会员中心
     </div>
   </my-top>
   <div class="bc">
     <div class="photo">
       <img class="head" src="../../assets/psb.jpg" alt="">
     </div>
     <div class="user">
       欢迎您：{{name}}
     </div>
     <div v-if="this.$store.state.user !== ''" class="exit" @click="exit">
       退出登录
     </div>
   </div>
   <mtag></mtag>
 </div>
</template>

<script>
import mtag from '../../components/mineconstructure/Tag';
 export default {
   data () {
     return {
      name:''
     }
   },
   components: {
     mtag
   },
   methods: {
     exit(){
       this.$store.state.user = ''
       this.$router.push('/home')
     }
   },
   mounted() {
     this.name = this.$store.state.user
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.header{
  font-size: 20px;
  line-height: 37.5px;
}
.bc{
  background: #E30C7B;
  height: 240px;
  .photo{
    position: relative;
    top:40px;
    left: 140px;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    overflow: hidden;
    .head{
      width: 100%;
    }
  }
  .user{
    font-size: 20px;
    color: white;
    text-align: center;
    position: relative;
    top:50px;
  }
  .exit{
    font-size: 15px;
    color: white;
    text-align: center;
    position: relative;
    top:60px;
  }
}
</style>