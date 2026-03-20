"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Hr from "@/components/Hr";

export default function ProjectsPreviewSection() {
	return (
		<div className="relative flex flex-col items-center justify-center w-screen gap-4 p-10 overflow-hidden md:h-screen">
			<div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
				<div className="relative bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 fp-animate fp-from-right fp-delay-5">
					<Image
						src="/image/projects.png"
						fill
						loading="lazy"
						className="object-cover"
						alt="My Projects"
						sizes="(max-width: 768px) 80vw, 30vw"
						placeholder="blur"
						blurDataURL="/image/placeholder/blur.jpg"
					/>
				</div>
			</div>
			<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
				<h1 className="px-3 text-5xl font-bold text-black bg-white bg-opacity-50 lg:bg-transparent md-px-0 md:text-8xl fp-animate fp-from-left fp-delay-1">
					My Projects
				</h1>
				<Hr />
				<p className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5 fp-animate fp-from-left fp-delay-2">
					This is some of my projects that I have done{" "}
					<span className="bg-transparent bg-opacity-50 md:bg-gray-100 xl:bg-transparent">
						{" "}
						and currently working on.
					</span>
				</p>
				<div className="fp-animate fp-from-bottom fp-delay-3">
					<Button variation="primary">
						<Link href="/projects">Learn More</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
