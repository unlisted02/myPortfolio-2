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
// images - using string paths instead of imports

function Wrapper({ children }) {
	return (
		<div className="container grid grid-cols-1 gap-10 p-10 mx-auto my-10">
			<motion.div
				className="flex flex-col items-start justify-center mb-5"
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
					className="space-y-2 text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
						Education
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						Get to know more about my educational background.
					</p>
				</motion.div>
				{/* Main Content */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					{/* Education Section - Left */}
					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						
						{/* University Education */}
						<div className="mb-8">
							<div className="mb-4 text-lg font-medium">2020 - 2024</div>
						<div>
							<h2 className="text-xl font-semibold">
								Maseno University
							</h2>
							<h3 className="mb-3 font-normal text-md">
								Bachelor of Science in Computer Science
							</h3>
							</div>
							<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
																				<Image
																					src="/image/maseno.jpg"
										width={400}
										height={225}
										alt="University"
										className="object-cover w-full h-full transition-all duration-300 ease-in-out rounded-lg grayscale group-hover:grayscale-0"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
																				<Image
																					src="/image/ME00.jpg"
										width={400}
										height={225}
										alt="University"
										className="object-cover w-full h-full transition-all duration-300 ease-in-out rounded-lg grayscale group-hover:grayscale-0"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
																				<Image
																					src="/image/code.jpg"
										width={400}
										height={225}
										alt="University"
										className="object-cover w-full h-full transition-all duration-300 ease-in-out rounded-lg grayscale group-hover:grayscale-0"
									/>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<p className="text-lg text-justify text-gray-600 title">
									Aspiring to become a professional Software Engineer, I
									completed my Bachelor&rsquo;s degree in{" "}
									<span className="font-medium text-black">
										Computer Science
									</span>{" "}
									at{" "}
									<span className="font-medium text-black">
										Maseno University
									</span>
									. My journey in tech is driven by curiosity and
									creativity—combining web development with cutting-edge AI
									research and implementation.
									<br />
									<br />
									As the{" "}
									<span className="font-medium text-black">
										Co-Lead of Google Developer Group on Campus (GDGoC)
									</span>{" "}
									at the university, I&rsquo;ve led technical initiatives,
									mentored peers, and helped build impactful digital solutions.
									I&rsquo;ve actively participated in various{" "}
									<span className="font-medium text-black">
										national or international technology competitions
									</span>
									, earning recognition through awards such as{" "}
									<span className="font-medium text-black">
										Huawei ICT Hackathon Competition 2023
									</span>
									, and more.
									<br />
									<br />I am passionate about solving real-world problems
									through code, especially at the intersection of{" "}
									<span className="font-medium text-black">
										Web Development
									</span>{" "}
									and{" "}
									<span className="font-medium text-black">
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
							<div className="mb-4 text-lg font-medium">2016 - 2019</div>
							<div>
								<h2 className="text-xl font-semibold">
									Murang&apos;a High School
								</h2>
								<h3 className="mb-3 font-normal text-md">
									Kenya Certificate of Secondary Education (KCSE)
								</h3>
								<p className="text-lg text-justify text-gray-600 title">
									Completed my secondary education with a strong foundation in{" "}
									<span className="font-medium text-black">
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
							<h2 className="mb-2 text-2xl font-bold text-gray-800">Professional Development</h2>
							<p className="text-gray-600">Continuous growth through certifications, learning & industry engagement</p>
						</div>

						{/* Certifications Grid */}
						<div className="mb-8">
							<div className="flex items-center gap-3 mb-4">
								<FontAwesomeIcon icon={faTrophy} className="text-xl text-yellow-500" />
								<h3 className="text-lg font-semibold text-gray-800">Certifications & Skills</h3>
							</div>
							<div className="grid grid-cols-1 gap-3">
							<div className="p-4 border-l-4 border-purple-500 rounded-lg bg-gradient-to-r from-blue-50 to-pink-50">
								<div className="flex items-start justify-between mb-2">
									<span className="font-medium text-gray-800">Learning Kubernetes</span>
									<span className="text-sm text-gray-500">2026</span>
								</div>
								<p className="text-sm text-gray-600">LinkedIn Learning</p>
							</div>
							<div className="p-4 border-l-4 border-orange-500 rounded-lg bg-gradient-to-r from-green-50 to-yellow-50">
									<div className="flex items-start justify-between mb-2">
										<span className="font-medium text-gray-800">Oracle Cloud Infrastructure</span>
										<span className="text-sm text-gray-500">2025</span>
									</div>
									<p className="text-sm text-gray-600">Cloud Computing & AI</p>
								</div>
								<div className="p-4 border-l-4 border-blue-500 rounded-lg bg-gradient-to-r from-blue-50 to-pink-50">
									<div className="flex items-start justify-between mb-2">
										<span className="font-medium text-gray-800">Google Cloud Platform</span>
										<span className="text-sm text-gray-500">2024</span>
									</div>
									<p className="text-sm text-gray-600">Cloud Computing & Infrastructure</p>
								</div>
								<div className="p-4 border-l-4 border-pink-500 rounded-lg bg-gradient-to-r from-green-50 to-yellow-50">
									<div className="flex items-start justify-between mb-2">
										<span className="font-medium text-gray-800">Machine Learning - AI</span>
										<span className="text-sm text-gray-500">2024</span>
									</div>
									<p className="text-sm text-gray-600">AI/ML Specialization - Coursera</p>
								</div>
								<div className="p-4 border-l-4 border-green-500 rounded-lg bg-gradient-to-r from-blue-50 to-pink-50">
									<div className="flex items-start justify-between mb-2">
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
								<FontAwesomeIcon icon={faGraduationCap} className="text-xl text-indigo-500" />
								<h3 className="text-lg font-semibold text-gray-800">Learning Platforms</h3>
							</div>
							<div className="space-y-3">
								<div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 bg-gradient-to-r from-green-50 to-yellow-50">
									<div className="w-3 h-3 bg-blue-500 rounded-full "></div>
									<span className="text-gray-700">Coursera - AI/ML Specializations - Machine Learning</span>
								</div>
								<div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 bg-gradient-to-r from-blue-50 to-pink-50 ">
									<div className="w-3 h-3 bg-green-500 rounded-full"></div>
									<span className="text-gray-700">Alison.com - Psychology Courses</span>
								</div>
								<div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 bg-gradient-to-r from-green-50 to-yellow-50">
									<div className="w-3 h-3 bg-purple-500 rounded-full"></div>
									<span className="text-gray-700">Udemy - Practical Development Skills</span>
								</div>
								<div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 bg-gradient-to-r from-blue-50 to-pink-50">
									<div className="w-3 h-3 bg-orange-500 rounded-full"></div>
									<span className="text-gray-700">YouTube - Tech Tutorials & Industry Updates</span>
								</div>
							</div>
						</div>

						{/* Industry Engagement */}
						<div className="mb-8">
							<div className="flex items-center gap-3 mb-4">
								<FontAwesomeIcon icon={faMedal} className="text-xl text-red-500" />
								<h3 className="text-lg font-semibold text-gray-800">Industry Engagement</h3>
							</div>
							<div className="space-y-4">
								<div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-pink-50">
									<h4 className="mb-2 font-medium text-gray-800">Hackathon Participation</h4>
									<p className="text-sm text-gray-600">Active involvement in national and international tech competitions</p>
								</div>
								<div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-yellow-50">
									<h4 className="mb-2 font-medium text-gray-800">Developer Communities</h4>
									<p className="text-sm text-gray-600">Contributing to open-source projects and tech meetups</p>
								</div>
								<div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-pink-50">
									<h4 className="mb-2 font-medium text-gray-800">Professional Networking</h4>
									<p className="text-sm text-gray-600">Building connections with industry professionals and mentors</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</Wrapper>
	);
}
