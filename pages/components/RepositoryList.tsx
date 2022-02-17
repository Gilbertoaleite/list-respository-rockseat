/* eslint-disable react/jsx-key */
/** @format */

// import styles from '../styles/repositories.scss'; 
import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

//https://api.github.com/users/Gilbertoaleite/repos

// const repository = {
// 	name: 'unform',
// 	description: 'Forms in React',
// 	link: "https://github.com/unform/unform",
// }


interface Repository {
	name: string;
	description: string;
	html_url: string;
}

export function RepositoryList() {
	const [repositories, setRepositories] = useState<Repository[]>([]);

	useEffect(() => {
		fetch('https://api.github.com/users/Gilbertoaleite/repos')
			.then(response => response.json())
		.then(data => setRepositories(data)) //console.log(data))
	}, []); //nunca deixar o userEffect sem atributo vazio para nao dar loop infinito, se não for colocar colocar [] vazio
	
	return (
		<section className='repository-list'>
			<h1>Lista de repositórios</h1>

			<ul >
				{repositories.map(repository => {
					return <RepositoryItem key={repository.name} repository={repository} />
					
					})}
				</ul>
		</section>
	);
}
