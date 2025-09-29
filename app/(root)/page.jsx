// Copyright (C) 2025 Michael Kuria
// This file is part of myPortfolio-2.
// Licensed under the GNU GPL v3.0. See LICENSE for details.

"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/legacy/image";
// import "../globals.css";
import { motion } from "framer-motion";
import Link from "next/link";

// components
import Button from "@/components/Button";
import Hr from "@/components/Hr";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {
	const fullpageOptions = {
		anchors: ["home", "about", "projects", "contact"],
		scrollingSpeed: 1000,
		licenseKey: "gplv3-license",
		menu: "#sidebar",
		lockAnchors: false,
	};

	return (
		<div>
			<ReactFullpage
				render={({ state, fullpageApi }) => (
					<ReactFullpage.Wrapper>
						<div className="section">
							<div className="container grid grid-cols-1 gap-4 p-10 mx-auto overflow-hidden md:grid-cols-3 md:px-20">
								<motion.div
									className="flex flex-col items-center justify-center col-span-2 text-center md:items-start md:text-start"
									initial={{ x: -100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{
										type: "spring",
									}}>
									<div className="block col-span-1 mx-auto my-10 md:hidden">
										<div className="transition-all duration-300 rounded-full bg-slate-500 h-60 w-60 grayscale hover:grayscale-0 ease">
										<Image
											src="/image/Kuria.png"
											width={500}
											height={500}
											className="object-cover w-full h-full rounded-full "
											alt="Kuria"
											placeholder="blur"
											blurDataURL="/image/placeholder/blur.jpg"
										/>
										</div>
									</div>
									<motion.h3
										className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.2,
											type: "spring",
										}}>
										Michael Kuria
									</motion.h3>
									<motion.h1
										className="my-2 text-5xl font-bold text-black md:text-6xl lg:text-7xl 2xl:text-8xl md:my-5"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.3,
											type: "spring",
										}}>
										Full Stack Developer
									</motion.h1>
									<motion.p
										className="mb-4 text-lg font-medium text-gray-600"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.4,
											type: "spring",
										}}>
										🚀 Building the future with code • Available for opportunities
									</motion.p>
									<motion.div
										className="mt-4"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.4,
											type: "spring",
										}}>
										<p className="title text-md 2xl:text-xl tracking-wider text-gray-500 leading-[1.7rem] mb-3">
											Hi! I'm Kuria, a passionate full-stack developer with 3+ years of experience building 
											scalable web applications and AI-powered solutions. I've successfully delivered 
											<span className="font-semibold text-gray-700"> 15+ projects</span> serving 
											<span className="font-semibold text-gray-700"> 500+ users</span> across various industries.
										</p>
										<p className="title text-md 2xl:text-xl tracking-wider text-gray-500 leading-[1.7rem]">
											Specializing in modern web technologies with a growing focus on Artificial Intelligence, 
											I love creating user-friendly applications that solve real-world problems. Currently exploring 
											generative models, LLM integration, and building the next generation of intelligent applications.
										</p>
									</motion.div>
									<motion.div
										className="flex flex-row items-center justify-center mt-10 space-x-4 buttons"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.5,
											type: "spring",
										}}>
										<Button variation="primary">
											<a
												href="https://drive.google.com/uc?export=download&id=1pPDQttrsXLI3NFlOl5r0Y9cWu-eE0uh5"
												download="MICHAEL_KURIA_CV.pdf"
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2">
												📄 Download CV
											</a>
										</Button>
										<Button variation="secondary">
											<a href="#contact">Contact Me</a>
										</Button>
									</motion.div>
								</motion.div>
								<motion.div
									className="items-center justify-center hidden col-span-1 mx-auto md:flex "
									initial={{ x: 100, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									transition={{
										delay: 0.7,
										type: "spring",
									}}>
									<div className="w-auto h-auto transition-all duration-300 rounded-full lg:px-12 grayscale hover:grayscale-0 ease">
										<Image
											src="/image/Kuria.png"
											width={400}
											height={550}
											placeholder="blur"
											blurDataURL="/image/placeholder/blur.jpg"
											alt="Kuria"
											className="object-cover w-full h-full rounded-full"
										/>
									</div>
								</motion.div>
							</div>
						</div>
						
						<div className="section">
							<div className="relative flex flex-col items-center justify-center w-screen gap-4 overflow-hidden md:h-screen">
								<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
									<motion.div
										className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
										initial={{
											x: 300,
											opacity: 0,
											z: -100,
										}}
										whileInView={{
											x: 0,
											opacity: 1,
											z: 0,
										}}
										transition={{
											delay: 0.5,
											type: "spring",
											stiffness: 100,
											damping: 20,
										}}>
										<Image
											src="/image/mike.jpg"
											layout="fill"
											className="object-cover"
											alt="Kuria"
											placeholder="blur"
											blurDataURL="/image/placeholder/blur.jpg"
										/>
									</motion.div>
								</div>
								<div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
									<motion.h1
										className="px-3 text-5xl font-bold text-black bg-white bg-opacity-50 lg:bg-transparent md-px-0 md:text-8xl"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.1,
											type: "spring",
										}}>
										About Me
									</motion.h1>
									<Hr />
									<motion.p
										className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.2,
											type: "spring",
										}}>
										A brief introduction about me and my interest.
									</motion.p>
									<motion.div
										initial={{ y: 40, opacity: 0 }}
										whileInView={{ y: 0, opacity: 1 }}
										transition={{
											delay: 0.3,
											type: "spring",
										}}>
										<Button variation="primary">
											<Link href="/about">Learn More</Link>
										</Button>
									</motion.div>
								</div>
							</div>
						</div>
						<div className="section">
							<div className="relative flex flex-col items-center justify-center w-screen gap-4 p-10 overflow-hidden md:h-screen">
								<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
									<motion.div
										className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 "
										initial={{
											x: 300,
											opacity: 0,
											z: -100,
										}}
										whileInView={{
											x: 0,
											opacity: 1,
											z: 0,
										}}
										transition={{
											delay: 0.5,
											type: "spring",
											stiffness: 100,
											damping: 20,
										}}>
										<Image
											src="/image/projects.png"
											layout="fill"
											className="object-cover"
											alt="Kuria Setup"
											placeholder="blur"
											blurDataURL="/image/placeholder/blur.jpg"
										/>
									</motion.div>
								</div>
								<div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
									<motion.h1
										className="px-3 text-5xl font-bold text-black bg-white bg-opacity-50 lg:bg-transparent md-px-0 md:text-8xl"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.1,
											type: "spring",
										}}>
										My Projects
									</motion.h1>
									<Hr />
									<motion.p
										className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.2,
											type: "spring",
										}}>
										This is some of my projects that I have done{" "}
										<span className="bg-transparent bg-opacity-50 md:bg-gray-100 xl:bg-transparent">
											{" "}
											and currently working on.
										</span>
									</motion.p>
									<motion.div
										initial={{ y: 40, opacity: 0 }}
										whileInView={{ y: 0, opacity: 1 }}
										transition={{
											delay: 0.3,
											type: "spring",
										}}>
										<Button variation="primary">
											<Link href="/projects">Learn More</Link>
										</Button>
									</motion.div>
								</div>
							</div>
						</div>
						<div className="section">
							<div className="relative flex flex-col items-center justify-center w-screen gap-4 p-10 overflow-hidden md:h-screen">
								<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
									<motion.div
										className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
										initial={{
											x: 300,
											opacity: 0,
											z: -100,
										}}
										whileInView={{
											x: 0,
											opacity: 1,
											z: 0,
										}}
										transition={{
											delay: 0.5,
											type: "spring",
											stiffness: 100,
											damping: 20,
										}}>
										<Image
											src="/image/setup.jpg"
											layout="fill"
											className="object-cover"
											alt="Kuria Setup"
											placeholder="blur"
											blurDataURL="/image/placeholder/blur.jpg"
										/>
									</motion.div>
								</div>
								<div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
									<motion.h1
										className="px-3 mb-3 text-5xl font-bold text-black bg-white bg-opacity-50 lg:bg-transparent md-px-0 md:text-8xl"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.1,
											type: "spring",
										}}>
										Get In Touch
									</motion.h1>
									<Hr />
									<motion.p
										className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] md:mb-5"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.2,
											type: "spring",
										}}>
										Feel free to contact me if you have any{" "}
										<span className="bg-transparent bg-opacity-50 md:bg-gray-100 xl:bg-transparent">
											questions or just want to say hi.
										</span>
									</motion.p>
									<motion.p
										className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
										initial={{ x: -100, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											delay: 0.3,
											type: "spring",
										}}>
										<a href="mailto:kuriamichael463@gmail.com?subject=Hello&body=Hello Kuria,">
											kuriamichael463@gmail.com
										</a>
									</motion.p>
									
									{/* icons */}
									<div className="flex items-center justify-center space-x-4">
										<motion.a
											href="mailto:kuriamichael463@gmail.com?subject=Hello&body=Hello Kuria,"
											className="flex items-center justify-center text-gray-100 transition-all duration-300 ease-in-out bg-gray-700 rounded-full w-14 h-14 hover:bg-gray-400"
											initial={{ y: 40, opacity: 0 }}
											whileInView={{ y: 0, opacity: 1 }}
											transition={{
												y: { delay: 0.1 },
												opacity: { delay: 0.2 },
											}}>
											<FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
										</motion.a>

										<motion.a
											href="https://github.com/unlisted02"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center text-gray-100 transition-all duration-300 ease-in-out bg-gray-700 rounded-full w-14 h-14 hover:bg-gray-400"
											initial={{ opacity: 0, y: 40 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												y: { delay: 0.2 },
												opacity: { delay: 0.3 },
											}}>
											<FontAwesomeIcon icon={faGithub} className="text-3xl" />
										</motion.a>
										<motion.a
											href="https://twitter.com"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center text-gray-100 transition-all duration-300 ease-in-out bg-gray-700 rounded-full w-14 h-14 hover:bg-gray-400"
											initial={{ opacity: 0, y: 40 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												y: { delay: 0.3 },
												opacity: { delay: 0.4 },
											}}>
											<FontAwesomeIcon
												icon={faXTwitter}
												className="text-3xl"
											/>
										</motion.a>
										<motion.a
											href="https://www.linkedin.com/in/michael-kuria-74aa71257/"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center text-gray-100 transition-all duration-300 ease-in-out bg-gray-700 rounded-full w-14 h-14 hover:bg-gray-400"
											initial={{ opacity: 0, y: 40 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												y: { delay: 0.4 },
												opacity: { delay: 0.5 },
											}}>
											<FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
										</motion.a>
										<motion.a
											href="https://discord.com"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center text-gray-100 transition-all duration-300 ease-in-out bg-gray-700 rounded-full w-14 h-14 hover:bg-gray-400"
											initial={{ opacity: 0, y: 40 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												y: { delay: 0.5 },
												opacity: { delay: 0.6 },
											}}>
											<FontAwesomeIcon icon={faDiscord} className="text-3xl" />
										</motion.a>
									</div>
								</div>
							</div>
						</div>
					</ReactFullpage.Wrapper>
				)}
				{...fullpageOptions}
			/>
		</div>
	);
};

export default MyPage;
