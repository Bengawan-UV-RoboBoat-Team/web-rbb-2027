<template>
	<div>
		<section class="relative h-[90vh] flex items-center justify-start overflow-hidden bg-primary-dark">
			<div class="absolute inset-0 z-0 opacity-40">
				<img
					src="/images/gallery/2024/gallery-2024-7.webp"
					alt="RoboBoat 2026"
					class="w-full h-full object-cover"
				/>
			</div>

			<div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white z-[1]"></div>

			<div class="absolute inset-0 z-[2]" style="background: radial-gradient(ellipse at 30% 40%, rgba(114, 47, 55, 0.8) 0%, rgba(114, 47, 55, 0.4) 40%, transparent 65%), radial-gradient(ellipse at 70% 60%, rgba(0, 91, 150, 0.55) 0%, transparent 55%), radial-gradient(circle at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.7) 100%);"></div>

			<div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
				<h1 class="text-4xl md:text-6xl font-extrabold mb-6 text-surface drop-shadow-lg">ROBOBOAT 2026</h1>

			<div class="flex flex-wrap justify-center gap-4 mb-6">
				<div
					class="px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 flex items-center gap-2 text-sm font-medium"
				>
					<Icon name="uil:map-marker" class="text-secondary text-lg" />
					<span class="text-secondary/90">Sarasota, Florida</span>
				</div>

				<div
					class="px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 flex items-center gap-2 text-sm font-medium"
				>
					<Icon name="uil:calendar-alt" class="text-secondary text-lg" />
					<span class="text-secondary/90">February 2026</span>
				</div>

				<div
					class="px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 flex items-center gap-2 text-sm font-medium"
				>
					<Icon name="uil:ship" class="text-secondary text-lg" />
					<span class="text-secondary/90">Storm Response</span>
				</div>
			</div>

				<div class="mb-8 text-center">
					<div class="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-3 max-w-xl mx-auto">
						<div class="px-6 py-5 bg-white/5 backdrop-blur rounded-2xl border border-white/10">
							<div class="text-3xl md:text-5xl font-bold text-white mb-2">{{ countdownParts.days }}</div>
							<div class="text-xs md:text-sm font-bold text-surface-dim tracking-wider uppercase">Days</div>
						</div>
						<div class="px-6 py-5 bg-white/5 backdrop-blur rounded-2xl border border-white/10">
							<div class="text-3xl md:text-5xl font-bold text-white mb-2">{{ countdownParts.hours }}</div>
							<div class="text-xs md:text-sm font-bold text-surface-dim tracking-wider uppercase">Hours</div>
						</div>
						<div class="px-6 py-5 bg-white/5 backdrop-blur rounded-2xl border border-white/10">
							<div class="text-3xl md:text-5xl font-bold text-white mb-2">{{ countdownParts.minutes }}</div>
							<div class="text-xs md:text-sm font-bold text-surface-dim tracking-wider uppercase">Minutes</div>
						</div>
						<div class="px-6 py-5 bg-white/5 backdrop-blur rounded-2xl border border-white/10">
							<div class="text-3xl md:text-5xl font-bold text-white mb-2">{{ countdownParts.seconds }}</div>
							<div class="text-xs md:text-sm font-bold text-surface-dim tracking-wider uppercase">Seconds</div>
						</div>
					</div>
				</div>

				<p class="text-xl text-surface-dim max-w-2xl mx-auto">
					Let's get to know about RoboBoat 2026, our next competition!
				</p>
			</div>
		</section>

		<section class="py-16 bg-white border-b border-gray-100">
			<div class="container mx-auto px-4">
				<div class="grid md:grid-cols-12 gap-12 items-center">
					<div class="md:col-span-4 flex justify-center">
						<img
							src="/images/logo/roboboat-logo.webp"
							alt="RoboBoat Logo"
							class="w-full max-w-[250px] object-contain"
						/>
					</div>
					<div class="md:col-span-8">
						<h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
							What is RoboBoat?
						</h2>
						<div class="prose text-gray-600 leading-relaxed mb-6 text-justify">
							<p>
								<strong>RoboBoat</strong> is an international student program established to
								generate, cultivate, and enhance a community of innovators
								capable of making substantive contributions to the <strong>Autonomous
								Surface Vehicle (ASV)</strong> domain.
							</p>
							<p>
								The vision is achieved by providing a venue and mechanism
								whereby practitioners of robotics and maritime autonomy come
								together at RoboBoat to share knowledge, innovate, and
								collaboratively advance the technology of ASV systems.
							</p>
						</div>
						<a
							href="https://roboboat.org/"
							target="_blank"
							class="inline-flex items-center gap-2 text-secondary font-bold hover:underline text-lg"
						>
							Visit Official Website <Icon name="uil:external-link-alt" />
						</a>
					</div>
				</div>
			</div>
		</section>

		<section class="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-gray-100">
			<div class="container mx-auto px-4">
				<div class="text-center mb-12">
					<span class="inline-block px-4 py-2 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full mb-4">
						2026 Competition
					</span>
					<h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
						What's New in RoboBoat 2026?
					</h2>
					<p class="text-gray-600 max-w-3xl mx-auto text-lg">
						This year's competition introduces the <strong>Storm Response</strong> theme, challenging teams to develop autonomous surface vehicles capable of operating in post-disaster maritime scenarios.
					</p>
				</div>

				<div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					<div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-primary">
						<div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
							<Icon name="uil:cloud-showers-heavy" class="text-primary text-2xl" />
						</div>
						<h3 class="text-xl font-bold text-primary-dark mb-3">Storm Response Theme</h3>
						<p class="text-gray-600 text-sm leading-relaxed">
							The 2026 theme focuses on disaster response scenarios, requiring ASVs to navigate challenging conditions, identify hazards, and perform critical emergency operations autonomously.
						</p>
					</div>

					<div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-secondary">
						<div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
							<Icon name="uil:clipboard-notes" class="text-secondary text-2xl" />
						</div>
						<h3 class="text-xl font-bold text-primary-dark mb-3">Six Mission Tasks</h3>
						<p class="text-gray-600 text-sm leading-relaxed">
							From evacuation routes to harbor alerts, each task simulates real-world emergency scenarios requiring intelligent decision-making and rapid response capabilities.
						</p>
					</div>

					<div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-primary">
						<div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
							<Icon name="uil:shield-check" class="text-primary text-2xl" />
						</div>
						<h3 class="text-xl font-bold text-primary-dark mb-3">Real-World Applications</h3>
						<p class="text-gray-600 text-sm leading-relaxed">
							Technologies developed for RoboBoat can be applied to disaster relief, search and rescue operations, and maritime safety in climate-affected regions.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- SDGs RELEVANCE SECTION -->
		<section id="sdg-section" class="py-20 bg-white border-b border-gray-100 scroll-mt-32">
			<div class="container mx-auto px-4">
				<div class="text-center mb-12">
					<span class="inline-block px-4 py-2 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full mb-4">
						Global Impact
					</span>
					<h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
						Alignment with UN Sustainable Development Goals
					</h2>
					<p class="text-gray-600 max-w-3xl mx-auto text-lg">
						RoboBoat 2026's Storm Response theme directly contributes to achieving key UN Sustainable Development Goals through autonomous maritime technology innovation.
					</p>
				</div>

				<div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

					<button
						@click="toggleSDG('sdg9')"
						class="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-primary/50 text-left relative overflow-hidden"
						:class="selectedSDG === 'sdg9' ? 'ring-4 ring-primary/30 shadow-2xl border-primary/50' : ''"
					>
						<div class="absolute top-4 right-4 transition-all duration-300 opacity-40 group-hover:opacity-100 group-hover:scale-110">
							<Icon name="uil:mouse-alt" class="text-primary text-xl animate-bounce" />
						</div>

						<div class="flex flex-col items-center text-center">
							<img 
								src="/images/sdgs/sdgs9.webp" 
								alt="SDG 9: Industry, Innovation and Infrastructure"
								class="w-32 h-32 mb-4 group-hover:scale-110 transition-transform duration-300"
							/>
							<h3 class="text-xl font-bold text-primary-dark mb-2">
								SDG 9
							</h3>
							<p class="text-sm text-gray-600 font-medium">
								Industry, Innovation and Infrastructure
							</p>
						</div>

						<div class="mt-4 flex items-center justify-center gap-2 text-xs font-bold transition-all duration-300"
							:class="selectedSDG === 'sdg9' ? 'text-primary' : 'text-gray-500 group-hover:text-primary'">
							<span>{{ selectedSDG === 'sdg9' ? 'Click to close' : 'Click to expand' }}</span>
							<Icon name="uil:angle-down" class="text-base transition-transform duration-300" :class="selectedSDG === 'sdg9' ? 'rotate-180' : ''" />
						</div>
					</button>


					<button
						@click="toggleSDG('sdg11')"
						class="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-secondary/50 text-left relative overflow-hidden"
						:class="selectedSDG === 'sdg11' ? 'ring-4 ring-secondary/30 shadow-2xl border-secondary/50' : ''"
					>

						<div class="absolute top-4 right-4 transition-all duration-300 opacity-40 group-hover:opacity-100 group-hover:scale-110">
							<Icon name="uil:mouse-alt" class="text-secondary text-xl animate-bounce" />
						</div>

						<div class="flex flex-col items-center text-center">
							<img 
								src="/images/sdgs/sdgs11.webp" 
								alt="SDG 11: Sustainable Cities and Communities"
								class="w-32 h-32 mb-4 group-hover:scale-110 transition-transform duration-300"
							/>
							<h3 class="text-xl font-bold text-primary-dark mb-2">
								SDG 11
							</h3>
							<p class="text-sm text-gray-600 font-medium">
								Sustainable Cities and Communities
							</p>
						</div>


						<div class="mt-4 flex items-center justify-center gap-2 text-xs font-bold transition-all duration-300"
							:class="selectedSDG === 'sdg11' ? 'text-secondary' : 'text-gray-500 group-hover:text-secondary'">
							<span>{{ selectedSDG === 'sdg11' ? 'Click to close' : 'Click to expand' }}</span>
							<Icon name="uil:angle-down" class="text-base transition-transform duration-300" :class="selectedSDG === 'sdg11' ? 'rotate-180' : ''" />
						</div>
					</button>


					<button
						@click="toggleSDG('sdg13')"
						class="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-primary/50 text-left relative overflow-hidden"
						:class="selectedSDG === 'sdg13' ? 'ring-4 ring-primary/30 shadow-2xl border-primary/50' : ''"
					>

						<div class="absolute top-4 right-4 transition-all duration-300 opacity-40 group-hover:opacity-100 group-hover:scale-110">
							<Icon name="uil:mouse-alt" class="text-primary text-xl animate-bounce" />
						</div>

						<div class="flex flex-col items-center text-center">
							<img 
								src="/images/sdgs/sdgs13.webp" 
								alt="SDG 13: Climate Action"
								class="w-32 h-32 mb-4 group-hover:scale-110 transition-transform duration-300"
							/>
							<h3 class="text-xl font-bold text-primary-dark mb-2">
								SDG 13
							</h3>
							<p class="text-sm text-gray-600 font-medium">
								Climate Action
							</p>
						</div>


						<div class="mt-4 flex items-center justify-center gap-2 text-xs font-bold transition-all duration-300"
							:class="selectedSDG === 'sdg13' ? 'text-primary' : 'text-gray-500 group-hover:text-primary'">
							<span>{{ selectedSDG === 'sdg13' ? 'Click to close' : 'Click to expand' }}</span>
							<Icon name="uil:angle-down" class="text-base transition-transform duration-300" :class="selectedSDG === 'sdg13' ? 'rotate-180' : ''" />
						</div>
					</button>
				</div>


				<Transition name="slide-down">
					<div v-if="selectedSDG" id="sdg-detail" class="mt-12 max-w-4xl mx-auto scroll-mt-32">
						<div class="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-2" 
							:class="{
								'border-primary/30': selectedSDG === 'sdg9' || selectedSDG === 'sdg13',
								'border-secondary/30': selectedSDG === 'sdg11'
							}">
							<div class="flex justify-between items-start mb-6">
								<div>
									<h3 class="text-2xl font-bold text-primary-dark mb-2">
										{{ sdgDetails[selectedSDG].title }}
									</h3>
									<p class="text-gray-600">
										{{ sdgDetails[selectedSDG].subtitle }}
									</p>
								</div>
								<button
									@click="selectedSDG = null"
									class="text-gray-400 hover:text-gray-600 transition text-3xl"
								>
									<Icon name="uil:times-circle" />
								</button>
							</div>

							<div class="space-y-4">
								<div
									v-for="(point, index) in sdgDetails[selectedSDG].points"
									:key="index"
									class="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm"
								>
									<div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
										:class="{
											'bg-primary/20 text-primary': selectedSDG === 'sdg9' || selectedSDG === 'sdg13',
											'bg-secondary/20 text-secondary': selectedSDG === 'sdg11'
										}">
										<Icon name="uil:check" class="text-xl" />
									</div>
									<div>
										<h4 class="font-bold text-primary-dark mb-1">{{ point.title }}</h4>
										<p class="text-gray-600 text-sm">{{ point.description }}</p>
									</div>
								</div>
							</div>

							<div class="mt-6 bg-white rounded-lg p-6">
								<h4 class="font-bold text-primary-dark mb-3 flex items-center gap-2">
									<Icon name="uil:crosshair" />
									Related Competition Tasks
								</h4>
								<div class="flex flex-wrap gap-2">
									<span
										v-for="task in sdgDetails[selectedSDG].tasks"
										:key="task"
										class="px-3 py-1 text-xs font-bold rounded-full"
										:class="{
											'bg-primary/10 text-primary': selectedSDG === 'sdg9' || selectedSDG === 'sdg13',
											'bg-secondary/10 text-secondary': selectedSDG === 'sdg11'
										}"
									>
										{{ task }}
									</span>
								</div>
							</div>
						</div>
					</div>
				</Transition>
			</div>
		</section>

		<section class="py-20 bg-surface border-b border-surface-dark">
			<div class="container mx-auto px-4">
				<div class="text-center mb-16 max-w-4xl mx-auto">
					<span
						class="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block"
						>Competition Category 1</span
					>
					<h2 class="text-4xl font-extrabold text-primary-dark mb-4">
						Design Documentation
					</h2>
					<p class="text-gray-600 text-lg">
						Before hitting the water, teams are evaluated on their engineering process through a series of design documentation submissions.
					</p>
				</div>

				<div class="space-y-16 max-w-5xl mx-auto">
					<div
						class="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-l-8 border-primary"
					>
						<div class="flex items-center gap-4 mb-4">
							<div
								class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl"
							>
								<Icon name="uil:file-alt" />
							</div>
							<h3 class="text-2xl font-bold text-primary-dark">
								Technical Design Report
							</h3>
						</div>
						<p class="text-gray-700 mb-8 leading-relaxed text-lg">
							The Technical Design Report (TDR) outlines the team's design
							principles and competition strategy, explaining the rationale
							behind the selected autonomy challenge tasks and how those choices
							shaped key technical decisions across the hull, propulsion,
							control, and autonomy systems.
						</p>
						<div
							class="w-full h-96 bg-gray-100 rounded border border-gray-200 relative group"
						>
							<iframe
								src="/papers/TDR_Universitas-Sebelas-Maret_2026.pdf"
								class="w-full h-full"
								title="TDR Preview"
							></iframe>
							<a
								href="/papers/TDR_Universitas-Sebelas-Maret_2026.pdf"
								target="_blank"
								class="absolute bottom-4 right-4 px-4 py-2 bg-primary text-white text-sm font-bold rounded hover:bg-secondary transition shadow-lg flex items-center gap-2"
							>
								<Icon name="uil:file-download" /> Download PDF
							</a>
						</div>
					</div>

					<div
						class="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-l-8 border-secondary"
					>
						<div class="flex items-center gap-4 mb-4">
							<div
								class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary text-2xl"
							>
								<Icon name="uil:video" />
							</div>
							<h3 class="text-2xl font-bold text-primary-dark">
								Team Introduction Video
							</h3>
						</div>
						<p class="text-gray-700 mb-8 leading-relaxed text-lg">
							Team Introduction Video is a video created by the team to
							introduce the team members and highlight the team's personality.
							The video may be made as creatively and uniquely as possible to
							reflect the distinctive characteristics of the team.
						</p>
						<div
							class="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg"
						>
							<iframe
								class="w-full h-full"
								src="https://www.youtube.com/embed/7QeoMlpd-fY"
								frameborder="0"
								allowfullscreen
							></iframe>
						</div>
					</div>

					<div class="grid md:grid-cols-2 gap-8">
						<div
							class="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-primary"
						>
							<h3
								class="text-xl font-bold text-primary mb-3 flex items-center gap-2"
							>
								<Icon name="uil:globe" /> Team Website
							</h3>
							<p class="text-sm text-gray-700 leading-relaxed">
								The Team Website is an online platform showcasing the team's
								identity and project. It contains team information, vessel
								photos or videos, development documentation, design records, and
								a blog tracking the vessel's progress. As the project's first
								impression, the website must be visually appealing and easy to
								navigate, using core design principles such as contrast,
								repetition, alignment, and grouping to present content
								effectively.
							</p>
						</div>
						<div
							class="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-secondary"
						>
							<h3
								class="text-xl font-bold text-primary mb-3 flex items-center gap-2"
							>
								<Icon name="uil:presentation-play" /> Design Strategy
								Presentation
							</h3>
							<p class="text-sm text-gray-700 leading-relaxed">
								Judges will inspect the team's vehicle and assess technical
								design, technical innovation, and craftsmanship of the design.
								Team members will present to answer technical questions posed by
								the judges during this inspection and be prepared to explain
								their design strategy and how decisions made impacts on the
								technical design, functionality, and craftsmanship.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="py-16 bg-white">
			<div class="container mx-auto px-4">
				<div class="text-center mb-12">
					<span
						class="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block"
						>Competition Category 2</span
					>
					<h2 class="text-4xl font-extrabold text-primary-dark mb-4">
						Autonomy Challenge
					</h2>
					<p class="text-gray-600 text-lg">
						Our ASV must demonstrate intelligence by completing
						these task autonomously.
					</p>
				</div>

				<ClientOnly fallback-tag="div" fallback="Loading Content...">
					<div class="grid md:grid-cols-12 gap-12 mt-16">
						<div class="md:col-span-4 lg:col-span-3">
							<div
								class="sticky top-24 bg-white rounded-xl shadow-md border border-surface-dark overflow-hidden"
							>
								<div
									class="p-4 bg-primary-dark text-surface font-bold uppercase tracking-wider text-sm"
								>
									Mission Tasks
								</div>
								<div class="flex flex-col">
									<button
										v-for="(task, index) in tasks"
										:key="index"
										@click="setTab(index)"
										class="text-left px-6 py-4 border-b border-gray-100 hover:bg-surface transition-colors flex items-center justify-between group"
										:class="
											activeTab === index
												? 'bg-surface border-l-4 border-l-primary'
												: 'bg-white border-l-4 border-l-transparent'
										"
									>
										<div class="flex flex-col gap-2">
											<span
												class="w-fit font-bold text-primary bg-secondary/30 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider"
											>
												Task {{ index + 1 }}
											</span>

											<span
												class="font-bold text-sm leading-tight transition-colors"
												:class="
													activeTab === index
														? 'text-primary-dark'
														: 'text-gray-600 group-hover:text-primary'
												"
											>
												{{ task.title }}
											</span>
										</div>

										<Icon
											name="uil:angle-right"
											class="text-3xl transition-all duration-300"
											:class="
												activeTab === index
													? 'text-primary opacity-100 translate-x-0'
													: 'text-gray-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
											"
										/>
									</button>
								</div>
							</div>
						</div>

						<div class="md:col-span-8 lg:col-span-9">
							<div v-for="(task, index) in tasks" :key="task.title">
								<div
									v-if="activeTab === index"
									class="bg-surface rounded-2xl border border-gray-200 p-8 animate-fade-in"
								>
									<div
										class="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200"
									>
										<div
											class="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0"
										>
											{{ index + 1 }}
										</div>
										<div>
											<span
												class="text-xs font-bold text-secondary uppercase tracking-widest"
												>Task</span
											>
											<h2
												class="text-3xl font-bold text-primary-dark leading-tight"
											>
												{{ task.title }}
											</h2>
										</div>
									</div>

									<p class="text-gray-700 text-lg leading-relaxed mb-8">
										{{ task.description }}
									</p>

									<div class="mb-8">
										<h3
											class="text-lg font-bold text-primary mb-4 flex items-center gap-2"
										>
											<Icon name="uil:video" /> Strategy Simulation
										</h3>
										<div
											class="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg relative group"
										>
											<div
												class="absolute inset-0 flex items-center justify-center text-gray-500"
											>
												<span v-if="!task.video">No Video Available Yet</span>
												<iframe
													v-else
													:src="task.video"
													class="w-full h-full"
													title="YouTube video player"
													frameborder="0"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													allowfullscreen
													playsinline
												></iframe>
											</div>
										</div>
									</div>

									<div
										class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
									>
										<p class="text-sm font-bold text-gray-500 uppercase mb-4">
											Capability level:
										</p>
										<ul class="space-y-3">
											<li
												v-for="point in task.points"
												:key="point"
												class="flex items-start gap-3 text-gray-700"
											>
												<Icon
													name="uil:check-circle"
													class="text-secondary mt-1 flex-shrink-0 text-xl"
												/>
												<span v-html="point"></span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</ClientOnly>
			</div>
		</section>

		<section class="pt-1 pb-8 bg-white">

			<div class="container mx-auto px-4">
				<div class="text-center">
					<h1 class="text-5xl md:text-7xl font-extrabold text-primary">
						See you in Florida!
					</h1>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted } from "vue";

