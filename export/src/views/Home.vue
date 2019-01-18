<template>
  <div class="home">
		<p>通过命名导入的getName: {{text}}</p>
		<p>通过命名导入的setName: {{text2}}</p>
		<p>通过命名导入的changeName: {{text3}}</p>
		<p>通过默认导入的对象</p>
		<li v-for="(item, index) in obj" :key="index">{{index}}: {{item}}</li>
		<p>导入整个模块</p>
		<li v-for="(item, index) in model" :key="index">{{index}}: {{item}}</li>
		<p>命名冲突的问题的getName方法: {{text4}}</p>
		<p>命名冲突的问题的getName方法: {{text5}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { getName, setName, changeName } from './../assets/js/myFun'
import myFun from './../assets/js/myFun'
import * as myFun2 from './../assets/js/myFun'
import { getName as newGetName } from './../assets/js/myFun'
import { getName as newGetName2 } from './../assets/js/myFun2'


export default {
	name: 'home',
	data () {
		return {
			text: '',
			text2: '',
			text3: '',
			text4: '',
			text5: '',
			obj: {},
			model: ''
		}
	},
	mounted () {
		this.text = getName()
		this.text2 = setName()
		this.text3 = changeName()
		this.text4 = newGetName()
		this.text5 = newGetName2()
		this.obj = myFun
		this.model = myFun2
		console.log(myFun2)
	}
}
</script>
