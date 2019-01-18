export default {
	name: '默认导航',
	age: 28
}
export const name = 'Alan'
export function getName () {
	return name
}
export function setName () {
	return name + 'Tao'
}

function changeName () {
	return name.split('').reverse().join('')
}

export { changeName }