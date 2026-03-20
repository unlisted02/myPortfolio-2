"use client";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function HomeSection() {
	return (
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
							priority
							className="object-cover w-full h-full rounded-full "
							alt="Kuria"
							placeholder="blur"
							blurDataURL="/image/placeholder/blur.jpg"
						/>
					</div>
				</div>
				<motion.h3
					className="uppercase text-xl mb-3 font-bold text tracking-[.5rem] text-gray-500"
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
					Software Engineer
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
						Hi! I&apos;m Kuria, a passionate software engineer with 4+ years of
						experience building scalable software applications and AI-powered
						solutions. I&apos;ve successfully delivered{" "}
						<span className="font-semibold text-gray-700"> 15+ projects</span>{" "}
						serving <span className="font-semibold text-gray-700"> 500+ users</span>{" "}
						across various industries.
					</p>
					<p className="title text-md 2xl:text-xl tracking-wider text-gray-500 leading-[1.7rem]">
						Specializing in modern web technologies with a growing focus on
						Artificial Intelligence, I love creating user-friendly applications
						that solve real-world problems. Currently exploring generative
						models, LLM integration, and building the next generation of
						intelligent applications.
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
							href="https://drive.google.com/file/d/1kB94VEqG4GSwn1LWhWrFGxNDseYPB2PV/view?usp=sharing"
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
						src="/image/grad2.jpg"
						width={400}
						height={550}
						priority
						placeholder="blur"
						blurDataURL="/image/placeholder/blur.jpg"
						alt="Kuria"
						className="object-cover w-full h-full rounded-full"
					/>
				</div>
			</motion.div>
		</div>
	);
}
