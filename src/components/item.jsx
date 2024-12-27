import CheckboxButton from "./checkbox-button";
import DeleteButton from "./delete-button";

export default function Item({ item, onDeleteItem, onToggleItem }) {
	return (
		<li className="m-1 md:m-2 flex items-center gap-1">
			<CheckboxButton itemId={item.id} itemPacked={item.packed} onToggleItem={onToggleItem} />
			<span
				className={
					item.packed ? "line-through decoration-black decoration-2 text-emerald-600" : ""
				}
			>
				{item.itemCount} {item.itemName}
			</span>
			<DeleteButton itemId={item.id} onDeleteItem={onDeleteItem} />
		</li>
	);
}
