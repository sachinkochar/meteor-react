import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js'
import Task from './Task';
import TaskForm from './TaskForm';
class App extends Component {

constructor(){
	super();
	this.state={ hideCompleted:false }
}

toogleCompleted=()=>{
	this.setState({ hideCompleted:!this.state.hideCompleted })
}

renderTasks() {
	let filteredTasks= this.props.tasks
	if(this.state.hideCompleted){
		filteredTasks= filteredTasks.filter((task)=>{ return !task.checked })
	}
    return filteredTasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
	render() {
		return(
			<div>
				<header>
					<h2>To Do App</h2>
				</header>
				<h4>Hide Completed <input type="checkbox" name="hideCompleted" onClick={()=>{this.toogleCompleted();}} /></h4>
				<ul>{this.renderTasks()}</ul>
				<TaskForm />
			</div>
		)
	}
}

export default withTracker(()=>{
	return{
		tasks: Tasks.find({}, { sort:{ createdAt: -1 } } ).fetch(),
	}
})(App)