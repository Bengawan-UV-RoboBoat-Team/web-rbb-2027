<template>
	<div class="min-h-screen bg-surface pb-20">
		<section class="bg-primary-dark text-surface">
			<div class="container mx-auto max-w-6xl px-4 py-12 md:py-16">
				<NuxtLink to="/profile#past-teams" class="inline-flex items-center gap-2 text-sm font-semibold text-surface-dark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">
					<Icon name="uil:arrow-left" aria-hidden="true" /> Back to Past Teams
				</NuxtLink>
				<p class="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-secondary-light">Team Legacy · {{ entry.year }}</p>
				<h1 class="mt-3 text-4xl font-extrabold md:text-6xl">{{ entry.competition }}</h1>
				<p v-if="entry.location" class="mt-4 flex items-center gap-2 text-surface-dark">
					<Icon name="uil:location-point" aria-hidden="true" /> {{ entry.location }}
				</p>
				<p class="mt-6 max-w-2xl text-lg leading-relaxed text-surface-dark">Explore the vessel, people, and achievements behind our {{ entry.year }} journey.</p>
				<nav aria-label="Explore team by year" class="mt-8 flex flex-wrap gap-2">
					<NuxtLink v-for="season in seasons" :key="season.year" :to="`/legacy/${season.year}`" :aria-current="season.year === entry.year ? 'page' : undefined"
						class="rounded-full border px-4 py-2 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
						:class="season.year === entry.year ? 'border-secondary bg-secondary text-primary-dark' : 'border-white/30 text-surface hover:border-secondary hover:text-secondary-light'">
						{{ season.year }}
					</NuxtLink>
				</nav>
			</div>
		</section>

		<div class="container mx-auto max-w-6xl space-y-12 px-4 pt-10 md:space-y-16 md:pt-16">
			<section v-if="entry.theme" aria-labelledby="mission-heading" class="rounded-2xl border border-secondary/30 bg-white p-6 md:p-8">
				<p class="text-xs font-bold uppercase tracking-widest text-primary">Mission &amp; Theme</p>
				<h2 id="mission-heading" class="mt-2 text-2xl font-bold text-primary-dark">{{ entry.theme.title }}</h2>
				<p v-if="entry.theme.summary" class="mt-3 max-w-3xl leading-relaxed text-gray-600">{{ entry.theme.summary }}</p>
				<a v-if="entry.theme.source_url" :href="entry.theme.source_url" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
					Official RoboBoat theme <Icon name="uil:external-link-alt" aria-hidden="true" /><span class="sr-only">(opens in a new tab)</span>
				</a>
			</section>

			<section aria-labelledby="vessel-heading">
				<p class="text-xs font-bold uppercase tracking-widest text-primary">01 / The Vessel</p>
				<h2 id="vessel-heading" class="mt-2 text-3xl font-bold text-primary-dark">{{ entry.boat.name }}</h2>
				<LegacyBoatImage v-if="entry.boat.image" :src="entry.boat.image" :alt="`${entry.boat.name}, our ${entry.year} vessel`" :width="entry.boat.image_width" :height="entry.boat.image_height" loading="eager" class="mx-auto mt-6 max-w-4xl rounded-2xl border border-surface-dark" />
				<p v-if="entry.boat.summary" class="mt-6 leading-relaxed text-gray-600">{{ entry.boat.summary }}</p>
			</section>

			<section aria-labelledby="crew-heading">
				<p class="text-xs font-bold uppercase tracking-widest text-primary">02 / The Crew</p>
				<h2 id="crew-heading" class="mt-2 text-3xl font-bold text-primary-dark">{{ entry.team.name }}</h2>
				<div v-if="entry.team.image" class="relative mx-auto mt-6 aspect-[3/2] w-full max-w-4xl overflow-hidden rounded-2xl border border-surface-dark bg-surface-dim">
					<img :src="entry.team.image" :alt="`${entry.team.name} group photo`" :width="entry.team.image_width" :height="entry.team.image_height" loading="lazy" class="absolute inset-0 block h-full w-full object-contain" />
				</div>
				<p v-if="entry.team.description" class="mt-6 max-w-3xl leading-relaxed text-gray-600">{{ entry.team.description }}</p>
				<div v-for="group in rosterGroups" :key="group.key" class="mt-8">
					<h3 class="text-xl font-bold text-primary-dark">{{ group.label }}</h3>
					<ul class="mt-4 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<li v-for="member in group.members" :key="member.name" class="flex h-full min-w-0 items-start gap-4 rounded-xl border border-surface-dark bg-white p-4">
							<div v-if="member.image" class="relative aspect-[3/4] w-24 shrink-0 overflow-hidden rounded-lg" :class="'image_fit' in member && member.image_fit === 'contain' ? 'bg-[#16445a]' : 'bg-surface-dim'">
								<img :src="member.image" :alt="member.name" :width="member.image_width" :height="member.image_height" loading="lazy" class="absolute inset-0 block h-full w-full" :class="'image_fit' in member && member.image_fit === 'contain' ? 'object-contain' : 'object-cover object-top'" />
							</div>
							<div class="min-w-0 flex-1 break-words">
								<p class="font-bold text-primary-dark">{{ member.name }}</p>
								<p class="mt-1 text-sm font-semibold text-primary">{{ member.role }}</p>
								<p v-if="member.major" class="mt-1 text-sm text-gray-500">{{ member.major }}<span v-if="'cohort' in member && member.cohort"> · Intake {{ member.cohort }}</span></p>
								<p v-if="'research_area' in member && member.research_area" class="mt-2 text-sm text-gray-600">{{ member.research_area }}</p>
								<p v-if="'specific_role' in member && member.specific_role" class="mt-2 text-sm text-gray-600">{{ member.specific_role }}</p>
							</div>
						</li>
					</ul>
				</div>
				<p v-if="!entry.team.image && !entry.team.description && !rosterGroups.length" class="mt-6 text-gray-500">Team details for this season are not yet available.</p>
			</section>

			<section aria-labelledby="achievements-heading">
				<p class="text-xs font-bold uppercase tracking-widest text-primary">03 / Achievements</p>
				<h2 id="achievements-heading" class="mt-2 text-3xl font-bold text-primary-dark">Season highlights</h2>
				<div class="mt-6 rounded-2xl border border-secondary/30 bg-white p-6 md:p-8">
					<p v-if="entry.achievements.highlight" class="text-2xl font-bold text-primary">{{ entry.achievements.highlight }}</p>
					<ul v-if="entry.achievements.equal_highlights.length" class="space-y-4">
						<li v-for="award in entry.achievements.equal_highlights" :key="award" class="text-xl font-bold text-primary">{{ award }}</li>
					</ul>
					<p v-if="entry.achievements.sub_highlight" class="mt-3 text-lg font-semibold text-primary-dark">{{ entry.achievements.sub_highlight }}</p>
					<ul v-if="entry.achievements.details.length" class="mt-5 list-disc space-y-2 pl-5 text-gray-600">
						<li v-for="award in entry.achievements.details" :key="award">{{ award }}</li>
					</ul>
					<p v-if="!hasAchievements" class="text-gray-500">Achievements for this season are not yet available.</p>
				</div>
			</section>

			<section aria-labelledby="documents-heading">
				<p class="text-xs font-bold uppercase tracking-widest text-primary">04 / Technical Documents &amp; Video</p>
				<h2 id="documents-heading" class="mt-2 text-3xl font-bold text-primary-dark">Behind the journey</h2>
				<div class="mt-6 rounded-2xl border border-surface-dark bg-white p-6 md:p-8">
					<h3 class="text-xl font-bold text-primary-dark">Technical Design Report</h3>
					<p class="mt-2 text-gray-600">Explore the engineering and design behind {{ entry.boat.name }}.</p>
					<div v-if="entry.documents.tdr_link" class="mt-5 flex flex-wrap gap-3">
						<a :href="entry.documents.tdr_link" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
							<Icon name="uil:file-alt" aria-hidden="true" /> Read TDR <span class="sr-only">(opens in a new tab)</span>
						</a>
						<a v-if="localTdr" :href="entry.documents.tdr_link" :download="entry.documents.tdr_filename || undefined" class="inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-3 text-sm font-bold text-primary transition hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
							<Icon name="uil:file-download" aria-hidden="true" /> Download PDF
						</a>
					</div>
					<p v-else class="mt-4 text-gray-500">The report for this season is not yet available.</p>
				</div>
				<div v-if="entry.documents.video_link" class="mt-6">
					<h3 class="mb-4 text-xl font-bold text-primary-dark">Team introduction</h3>
					<iframe :src="entry.documents.video_link" :title="`${entry.team.name} introduction video`" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="aspect-video w-full rounded-2xl border-0 bg-black"></iframe>
				</div>
				<div v-for="video in supportingVideos" :key="video.url" class="mt-6">
					<h3 class="mb-4 text-xl font-bold text-primary-dark">{{ video.title }}</h3>
					<iframe :src="video.url" :title="`${entry.year} ${video.title}`" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="aspect-video w-full rounded-2xl border-0 bg-black"></iframe>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import legacyData from "../../../assets/data/legacy.json";

