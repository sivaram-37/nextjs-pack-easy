import { BaggageClaim, Rocket } from "lucide-react";

export default function TravelStats({ items }) {
	const totalItems = items.length;

	if (!totalItems) {
		return (
			<footer className="text-emerald-600 text-center px-4 py-2 text-sm md:text-lg space-x-2">
				<em>Start adding some items to your packing list</em>
				<Rocket color="#ff0000" size={20} className="inline-block" />
			</footer>
		);
	}

	const packedItems = items.filter((item) => item.packed).length;
	const percentage = Math.round((packedItems / totalItems) * 100);

	return (
		<footer className="text-emerald-600 text-center px-4 py-2 text-sm md:text-lg space-x-2">
			<BaggageClaim size={18} className="inline-block md:hidden" />
			<BaggageClaim size={24} className="hidden md:inline-block" />
			<em>
				You have {totalItems} items on your list, and you already packed {packedItems} (
				{percentage}%)
			</em>
		</footer>
	);
}
