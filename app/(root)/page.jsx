// Copyright (C) 2025 Michael Kuria
// This file is part of myPortfolio-2.
// Licensed under the GNU GPL v3.0. See LICENSE for details.

"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import HomeSection from "./sections/HomeSection";
import AboutPreviewSection from "./sections/AboutPreviewSection";
import ProjectsPreviewSection from "./sections/ProjectsPreviewSection";
import ContactSection from "./sections/ContactSection";

const MyPage = () => {
	const fullpageOptions = {
		anchors: ["home", "about", "projects", "contact"],
		scrollingSpeed: 1000,
		licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
		menu: "#sidebar",
		lockAnchors: false,
		autoScrolling: true,
		fitToSection: true,
		scrollBar: false,
		bigSectionsDestination: "top",
	};

	return (
		<div>
			<ReactFullpage
				render={({ state, fullpageApi }) => (
					<ReactFullpage.Wrapper>
						<div className="section">
							<HomeSection />
						</div>
						<div className="section">
							<AboutPreviewSection />
						</div>
						<div className="section">
							<ProjectsPreviewSection />
						</div>
						<div className="section">
							<ContactSection />
						</div>
					</ReactFullpage.Wrapper>
				)}
				{...fullpageOptions}
			/>
		</div>
	);
};

export default MyPage;