definePageMeta({
	key: (route) => route.path,
	validate: (route) => legacyData.some((season) => season.year === route.params.year),
});

const route = useRoute();
const seasons = [...legacyData].sort((a, b) => Number(b.year) - Number(a.year));
const entry = computed(() => {
	const season = seasons.find((item) => item.year === route.params.year);
	if (!season) {
		throw createError({ statusCode: 404, statusMessage: "Team legacy not found" });
	}
	return season;
});

const rosterLabels = {
	team_leader: "Team Leader",
	technical_team: "Technical Division",
	non_technical_team: "Non-Technical Division",
};
const rosterGroups = computed(() => {
	const roster = entry.value.team.roster;
	if (!roster) return [];
	return (Object.keys(rosterLabels) as Array<keyof typeof rosterLabels>)
		.map((key) => ({ key, label: rosterLabels[key], members: roster[key] }))
		.filter((group) => group.members.length > 0);
});
const hasAchievements = computed(() => {
	const awards = entry.value.achievements;
	return Boolean(awards.highlight || awards.sub_highlight || awards.equal_highlights.length || awards.details.length);
});
const localTdr = computed(() => entry.value.documents.tdr_link?.startsWith("/") && !entry.value.documents.tdr_link.startsWith("//"));
const supportingVideos = computed(() => "supporting_videos" in entry.value.documents ? entry.value.documents.supporting_videos : []);

useSeoMeta({
	title: () => `${entry.value.competition} — ${entry.value.boat.name} | Bengawan UV`,
	description: () => `Discover ${entry.value.boat.name}, the ${entry.value.year} Bengawan UV RoboBoat team, achievements, and technical design report.`,
	ogTitle: () => `${entry.value.competition} | Bengawan UV Team Legacy`,
	ogDescription: () => `Explore the vessel, crew, and achievements behind our ${entry.value.year} journey.`,
});
</script>
