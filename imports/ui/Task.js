import React, { Component } from 'react';
import { Tasks } from '../api/tasks'
class Task extends Component{
	
	toggleChecked=()=>{
		Tasks.update(this.props.task._id, {
			$set: { checked: !this.props.task.checked }
		})
	}

	deleteThisTask() {
		console.log(this.props.task._id)
    	Tasks.remove(this.props.task._id);
  	}

	render(){
		return(
			<li>

			<button className="delete" onClick={ ()=>{this.deleteThisTask() } }>
	          &times;
	        </button>
	 
	        <input
	          type="checkbox"
	          readOnly
	          checked={!!this.props.task.checked}
	          onClick={ ()=>{this.toggleChecked();} }
	        />

			{this.props.task.text}</li>
			)
	}

}
export default Task;