<template>
	<section class="py-20 bg-white border-t border-surface-dark">
		<div class="container mx-auto px-4 text-center">
			<div class="mb-20">
				<h2
					class="text-2xl font-bold text-primary mb-12 uppercase tracking-widest flex items-center justify-center gap-4"
				>
					<span class="w-8 h-px bg-gray-300"></span>
					Sponsored By
					<span class="w-8 h-px bg-gray-300"></span>
				</h2>

				<!-- Dynamic Tiered Sponsors Display -->
				<div class="mb-12">
					<div class="flex flex-col items-center gap-8">
						<!-- Render sponsors by available tiers dynamically -->
						<template v-for="tier in getAvailableTiers()" :key="tier">
							<div :class="getTierContainerClass(tier)">
								<div :class="getTierLayoutClass(tier)">
									<a
										v-for="(sponsor, index) in getSponsorsbyTier(tier)"
										:key="index"
										:href="sponsor.link || '#'"
										:target="sponsor.link ? '_blank' : '_self'"
										:class="getTierCardClass(tier)"
									>
										<img
											:src="sponsor.logo"
											:alt="sponsor.name"
											class="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition"
										/>
									</a>
								</div>
							</div>
						</template>
					</div>

					<!-- Fallback: No tier specified -->
					<div v-if="!hasAnyTieredSponsors() && sponsorshipData.current_sponsors" class="flex justify-center">
						<div class="grid gap-8 place-items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
							<a
								v-for="(sponsor, index) in sponsorshipData.current_sponsors"
								:key="index"
								:href="sponsor.link || '#'"
								:target="sponsor.link ? '_blank' : '_self'"
								class="group"
							>
								<div class="h-28 md:h-32 bg-white border border-gray-100 rounded-xl flex items-center justify-center p-4 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20">
									<img
										:src="sponsor.logo"
										:alt="sponsor.name"
										class="block max-w-[220px] max-h-[90px] object-contain filter group-hover:brightness-110 transition"
									/>
								</div>
							</a>
						</div>
					</div>
				</div>

				<div class="relative group inline-block">
					<div
						class="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-full blur opacity-30 group-hover:opacity-70 transition duration-500"
					></div>
					<NuxtLink
						to="/sponsorships"
						class="relative px-8 py-4 bg-primary rounded-full flex items-center gap-3 text-white font-bold border border-gray-100 hover:bg-primary-light transition-colors"
					>
						<Icon name="uil:heart-sign" class="text-xl text-white" />
						<span>Become a Sponsor</span>
						<Icon
							name="uil:arrow-right"
							class="text-2xl text-white group-hover:translate-x-1 transition-transform"
						/>
					</NuxtLink>
				</div>
			</div>

			<div class="pt-16 border-t border-gray-100">
				<h3
					class="text-2xl font-bold text-primary-light mb-12 uppercase tracking-[0.2em]"
				>
					Supported By
				</h3>

				<div class="flex flex-wrap justify-center gap-12 items-center mb-12">
					<div class="group flex flex-col items-center gap-3 hover:opacity-80 transition-opacity">
						<div class="w-20 h-20 rounded-full flex items-center justify-center p-2">
							<img
								src="/images/logo/uns-logo.webp"
								alt="UNS Logo"
								class="w-full h-full object-contain"
							/>
						</div>
						<span class="font-bold text-gray-500 uppercase tracking-wide">
							Universitas Sebelas Maret
						</span>
					</div>
					
					<div class="group flex flex-col items-center gap-3 hover:opacity-80 transition-opacity">
						<div class="h-20 rounded-full flex items-center justify-center p-2">
							<img
								src="/images/logo/lppm-logo.webp"
								alt="LPPMP UNS Logo"
								class="w-full h-full object-contain"
							/>
						</div>
						<span class="font-bold text-gray-500 uppercase tracking-wide">
							LPPM UNS
						</span>
					</div>

					<div class="group flex flex-col items-center gap-3 hover:opacity-80 transition-opacity">
						<div class="h-20 rounded-full flex items-center justify-center p-2">
							<img
								src="/images/logo/pemkot-solo.webp"
								alt="Pemerintah Kota Solo Logo"
								class="w-full h-full object-contain"
							/>
						</div>
						<span class="font-bold text-gray-500 uppercase tracking-wide">
							Pemerintah Kota Solo
						</span>
					</div>
				</div>

				<div class="pt-8">
					<p class="text-secondary font-bold uppercase tracking-widest text-xs mb-8">
						Additional Support
					</p>
					<div class="flex flex-wrap justify-center gap-12 items-center">
						<div class="group flex flex-col items-center gap-3 hover:opacity-80 transition-opacity">
							<div class="h-20 rounded-full flex items-center justify-center p-2">
								<img
									src="/images/logo/ansys-logo.webp"
									alt="Ansys Logo"
									class="w-full h-full object-contain"
								/>
							</div>
							<span class="font-bold text-gray-500 uppercase tracking-wide">
								Ansys Student
							</span>
						</div>

						<div class="group flex flex-col items-center gap-3 hover:opacity-80 transition-opacity">
							<div class="h-20 rounded-full flex items-center justify-center p-2">
								<img
									src="/images/logo/maxsurf-logo.webp"
									alt="Maxsurf Logo"
									class="w-full h-full object-contain"
								/>
							</div>
							<span class="font-bold text-gray-500 uppercase tracking-wide">
								Maxsurf Student
							</span>
						</div>

						<div class="group flex flex-col items-center gap-3 hover:opacity-80 transition-opacity">
							<div class="h-20 rounded-full flex items-center justify-center p-2">
								<img
									src="/images/logo/fusion-logo.webp"
									alt="Fusion Logo"
									class="w-full h-full object-contain"
								/>
							</div>
							<span class="font-bold text-gray-500 uppercase tracking-wide">
								Fusion Student
							</span>
						</div>

						<div class="group flex flex-col items-center gap-3 hover:opacity-80 transition-opacity">
							<div class="h-20 rounded-full flex items-center justify-center p-2">
								<img
									src="/images/logo/easyeda-logo.webp"
									alt="Easyeda Logo"
									class="w-full h-full object-contain"
								/>
							</div>
							<span class="font-bold text-gray-500 uppercase tracking-wide">
								Easyeda
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import sponsorshipData from "../../../assets/data/sponsorships.json";

