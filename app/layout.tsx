import type { Metadata } from "next";
import { Noto_Sans , Noto_Sans_JP } from "next/font/google";
import "./globals.css";


const notoSans = Noto_Sans({ subsets : ["latin"] });
const notoSansJP = Noto_Sans_JP({ subsets : ["latin"] });

export const metadata: Metadata = {
	title: "me.aknet.tech",
	description: "あきかきって、誰？",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={`${notoSans.className} ${notoSansJP.className}`}>
				{children}
			</body>
		</html>
	);
}
