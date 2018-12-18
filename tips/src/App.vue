<template>
  <div id="app">
		<button @click="handle" style="position:relative; z-index: 1000">点击1</button>
    <router-view></router-view>
		<tips></tips>
  </div>
</template>
<script>
import tips from './components/tips.vue'
export default {
	name: 'app',
	data () {
		return {
			
		}
	},
	components: {
		tips
	},
	methods: {
		handle () {
			this.$store.dispatch('setTipState', '埒地地')
			this.$store.dispatch('setTipState', {text: 'test', type: 'error'})
			// this.$store.dispatch('setTipState', {text: this.$t('personal.placeholder_12'), type: 'error'})
		}
	}
}
</script>

