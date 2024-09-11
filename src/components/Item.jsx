const Item = ({ item, handleDeleteItem }) => {
	return (
		<li>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => handleDeleteItem(item.id)}>❌</button>
		</li>
	);
};

export default Item;
