export default {
	state: {
		markFlag: false, // 右侧功能弹层
	},
	actions: {
		// 功能弹层
		setMarkFlag({
			commit
		}, flag) {
			commit('SETMARKFLAG', flag)
		},
	},
	mutations: {
		// 功能弹层
		SETMARKFLAG(state, flag) {
			state.markFlag = flag
		}
	}
}
