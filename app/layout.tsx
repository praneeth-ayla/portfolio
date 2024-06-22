import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { logoUrl } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<head>
				<link
					rel="icon"
					href={logoUrl}
					sizes="any"
				/>
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					enableSystem
					defaultTheme="dark"
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
