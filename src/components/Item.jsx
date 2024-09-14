import { useState } from 'react';

const Item = ({ item, handleDeleteItem, handleTogglePacked }) => {
	const [checked, setChecked] = useState(item.packed);

	const handleChange = (e) => {
		setChecked(e.target.checked);
		handleTogglePacked(item.id, e.target.checked);
	};

	return (
		<li>
			<input type="checkbox" checked={checked} onChange={handleChange} />

			<span style={checked ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>

			<button onClick={() => handleDeleteItem(item.id)}>❌</button>
		</li>
	);
};

export default Item;