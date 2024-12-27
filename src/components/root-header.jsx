import { cn } from "@/lib/utils";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });

const RootHeader = ({ className }) => {
	return (
		<header
			className={cn(
				audiowide.className,
				"p-1 md:p-2 bg-primary font-bold text-gray-50 text-2xl md:text-4xl",
				className
			)}
		>
			🧳Pack Easy
		</header>
	);
};

export default RootHeader;
