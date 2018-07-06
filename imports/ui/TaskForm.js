import React , { Component } from 'react';
import { Tasks } from '../api/tasks'
class TaskForm extends Component{
	constructor(){
		super();
		this.state={
			text:'',
		}
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	handleClick=()=>{
		console.log(this.state.text,'text')
		Tasks.insert({
			text:this.state.text,
			createdAt: new Date(),
		})
		console.log()
	}
	render(){
		return(
			<div>
					<label>Task Text</label>
					<input type="text" name="text" value={this.state.text} onChange={(e)=>{this.handleChange(e);}} />
					<input type="button" value="submit" onClick={()=>{this.handleClick();}} />
			</div>
		)
	}
}

export default TaskForm