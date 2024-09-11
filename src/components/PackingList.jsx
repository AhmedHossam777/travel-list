import Item from './Item';
import { useState } from 'react';

const PackingList = ({ items, setItems }) => {
	const handleDeleteItem = (id) => {
		setItems((items) => items.filter((item) => item.id !== id));
	};

	return (
		<div className="list">
			<ul>
				{items.map((item) => (
					<Item item={item} key={item.id} handleDeleteItem={handleDeleteItem} />
				))}
			</ul>
		</div>
	);
};

export default PackingList;