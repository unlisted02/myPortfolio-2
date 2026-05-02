import Image from "next/image";
import { motion } from "framer-motion";
// images - using string paths instead of imports
import Hr from "@/components/Hr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faChessKnight, faPlane, faSkating } from "@fortawesome/free-solid-svg-icons";

function Title() {
	return (
		<div className="flex flex-col items-center justify-start w-full pl-10 mt-10 md:pl-32">
			<div className="flex flex-col items-center self-start justify-center my-5 ">
				<Hr variant="long"></Hr>
				<h1 className="mt-3 text-3xl font-bold">Who Am I?</h1>
				<motion.p 
					className="max-w-md mt-2 text-gray-600"
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
			<div className="container relative grid grid-cols-1 gap-4 px-10 mx-auto mb-10 md:grid-cols-2">
				<div className="flex flex-col items-start justify-center mb-5 ">
					<div className="relative w-full images aspect-square">
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
									sizes="(max-width: 768px) 50vw, 25vw"
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
									sizes="(max-width: 768px) 30vw, 15vw"
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
									sizes="(max-width: 768px) 40vw, 20vw"
									placeholder="blur"
									blurDataURL="/image/placeholder/blur.jpg"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-10 left-7 w-[34%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 z-10">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									y: 80,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									y: 0,
								}}
								transition={{
									delay: 0.65,
								}}
								className="relative w-full h-full">
								<Image
									src="/image/GodIs.jpeg"
									alt="Michael Kuria speaking at an event"
									fill
									className="object-cover"
									sizes="(max-width: 768px) 32vw, 16vw"
									placeholder="blur"
									blurDataURL="/image/placeholder/blur.jpg"
									unoptimized={process.env.NODE_ENV === "development"}
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
						Michael Kuria
					</h2>
					<p className="text-lg text-justify text-gray-600 title">
						Hey there, I&rsquo;m Michael Kuria, a
						<span className="font-medium text-black">
							{" "}
							passionate Software Engineer
						</span>{" "}
						with a growing expertise in
						<span className="font-medium text-black">
							{" "}
							Artificial Intelligence.
						</span>{" "}
						Hailing from Nairobi, Kenya, I recently
						completed my degree in{" "}
						<span className="font-medium text-black">
							Bsc Computer Science
						</span>{" "}
						at{" "}
						<span className="font-medium text-black">
							Maseno University.
						</span>{" "}
						My work bridges modern web technologies and intelligent systems—from
						building responsive, scalable websites to exploring generative AI
						and LLM-based solutions. Beyond development, I stay curious about
						design and emerging technologies. In today&rsquo;s ever-changing
						digital landscape, I believe being a
						<span className="font-medium text-black"> lifelong learner</span> is
						essential. Let&rsquo;s connect and explore the evolving intersection
						of web and AI together!
					</p>
					<br />
					<p className="text-lg text-justify text-gray-600 title">
						Apart from coding, some other activities that I love to do!
					</p>
					<div className="flex flex-col mt-3 space-y-3">
						<div className="flex items-center space-x-3">
							<FontAwesomeIcon 
								icon={faBookOpen} 
								className="text-xl text-blue-600" 
							/>
							<span className="text-lg text-gray-600 title">Reading Tech Blogs and Books</span>
						</div>
						<div className="flex items-center space-x-3">
							<FontAwesomeIcon 
								icon={faChessKnight} 
								className="text-xl text-green-600" 
							/>
							<span className="text-lg text-gray-600 title">Playing Chess</span>
						</div>
						<div className="flex items-center space-x-3">
							<FontAwesomeIcon 
								icon={faPlane} 
								className="text-xl text-purple-600" 
							/>
							<span className="text-lg text-gray-600 title">Traveling</span>
						</div>
						<div className="flex items-center space-x-3">
							<FontAwesomeIcon 
								icon={faSkating} 
								className="text-xl text-red-600" 
							/>
							<span className="text-lg text-gray-600 title">Skating</span>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
}
