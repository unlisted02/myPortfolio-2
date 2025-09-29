"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";

// images - using string paths instead of imports

import Hr from "@/components/Hr";
import ProjectCard from "./components/ProjectCard";
import Projects from "@/json/data.json";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const category = {
	1: "Web Development",
	2: "AI & Machine Learning",
	9: "Other",
};

export default function Page() {
	const [activeCategory, setActiveCategory] = useState(1);
	const projects = Projects.Projects.filter((item) => item.show === true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<main className="overflow-hidden">
				<FixedButon href="/#projects">
					<FontAwesomeIcon icon={faChevronLeft} className="pr-10 text-black" />
				</FixedButon>
				<div className="relative flex flex-col items-center justify-center w-screen h-screen gap-4 p-10 mb-10 overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ duration: 1, ease: "circOut" }}
							className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 ">
																				<Image
																					src="/image/projects.png"
								alt="Kuria"
								layout="fill"
								objectFit="cover"
								placeholder="blur"
								blurDataURL="/image/placeholder/blur.jpg"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="text-5xl font-bold text-black bg-transparent bg-opacity-50 md:bg-white lg:bg-transparent md-px-0 md:text-8xl">
							My Projects
						</h1>
						<Hr />
						<p className="title  text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
							List of my projects that I have done and{" "}
							<span className="bg-transparent bg-opacity-50 md:bg-gray-100 xl:bg-transparent">
								{" "}
								currently working on.
							</span>
						</p>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3">
							<Button variation="primary">Scroll Down</Button>
						</motion.div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-start w-full pl-10 mt-10 md:pl-32">
					<div className="flex flex-col items-center self-start justify-center my-5 ">
						<Hr variant="long"></Hr>
						<h1 className="mt-3 text-3xl font-bold">Highlight</h1>
					</div>
				</div>
				<div className="container relative grid w-screen grid-cols-1 gap-4 px-10 mx-auto mb-10 md:grid-cols-2">
					<div className="flex flex-col items-start justify-center mb-5 ">
						<div className="relative w-full images aspect-square">
							<div className="absolute top-28 left-10 h-[40%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full shadow-lg">
																								<Image
																									src="/image/projects/idea.jpg"
										alt="Kuria"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
								blurDataURL="/image/placeholder/blur.jpg"
										className="rat"
									/>
								</motion.div>
							</div>
							<div className="absolute top-10 right-28 h-[30%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{ delay: 0.3 }}
									className="w-full h-full shadow-lg ">
																								<Image
																									src="/image/projects/idea2.jpg"
										alt="Kuria"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
								blurDataURL="/image/placeholder/blur.jpg"
										objectPosition="0% 0%"
									/>
								</motion.div>
							</div>
							<div className="absolute bottom-10 md:bottom-26 right-20 h-[35%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{
										delay: 0.5,
									}}
									className="w-full h-full shadow-lg">
																								<Image
																									src="/image/projects/idea1.jpg"
										alt="Kuria"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
								blurDataURL="/image/placeholder/blur.jpg"
									/>
								</motion.div>
							</div>
						</div>
					</div>
					<motion.div
						className="flex flex-col items-start justify-center mb-5 md:px-10"
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,
							type: "spring",
						}}>
						<h2 className="mb-3 text-2xl font-bold tracking-wider">
							MyIdea
						</h2>
						<p className="text-lg text-justify text-gray-600 title">
						A comprehensive enterprise-level innovation management platform built for Kenya Airways, serving both internal employees and external stakeholders. Built with .NET 6.0 and Next.js, the platform enables idea submission, project tracking, real-time notifications, and analytics. Implements JWT authentication, role-based access control, and integrates with SharePoint. Successfully deployed to production with automated CI/CD pipeline.
						</p>
						<p className="mt-3 text-lg text-justify text-gray-600 title">
						The platform serves over 500+ employees across multiple departments, enabling seamless collaboration and idea sharing. Built with scalability in mind using microservices architecture, the system handles high traffic loads and provides real-time updates through SignalR WebSocket connections. The frontend utilizes Next.js 13 with App Router, TypeScript, and Tailwind CSS for a modern, responsive user experience.
						</p>
						<p className="mt-3 text-lg text-justify text-gray-600 title">
						Key technical achievements include implementing advanced search algorithms with Elasticsearch, setting up automated testing with 90%+ code coverage using xUnit and Jest, and establishing monitoring with Application Insights and custom dashboards. The project resulted in a 40% increase in innovation project completion rates and received recognition from senior management for its impact on organizational efficiency.
						</p>
						<div className="mt-3">
							<Button variation="secondary">
								<a
									href="https://myidea.kenya-airways.com"
									target="_blank"
									rel="noopener noreferrer">
									Preview
								</a>
							</Button>
						</div>
					</motion.div>
				</div>
				<div className="flex flex-col items-center justify-start w-full pl-10 mt-16 md:pl-32">
					<div className="flex flex-col items-center self-start justify-center my-5">
						<Hr variant="long"></Hr>
						<motion.h1
							className="mt-3 text-3xl font-bold"
							initial={{
								opacity: 0,
								x: -200,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,
								type: "spring",
							}}>
							Other Note Worthy Projects
						</motion.h1>
					</div>
				</div>

				{/* choose category */}
				<motion.div
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						type: "spring",
					}}
					className="flex flex-row flex-wrap items-start justify-center gap-3 my-5 md:gap-5 ">
					{Object.keys(category).map((key, index) => (
						<button
							key={index}
							className={`px-2 md:px-4 py-2 rounded-lg cursor-pointer transition-all ease duration-300 focus:bg-gray-300 focus:text-black focus:ring focus:ring-slate-500 ${
								activeCategory === key
									? "bg-gray-300 text-black hover:bg-gray-700 hover:text-white"
									: "bg-gray-700 text-white hover:bg-gray-300 hover:text-black"
							}`}
							onClick={() => setActiveCategory(key)}>
							{category[key]}
						</button>
					))}
				</motion.div>

				{/* projects */}
				<div className="container grid w-screen grid-cols-1 gap-4 px-10 mx-auto mb-10 cursor-pointer md:grid-cols-2">
					{projects.map((project, index) => (
						<ProjectCard
							project={project}
							key={index}
							activeCategory={activeCategory}
						/>
					))}
				</div>

				{/* view in archive btn */}
				<motion.div
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					className="flex flex-col items-center self-start justify-center my-5 ">
					<Button variation="primary">
						<Link href="projects/archive">View In Archive</Link>
					</Button>
				</motion.div>
			</main>
		</>
	);
}
