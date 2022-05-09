import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProjectCard from '../components/ProjectCard'
import AddProject from '../components/AddProject'

export default function ProjectList() {

	const [projects, setProjects] = useState([])

	const getAllProjects = () => {
		axios.get('/api/projects')
			.then(response => {
				console.log(response)
				setProjects(response.data)
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		// get all the projects from the server
		getAllProjects()
	}, [])

	return (
		<>
			<h1>All Projects</h1>
			{projects.map(project => <ProjectCard key={project._id} {...project} />)}
			<AddProject getAllProjects={getAllProjects} />
		</>
	)
}
