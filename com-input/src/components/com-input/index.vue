<template>
	<div class="com-input">
		<div class="input_wrap" @click="addActive" :class="{'isActive': isActive}">
			<input	ref='input'
							@blur="inpBlur"
							:type="init.type"
							:style="init.cssText"
							v-model="currentValue"
							@input="init.inputFun"
							:disabled='init.disabled'
							:readonly='init.readonly'
							:placeholder="init.placeholder">
		</div>
		{{!init.errMess.flag}}
		{{firstFlag}}
		<div v-if="!init.errMess.flag && firstFlag" class="error">{{ init.errMess.error }}</div>
	</div>
</template>

<script>
export default {
	name: 'comInput',
	data () {
		return {
			isActive: false,
			firstFlag: false
		};
	},
	props: {
		// 传过来的对象
		'init': {
			type: Object,
			default () {}
		},
		// input框类型
		'type': {
			type: String,
			default: 'text'
		},
		// value值
		'value': {
			type: [String, Number],
			default: ''
		},
		// input框placeholder
		'placeholder': {
			type: String,
			default: ''
		},
		// 父组建 v-model 传递过来的变量
		'disabled': {
			type: Boolean,
			default: false
		},
		// css样式
		'cssText': {
			type: Object,
			default () {}
		},
		// 错误信息
		'errMess': {
			type: Object,
			default () {
				return {
					flag: false, // 开关变量
					error: '' // 错误信息
				}
			}
		},
		// 是否禁止输入 true禁用 false非禁用 默认禁用
		'readonly': {
			type: Boolean,
			default: false
		},
		// 点击后触发事件
		'clickFun': {
			type: Function,
			default: () => {}
		},
		// input输入事件
		'inputFun': {
			type: Function,
			default: () => {}
		},
		// input失去焦点事件
		'blurFun': {
			type: Function,
			default: () => {}
		}
	},
	computed: {
		// 传递出去的v-mode值
		currentValue: {
			get () {
				return this.value
			},
			set (val) {
				this.$emit('input', val)
				this.$forceUpdate()
			}
		}
	},
	methods: {
		addActive () {
			if (this.init.clickFun) {
				this.init.clickFun()
			}
			if (this.init.readonly) { return }
			this.firstFlag = false
			this.isActive = true
			// input获取焦点
      this.$refs['input'].focus()
		},
		// 共公input 失去焦点事件
		inpBlur () {
			// 自定义input 失去焦点事件
			if (this.init.blurFun()) {
				this.init.blurFun()
			}
			if (this.init.errMess.type) {
				let reg = this.$store.state.regExp[this.init.errMess.type]
				if (reg.test(this.value)) {
					this.init.errMess.flag = true
				} else {
					this.init.errMess.flag = false
				}
				if (this.value === '') {
					this.firstFlag = false
				} else {
					this.firstFlag = true
				}
			} else {
				this.firstFlag = true
			}
			// 取消高亮 active样式
			this.isActive = false
		}
	}
}
</script>

<style lang='stylus' scoped>
.com-input .input_wrap input {
  width: 100%;
  height: 40px;
  border: 1px solid #c5c5c5;
	align-items: center;
  border-radius: 40px;
  background: #fff;
	box-sizing: border-box;
}
</style>