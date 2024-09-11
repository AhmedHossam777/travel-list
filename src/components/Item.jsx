import { useState } from 'react';

const Item = ({ item, handleDeleteItem }) => {
	const [checked, setChecked] = useState(item.packed);
	return (
		<li>
			<input
				type="checkbox"
				checked={checked}
				onChange={(e) => setChecked(e.target.checked)}
			/>

			<span style={checked ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>

			<button onClick={() => handleDeleteItem(item.id)}>❌</button>
		</li>
	);
};

export default Item;