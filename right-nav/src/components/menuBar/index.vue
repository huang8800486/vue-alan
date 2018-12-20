<template>
	<div class="menu-bar">
		<transition name="anim-shaodw">
			<div class="shadow" v-show="markFlag" @click="setMarkFlag(false)"></div>
		</transition>
		<transition name="anim-nav">
			<div class="menu-nav" v-show="markFlag">

			</div>
		</transition>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'menuBar',
	data () {
		return {
			
		};
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
	mounted () {},
	methods: {
		...mapActions(['setMarkFlag'])
	}
}
</script>

<style lang='stylus' scoped>
.menu-bar {
	position: relative;
	z-index: 101;
	.menu-nav {
		width: 73%;
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		background: #fff;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000;
    box-shadow: -3px 0px 10px rgba(0, 0, 0, 0.5);
	}
	.shadow {
		position: fixed;
    width: 100%;
    height: 100%;
    background: #000000;
    top: 0;
    left: 0;
		right: 0;
    opacity: 0.3;
	}

	.anim-shaodw-enter-active {
		animation: shadow-in cubic-bezier(.22, .58, .12, .98) .3s;
	}
	.anim-shaodw-leave-active {
		animation: shadow-in cubic-bezier(.22, .58, .12, .98) .3s reverse;
	}
	.anim-nav-enter-active {
		animation: nav-in linear .3s;
	}
	.anim-nav-leave-active {
		animation: nav-in linear .3s reverse;
	}
}

@keyframes shadow-in {
	0% {
		opacity: 0;
	}	

	100% {
		opacity: 0.3;
	}
}
@keyframes nav-in {
	0% {
		transform: translate3d(-100%, 0, 0);
		opacity: 0;
	}	

	100% {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
}
</style>