import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMedal,
	faGraduationCap,
	faTrophy,
	faAward,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Me4 from "@/public/image/ME00.jpg";
import Me5 from "@/public/image/maseno.jpg";
import Me6 from "@/public/image/code.jpg";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-start flex-col mb-5"
				initial={{
					opacity: 0,
					y: 50,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					delay: 0.3,
					duration: 0.8,
					type: "spring",
					stiffness: 100,
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	const [isExpanded, setIsExpanded] = useState(false);


	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12">
				{" "}
				{/* Header */}
				<motion.div
					className="text-center space-y-2"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
						Education
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						Get to know more about my educational background.
					</p>
				</motion.div>
				{/* Main Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Education Section - Left */}
					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						
						{/* University Education */}
						<div className="mb-8">
							<div className="font-medium text-lg mb-4">2020 - 2024</div>
						<div>
							<h2 className="font-semibold text-xl">
								Maseno University
							</h2>
							<h3 className="text-md font-normal mb-3">
								Bachelor of Science in Computer Science
							</h3>
							</div>
							<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me5}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me4}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me6}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<p className="text-gray-600 text-justify title text-lg">
									Aspiring to become a professional Software Engineer, I
									completed my Bachelor&rsquo;s degree in{" "}
									<span className="text-black font-medium">
										Computer Science
									</span>{" "}
									at{" "}
									<span className="text-black font-medium">
										Maseno University
									</span>
									. My journey in tech is driven by curiosity and
									creativity—combining web development with cutting-edge AI
									research and implementation.
									<br />
									<br />
									As the{" "}
									<span className="text-black font-medium">
										Co-Lead of Google Developer Group on Campus (GDGoC)
									</span>{" "}
									at the university, I&rsquo;ve led technical initiatives,
									mentored peers, and helped build impactful digital solutions.
									I&rsquo;ve actively participated in various{" "}
									<span className="text-black font-medium">
										national or international technology competitions
									</span>
									, earning recognition through awards such as{" "}
									<span className="text-black font-medium">
										Huawei ICT Hackathon Competition 2023
									</span>
									, and more.
									<br />
									<br />I am passionate about solving real-world problems
									through code, especially at the intersection of{" "}
									<span className="text-black font-medium">
										Web Development
									</span>{" "}
									and{" "}
									<span className="text-black font-medium">
										Artificial Intelligence
									</span>
									. Constantly learning, building, and collaborating—I&rsquo;m
									excited to keep growing and contributing to the evolving tech
									landscape.
								</p>
							</div>
						</div>

						{/* High School Education */}
						<div className="mb-8">
							<div className="font-medium text-lg mb-4">2016 - 2019</div>
							<div>
								<h2 className="font-semibold text-xl">
									Murang&apos;a High School
								</h2>
								<h3 className="text-md font-normal mb-3">
									Kenya Certificate of Secondary Education (KCSE)
								</h3>
								<p className="text-gray-600 text-justify title text-lg">
									Completed my secondary education with a strong foundation in{" "}
									<span className="text-black font-medium">
										Mathematics, Physics, and Computer Studies
									</span>
									. This period laid the groundwork for my interest in technology
									and problem-solving, which eventually led me to pursue Computer Science.
								</p>
							</div>
						</div>
					</motion.div>

					{/* Professional Development Section - Right */}
					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						
						{/* Section Header */}
						<div className="mb-8 text-center">
							<h2 className="text-2xl font-bold text-gray-800 mb-2">Professional Development</h2>
							<p className="text-gray-600">Continuous growth through certifications, learning & industry engagement</p>
						</div>

						{/* Certifications Grid */}
						<div className="mb-8">
							<div className="flex items-center gap-3 mb-4">
								<FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-xl" />
								<h3 className="text-lg font-semibold text-gray-800">Certifications & Skills</h3>
							</div>
							<div className="grid grid-cols-1 gap-3">
							<div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-orange-500">
									<div className="flex justify-between items-start mb-2">
										<span className="font-medium text-gray-800">Oracle Cloud Infrastructure</span>
										<span className="text-sm text-gray-500">2025</span>
									</div>
									<p className="text-sm text-gray-600">Cloud Computing & AI</p>
								</div>
								<div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-500">
									<div className="flex justify-between items-start mb-2">
										<span className="font-medium text-gray-800">Google Cloud Platform</span>
										<span className="text-sm text-gray-500">2024</span>
									</div>
									<p className="text-sm text-gray-600">Cloud Computing & Infrastructure</p>
								</div>
								<div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500">
									<div className="flex justify-between items-start mb-2">
										<span className="font-medium text-gray-800">Machine Learning - AI</span>
										<span className="text-sm text-gray-500">2024</span>
									</div>
									<p className="text-sm text-gray-600">AI/ML Specialization - Coursera</p>
								</div>
								<div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500">
									<div className="flex justify-between items-start mb-2">
										<span className="font-medium text-gray-800">Psychology - Human Behavior</span>
										<span className="text-sm text-gray-500">2023</span>
									</div>
									<p className="text-sm text-gray-600">Alison.com</p>
								</div>
								
							</div>
						</div>

						{/* Learning Platforms */}
						<div className="mb-8">
							<div className="flex items-center gap-3 mb-4">
								<FontAwesomeIcon icon={faGraduationCap} className="text-indigo-500 text-xl" />
								<h3 className="text-lg font-semibold text-gray-800">Learning Platforms</h3>
							</div>
							<div className="space-y-3">
								<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
									<div className="w-3 h-3 bg-blue-500 rounded-full"></div>
									<span className="text-gray-700">Coursera - AI/ML Specializations - Machine Learning</span>
								</div>
								<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
									<div className="w-3 h-3 bg-green-500 rounded-full"></div>
									<span className="text-gray-700">Alison.com - Psychology Courses</span>
								</div>
								<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
									<div className="w-3 h-3 bg-purple-500 rounded-full"></div>
									<span className="text-gray-700">Udemy - Practical Development Skills</span>
								</div>
								<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
									<div className="w-3 h-3 bg-orange-500 rounded-full"></div>
									<span className="text-gray-700">YouTube - Tech Tutorials & Industry Updates</span>
								</div>
							</div>
						</div>

						{/* Industry Engagement */}
						<div className="mb-8">
							<div className="flex items-center gap-3 mb-4">
								<FontAwesomeIcon icon={faMedal} className="text-red-500 text-xl" />
								<h3 className="text-lg font-semibold text-gray-800">Industry Engagement</h3>
							</div>
							<div className="space-y-4">
								<div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg">
									<h4 className="font-medium text-gray-800 mb-2">Hackathon Participation</h4>
									<p className="text-sm text-gray-600">Active involvement in national and international tech competitions</p>
								</div>
								<div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg">
									<h4 className="font-medium text-gray-800 mb-2">Developer Communities</h4>
									<p className="text-sm text-gray-600">Contributing to open-source projects and tech meetups</p>
								</div>
								<div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg">
									<h4 className="font-medium text-gray-800 mb-2">Professional Networking</h4>
									<p className="text-sm text-gray-600">Building connections with industry professionals and mentors</p>
								</div>
							</div>
						</div>

						{/* Current Focus */}
						<div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
							<div className="flex items-center gap-3 mb-3">
								<FontAwesomeIcon icon={faAward} className="text-indigo-600 text-xl" />
								<h3 className="text-lg font-semibold text-indigo-800">Current Focus Areas</h3>
							</div>
							<div className="grid grid-cols-2 gap-2 text-sm">
								<span className="bg-white px-3 py-1 rounded-full text-indigo-700">AI/ML</span>
								<span className="bg-white px-3 py-1 rounded-full text-indigo-700">Cloud Computing</span>
								<span className="bg-white px-3 py-1 rounded-full text-indigo-700">DevOps</span>
								<span className="bg-white px-3 py-1 rounded-full text-indigo-700">Data Science</span>
								</div>
						</div>
					</motion.div>
				</div>
			</section>
		</Wrapper>
	);
}
