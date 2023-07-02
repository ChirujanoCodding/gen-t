import React from 'react';
import './Character.css';

export default function Character({ id, name, status, img, location }) {
	return (
		<div className='card'>
			<p className='card__name'>
				<strong>{name}</strong>
			</p>
			<img
				src={img}
				alt={`${name}-${id}`}
				className='card__img'
			/>
			<p className='card__status'>status: {status}</p>
			<p className='card__status'>location: {location}</p>
		</div>
	);
}
