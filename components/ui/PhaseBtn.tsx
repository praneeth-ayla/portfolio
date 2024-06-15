import React from "react";

export default function PhaseBtn({ text }: { text: string }) {
	return (
		<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
			<span className="absolute inset-[-1000%] px-10 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
			<span className="inline-flex font-bold h-full w-full px-10 cursor-pointer items-center justify-center rounded-full bg-slate-950 py-1 text-lg text-white backdrop-blur-3xl">
				{text}
			</span>
		</button>
	);
}
