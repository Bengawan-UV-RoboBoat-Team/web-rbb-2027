<template>
	<div>
		<section class="bg-surface-dim text-primary py-20 text-center">
			<h1 class="text-4xl md:text-5xl font-bold mb-4">Team Profile</h1>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				We are engineers, researchers, and dreamers united by the ocean.
			</p>
		</section>

		<section class="py-16 container mx-auto px-4">
			<div class="flex flex-col md:flex-row gap-12 items-center">
				<div class="md:w-1/2">
					<img
						src="/images/team/team25-photo-florida.webp"
						alt="Bengawan UV Roboboat Team"
						class="rounded-2xl shadow-xl"
					/>
				</div>
				<div class="md:w-1/2">
					<h2 class="text-3xl font-bold text-primary-dark mb-6">
						About Bengawan UV Roboboat Team
					</h2>
					<div class="prose text-gray-600 text-lg leading-relaxed text-justify">
						<p class="mb-4">
							<strong>Bengawan Unmanned Vehicle (Bengawan UV) Roboboat Team</strong> are  subdivision
								of <strong>Bengawan UV</strong> that competes in the <strong>International Roboboat Competition.</strong>
								We have participated in this competition since 2021 and consistently strive to
								enhance the quality of our vessel’s design, technology, and autonomous capabilities in each competition cycle.
								Our efforts extend beyond achieving competitive results, as we also aim to broaden students
								knowledge and experience in maritime technology and robotics.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section
		id="achievements"
		class="py-16 bg-gray-50 relative scroll-mt-24"
		>
			<div class="container mx-auto px-4 relative z-10">
				<h2 class="text-3xl font-bold text-primary-dark mb-10 text-center">
					Achievements
				</h2>

				<div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
					<div
						v-for="(item, index) in achievements"
						:key="index"
						class="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
					>
						<div
							class="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary to-secondary group-hover:w-3 transition-all"
						></div>

						<div class="relative z-10 pl-4">
							<div
								class="flex justify-between items-center mb-4 pb-2 border-b border-gray-100"
							>
								<h4
									class="font-bold text-gray-800 uppercase tracking-widest text-sm"
								>
									{{ item.competition }}
								</h4>
								<span
									class="flex items-center gap-1 text-xs text-gray-400 font-medium"
								>
									<Icon name="uil:map-marker" /> {{ item.location }}
								</span>
							</div>

							<h3
								v-if="item.highlight"
								class="text-xl md:text-2xl font-extrabold text-primary-dark leading-tight mb-1 group-hover:text-primary transition-colors"
							>
								{{ item.highlight }}
							</h3>

							<h4
								v-if="item.sub_highlight"
								class="text-lg font-bold text-secondary mt-1 mb-2"
							>
								{{ item.sub_highlight }}
							</h4>

							<div
								v-if="item.equal_highlights && item.equal_highlights.length > 0"
								class="space-y-2 mt-2"
							>
								<h4
									v-for="(award, idx) in item.equal_highlights"
									:key="idx"
									class="text-lg font-bold text-secondary leading-tight group-hover:text-primary transition-colors"
								>
									{{ award }}
								</h4>
							</div>

							<div
								v-if="item.details && item.details.length > 0"
								class="mt-4 pt-4 border-t border-dashed border-gray-200"
							>
								<ul class="space-y-2">
									<li
										v-for="(detail, i) in item.details"
										:key="i"
										class="flex items-start gap-2 text-sm text-gray-600"
									>
										<Icon
											name="uil:award"
											class="text-gray-400 flex-shrink-0 mt-0.5"
										/>
										<span>{{ detail }}</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div
			class="container mx-auto px-4 py-16 space-y-24 border-t border-gray-200"
		>
			<section id="supervisor" class="scroll-mt-24 text-center">
				<div class="mb-10">
					<h2 class="text-3xl font-bold text-primary-dark">Supervisors</h2>
					<div class="h-1 w-24 bg-surface-dark rounded mx-auto mt-4"></div>
				</div>

				<div class="flex flex-wrap justify-center gap-12">
					<div
						v-for="member in teamData.supervisors"
						:key="member.name"
						class="w-full sm:w-[45%] lg:w-[30%] flex justify-center">
						<div class="w-full max-w-[18rem]">
							<TeamMemberCard v-bind="member" :is-supervisor="true" />
						</div>
					</div>
				</div>
			</section>

			<section id="team2026" class="scroll-mt-24 text-center">
				<div class="mb-12">
					<h2 class="text-3xl font-bold text-primary-dark">2026 Team</h2>
					<div class="h-1 w-24 bg-surface-dark rounded mx-auto mt-4"></div>
				</div>

				<div class="flex justify-center mb-16">
					<div class="w-full max-w-[18rem]">
						<TeamMemberCard
							v-for="member in teamData.team_leader"
							:key="member.name"
							v-bind="member"
						/>
					</div>
				</div>

				<div class="mb-16">
					<div class="mb-8">
						<h3 class="text-2xl font-bold text-primary tracking-widest">
							Technical Division
						</h3>
						<div class="h-px w-32 bg-gray-300 mx-auto mt-3"></div>
					</div>

					<div class="flex flex-wrap justify-center gap-12">
						<div
							v-for="member in teamData.technical_team"
							:key="member.name"
							class="w-full sm:w-[45%] lg:w-[30%] flex justify-center">
							<div class="w-full max-w-[18rem]">
								<TeamMemberCard v-bind="member" />
							</div>
						</div>
					</div>
				</div>

				<div>
					<div class="mb-8">
						<h3 class="text-2xl font-bold text-primary tracking-widest">
							Non-Technical Division
						</h3>
						<div class="h-px w-32 bg-gray-300 mx-auto mt-3"></div>
					</div>

					<div class="flex flex-wrap justify-center gap-12">
						<div
							v-for="member in teamData.non_technical_team"
							:key="member.name"
							class="w-full sm:w-[45%] lg:w-[30%] flex justify-center">
							<div class="w-full max-w-[18rem]">
								<TeamMemberCard v-bind="member" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>

		<section
			id="past-teams"
			aria-labelledby="past-teams-heading"
			class="py-16 bg-gray-50 border-t border-gray-200 scroll-mt-24"
		>
			<div class="container mx-auto max-w-6xl px-4">
				<div class="mb-12 text-center">
					<h2 id="past-teams-heading" class="text-3xl font-bold text-primary-dark">Past Teams</h2>
					<div class="h-1 w-24 bg-surface-dark rounded mx-auto mt-4"></div>
					<p class="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-600">
						Explore our journey, one season at a time. Discover the vessels, people, and achievements behind each year.
					</p>
				</div>

				<div class="relative">
					<div aria-hidden="true" class="absolute bottom-0 left-4 top-0 w-px bg-surface-dark md:left-1/2 md:-translate-x-1/2"></div>
					<ol class="relative space-y-10 md:space-y-12">
						<li
							v-for="(season, index) in legacySeasons"
							:key="season.year"
							class="relative min-w-0 pl-12 md:grid md:grid-cols-2 md:gap-20 md:pl-0"
						>
							<span aria-hidden="true" class="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-gray-50 bg-secondary md:hidden"></span>
							<time :datetime="season.year" class="relative z-10 mb-3 inline-block rounded-full border border-surface-dark bg-surface px-3 py-1 text-sm font-extrabold text-primary-dark md:absolute md:left-1/2 md:top-6 md:mb-0 md:-translate-x-1/2">
								{{ season.year }}
							</time>
							<article
								class="group min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg focus-within:shadow-lg motion-reduce:transition-none"
								:class="index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'"
								:aria-labelledby="`legacy-${season.year}-heading`"
							>
								<LegacyBoatImage v-if="season.image" :src="season.image" :alt="season.imageAlt" :width="season.imageWidth" :height="season.imageHeight" />
								<div class="p-5 sm:p-6">
									<p class="text-xs font-bold uppercase tracking-widest text-primary">RoboBoat {{ season.year }}</p>
									<h3 :id="`legacy-${season.year}-heading`" class="mt-2 break-words text-2xl font-bold text-primary-dark">{{ season.name }}</h3>
									<p v-if="season.highlight" class="mt-4 flex items-start gap-2 text-sm font-semibold text-primary">
										<Icon name="uil:award" aria-hidden="true" class="mt-0.5 shrink-0" />
										<span>{{ season.highlight }}</span>
									</p>
									<NuxtLink :to="`/legacy/${season.year}`" class="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none">
										Explore {{ season.year }} Journey <Icon name="uil:arrow-right" aria-hidden="true" />
									</NuxtLink>
								</div>
							</article>
						</li>
					</ol>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import teamData from "../../assets/data/team.json";
import achievements from "../../assets/data/achievements.json";
import legacyData from "../../assets/data/legacy.json";

const legacySeasons = [...legacyData]
	.sort((a, b) => Number(b.year) - Number(a.year))
	.map((season) => ({
		year: season.year,
		name: season.boat.name,
		image: season.boat.image || season.team.image,
		imageWidth: season.boat.image ? season.boat.image_width : season.team.image_width,
		imageHeight: season.boat.image ? season.boat.image_height : season.team.image_height,
		imageAlt: season.boat.image
			? `${season.boat.name}, our ${season.year} vessel`
			: `${season.team.name} group photo`,
		highlight: season.achievements.highlight || season.achievements.equal_highlights[0] || null,
	}));
</script>
