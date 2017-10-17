<template>
  <div id="app">
  <div v-for="item in items">
  {{ item.name }}
  </div>
    <HelloWorld :item="items">  
    <h1 slot="header">This is hello world complonent slot </h1>
    </HelloWorld>
      <NewComponent :new-item="newitems">
        <h1 slot="header">Slot Header</h1>
        <p>kasdjhfks fsdkfhskdhf sksd fhksdh fksdhfksdhfksd </p>
        <h4 slot="footer">Slot footer</h4>
      </NewComponent>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import NewComponent from '@/components/NewComponent'
export default {
  components:{
    HelloWorld,
    NewComponent
    },
  name: 'app',
  data () {
    return{
      items:[],
      newitems:[
        {"a":1},{"b":2},{"c":3}
      ],
      data:"This Is Data"
    }
  },
  mounted() {
    console.log('mount')
    this.$store.dispatch('getItems')
    this.items = this.$store.getters.items
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