const activeTab = ref(0);
const setTab = (index: number) => (activeTab.value = index);
const selectedSDG = ref<'sdg9' | 'sdg11' | 'sdg13' | null>(null);
const countdown = ref('');
const countdownParts = ref({
	days: '00',
	hours: '00',
	minutes: '00',
	seconds: '00'
});

const toggleSDG = async (sdg: 'sdg9' | 'sdg11' | 'sdg13') => {
	selectedSDG.value = selectedSDG.value === sdg ? null : sdg;
	if (selectedSDG.value === sdg) {
		await nextTick();
		document.getElementById('sdg-detail')?.scrollIntoView({ behavior: 'smooth' });
	}
};

const updateCountdown = () => {
	const targetDate = new Date('2026-02-19T00:00:00');
	const now = new Date();
	const diff = targetDate.getTime() - now.getTime();

	if (diff <= 0) {
		countdown.value = 'Competition started!';
		countdownParts.value = {
			days: '00',
			hours: '00',
			minutes: '00',
			seconds: '00'
		};
		return;
	}

	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((diff % (1000 * 60)) / 1000);

	countdown.value = `${days}d ${hours}h ${minutes}m ${seconds}s`;
	countdownParts.value = {
		days: String(days).padStart(2, '0'),
		hours: String(hours).padStart(2, '0'),
		minutes: String(minutes).padStart(2, '0'),
		seconds: String(seconds).padStart(2, '0')
	};
};

