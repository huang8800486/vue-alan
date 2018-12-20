export default {
	state: {
		tipState: {
			flag: false, // 开关变量
			content: '', // 内容
			type: ''		// 错误类型
		}
	},
	actions: {
		setTipState({ commit}, data) {
			let content, tipType
			if (data !== null && (typeof data === 'object')) {
				content = data.text
				tipType = data.type
			} else {
				content = data
				tipType = 'success'
			}
			commit('SETTIPSTATE', {
				flag: true,
				content: content,
				type: tipType
			})
			setTimeout(() => {
				commit('SETTIPSTATE', {
					flag: false,
					content: '',
					tipType: null
				})
			}, 1000)
		},
	},
	mutations: {
		SETTIPSTATE(state, data) {
			state.tipState = data
		}
	}
}
