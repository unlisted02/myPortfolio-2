"use client";
import Image from "next/image";
import Hr from "@/components/Hr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
	{
		href: "mailto:kuriamichael463@gmail.com?subject=Hello&body=Hello Kuria,",
		icon: faEnvelope,
		label: "Email",
		delay: "0.1s",
	},
	{
		href: "https://github.com/unlisted02",
		icon: faGithub,
		label: "GitHub",
		target: "_blank",
		delay: "0.2s",
	},
	{
		href: "https://twitter.com",
		icon: faXTwitter,
		label: "Twitter",
		target: "_blank",
		delay: "0.3s",
	},
	{
		href: "https://www.linkedin.com/in/michael-kuria-74aa71257/",
		icon: faLinkedin,
		label: "LinkedIn",
		target: "_blank",
		delay: "0.4s",
	},
	{
		href: "https://discord.com",
		icon: faDiscord,
		label: "Discord",
		target: "_blank",
		delay: "0.5s",
	},
];

export default function ContactSection() {
	return (
		<div className="relative flex flex-col items-center justify-center w-screen gap-4 p-10 overflow-hidden md:h-screen">
			<div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
				<div className="relative bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 fp-animate fp-from-right fp-delay-5">
					<Image
						src="/image/setup.jpg"
						fill
						loading="lazy"
						className="object-cover"
						alt="Kuria Setup"
						sizes="(max-width: 768px) 80vw, 30vw"
						placeholder="blur"
						blurDataURL="/image/placeholder/blur.jpg"
					/>
				</div>
			</div>
			<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
				<h1 className="px-3 mb-3 text-5xl font-bold text-black bg-white bg-opacity-50 lg:bg-transparent md-px-0 md:text-8xl fp-animate fp-from-left fp-delay-1">
					Get In Touch
				</h1>
				<Hr />
				<p className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] md:mb-5 fp-animate fp-from-left fp-delay-2">
					Feel free to contact me if you have any{" "}
					<span className="bg-transparent bg-opacity-50 md:bg-gray-100 xl:bg-transparent">
						questions or just want to say hi.
					</span>
				</p>
				<p className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5 fp-animate fp-from-left fp-delay-3">
					<a href="mailto:kuriamichael463@gmail.com?subject=Hello&body=Hello Kuria,">
						kuriamichael463@gmail.com
					</a>
				</p>

				<div className="flex items-center justify-center space-x-4">
					{socialLinks.map(({ href, icon, label, target, delay }) => (
						<a
							key={label}
							href={href}
							target={target}
							rel={target ? "noopener noreferrer" : undefined}
							aria-label={label}
							className="flex items-center justify-center text-gray-100 transition-all duration-300 ease-in-out bg-gray-700 rounded-full w-14 h-14 hover:bg-gray-400 fp-animate fp-from-bottom"
							style={{ transitionDelay: delay }}>
							<FontAwesomeIcon icon={icon} className="text-3xl" />
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
