"use client";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/Button";
import Hr from "@/components/Hr";

export default function AboutPreviewSection() {
	return (
		<div className="relative flex flex-col items-center justify-center w-screen h-screen gap-4 overflow-hidden">
			<div className="z-0 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
				<motion.div
					className="relative bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
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
	);
}
