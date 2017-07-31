import React, { Component } from 'react';
import { Select } from 'antd';
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class SelectList extends Component{
	constructor(props){
		super(props)
	}
	render(){
		let children=[]
		let childrenlist=this.props.list
		for(let i=0;i<childrenlist.length;i++){
			children.push(<option key={childrenlist[i]}>{childrenlist[i]}</option>)
		}
		console.log(children)
		return(
			<div className="SelectList">
			 <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Please select"
    defaultValue={[]}
    onChange={handleChange}
  >
    {children}
  </Select>
			</div>)
	}
}

export default SelectList