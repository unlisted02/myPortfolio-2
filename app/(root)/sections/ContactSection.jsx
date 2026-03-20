"use client";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Hr from "@/components/Hr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactSection() {
	return (
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
						<FontAwesomeIcon icon={faXTwitter} className="text-3xl" />
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
	);
}
