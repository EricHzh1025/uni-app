import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
	state:{
		num:0,
		price:10,
		name:'苹果',
		testList:[]
	},
	mutations:{
		add(state){
			state.num++;
			console.log(state.num);
		}
	},
	getters:{
		count(state){
			return state.num*state.price;
		}
	},
	//异步方法
	actions:{
		testActions(context){
			//context里面包含了state,mutations,getters,
			//执行一些一部参数,通常是ajax
			// console.log(context)
			setTimeout(()=>{
				context.state.testList = ['猪猪侠','超人强','喜洋洋','老村长']
			}, 2000);
		}
	}
})