import { cn } from "@/lib/utils";
import { Audiowide } from "next/font/google";
import Image from "next/image";

const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });

const RootHeader = ({ className, setLogoAsBig = false }) => {
	return (
		<header
			className={cn(
				audiowide.className,
				"p-1 md:p-2 bg-primary font-bold text-gray-50 text-2xl md:text-4xl flex items-center gap-1",
				className
			)}
		>
			{setLogoAsBig ? (
				<Image
					src={"/logo.jpg"}
					alt="Logo"
					width={72}
					height={72}
					priority
					className="rounded-lg"
				/>
			) : (
				<Image
					src={"/logo.jpg"}
					alt="Logo"
					width={40}
					height={40}
					priority
					className="rounded-md"
				/>
			)}
			Pack~Easy
		</header>
	);
};

export default RootHeader;
