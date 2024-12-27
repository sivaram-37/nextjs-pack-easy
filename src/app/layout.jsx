import { Bree_Serif } from "next/font/google";
import "./globals.css";

const breeSerif = Bree_Serif({
	subsets: ["latin"],
	weight: "400",
});

export const metadata = {
	title: "PackEasy",
	description: "Your travelling checklist",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${breeSerif.className} antialiased text-gray-700 bg-orange-100`}>
				{children}
			</body>
		</html>
	);
}
