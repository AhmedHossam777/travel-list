import Item from './Item';
import { useState } from 'react';

const PackingList = ({ items, setItems }) => {
	const [sortBy, setSortBy] = useState('input');

	let sortedItems = [];

	if (sortBy === 'input') sortedItems = items;

	if (sortBy === 'description') {
		sortedItems = items.slice().sort((a, b) => {
			return a.description.localeCompare(b.description);
		});
	}

	if (sortBy === 'packed') {
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));
	}

	const handleDeleteItem = (id) => {
		setItems((items) => items.filter((item) => item.id !== id));
	};

	const handleTogglePacked = (id, packed) => {
		setItems((items) =>
			items.map((item) => (item.id === id ? { ...item, packed } : item)),
		);
	};

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						item={item}
						key={item.id}
						handleDeleteItem={handleDeleteItem}
						handleTogglePacked={handleTogglePacked}
					/>
				))}
			</ul>

			<div className="actions" onChange={(e) => setSortBy(e.target.value)}>
				<select value={sortBy}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>
			</div>
		</div>
	);
};

export default PackingList;