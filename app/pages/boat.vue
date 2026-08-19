<template>
	<div>
		<section
			class="relative h-[90vh] flex items-end justify-start overflow-hidden bg-primary-dark"
		>
			<div class="absolute inset-0 z-0">
				<img
					src="/images/mandakini/render-baru-raiden3.webp"
					alt="Mandakini Raiden"
					class="w-full h-full object-cover opacity-80"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"
				></div>
				<div
					class="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-transparent to-transparent"
				></div>
			</div>

			<div class="container mx-auto px-4 relative z-10 pb-20">
				<div class="max-w-3xl animate-fade-in-up">
					<span
						class="inline-block px-3 py-1 border border-secondary text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-4 rounded-full backdrop-blur-md"
					>
						Autonomous Surface Vehicle
					</span>
					<h1
						class="text-5xl md:text-8xl font-extrabold text-white mb-4 leading-tight"
					>
						MANDAKINI
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white"
							>RAIDEN</span
						>
					</h1>
					<p
						class="text-xl text-gray-300 max-w-xl leading-relaxed border-l-4 border-secondary pl-6"
					>
						An autonomous surface vehicle designed to respond quickly and operate reliably
						in challenging maritime conditions.
					</p>
				</div>
			</div>
		</section>

		<section class="py-20 bg-surface">
			<div
				class="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center"
			>
				<div class="md:w-1/2">
					<h2 class="text-3xl font-bold text-primary-dark mb-6">
						About Mandakini Raiden
					</h2>
					<div class="prose text-gray-600 leading-relaxed text-lg text-justify">
						<p>
							<strong>Mandakini Raiden</strong> is named after Raiden, the god of thunder, symbolizing speed, strength, and rapid response. 
							Developed for the <strong>Storm Response</strong> theme of <strong>Roboboat 2026</strong>, this autonomous surface vehicle is designed to operate 
							reliably in challenging maritime conditions where timely and accurate decision-making is critical.
						</p>
						<p>
							Built with optimized hull design, advanced manufacturing processes, enhanced perception and navigation systems, and high-precision RTK–GPS integration, 
							Mandakini Raiden represents our latest development in autonomous maritime technology.
						</p>
					</div>
				</div>
				<div class="md:w-1/2 grid grid-cols-2 gap-4">
					<div class="h-48 bg-gray-300 rounded-lg overflow-hidden">
						<img
							src="/images/mandakini/about-raiden1.webp"
							class="w-full h-full object-cover"
						/>
					</div>
					<div class="h-48 bg-gray-300 rounded-lg overflow-hidden mt-8">
						<img
							src="/images/mandakini/about-raiden2.webp"
							class="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>

		<section
			class="py-20 bg-white border-y border-gray-100 relative overflow-hidden"
		>
			<div class="container mx-auto px-4 text-center mb-10">
				<h2 class="text-3xl font-bold text-primary-dark">System Breakdown</h2>
				<p class="text-gray-500 flex items-center justify-center gap-2 mt-2">
					<Icon name="uil:mouse-alt" class="animate-bounce" /> Click hotspots to
					explore
				</p>
			</div>

			<div
				class="relative w-full max-w-5xl mx-auto bg-surface-dim rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
			>
				<img
					src="/images/mandakini/raiden-button.webp"
					alt="Mandakini Raiden"
					class="w-full h-auto object-cover opacity-90"
				/>

				<button
					@click="activeSpec = 'perception'"
					class="absolute top-[25%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 group"
				>
					<span class="relative flex h-8 w-8 md:h-12 md:w-12">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-secondary border-4 border-white items-center justify-center text-white text-lg md:text-2xl shadow-lg"
						>
							<Icon name="uil:camera" />
						</span>
					</span>
				</button>
				<button
					@click="activeSpec = 'navigation'"
					class="absolute top-[35%] left-[42%] transform -translate-x-1/2 -translate-y-1/2 group"
				>
					<span class="relative flex h-8 w-8 md:h-12 md:w-12">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-secondary border-4 border-white items-center justify-center text-white text-lg md:text-2xl shadow-lg"
						>
							<Icon name="uil:processor" />
						</span>
					</span>
				</button>
				<button
					@click="activeSpec = 'hull'"
					class="absolute top-[75%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 group"
				>
					<span class="relative flex h-8 w-8 md:h-12 md:w-12">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-secondary border-4 border-white items-center justify-center text-white text-lg md:text-2xl shadow-lg"
						>
							<Icon name="uil:ship" />
						</span>
					</span>
				</button>
				<button
					@click="activeSpec = 'frame'"
					class="absolute top-[65%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 group"
				>
					<span class="relative flex h-8 w-8 md:h-12 md:w-12">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-secondary border-4 border-white items-center justify-center text-white text-lg md:text-2xl shadow-lg"
						>
							<Icon name="uil:layer-group" />
						</span>
					</span>
				</button>
				<button
					@click="activeSpec = 'propulsion'"
					class="absolute top-[70%] left-[28%] transform -translate-x-1/2 -translate-y-1/2 group"
				>
					<span class="relative flex h-8 w-8 md:h-12 md:w-12">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-secondary border-4 border-white items-center justify-center text-white text-lg md:text-2xl shadow-lg"
						>
							<Icon name="uil:bolt" />
						</span>
					</span>
				</button>

				<Transition name="slide-up">
					<div
						v-if="activeSpec"
						class="absolute bottom-0 left-0 right-0 bg-white/60 backdrop-blur-sm border-t-4 border-secondary p-6 md:p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-20"
					>
						<div class="md:flex md:justify-between md:items-start">
							<div class="flex-1">
								<h3 class="text-2xl font-bold text-primary-dark mb-2">
									{{ specs[activeSpec].title }}
								</h3>
								<p class="text-gray-800 mb-4 max-w-2xl md:text-base">
									{{ specs[activeSpec].desc }}
								</p>
								<div class="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-0">
									<span
										v-for="tag in specs[activeSpec].tags"
										:key="tag"
										class="px-3 py-1 bg-surface text-primary-dark text-[10px] md:text-xs font-bold rounded-full border border-surface-dark"
										>{{ tag }}</span
									>
								</div>
							</div>
							

							<button
								@click="activeSpec = null"
								class="hidden md:block text-gray-900 hover:text-red-500 transition text-2xl ml-4 flex-shrink-0"
							>
								<Icon name="uil:times-circle" />
							</button>
						</div>

						<button
							@click="activeSpec = null"
							class="md:hidden w-full flex items-center justify-center gap-2 mt-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-lg transition-all active:scale-95"
						>
							<Icon name="uil:times" class="text-xl" />
							<span>Close</span>
						</button>
					</div>
				</Transition>

			</div>
		</section>

		<section class="py-20 bg-primary-dark text-surface">
			<div class="container mx-auto px-4">
				<h2 class="text-3xl font-bold mb-12 text-center">
					Technical Specifications
				</h2>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:ruler" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Dimensions</h3>
						<p class="text-gray-300 text-sm">119 cm x 78 cm x 103 cm</p>
					</div>

					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:weight" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Weight</h3>
						<p class="text-gray-300 text-sm">23 kg / 50.7 lbs</p>
					</div>

					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:tachometer-fast" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Max Speed</h3>
						<p class="text-gray-300 text-sm">4.4 knots</p>
					</div>

					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:rocket" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Thrust Power</h3>
						<p class="text-gray-300 text-sm">6.55 kgf</p>
					</div>

					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:layer-group" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Hull Material</h3>
						<p class="text-gray-300 text-sm">
							PETG filament and fiber glass composite
						</p>
					</div>

					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:battery-bolt" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Power System</h3>
						<p class="text-gray-300 text-sm">
							3x Li-Po Batteries (Main, Jetson, Thruster)
						</p>
					</div>

					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:processor" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Onboard Computer</h3>
						<p class="text-gray-300 text-sm">NVIDIA Jetson Nano</p>
					</div>

					<div
						class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 flex flex-col items-center text-center group"
					>
						<div
							class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-2xl group-hover:scale-110 transition-transform"
						>
							<Icon name="uil:rss" />
						</div>
						<h3 class="text-lg font-bold text-white mb-1">Sensors</h3>
						<p class="text-gray-300 text-sm">Webcam, 2D LiDar, GPS, IMU</p>
					</div>
				</div>
			</div>
		</section>

		<section class="pt-20 pb-8 bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white relative overflow-hidden scroll-mt-32">
			<div class="absolute inset-0 opacity-10">
				<div class="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
				<div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
			</div>

			<div class="container mx-auto px-4 relative z-10">
				<div class="text-center mb-16">
					<span class="inline-block px-4 py-2 bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-secondary/30">
						Evolution & Innovation
					</span>
					<h2 class="text-4xl md:text-5xl font-bold mb-4">
						Major Improvements from 
						<span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">2025</span>
					</h2>
					<p class="text-gray-300 max-w-2xl mx-auto">
						From lessons learned to performance gained, explore our 2026 advancements.
					</p>
				</div>

				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					<button
						v-for="(improvement, key) in improvements"
						:key="key"
						@click="selectedImprovement = selectedImprovement === key ? null : key"
						class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-left overflow-hidden"
						:class="selectedImprovement === key ? 'ring-2 ring-secondary shadow-2xl shadow-secondary/20' : ''"
					>
						<div class="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
						
						<div class="relative">
							<div class="flex items-start justify-between mb-4">
								<div class="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary text-2xl group-hover:scale-110 transition-transform">
									<Icon :name="improvement.icon" />
								</div>
							</div>
							
							<h3 class="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
								{{ improvement.title }}
							</h3>

							<p class="text-sm text-gray-400">
								{{ improvement.shortDesc }}
							</p>

							<div class="flex items-center gap-2 mt-4 text-xs text-secondary font-bold">
								<span>Click for details</span>
								<Icon name="uil:angle-right" class="transition-transform" :class="selectedImprovement === key ? 'rotate-90' : ''" />
							</div>
						</div>
					</button>
				</div>

				<Transition name="slide-down">
					<div v-if="selectedImprovement" ref="detailPanel" class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-2xl">
						<div class="flex justify-between items-start mb-6">
							<div>
								<h3 class="text-2xl font-bold text-white mb-2">
									{{ improvements[selectedImprovement].title }}
								</h3>
								<p class="text-gray-300">
									{{ improvements[selectedImprovement].subtitle }}
								</p>
							</div>
							<button
								@click="selectedImprovement = null"
								class="text-white/60 hover:text-white transition text-3xl flex-shrink-0"
							>
								<Icon name="uil:times-circle" />
							</button>
						</div>

						<div class="grid md:grid-cols-3 gap-6">
							<div class="bg-white/5 rounded-xl p-6 border border-white/10">
								<div class="flex items-center gap-3 mb-4">
									<div class="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400">
										<Icon name="uil:arrow-down" class="text-xl" />
									</div>
									<div>
										<h4 class="font-bold text-white">Previous (2025)</h4>
										<p class="text-xs text-gray-400">{{ improvements[selectedImprovement].before.name }}</p>
									</div>
								</div>
								<ul class="space-y-3">
									<li
										v-for="spec in improvements[selectedImprovement].before.specs"
										:key="spec"
										class="flex items-start gap-3 text-sm text-gray-300"
									>
										<Icon name="uil:minus" class="text-red-400 mt-1 flex-shrink-0" />
										<span>{{ spec }}</span>
									</li>
								</ul>
							</div>

							<div class="bg-white/5 rounded-xl p-6 border border-secondary/30">
								<div class="flex items-center gap-3 mb-4">
									<div class="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
										<Icon name="uil:arrow-up" class="text-xl" />
									</div>
									<div>
										<h4 class="font-bold text-white">Current (2026)</h4>
										<p class="text-xs text-secondary">{{ improvements[selectedImprovement].after.name }}</p>
									</div>
								</div>
								<ul class="space-y-3">
									<li
										v-for="spec in improvements[selectedImprovement].after.specs"
										:key="spec"
										class="flex items-start gap-3 text-sm text-gray-300"
									>
										<Icon name="uil:check" class="text-green-400 mt-1 flex-shrink-0" />
										<span>{{ spec }}</span>
									</li>
								</ul>
							</div>

							<div class="rounded-xl overflow-hidden shadow-lg border border-secondary/30 h-full">
								<img
									:src="improvements[selectedImprovement].image || '/images/mandakini/raiden-blue2.webp'"
									:alt="improvements[selectedImprovement].title + ' 2026'"
									class="w-full h-full object-cover"
								/>
								<div class="bg-white/5 p-3 text-center border-t border-secondary/30">
									<p class="text-xs text-secondary font-bold uppercase tracking-wide">
										{{ improvements[selectedImprovement].title }} - 2026
									</p>
								</div>
							</div>
						</div>
					</div>
				</Transition>
			</div>
		</section>

		<section class="py-20 bg-surface border-t border-gray-200">
			<div class="container mx-auto px-4">
				<div class="grid md:grid-cols-2 gap-12 items-center">
					<div class="relative order-2 md:order-1">
						<div class="relative rounded-2xl shadow-2xl overflow-hidden aspect-[4/3]">
							<img
								src="/images/timeline/angkat-raiden.webp"
								alt="Research and Development"
								class="w-full h-full object-cover"
							/>
						</div>
						<div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-10">
							<p class="text-xs text-gray-500 uppercase font-bold">Development Cycle</p>
							<p class="text-2xl font-black text-primary">5 Months</p>
						</div>
					</div>

					<div class="order-1 md:order-2">
						<span class="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full mb-4">
							Deep Dive
						</span>
						<h2 class="text-4xl font-bold text-primary-dark mb-6">
							Behind the Innovation
						</h2>
						<p class="text-gray-600 leading-relaxed mb-8">
							Each component of Mandakini Raiden is shaped through rigorous research, 
							hands-on experiments, and iterative development. This section documents 
							the processes, testing, and engineering decisions behind the systems 
							implemented in our autonomous surface vehicle.
						</p>
						<NuxtLink
							to="/logbook-experiments"
							class="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white
								font-bold rounded-xl hover:bg-primary-dark transition-all
								shadow-lg hover:shadow-xl hover:-translate-y-1"
						>
							View Logbook & Experiments
							<Icon name="uil:arrow-right" />
						</NuxtLink>
					</div>
				</div>
			</div>
		</section>

		<section class="py-20 bg-white">
			<div class="container mx-auto px-4 max-w-4xl">
				<h2 class="text-3xl font-bold text-primary-dark mb-12 text-center">
					Development Timeline
				</h2>

				<div
					class="relative border-l-4 border-gray-200 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12"
				>
					<div
						v-for="(phase, index) in timeline"
						:key="index"
						class="relative group"
					>
						<div
							class="absolute -left-[46px] md:-left-[62px] top-6 w-10 h-10 bg-secondary text-white rounded-full border-4 border-white shadow-md flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform z-10"
						>
							{{ index + 1 }}
						</div>

						<div
							class="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative"
						>
							<div class="md:flex">
								<div class="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
									<div
										v-for="(img, imgIndex) in phase.images"
										:key="imgIndex"
										class="absolute inset-0 transition-opacity duration-1000"
										:class="currentImageIndex[index] === imgIndex ? 'opacity-100' : 'opacity-0'"
									>
										<img
											:src="img"
											:alt="phase.title"
											class="w-full h-full object-cover"
										/>
									</div>
									<div
										class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-gradient-to-t md:from-black/50 md:to-transparent opacity-60"
									></div>
								</div>

								<div class="p-6 md:w-2/3 flex flex-col justify-center relative">
									<div
										class="hidden md:block absolute top-8 -left-2 w-4 h-4 bg-white transform rotate-45 border-l border-b border-gray-100 z-10"
									></div>
									<span
										class="text-xs font-bold text-secondary uppercase tracking-widest block mb-2"
										>{{ phase.date }}</span
									>
									<h3 class="text-xl font-bold text-primary-dark mb-3">
										{{ phase.title }}
									</h3>
									<p class="text-gray-600 leading-relaxed">
										{{ phase.desc }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="py-20 bg-gray-50 border-t border-gray-200">
			<div class="container mx-auto px-4">
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold text-primary-dark">
						Our Fleet History
					</h2>
					<p class="text-gray-600">
						The legacy of innovation from previous years.
					</p>
				</div>
				<div class="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
					<div
						v-for="boat in pastBoats"
						:key="boat.year"
						class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
					>
						<div class="aspect-square overflow-hidden relative">
							<img
								:src="boat.image"
								:alt="boat.name"
								class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"
							></div>
							<div class="absolute bottom-4 left-4 text-white">
								<span
									class="text-xs font-bold bg-secondary px-2 py-1 rounded mb-1 inline-block"
									>{{ boat.year }}</span
								>
								<h3 class="font-bold text-lg leading-tight">{{ boat.name }}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from "vue";
import pastBoats from "../../assets/data/past_boats.json";
import improvementsData from "../../assets/data/improvements.json";

const activeSpec = ref<string | null>(null);
const selectedImprovement = ref<string | null>(null);
const detailPanel = ref<HTMLElement | null>(null);

const currentImageIndex = ref<number[]>([]);

watch(
	selectedImprovement,
	async (newValue) => {
		if (!newValue || !detailPanel.value) return;

		await nextTick();

		requestAnimationFrame(() => {
			const elementTop =
				detailPanel.value!.getBoundingClientRect().top +
				window.scrollY;

			const offset = 120; // atur jarak dari atas (px)

			window.scrollTo({
				top: elementTop - offset,
				behavior: "smooth",
			});
		});
	},
	{ flush: "post" }
);

// Data Hotspot
const specs: Record<string, any> = {
	perception: {
		title: "Perception System",
		desc: "Utilizes a Logitech C922 Pro webcam combined with YOLOv4-Tiny optimized with TensorRT for real-time object detection and environmental perception.",
		tags: ["Logitech C922 Pro", "YOLOv4-Tiny", "TensorRT"],
	},
	navigation: {
		title: "Navigation & Autonomy",
		desc: "Powered by an NVIDIA Jetson Nano running ROS, integrating camera and 2D LiDAR sensor fusion with GPS and IMU to enable autonomous navigation and path planning.",
		tags: ["Jetson Nano", "ROS", "Sensor Fusion", "GPS", "IMU"],
	},
	hull: {
		title: "Hull & Structural Design",
		desc: "Built with a flat-bottom catamaran hull design made from fiberglass composite, providing stability, buoyancy, and durability for autonomous operations.",
		tags: ["Catamaran", "Flat-Bottom", "Fiberglass Composite"],
	},
	frame: {
		title: "Modularity Frame System",
		desc: "Features a lightweight, modular frame structure designed for fast assembly, easy component swapping, and simplified maintenance during development cycles.",
		tags: ["Lightweight", "Modular", "Rapid Assembly"],
	},
	propulsion: {
		title: "Propulsion System",
		desc: "Equipped with a pair of Blue Robotics T200 thrusters delivering reliable thrust and precise maneuverability for autonomous missions.",
		tags: ["Blue Robotics T200", "Precise Maneuverability"],
	},
};

const improvements: Record<string, any> = improvementsData;

const timeline = [
	{
		date: "September 2025",
		title: "Research & Innovation Planning",
		desc: "Conducting technology research, evaluating previous performance, and defining innovations for the upcoming competition.",
		images: [
			"/images/timeline/planning1.webp",
			"/images/timeline/planning2.webp"
		],
	},
	{
		date: "October 2025",
		title: "Design & System Architecture",
		desc: "Designing the hull, analyzing stability, and developing the modular frame and overall system architecture.",
		images: [
			"/images/timeline/hull-design.webp",
			"/images/timeline/frame-design.webp"
		],
	},
	{
		date: "November 2025",
		title: "Manufacturing, Assembly, Component & Vision Testing",
		desc: "Executing hull and frame manufacturing followed by electrical assembly and integration of major components.",
		images: [
			"/images/timeline/assembly3.webp",
			"/images/timeline/manufacture.webp"
		],
	},
	{
		date: "Desember 2025",
		title: "Off-water & On-water Testing",
		desc: "Performing off-water and on-water tests, configuring software and sensor-actuator systems, conducting TDR, and developing team website content.",
		images: [
			"/images/timeline/vision-test2.webp",
			"/images/mandakini/raiden-on-water.webp"
		],
	},
	{
		date: "Januari 2026",
		title: "Final Validation & Full Mission Testing",
		desc: "Conducting full mission trials and final water testing before competition.",
		images: [
			"/images/timeline/full-misi.webp",
			"/images/mandakini/code-on-water.webp"
		],
	},
];

let intervalIds: number[] = [];

onMounted(() => {
	currentImageIndex.value = timeline.map(() => 0);

	timeline.forEach((phase, phaseIndex) => {
		const intervalId = setInterval(() => {
			const newIndices = [...currentImageIndex.value];
			const current = newIndices[phaseIndex] ?? 0;

			newIndices[phaseIndex] = (current + 1) % phase.images.length;
			currentImageIndex.value = newIndices;
		}, 4000);

		intervalIds.push(intervalId);
	});
});

onUnmounted(() => {
	intervalIds.forEach(id => clearInterval(id));
});
</script>

<style scoped>
.animate-fade-in-up {
	animation: fadeInUp 0.8s ease-out;
}
@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.slide-up-enter-active,
.slide-up-leave-active {
	transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
	transform: translateY(100%);
	opacity: 0;
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