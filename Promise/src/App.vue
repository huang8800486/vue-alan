<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
	name: 'app',
	data () {
		return {
			
		}
	},
	mounted () {
		this.testPromise()
	},
	methods: {
		testPromise () {
			this.axios({
				url: 'https://webapi.loex.io/exchange-web-api/common/public_info',
			})
			.then((res) => {
				console.log(res)
			})
			.catch((res) => {
				console.log(res)
			})
		}
	}
}
</script>

