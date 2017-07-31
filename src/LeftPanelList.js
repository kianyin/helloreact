import React, { Component } from 'react';
import SelectList from './SelectList.js'
import Status from './Status.js'
import Priority from './Priority.js'
import TimeTable from './TimeTable.js'

class LeftPanelList extends Component{
	constructor(){
		super()
	}
	//i:{已关闭: true}
	onStatusChange(i){
		let status=this.props.state.filter.status
		let newStatus={...status,...i}
		if(this.props.onStatusChange){
			this.props.onStatusChange(newStatus)
		}
	}
	onPriorityChange(i){
		let priority=this.props.state.filter.priority
		let newPriority={...priority,...i}
		if(this.props.onPriorityChange){
			this.props.onPriorityChange(newPriority)
		}
	}
	render(){
		return(
			<div className="LeftPanelList">
			<i></i>类型
			<SelectList type="categoty" list={["bug","功能","任务"]}/>
			<i></i>状态
			<Status state={this.props.state} onStatusChange={this.onStatusChange.bind(this)}/>
			<i></i>优先级
			<Priority state={this.props.state} onPriorityChange={this.onPriorityChange.bind(this)}/>
			<i></i>创建人
			<SelectList type="founder" list={["尹皓","杨伟","夏中柱"]}/>
			<i></i>指派
			<SelectList type="assign" list={["未指派","我"]}/>
			<i></i>创建时间
			<TimeTable/>
			<i></i>最后更新时间
			<TimeTable/>
			<i></i>结束时间
			<TimeTable/>
			</div>
			)
		}
	}

	export default LeftPanelList