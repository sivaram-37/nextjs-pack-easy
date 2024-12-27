import Item from "./item";
import { Button } from "./ui/button";

export default function TravelList({ items, onDeleteItem, onToggleItem, onClearList }) {
	return (
		<div className="mx-7 md:mx-16 p-3 border-2 border-primary shadow-[0_0_10px] shadow-primary rounded-md grid grid-rows-[1fr_auto]">
			<ul className="text-sm md:text-base flex flex-wrap justify-center">
				{items.map((item, ind) => (
					<Item
						key={ind}
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>

			{items.length > 0 && (
				<div className="text-center">
					<Button
						className="h-7 px-2 text-xs md:text-sm"
						variant="destructive"
						onClick={onClearList}
						disabled={items.length === 0}
					>
						Clear list
					</Button>
				</div>
			)}
		</div>
	);
}
