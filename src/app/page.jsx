"use client";

import { useEffect, useState } from "react";

import RootFooter from "@/components/root-footer";
import RootHeader from "@/components/root-header";
import TravelForm from "@/components/travel-form";
import TravelList from "@/components/travel-list";
import TravelStats from "@/components/travel-stats";
import { CirclePlay } from "lucide-react";
import { Audiowide } from "next/font/google";
import useLocalStorage from "@/hooks/use-local-storage";

const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });

export default function Home() {
	const [items, setItems] = useLocalStorage("pack-easy", []);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (items.length > 0) setIsOpen(true);
	}, []);

	const handleAddItem = (newItem) => {
		setItems((items) => [...items, newItem]);
	};

	const handleDeleteItem = (id) => {
		setItems((items) => items.filter((item) => item.id !== id));
	};

	const handletoggleItem = (id) => {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	};

	const handleClearList = () => {
		setItems([]);
		// setTimeout(() => {
		// 	setIsOpen(false);
		// }, 1000);
	};

	return isOpen ? (
		<div className="w-full h-[100dvh] grid grid-rows-[auto_auto_1fr_auto_auto]">
			<RootHeader />
			<TravelForm onAddItem={handleAddItem} />
			<TravelList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handletoggleItem}
				onClearList={handleClearList}
			/>
			<TravelStats items={items} />
			<RootFooter />
		</div>
	) : (
		<div className="w-full h-[100dvh] flex flex-col gap-2 md:gap-3 items-center justify-center bg-primary">
			<RootHeader className={"mr-3 text-4xl md:text-5xl"} setLogoAsBig />
			<p
				onClick={() => setIsOpen(true)}
				className={`px-4 py-2 bg-black text-primary self-center justify-self-center text-lg md:text-xl md:font-bold flex justify-center items-center gap-2 rounded-md cursor-pointer hover:bg-slate-800 ${audiowide.className}`}
			>
				<CirclePlay size={28} className="animate-pulse" />
				<span className="animate-pulse">Start Packing...</span>
			</p>
		</div>
	);
}
