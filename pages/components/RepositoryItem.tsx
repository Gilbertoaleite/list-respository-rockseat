/** @format */

interface RepositoryItemProps{

	repository: {
		name: string;
		description: string;
		html_url: string;
	}

}

export function RepositoryItem(props: RepositoryItemProps) {
	return (
		<li className='list-group-item'>
			<strong>{props.repository.name}</strong>
			<p>{props.repository.description}</p>

			<a target='_blank' href={props.repository.html_url} rel='noreferrer'>
				Acessar repositório
			</a>
		</li>
	);
}
