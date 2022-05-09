import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ProjectDetails() {

	const { id } = useParams()

	const [project, setProject] = useState(null)

	useEffect(() => {
		axios.get(`/api/projects/${id}`)
			.then(response => {
				console.log(response)
				setProject(response.data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			{project === null ? <h3>Loading...</h3> :
				<>
					<h1>ProjectDetails</h1>
					<h3>{project.title}</h3>
					<h5>{project.description}</h5>
					<Link to={`/projects/edit/${project._id}`}>
						<button>Edit this Project 📝</button>
					</Link>
				</>
			}
		</>
	)
}
