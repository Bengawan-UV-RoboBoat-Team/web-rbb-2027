<template>
	<div>
		<section class="bg-surface-dim py-20 text-center">
			<div class="container mx-auto px-4">
				<span
					class="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block"
					>Media Coverage</span
				>
				<h1 class="text-4xl font-bold text-primary mb-4">
					Bengawan UV in News
				</h1>
				<p class="text-lg text-gray-600 max-w-2xl mx-auto">
					Stories and coverages about our team from various media.
				</p>
			</div>
		</section>

		<section class="py-16 container mx-auto px-4 min-h-screen">
			<div v-if="newsData.length > 0" class="grid md:grid-cols-3 gap-8">
				<a
					v-for="(item, index) in newsData"
					:key="index"
					:href="item.link"
					target="_blank"
					class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full hover:-translate-y-1"
				>
					<div class="aspect-video overflow-hidden bg-gray-200 relative">
						<img
							:src="item.image"
							:alt="item.title"
							class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
						/>
						<div
							class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
						>
							<div
								class="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white border border-white/50"
							>
								<Icon name="uil:external-link-alt" class="text-2xl" />
							</div>
						</div>
					</div>

					<div class="p-6 flex flex-col flex-grow">
						<div
							class="flex items-center justify-between text-xs text-gray-500 mb-3"
						>
							<div class="flex items-center gap-2">
								<Icon name="uil:newspaper" class="text-secondary" />
								<span
									class="font-bold uppercase tracking-wider text-gray-700"
									>{{ item.media }}</span
								>
							</div>
							<span>{{ item.date }}</span>
						</div>

						<h2
							class="text-lg font-bold text-primary-dark mb-3 line-clamp-3 group-hover:text-primary transition-colors leading-snug"
						>
							{{ item.title }}
						</h2>

						<div
							class="mt-auto pt-4 flex items-center text-sm font-bold text-gray-400 group-hover:text-primary transition-colors"
						>
							Read Article
							<Icon
								name="uil:arrow-right"
								class="ml-1 transition-transform group-hover:translate-x-1"
							/>
						</div>
					</div>
				</a>
			</div>

			<div v-else class="text-center py-20 text-gray-500">
				<Icon name="uil:newspaper" class="text-6xl mb-4 opacity-50" />
				<p>No news items found.</p>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import newsData from "../../assets/data/news.json";
</script>
