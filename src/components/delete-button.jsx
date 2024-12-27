import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export default function DeleteButton({ itemId, onDeleteItem }) {
	return (
		<Button
			size="icon"
			variant="link"
			className="h-6 w-6 p-1 text-red-500 hover:bg-red-500 hover:text-white"
			onClick={() => onDeleteItem(itemId)}
		>
			<Trash2 />
		</Button>
	);
}
