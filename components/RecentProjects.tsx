import { projects } from "@/data";

export default function RecentProjects() {
	return (
		<div
			className="py-20"
			id="projects">
			<h1 className="heading">
				A small selection of{" "}
				<span className="text-purple">recent projects</span>
			</h1>

			<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
				{projects.map((item, index) => (
					<div key={index}>
						{item.type === "long" ? (
							<video
								width="560"
								height="315"
								autoPlay
								controls
								src={item.link}></video>
						) : (
							<video
								className="h-[500px] w-auto"
								autoPlay
								controls
								src={item.link}></video>
						)}
					</div>
				))}

				<div></div>
			</div>
		</div>
	);
}
