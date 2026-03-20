import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import ClientTopProgressBar from "@/components/ClientTopProgressBar";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
    title: "Michael Kuria | Software Engineer",
    description: "Passionate software engineer with 4+ years of experience building scalable web applications and AI-powered solutions. Specializing in modern web technologies, React, Next.js, and machine learning.",
    keywords: ["Michael Kuria", "Software Engineer", "Full Stack Developer", "Web Developer", "AI Developer", "React", "Next.js", "JavaScript", "Python", "Machine Learning", "Portfolio"],
    author: "Michael Kuria",
    siteUrl: "https://kuria-portfolio.vercel.app",
    applicationName: "Michael Kuria Portfolio",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1",
    
    openGraph: {
		type: "website",
		url: "https://kuria-portfolio.vercel.app",
		title: "Michael Kuria | Software Engineer",
		site_name: "Michael Kuria Portfolio",
		description: "Passionate software engineer building scalable web applications and AI-powered solutions. 15+ projects delivered, 500+ users served.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Michael Kuria - Software Engineer Portfolio",
			},
		],
	},
	
	twitter: {
		card: "summary_large_image",
		title: "Michael Kuria | Software Engineer",
		description: "Passionate software engineer building scalable web applications and AI-powered solutions.",
		images: ["/og-image-rev.png"],
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<ScrollToTop />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