let intervalId: number | null = null;

onMounted(() => {
	updateCountdown();
	intervalId = window.setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
	if (intervalId) {
		clearInterval(intervalId);
	}
});

const sdgDetails = {
	sdg9: {
		title: "SDG 9: Industry, Innovation and Infrastructure",
		subtitle: "Building resilient infrastructure and fostering innovation",
		points: [
			{ title: "Technological Innovation", description: "ASV technology advances autonomous maritime systems for disaster response" },
			{ title: "Infrastructure Development", description: "Supporting maritime safety infrastructure in vulnerable regions" },
			{ title: "Research & Development", description: "Fostering innovation in autonomous vehicle technologies" },
		],
		tasks: ["Evacuation Route", "Debris Clearance", "Emergency Response Sprint"],
	},
	sdg11: {
		title: "SDG 11: Sustainable Cities and Communities",
		subtitle: "Making cities and human settlements inclusive, safe, and sustainable",
		points: [
			{ title: "Disaster Risk Reduction", description: "ASVs provide rapid response capabilities in post-disaster maritime scenarios" },
			{ title: "Community Safety", description: "Enhanced maritime safety for coastal communities affected by climate events" },
			{ title: "Emergency Services", description: "Supporting emergency response and search and rescue operations" },
		],
		tasks: ["Emergency Response Sprint", "Harbor Alert", "Supply Drop"],
	},
	sdg13: {
		title: "SDG 13: Climate Action",
		subtitle: "Taking urgent action to combat climate change and its impacts",
		points: [
			{ title: "Climate Resilience", description: "Developing technologies to respond to climate-related maritime disasters" },
			{ title: "Storm Response", description: "ASVs equipped to operate in challenging post-storm maritime conditions" },
			{ title: "Environmental Monitoring", description: "Autonomous systems for monitoring and assessing environmental impacts" },
		],
		tasks: ["Debris Clearance", "Navigate the Marina", "Harbor Alert"],
	},
};

