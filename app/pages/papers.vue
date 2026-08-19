<template>
	<div class="bg-white min-h-screen">
		<section
			class="bg-primary-dark text-surface py-20 text-center relative overflow-hidden"
		>
			<div
				class="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"
			></div>

			<div class="container mx-auto px-4 relative z-10">
				<h1 class="text-4xl font-bold mb-4">Papers</h1>
				<p class="text-lg text-gray-300 max-w-2xl mx-auto">
					A collection of published papers authored by our team members and alumni.
				</p>
			</div>
		</section>

		<section class="py-16 container mx-auto px-4 max-w-5xl min-h-screen">
			<!-- Year Filters -->
			<div class="flex flex-wrap justify-center gap-3 mb-12">
				<button
					v-for="filter in filters"
					:key="filter"
					@click="activeFilter = filter"
					class="px-6 py-2 rounded-full border transition font-bold text-sm uppercase tracking-wide"
					:class="
						activeFilter === filter
							? 'bg-secondary text-white border-secondary shadow-lg transform scale-105'
							: 'bg-white text-gray-500 border-gray-200 hover:border-secondary hover:text-secondary'
					"
				>
					{{ filter === "all" ? "All Papers" : filter }}
				</button>
			</div>

			<!-- All Papers Grouped by Year -->
			<div v-if="activeFilter === 'all'" class="space-y-16">
				<div v-for="group in groupedPapers" :key="group.year">
					<!-- Year Header -->
					<div class="flex items-center gap-4 mb-6">
						<h2 class="text-3xl font-bold text-primary-dark">
							{{ group.year }}
						</h2>
						<div class="h-px flex-grow bg-gray-200"></div>
						<span class="text-sm text-gray-400 font-semibold">
							{{ group.papers.length }} {{ group.papers.length === 1 ? 'paper' : 'papers' }}
						</span>
					</div>

					<!-- Papers List for This Year -->
					<div class="space-y-6">
						<div
							v-for="(paper, index) in group.papers"
							:key="index"
							@click="openPdf(paper.link)"
							class="group flex flex-col md:flex-row md:items-center justify-between bg-white border border-gray-200 p-6 rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all duration-300 gap-6 cursor-pointer"
						>
							<div class="flex items-start gap-4 flex-grow">
								<div
									class="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors"
								>
									<Icon name="uil:file-alt" />
								</div>

								<div class="flex-grow">
									<div class="flex items-center gap-2 text-xs mb-1">
										<span
											class="font-bold text-secondary uppercase tracking-widest"
											>{{ paper.publisher }}</span
										>
										<span class="text-gray-300">|</span>
										<span class="font-bold text-primary">{{ paper.year }}</span>
									</div>

									<h3
										class="text-xl md:text-2xl font-bold text-primary-dark group-hover:text-primary transition-colors leading-tight mb-2"
									>
										{{ paper.title }}
									</h3>

									<!-- Authors with Highlighting -->
									<p 
										v-if="paper.authors && paper.authors.length > 0" 
										class="text-sm text-gray-600 mb-1 leading-relaxed"
									>
										<span
											v-for="(author, idx) in paper.authors"
											:key="idx"
											:class="isHighlighted(author, paper.highlightAuthors) ? 'font-bold text-primary-dark' : ''"
										>
											{{ author }}<span v-if="idx < paper.authors.length - 1">, </span>
										</span>
									</p>

									<p class="text-sm text-gray-500 font-medium italic">
										{{ paper.publication }}
									</p>
								</div>
							</div>

							<div
								class="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface text-primary font-bold rounded-lg group-hover:bg-primary group-hover:text-white transition-colors text-sm whitespace-nowrap flex-shrink-0"
							>
								<Icon name="uil:file-download" class="text-lg" />
								Read Paper
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Filtered Papers by Year -->
			<div v-else>
				<div class="space-y-6">
					<div
						v-for="(paper, index) in filteredPapers"
						:key="index"
						@click="openPdf(paper.link)"
						class="group flex flex-col md:flex-row md:items-center justify-between bg-white border border-gray-200 p-6 rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all duration-300 gap-6 cursor-pointer"
					>
						<div class="flex items-start gap-4 flex-grow">
							<div
								class="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors"
							>
								<Icon name="uil:file-alt" />
							</div>

							<div class="flex-grow">
								<div class="flex items-center gap-2 text-xs mb-1">
									<span
										class="font-bold text-secondary uppercase tracking-widest"
										>{{ paper.publisher }}</span
									>
									<span class="text-gray-300">|</span>
									<span class="font-bold text-primary">{{ paper.year }}</span>
								</div>

								<h3
									class="text-xl md:text-2xl font-bold text-primary-dark group-hover:text-primary transition-colors leading-tight mb-2"
								>
									{{ paper.title }}
								</h3>

								<!-- Authors with Highlighting -->
								<p 
									v-if="paper.authors && paper.authors.length > 0" 
									class="text-sm text-gray-600 mb-1 leading-relaxed"
								>
									<span
										v-for="(author, idx) in paper.authors"
										:key="idx"
										:class="isHighlighted(author, paper.highlightAuthors) ? 'font-bold text-primary-dark' : ''"
									>
										{{ author }}<span v-if="idx < paper.authors.length - 1">, </span>
									</span>
								</p>

								<p class="text-sm text-gray-500 font-medium italic">
									{{ paper.publication }}
								</p>
							</div>
						</div>

						<div
							class="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface text-primary font-bold rounded-lg group-hover:bg-primary group-hover:text-white transition-colors text-sm whitespace-nowrap flex-shrink-0"
						>
							<Icon name="uil:file-download" class="text-lg" />
							Read Paper
						</div>
					</div>
				</div>

				<!-- Empty State -->
				<div
					v-if="filteredPapers.length === 0"
					class="text-center py-20 text-gray-400"
				>
					<Icon name="uil:file-slash" class="text-4xl mb-2" />
					<p>No papers found for this year.</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import papersData from "../../assets/data/papers.json";

const activeFilter = ref("all");

// --- DATA LOGIC ---

// 1. List of Unique Years
const filters = computed(() => {
	const years = new Set(papersData.map((paper) => paper.year));
	return ["all", ...Array.from(years).sort().reverse()];
});

// 2. Grouped Papers by Year (Array Structure to maintain order)
const groupedPapers = computed(() => {
	// Get unique years
	const years = Array.from(new Set(papersData.map((paper) => paper.year)));

	// Sort years Descending (Newest first)
	years.sort((a, b) => Number(b) - Number(a));

	// Map to Array of Objects
	return years.map((year) => {
		return {
			year: year,
			papers: papersData.filter((paper) => paper.year === year),
		};
	});
});

// 3. Filtered Papers (For specific year view)
const filteredPapers = computed(() => {
	if (activeFilter.value === "all") return papersData;
	return papersData.filter((paper) => paper.year === activeFilter.value);
});

// --- HELPER FUNCTIONS ---

// Check if author should be highlighted (bolded)
const isHighlighted = (author: string, highlightList?: string[]) => {
	if (!highlightList || highlightList.length === 0) return false;
	return highlightList.includes(author);
};

// Open PDF in new tab
const openPdf = (link: string) => {
	if (link) {
		window.open(link, "_blank");
	}
};
</script>