import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Kuria | Portofolio",

    description:
		"My name is Kuria, I'm a web developer and I'm passionate about it. I'm currently working as a software engineer at Kenya Airways.",

    author: "Michael Kuria",
    siteUrl: "https://www.kuria.my.id",
    applicationName: "Kuria",

    openGraph: {
		type: "website",
		url: "https://www.kuria.my.id",
		title: "Kuria | Portofolio",
		site_name: "Kuria | Portofolio",
		description: "My name is Kuria, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Kuria Portofolio",
			},
		],
		site_name: "Kuria | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}

				<Analytics />
			</body>
		</html>
	);
}
