import axios from 'axios'
import React, { useState } from 'react'

export default function AddProject(props) {

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		// send the form data to the backend
		axios.post('/api/projects', { title, description })
			.then(response => {
				console.log(response)
				// reset the form
				setTitle('')
				setDescription('')
				// refresh the list of projects in 'ProjectsList'
				props.getAllProjects()
			})
			.catch(err => console.log(err))
	}

	return (
		<>
			<h1>Add a Project</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<input
					type="text"
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
				<button type="submit">Add this Project ➕</button>
			</form>
		</>
	)
}