const tasks = [
	{
		title: "Evacuation Route",
		description:
			"The ASV must travel safely through the designated entrance and exit gates, completing the route from start to finish without errors.",
		video: "https://www.youtube.com/embed/X85Q7j1pJFs?autoplay=1&mute=1&loop=1&playlist=X85Q7j1pJFs",
		points: [
			"<strong>Core:</strong> Navigate and exit through two pairs of gates",
		],
	},
	{
		title: "Debris Clearance",
		description:
			"The ASV moves through a channel toward a debris area, identifying and scanning floating objects to locate potential hazards.",
		video: "https://www.youtube.com/embed/Y0ZwgpGzArg?autoplay=1&mute=1&loop=1&playlist=Y0ZwgpGzArg",
		points: [
			"<strong>Core:</strong> Transit channel, enter debris field,avoid debris, and return through channel.",
			"<strong>Advanced:</strong> Detect and interact correctly with red or green debris.",
			"<strong>Disruptive:</strong> Reports location (lat/long) of all debris (lighted and non-lighted buoys)." 
		],
	},
	{
		title: "Emergency Response Sprint",
		description:
			"The ASV races to the emergency zone, performs a correct loop around the illuminated buoy, and then exits the area by navigating back through the buoys.",
		video: "https://www.youtube.com/embed/dxv6sR7qVbck?autoplay=1&mute=1&loop=1&playlist=dxv6sR7qVbc",
		points: [
			"<strong>Core:</strong> Pass through gate, circle light buoy, and exit through gate.",
			"<strong>Advanced:</strong> Circle light beacon in correct direction indicated by color.",
			"<strong>Disruptive:</strong> Report color of light beacon and time of response." 
		],
	},
	{
		title: "Supply Drop",
		description:
			"The ASV transports and delivers water and racquetball supplies to fixed vessels located around the course.",
		video: "https://www.youtube.com/embed/ZEBrI4t6_Eo?autoplay=1&mute=1&loop=1&playlist=ZEBrI4t6_Eo",
		points: [
			"<strong>Core:</strong> Deliver water to orange vessel or ball to black vessel",
			"<strong>Advanced:</strong> Deliver water to orange vessel and ball to black vessel" 
		],
	},
	{
		title: "Navigate the Marina",
		description:
			"The ASV enters the marina zone and autonomously docks into an open slip.",
		video: "https://www.youtube.com/embed/uLfU0jADS7E?autoplay=1&mute=1&loop=1&playlist=uLfU0jADS7E",
		points: [
			"<strong>Core:</strong> Dock in any unoccupied bay.",
			"<strong>Advanced:</strong> Dock in slip with green light beacon, signaling an available bay.",
			"<strong>Disruptive:</strong> Dock in slip with green light beacon and the lowest number sign, signaling an available bay"
		],
	},
	{
		title: "Harbor Alert",
		description:
			"The ASV reacts to a triggered emergency audio alert within the harbor.",
		video: "https://www.youtube.com/embed/JeI7P4lMj4I?autoplay=1&mute=1&loop=1&playlist=JeI7P4lMj4I",
		points: [
			"<strong>Core:</strong> Detect and classify audible signal (1 vs 2 blasts) and immediately abandon task, override behavior, and navigate safely to assigned zone/task.",
			"<strong>Advanced:</strong> Report confirmation of signal and execute optimized routing and collision avoidance to assigned zone/task.",
			"<strong>Disruptive:</strong> Coordinate response with another boat, report real-time status confirmation.",
		],
	},
];
</script>

<style scoped>
.animate-fade-in {
	animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(5px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.slide-down-enter-active,
.slide-down-leave-active {
	transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.slide-down-enter-from {
	opacity: 0;
	transform: translateY(-20px);
}
.slide-down-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}
</style>