<template>
	<div class="tips-wrap">
		<div class="shadow" v-if='tipState.flag'></div>
		<transition name="tips">
			<div v-if='tipState.flag' id="markedTip" class="tips" :class="'tips_' + tipState.type">{{tipState.content}}</div>
		</transition>
	</div>
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
		color: #333333;
		border: 1px solid #333333
		padding: 0 0.2rem;
	}
	.tips-enter-active {
		animation: tips-in .3s;
	}
	.tips-leave-active {
		animation: tips-in .3s reverse;
	}
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

