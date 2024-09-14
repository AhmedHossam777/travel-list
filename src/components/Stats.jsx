const Stats = ({ items = [] }) => {
	if (!items.length) {
		return (
			<footer className="stats">
				{' '}
				<em>Start adding some items to your packing list 🚀</em>{' '}
			</footer>
		);
	}

	const numItems = items.length;
	const packedItemsNum = items.filter((item) => item.packed).length;
	const percentage =
		numItems === 0 ? 0 : Math.round((packedItemsNum / numItems) * 100);

	return (
		<footer className="stats">
			<em>
				{percentage === 100
					? 'You got everything!, ready to go ✈️'
					: `👜You have ${numItems} on your list, and you already packed ${packedItemsNum} (${percentage || 0}%)`}
			</em>
		</footer>
	);
};

export default Stats;