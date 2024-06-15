"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
	const { setTheme } = useTheme();
	setTheme("dark");
	return (
		<div>
			<button
				onClick={() => {
					setTheme("light");
				}}>
				light
			</button>
			<button
				onClick={() => {
					setTheme("dark");
				}}>
				dark
			</button>
			<button
				onClick={() => {
					setTheme("system");
				}}>
				system
			</button>
		</div>
	);
}
