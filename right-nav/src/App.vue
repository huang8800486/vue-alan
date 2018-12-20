<template>
  <div id="app">
    <router-view></router-view>
		<button @click="setMarkFlag(true)">点击2</button>
		<menu-bar></menu-bar>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import menuBar from './components/menuBar/index'
export default {
	name: 'app',
	data () {
		return {
			
		}
	},
	components: {
		menuBar
	},
	computed: {
    ...mapState({
      markFlag ({options: { markFlag }}) {
        return markFlag
      },
      baseData ({ baseData }) {
        return baseData
      }
    })
  },
	methods: {
		...mapActions(['setMarkFlag'])
	}
}
</script>

