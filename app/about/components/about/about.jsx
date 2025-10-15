import Image from "next/image";
import { motion } from "framer-motion";
// images - using string paths instead of imports
import Hr from "@/components/Hr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faChessKnight, faPlane, faSkating } from "@fortawesome/free-solid-svg-icons";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
				<motion.p 
					className="text-gray-600 mt-2 max-w-md"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					A passionate developer with a love for solving complex problems through technology
				</motion.p>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="w-full h-full">
								<Image
									src="/image/view1.jpg"
									alt="Kuria"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
									blurDataURL="/image/placeholder/blur.jpg"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
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
								className="w-full h-full">
								<Image
									src="/image/meAlways.jpg"
									alt="Kuria"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
									blurDataURL="/image/placeholder/blur.jpg"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
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
								className="w-full h-full">
								<Image
									src="/image/chessMike.jpg"
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
					className="flex justify-center items-start flex-col mb-5 md:px-10"
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
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						Michael Kuria
					</h2>
					<p className="text-gray-600 text-justify title text-lg">
						Hey there, I&rsquo;m Michael Kuria, a
						<span className="text-black font-medium">
							{" "}
							passionate Web Developer
						</span>{" "}
						with a growing expertise in
						<span className="text-black font-medium">
							{" "}
							Artificial Intelligence.
						</span>{" "}
						Hailing from Nairobi, Kenya, I recently
						completed my degree in{" "}
						<span className="text-black font-medium">
							Bsc Computer Science
						</span>{" "}
						at{" "}
						<span className="text-black font-medium">
							Maseno University.
						</span>{" "}
						My work bridges modern web technologies and intelligent systems—from
						building responsive, scalable websites to exploring generative AI
						and LLM-based solutions. Beyond development, I stay curious about
						design and emerging technologies. In today&rsquo;s ever-changing
						digital landscape, I believe being a
						<span className="text-black font-medium"> lifelong learner</span> is
						essential. Let&rsquo;s connect and explore the evolving intersection
						of web and AI together!
					</p>
					<br />
					<p className="text-gray-600 text-justify title text-lg">
						Apart from coding, some other activities that I love to do!
					</p>
					<div className="flex flex-col space-y-3 mt-3">
						<div className="flex items-center space-x-3">
							<FontAwesomeIcon 
								icon={faBookOpen} 
								className="text-blue-600 text-xl" 
							/>
							<span className="text-gray-600 title text-lg">Reading Tech Blogs and Books</span>
						</div>
						<div className="flex items-center space-x-3">
							<FontAwesomeIcon 
								icon={faChessKnight} 
								className="text-green-600 text-xl" 
							/>
							<span className="text-gray-600 title text-lg">Playing Chess</span>
						</div>
						<div className="flex items-center space-x-3">
							<FontAwesomeIcon 
								icon={faPlane} 
								className="text-purple-600 text-xl" 
							/>
							<span className="text-gray-600 title text-lg">Traveling</span>
						</div>
						<div className="flex items-center space-x-3">
							<FontAwesomeIcon 
								icon={faSkating} 
								className="text-red-600 text-xl" 
							/>
							<span className="text-gray-600 title text-lg">Skating</span>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
}
