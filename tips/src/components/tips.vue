<template>
	<transition name="tips">
		<div class="tips-wrap" v-if='tipState.flag'>
			<div class="shadow"></div>
			<div class="tips" :class="'tips_' + tipState.type">{{tipState.content}}</div>
		</div>
	</transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: '',
	data () {
		return {
			
		}
	},
	computed: {
		...mapState({
			tipState ({options: {tipState}}) {
				return tipState
			}
		})
	},
}
</script>
<style lang="stylus">
.tips-wrap {
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	z-index: 100;
	display:flex;
	align-items: center;
	justify-content: center;
	.shadow {
		position: absolute;
		left:0;
		top:0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0);
		right:0;
		bottom: 0;
		margin: auto;
	}
	.tips {
		border-radius: 0.05rem;
		color: $base-title;
		border: 1px solid $base-title
		padding: 0 0.2rem;
	}
}
.tips-enter-active {
	animation: tips-in .3s;
}
.tips-leave-active {
	animation: tips-in .3s reverse;
}

@keyframes tips-in {
  0% {
    transform: translate3d(0, -10px, 0);
    opacity: 0
  }

  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>

