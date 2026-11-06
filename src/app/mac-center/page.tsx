"use client";

import {
	VideoPlayer,
	VideoPlayerContent,
	VideoPlayerControlBar,
	VideoPlayerMuteButton,
	VideoPlayerPlayButton,
	VideoPlayerFullscreenButton,
	VideoPlayerTimeRange,
} from "@/components/ui/shadcn-io/video-player";

import { FormEvent } from "react";
import styles from "./page.module.css";

export default function MacCenterPage() {
	function handleProposalSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const getValue = (name: string) => String(formData.get(name) ?? "");

		const text =
			"COLLABORATIVE PROJECT PROPOSAL\n\nName: " +
			getValue("name") +
			"\nEmail: " +
			getValue("email") +
			"\nOrganization: " +
			getValue("organization") +
			"\nProject title: " +
			getValue("title") +
			"\n\nProject description:\n" +
			getValue("description") +
			"\n\nProposed collaboration:\n" +
			getValue("collaboration") +
			"\n\nTimeframe: " +
			getValue("timeframe") +
			"\nResources: " +
			getValue("resources");

		const recipient = "info@macedonianarts.org"; // Replace with actual email
		const subject = "Collaborative Project Proposal";

		const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

		window.location.href = mailtoLink;
	}

	return (
		<div className={styles.pageRoot}>
			<main>
				{/* past has a future - intro */}
				<section className={styles.hero} id="home">
					<div className={styles.heroCopy}>
						<div className={styles.eyebrow}>
							History · Scholarship · Education
						</div>
						<h1>The past has a future.</h1>
						<p>
							Keeping historical inquiry alive through research,
							education, and meaningful collaboration.
						</p>
						<div className={styles.heroButtons}>
							<a
								className={styles.button}
								href="#mission"
								// style={{ marginRight: "70px", marginTop: "70px" }}
							>
								Discover our mission
							</a>
							<a
								className={`${styles.button} ${styles.light}`}
								href="#collaborate"
							>
								Work with us
							</a>
						</div>
					</div>

					<div className={styles.heroArt}>
						<VideoPlayer className={styles.heroVideo}>
							<VideoPlayerContent
								crossOrigin=""
								preload="auto"
								slot="media"
								src="/videos/center_vid.mp4"
								className="object-contain"
								autoPlay
								muted
								loop
								playsInline
							/>
						</VideoPlayer>
					</div>
				</section>

				{/* purpose */}
				<section
					className={`${styles.section} ${styles.intro}`}
					id="mission"
				>
					<div>
						<div className={styles.eyebrow}>01 / Our purpose</div>
						<p style={{ fontSize: "50px" }}>
							Knowledge for generations to come.
						</p>
					</div>
					<div>
						<p>
							MAKEDONIKA exists to advance the study of history,
							preserve scholarly knowledge and inspire new
							generations to approach the past with curiosity,
							rigor, and independence.
						</p>
						<p style={{ marginTop: "30px" }}>
							Named in honor of Professor Dr. Nade Proeva, the
							center brings researchers, educators, students and
							cultural institutions together. We seek to support
							historical research, make resources more accessible
							and create opportunities for learning and exchange
							in Macedonia and beyond.
						</p>
					</div>
				</section>

				{/* our people */}
				<section
					className={`${styles.section} ${styles.board}`}
					id="board"
				>
					<div>
						<div className={styles.eyebrow}>02 / Our people</div>
						<h2>Guided by scholarship.</h2>
						<p style={{ textAlign: "justify" }}>
							Our Academic Board brings together experience in
							historical research and education to guide the
							center’s scholarly work.
						</p>
					</div>

					<div className={styles.boardMembers}>
						<article
							className={`${styles.boardMember} ${styles.full}`}
						>
							<h3>Pavlina Proevska</h3>
							<p>Executive Director</p>
							<a
								className={styles.link}
								href="https://www.linkedin.com/in/pavlina-proevska-533773169/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn profile ↗
							</a>
						</article>

						<article
							className={`${styles.boardMember} ${styles.full}`}
						>
							<h3>Antonio Nedelkovski</h3>
							<p>Managing Director</p>
							<a
								className={styles.link}
								href="https://www.linkedin.com/in/antonio-nedelkovski-730890a5/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn profile ↗
							</a>
						</article>

						<article className={styles.boardMember}>
							<h3>Natasha Kotlar</h3>
							<p>Member of the Academic Board</p>
							<a
								className={styles.link}
								href="https://www.facebook.com/NatasaKotlar/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Facebook profile ↗
							</a>
						</article>

						<article className={styles.boardMember}>
							<h3>Damjan Donev</h3>
							<p>Member of the Academic Board</p>
							<a
								className={styles.link}
								href="https://scholar.google.com/citations?user=ZnfdfFMAAAAJ&hl=en"
								target="_blank"
								rel="noopener noreferrer"
							>
								Google Scholar profile ↗
							</a>
						</article>

						<article className={styles.boardMember}>
							<h3>Todor Chepreganov</h3>
							<p>Member of the Academic Board</p>
							<a
								className={styles.link}
								href="https://www.makedonskadrzava.com/authors/todor-cepreganov"
								target="_blank"
								rel="noopener noreferrer"
							>
								Author profile ↗
							</a>
						</article>

						<article className={styles.boardMember}>
							<h3>Irena Teodora Vesevska</h3>
							<p>Member of the Academic Board</p>
							<a
								className={styles.link}
								href="http://fzf.ukim.edu.mk/en/irena-teodora-vesevska-phd/"
								target="_blank"
								rel="noopener noreferrer"
							>
								University profile ↗
							</a>
						</article>
					</div>
				</section>

				{/* our work */}
				<section
					className={`${styles.section} ${styles.band}`}
					id="projects"
				>
					<div className={styles.workheader}>
						<div>
							<div className={styles.eyebrow}>03 / Our work</div>
							<h2>History in Action.</h2>
						</div>
					</div>

					<div className={styles.cards}>
						<article className={styles.card}>
							<span className={styles.number}>
								01 / Education
							</span>
							<h3>Fall in Love with History</h3>
							<p>
								The Nade Proeva History Camp brings young people
								together to explore the past and discover the
								value of historical inquiry.
							</p>
							<a className={styles.link} href="/#register-camp">
								Register for Summer Camp ↗
							</a>
						</article>

						<article className={styles.card}>
							<span className={styles.number}>
								02 / Publishing
							</span>
							<h3>Books &amp; Digital Prints </h3>
							<p>
								Preserving and sharing Professor Proeva’s
								scholarly work, and encouraging access to
								historical resources for students and
								researchers.
							</p>
						</article>

						<article className={styles.card}>
							<span className={styles.number}>03 / Research</span>
							<h3>Scholarship &amp; collaboration</h3>
							<p>
								Encouraging research, supporting emerging
								scholars, and welcoming partnerships that open
								new paths for historical study.
							</p>
							<a className={styles.link} href="#collaborate">
								Propose a project ↗
							</a>
						</article>
					</div>
				</section>

				{/* person behind the name */}
				<section className={`${styles.section} ${styles.legacy}`}>
					<div>
						<div className={styles.eyebrow}>
							The person behind the name
						</div>

						<h2>Professor Dr. Nade Proeva</h2>

						<p style={{ textAlign: "justify" }}>
							Historian, classicist and teacher, Nade Proeva
							(1949–2024) devoted her life to the study of ancient
							Macedonia and to educating generations of students.
						</p>

						<p style={{ textAlign: "justify" }}>
							She was posthumously awarded the Order “8
							September,” Macedonia’s highest state honor, in
							recognition of her lifetime scholarly and academic
							achievements.
						</p>
					</div>

					<blockquote>
						Her work continues through the questions we ask, the
						knowledge we share and the students we inspire.
						{/* <div className={styles.quoteLine}></div> */}
					</blockquote>
				</section>

				{/* work with us */}
				<section
					className={`${styles.section} ${styles.band} ${styles.formWrap}`}
					id="collaborate"
				>
					<div>
						<div className={styles.eyebrow}>05 / Work with us</div>
						<p className={styles.formtitle}>
							Let’s make history together.
						</p>
						<p className={styles.formsubtitle}>
							Have an idea for research, education, preservation,
							or a cultural initiative? Tell us about the project
							and how you envision working with MAKEDONIKA.
						</p>
					</div>

					<form
						className={styles.proposalForm}
						onSubmit={handleProposalSubmit}
					>
						<label>
							Full name
							<input name="name" required />
						</label>

						<label>
							Email address
							<input type="email" name="email" required />
						</label>

						<label>
							Organization or affiliation
							<input name="organization" />
						</label>

						<label>
							Project title
							<input name="title" required />
						</label>

						<label className={styles.full}>
							Project description
							<textarea
								name="description"
								required
								placeholder="What would you like to do, and why does it matter?"
							/>
						</label>

						<label className={styles.full}>
							Proposed collaboration
							<textarea
								name="collaboration"
								required
								placeholder="How would you like to work with the center?"
							/>
						</label>

						<label>
							Estimated timeframe
							<input
								name="timeframe"
								placeholder="e.g. Spring 2027"
							/>
						</label>

						<label>
							Funding & resources needed
							<input name="resources" placeholder="If known" />
						</label>

						<div className={styles.full}>
							<button className={styles.button} type="submit">
								Send proposal via email ↗
							</button>
						</div>
					</form>
				</section>
			</main>

			<footer className={styles.footer}>
				<div>
					<strong>
						Center for Historical Studies NADE PROEVA - MAKEDONIKA
					</strong>
					<small>TIN 4038026526673</small>
				</div>
				<div>
					<a
						href="https://www.paypal.com/us/fundraiser/charity/1386780"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.button}
					>
						Donate Now ↗
					</a>
				</div>
			</footer>
		</div>
	);
}
