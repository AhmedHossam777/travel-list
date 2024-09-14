import Item from './Item';

const PackingList = ({ items, setItems }) => {
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
				{items.map((item) => (
					<Item
						item={item}
						key={item.id}
						handleDeleteItem={handleDeleteItem}
						handleTogglePacked={handleTogglePacked}
					/>
				))}
			</ul>
		</div>
	);
};

export default PackingList;