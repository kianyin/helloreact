import React, { Component } from 'react';

class RightPanelList extends Component{
	constructor(){
		super()
	}
	filter(data,filter){
		let temp=data.concat()
		let temp1=[]
		for(let i=0;i<temp.length;i++){
			let x
			for(x in filter.priority){
			   //当缓存数组中不存在当前值
			   if(temp1.indexOf(temp[i])==-1){
				//当数组的优先级等于当前的优先级
				    if(filter.priority[x]==true&&x==temp[i].priority){
				    	temp1.push(temp[i])
				    }
			    }
		    }
	    }
	    let temp2=[]
		for(let i=0;i<temp1.length;i++){
			let x
			for(x in filter.status){
			   //当缓存数组中不存在当前值
			   if(temp2.indexOf(temp1[i])==-1){
				//当数组的优先级等于当前的优先级
				    if(filter.status[x]==true&&x==temp1[i].status){
				    	temp2.push(temp1[i])
				    }
			    }
		    }
	    }
	    return temp2
    }
render(){
	let data=this.props.state.data
	let filter=this.props.state.filter
	let filtered=this.filter(data,filter)
	let str=[]
	for(let i=0;i<filtered.length;i++){
		if(filtered[i]){str.push(<div>{filtered[i].title}</div>)}
	}
	return(
	<div className="RightPanelList">{str}
	</div>
	)
}
}

export default RightPanelList