// Tier hierarchy from highest to lowest
const tierHierarchy = ['Main Sponsor', 'Platinum', 'Gold', 'Silver', 'Bronze'];

// Tier styling configurations
const tierConfig: Record<string, any> = {
	'Main Sponsor': {
		size: 'w-56 h-56 md:w-64 md:h-64',
		border: 'border-2 border-yellow-600',
		shadow: 'shadow-xl hover:shadow-2xl',
		padding: 'p-6',
		rounded: 'rounded-2xl'
	},
	'Platinum': {
		size: 'w-48 h-48 md:w-52 md:h-52',
		border: 'border-2 border-slate-600',
		shadow: 'shadow-lg hover:shadow-xl',
		padding: 'p-5',
		rounded: 'rounded-2xl'
	},
	'Gold': {
		size: 'w-40 h-40',
		border: 'border border-yellow-400',
		shadow: 'shadow-md hover:shadow-lg',
		padding: 'p-4',
		rounded: 'rounded-xl'
	},
	'Silver': {
		size: 'w-36 h-36',
		border: 'border border-gray-300',
		shadow: 'shadow-md hover:shadow-lg',
		padding: 'p-4',
		rounded: 'rounded-xl'
	},
	'Bronze': {
		size: 'w-32 h-32',
		border: 'border border-orange-300',
		shadow: 'shadow-sm hover:shadow-md',
		padding: 'p-3',
		rounded: 'rounded-xl'
	}
};

// Function to get sponsors by tier
const getSponsorsbyTier = (tier: string) => {
	if (!sponsorshipData?.current_sponsors) return [];
	return sponsorshipData.current_sponsors.filter(
		(sponsor: any) => sponsor?.tier === tier
	);
};

// Get available tiers sorted by hierarchy
const getAvailableTiers = () => {
	if (!sponsorshipData?.current_sponsors) return [];
	
	return tierHierarchy.filter(tier => {
		const sponsors = getSponsorsbyTier(tier);
		return sponsors.length > 0;
	});
};

// Get tier card classes dynamically
const getTierCardClass = (tier: string) => {
	const config = tierConfig[tier] || tierConfig['Bronze'];
	return `group bg-white ${config.padding} ${config.rounded} ${config.border} ${config.shadow} hover:-translate-y-1 transition-all duration-300 ${config.size} flex items-center justify-center`;
};

// Get tier layout class (single item centered or flex wrap for multiple)
const getTierLayoutClass = (tier: string) => {
	const sponsors = getSponsorsbyTier(tier);
	if (sponsors.length === 1) {
		return 'flex justify-center';
	}
	return 'flex flex-wrap justify-center gap-6';
};

// Get tier container class
const getTierContainerClass = (tier: string) => {
	// Add more spacing for higher tiers
	const availableTiers = getAvailableTiers();
	const tierIndex = availableTiers.indexOf(tier);
	
	if (tierIndex === 0) {
		// Highest tier - center and prominent
		return 'w-full';
	}
	return 'w-full';
};

// Check if any sponsors have tier information
const hasAnyTieredSponsors = () => {
	if (!sponsorshipData?.current_sponsors) return false;
	return sponsorshipData.current_sponsors.some((sponsor: any) => sponsor?.tier);
};
</script>

<style scoped>
@keyframes shimmer {
	100% {
		transform: translateX(100%);
	}
}
</style>