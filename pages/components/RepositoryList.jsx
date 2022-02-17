/** @format */

// import styles from '../styles/repositories.scss'; 
import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

//https://api.github.com/users/Gilbertoaleite/repos

const repository = {
	name: 'unform',
	description: 'Forms in React',
	link: "https://github.com/unform/unform",
}

export function RepositoryList() {
	const [repositories, setRepositories] = useState([]);
	
	useEffect(() => {
		fetch('https://api.github.com/users/Gilbertoaleite/repos')
			.then(response => response.json())
		.then(data => setRepositories(data)) //console.log(data))
	}, []); //nunca deixar o userEffect sem atributo vazio para nao dar loop infinito, se não for colocar colocar [] vazio
	
	return (
		<section className='repository-list'>
			<h1>Lista de repositórios</h1>

			<ul className='list-group'>
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository} />
			</ul>
		</section>
	);
}
