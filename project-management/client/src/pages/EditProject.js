import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditProject() {

	const { id } = useParams()

	const navigate = useNavigate()

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	useEffect(() => {
		console.log('use effect')
		axios.get(`/api/projects/${id}`)
			.then(response => {
				const { title, description } = response.data
				setTitle(title)
				setDescription(description)
			})
			.catch(err => console.log(err))
	}, [])

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { title, description }
		// put request to the backend to update the project
		axios.put(`/api/projects/${id}`, requestBody)
			.then(() => {
				// redirect to the project list
				navigate('/projects')
			})
			.catch(err => console.log(err))
	}

	const deleteProject = () => {
		axios.delete(`/api/projects/${id}`)
			.then(() => {
				// redirect to the projects list
				navigate('/projects')
			})
			.catch(err => console.log(err))
	}

	return (
		<>
			<h1>EditProject</h1>
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
				<button type="submit">Update this project</button>
			</form>
			<button onClick={deleteProject}>Delete this project ❌</button>
		</>
	)
}
