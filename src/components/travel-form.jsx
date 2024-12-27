import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

export default function TravelForm({ onAddItem }) {
	const handleSubmit = (data) => {
		const newItem = {
			itemCount: data.itemCount,
			itemName: data.itemName,
			packed: false,
			id: Date.now(),
		};
		onAddItem(newItem);
		form.reset();
	};

	const formSchema = z.object({
		itemCount: z.number().positive("Please select a valid quantity."),
		itemName: z.string().nonempty("Item name should not be empty!"),
	});

	const form = useForm({
		defaultValues: {
			itemCount: 1,
			itemName: "",
		},
		mode: "onChange",
		resolver: zodResolver(formSchema),
	});

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)} className="px-7 py-3 md:px-16 md:py-5">
				<div className="px-3 py-2 md:px-8 md:py-5 text-base md:text-lg grid grid-cols-12 gap-2 rounded-md border-2 border-primary shadow-[0_0_8px] shadow-primary">
					<h3 className="col-span-12 text-sm md:text-lg">
						What do you need for your 🤩 trip?
					</h3>

					<FormField
						name="itemCount"
						control={form.control}
						render={({ field }) => (
							<FormItem className="col-span-3 md:col-span-2">
								<FormControl>
									<Select
										name={field.name}
										value={field.value}
										onValueChange={(val) => field.onChange(+val)}
									>
										<SelectTrigger className="border-orange-300 text-sm md:text-base h-7 md:h-10">
											<SelectValue placeholder="Select item quantity" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												{Array.from({ length: 20 }, (_, ind) => ind + 1).map((num) => (
													<SelectItem value={num} key={num}>
														{num}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						name="itemName"
						control={form.control}
						render={({ field }) => (
							<FormItem className="col-span-9 md:col-span-7">
								<FormControl>
									<Input
										type="text"
										placeholder="Item Name..."
										value={field.value}
										onChange={field.onChange}
										onBlur={field.onBlur}
										className="border-orange-300 text-sm md:text-base h-7 md:h-10"
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						disabled={!form.formState.isValid}
						className={`h-7 md:h-10 text-sm md:text-lg col-span-12 md:col-span-3 ${
							form.formState.isValid ? "opacity-100" : "opacity-50 cursor-not-allowed"
						}`}
					>
						Add Item
					</Button>
				</div>
			</form>
		</Form>
	);
}
