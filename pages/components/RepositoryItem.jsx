/** @format */

export function RepositoryItem(props) {
	return (
		<li className='list-group-item'>
			<strong>{props.repository.name ?? 'Default'}</strong>
			<p>{props.repository.description}</p>

			<a target='_blank' href={props.repository.link} rel='noreferrer'>
				Acessar repositório
			</a>
		</li>
	);
}
