import React, { Component } from 'react';

class Priority extends Component{
	constructor(){
		super()
	}
	onSubmitPriorityChange(i){
		let temp={}
		temp[i]=!this.props.state.filter.priority[i]
		if(this.props.onPriorityChange){
			this.props.onPriorityChange(temp)
		}
	}
	render(){
		let arr=["高","中","低"]
		let str=[]
		for(let i=0;i<arr.length;i++){
			str.push(<div><input type="checkbox" onChange={((n)=>()=>this.onSubmitPriorityChange(n))(arr[i])} key={i+20}/></div>)
			str.push(<span>{arr[i]}</span>)
		}
		return(<div className="Priority">{str}</div>)
	}
}

export default Priority