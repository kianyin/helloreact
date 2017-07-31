import React, { Component } from 'react';

class Status extends Component{
	constructor(props){
		super(props)
	}
	onSubmitStatusChange(i){
		let temp={}
		temp[i]=!this.props.state.filter.status[i]
		if(this.props.onStatusChange){
			this.props.onStatusChange(temp)
		}
	}
	render(){
		let arr=["新建","处理中","已解决","已忽略","待反馈","已关闭","重新打开"]
		let str=[]
		let count=[0,0,0,0,0,0,0];
		let data=this.props.state.data;
		for(let j=0;j<data.length;j++){
			switch(data[j].status){
				case "新建":
				count[0]++
				break;
				case "处理中":
				count[1]++
				break;
				case "已解决":
				count[2]++
				break;
				case "已忽略":
				count[3]++
				break;
				case "待反馈":
				count[4]++
				break;
				case "已关闭":
				count[5]++
				break;
				case "重新打开":
				count[6]++
				break;
			}
		}
		for(let i=0;i<arr.length;i++){
			str.push(<div><input key={i} type="checkbox" name="Status" value={arr[i]} onChange={((n)=>()=>this.onSubmitStatusChange(n))(arr[i])}/></div>);
			str.push(<span key={i+10}>{arr[i]}  {count[i]}</span>)
		}
		return(
			<div className="Status">{str}
			</div>
			)
	}
}

export default Status