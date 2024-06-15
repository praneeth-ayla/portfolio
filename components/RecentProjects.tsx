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
							<iframe
								width="560"
								height="315"
								src={
									"https://www.youtube.com/embed/" + item.link
								}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen={true}
								title={`YouTube Video ${index}`}></iframe>
						) : (
							<iframe
								src={"https://youtube.com/embed/" + item.link}
								className="h-96 w-auto"></iframe>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
