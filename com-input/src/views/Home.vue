<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
		{{from.user}}
		<com-input :init='username' ref='user' v-model="from.user"></com-input>
  </div>
</template>

<script>
// @ is an alias to /src
import comInput from '@/components/com-input/index'
export default {
	name: 'home',
	data () {
		return {
			from: {
        user: '', // 用户
        passWord: '' // 密码
      }
		}
	},
	components: {
    comInput
	},
	computed: {
		username () {
			return {
				type: 'text',		// type="text" 类型
				placeholder: '手机',		// placeholder 
				disabled: false,	// 是否禁用
				readonly: false, // 是否只读
				cssText: {	// css样式
					'margin-top': '0.07rem',
					'height': '40px'
				},
				errMess: this.fromReg.user,	// 表单错误验证信息
				inputFun: this.usernameHandle,	// input输入事件
				blurFun: this.usernameBlur,	// 失去焦点事件
        clickFun: this.usernameInp
			}
		},
		// 表单错误验证信息
    fromReg () {
      return {
        user: { // 一次验证 --- 用户
          type: 'nonEmpty',
          flag: false,
          error: '发生错误了'
        }
      }
    },
	},
	methods: {
		usernameHandle () {
			console.log('input输入事件')
		},
		usernameBlur () {
			console.log('input失去焦点事件')
		},
		usernameInp () {
			console.log("input点击事件")
		}
	}
}
</script>
