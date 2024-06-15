"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { approach } from "@/data";
import PhaseBtn from "./ui/PhaseBtn";

export default function Approach() {
	return (
		<>
			<h1 className="heading">
				My <span className="text-purple">approach</span>
			</h1>
			<div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black-100 w-full gap-4 mx-auto px-8">
				{approach.map(({ title, description, color }, index) => (
					<Card
						title={title}
						description={description}
						icon={<PhaseBtn text={`Phase ${index + 1}`} />}>
						<CanvasRevealEffect
							animationSpeed={5.1}
							containerClassName={color}
						/>
					</Card>
				))}
			</div>
		</>
	);
}

const Card = ({
	title,
	description,
	icon,
	children,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	children?: React.ReactNode;
}) => {
	const [hovered, setHovered] = React.useState(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="border rounded-3xl border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative">
			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="h-full w-full absolute inset-0">
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative z-20 px-10">
				<div
					// add this for making it center
					// absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
					className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
					{icon}
				</div>
				<h2
					// change text-3xl, add text-center
					className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200">
					{title}
				</h2>
				{/* add this one for the description */}
				<p
					className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
					style={{ color: "#E4ECFF" }}>
					{description}
				</p>
			</div>
		</div>
	);
};

export const Icon = ({ className, ...rest }: any) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className={className}
			{...rest}>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 6v12m6-6H6"
			/>
		</svg>
	);
};
