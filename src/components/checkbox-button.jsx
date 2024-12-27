import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
export default function CheckboxButton({ itemId, itemPacked, onToggleItem }) {
	return (
		<Button
			asChild
			size="icon"
			variant="link"
			value={itemPacked}
			onClick={() => onToggleItem(itemId)}
			className="h-5 w-5 rounded-[6px]"
		>
			<Checkbox />
		</Button>
	);
}
