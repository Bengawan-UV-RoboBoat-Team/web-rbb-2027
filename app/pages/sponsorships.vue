<template>
	<div>
		<section
		class="relative h-[90vh] flex items-center justify-start text-surface text-center overflow-hidden bg-primary-dark"
		>
		<div class="absolute inset-0 z-0">
			<img
			src="/images/mandakini/sponsor-mandakini.webp"
			alt="Partnership Background"
			class="w-full h-full object-cover opacity-60 brightness-90"
			/>

			<div class="absolute inset-0 bg-black/35"></div>

			<div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,theme(colors.primary.dark/60%)_55%,theme(colors.primary.dark/95%)_100%)]"
			></div>
		</div>

		<div class="container mx-auto px-4 relative z-10">
			<span
			class="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse"
			>
			Partnership Opportunity
			</span>

			<h1 class="text-4xl md:text-6xl font-extrabold mb-6">
			Support Innovation
			</h1>

			<p class="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
			Join us in shaping the future of maritime technology.
			</p>

			<div class="flex flex-wrap justify-center gap-4 mb-4">
								<a
					href="https://ko-fi.com/bengawanuvroboboatteam"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-primary transition shadow-lg"
				>
					<Icon name="uil:coffee" class="text-xl" />
					Donate
				</a>
				<button
					@click="openEmailModal()"
					class="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-white hover:text-primary transition shadow-lg"
				>
					<Icon name="uil:envelope-alt" class="text-xl" />
					Contact for Proposal
				</button>
			</div>

			<p class="text-xs text-surface mt-3">
			Or email us directly at
			<span class="font-semibold">bengawanuv@unit.uns.ac.id</span>
			</p>
		</div>
		</section>

		<section class="py-20 bg-white">
			<div class="container mx-auto px-4 text-center">
				<h2 class="text-3xl font-bold text-primary-dark mb-12">
					Why Partner With Us?
				</h2>
				<div class="grid md:grid-cols-3 gap-8">
					<div
						class="p-8 rounded-2xl bg-surface border border-gray-100 text-center"
					>
						<div class="text-4xl text-primary mb-4">
							<Icon name="uil:globe" />
						</div>
						<h3 class="font-bold text-lg mb-2">Global Exposure</h3>
						<p class="text-sm text-gray-600">
							Brand visibility in international competitions.
						</p>
					</div>
					<div
						class="p-8 rounded-2xl bg-surface border border-gray-100 text-center"
					>
						<div class="text-4xl text-primary mb-4">
							<Icon name="uil:users-alt" />
						</div>
						<h3 class="font-bold text-lg mb-2">Talent Access</h3>
						<p class="text-sm text-gray-600">
							Recruit top engineering students.
						</p>
					</div>
					<div
						class="p-8 rounded-2xl bg-surface border border-gray-100 text-center"
					>
						<div class="text-4xl text-primary mb-4">
							<Icon name="uil:flask" />
						</div>
						<h3 class="font-bold text-lg mb-2">R&D Collaboration</h3>
						<p class="text-sm text-gray-600">
							Test your tech on our platforms.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="py-20 bg-gray-50" id="packages">
			<div class="container mx-auto px-4">
				<div class="text-center mb-16">
					<h2 class="text-3xl font-bold text-primary-dark">
						Sponsorship Packages
					</h2>
					<p class="text-gray-500 mt-2">
						Choose the tier that fits your branding goals.
					</p>
				</div>

				<div class="flex flex-wrap justify-center gap-6 max-w-[1400px] mx-auto">
					<div
						v-for="pkg in sponsorshipData.packages"
						:key="pkg.name"
						class="w-full md:w-[48%] lg:w-[30%] xl:w-[18%] flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent group relative"
						:class="getTheme(pkg.name).hoverBorder"
					>
						<div
							class="p-6 text-center text-white relative overflow-hidden"
							:class="getTheme(pkg.name).headerBg"
						>
							<div
								class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"
							></div>

							<h3
								class="text-lg font-bold uppercase tracking-widest mb-3 relative z-10 drop-shadow-sm"
							>
								{{ pkg.name }}
							</h3>

							<div
								class="text-2xl md:text-3xl font-extrabold relative z-10 leading-none drop-shadow-md"
							>
								{{ pkg.price }}
							</div>
						</div>

						<div class="p-5 flex-grow bg-white">
							<ul class="space-y-3 text-xs">
								<li
									v-for="(feature, i) in pkg.features"
									:key="i"
									class="flex justify-between items-start pb-2 border-b border-dashed border-gray-100 last:border-0"
								>
									<span
										class="text-gray-500 font-medium text-left w-1/2 pt-0.5"
										>{{ feature.label }}</span
									>

									<div class="w-1/2 text-right font-bold">
										<Icon
											v-if="feature.value === true"
											name="uil:check-circle"
											class="text-lg"
											:class="getTheme(pkg.name).iconColor"
										/>
										<Icon
											v-else-if="feature.value === false"
											name="uil:multiply"
											class="text-gray-600 text-lg"
										/>

										<div v-else class="flex flex-col items-end">
											<span class="text-gray-800">{{ feature.value }}</span>
											<span
												v-if="feature.subtext"
												class="text-[9px] text-gray-700 mt-0.5 italic font-normal text-right block leading-tight"
											>
												{{ feature.subtext }}
											</span>
										</div>
									</div>
								</li>
							</ul>
						</div>

						<div class="p-5 pt-0 mt-auto bg-white">
							<button
								@click="openEmailModal(pkg.name)"
								class="block w-full py-3 rounded-xl font-bold text-center text-sm transition-all shadow-sm border-2"
								:class="getTheme(pkg.name).btnClass"
							>
								Select {{ pkg.name }}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="faq" class="py-20 bg-white border-t border-gray-200">
			<div class="container mx-auto px-4">
				<div class="text-center mb-12">
					<span class="inline-block px-4 py-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-4">
						Have Questions?
					</span>
					<h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
						Frequently Asked Questions
					</h2>
					<p class="text-gray-600 max-w-2xl mx-auto">
						Everything you need to know about sponsoring our team
					</p>
				</div>

				<div class="max-w-3xl mx-auto space-y-4">
					<div
						v-for="(faq, index) in faqData.faqs"
						:key="index"
						class="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300"
						:class="activeFaq === index ? 'shadow-lg ring-2 ring-primary/20' : 'shadow-sm hover:shadow-md'"
					>
						<button
							@click="toggleFaq(index)"
							class="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
						>
							<span class="font-bold text-primary-dark text-base md:text-lg pr-4">
								{{ faq.question }}
							</span>
							<Icon
								name="uil:angle-down"
								class="text-2xl text-primary flex-shrink-0 transition-transform duration-300"
								:class="activeFaq === index ? 'rotate-180' : ''"
							/>
						</button>
						
						<Transition name="accordion">
							<div
								v-if="activeFaq === index"
								class="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100"
							>
								<div class="pt-4" v-html="faq.answer"></div>
							</div>
						</Transition>
					</div>
				</div>

				<div class="mt-12 text-center">
					<p class="text-gray-600 mb-4">Still have questions?</p>
					<button
						@click="openEmailModal()"
						class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all shadow-md hover:shadow-lg"
					>
						<Icon name="uil:envelope-alt" />
						Contact Us Directly
					</button>
				</div>
			</div>
		</section>

		<section class="py-20 bg-white border-t border-gray-200 relative z-10">
			<div class="container mx-auto px-4 text-center">
				<h2 class="text-3xl font-bold text-primary-dark mb-12">Our Sponsors</h2>

				<div v-if="getSponsorsbyTier('Main Sponsor').length > 0" class="mb-12">
					<div class="flex justify-center">
						<a
							v-for="(sponsor, index) in getSponsorsbyTier('Main Sponsor')"
							:key="index"
							:href="sponsor.link || '#'"
							target="_blank"
							class="group bg-white p-8 rounded-2xl border-2 border-yellow-600 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
						>
							<img
								:src="sponsor.logo"
								:alt="sponsor.name"
								class="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition"
							/>
						</a>
					</div>
				</div>

				<div v-if="getSponsorsbyTier('Platinum').length > 0" class="mb-12">
					<div class="flex flex-wrap justify-center gap-8">
						<a
							v-for="(sponsor, index) in getSponsorsbyTier('Platinum')"
							:key="index"
							:href="sponsor.link || '#'"
							target="_blank"
							class="group bg-white p-6 rounded-2xl border-2 border-slate-600 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-52 h-52 md:w-64 md:h-64 flex items-center justify-center"
						>
							<img
								:src="sponsor.logo"
								:alt="sponsor.name"
								class="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition"
							/>
						</a>
					</div>
				</div>

				<div v-if="getSponsorsbyTier('Gold').length > 0" class="mb-12">
					<div class="flex flex-wrap justify-center gap-6">
						<a
							v-for="(sponsor, index) in getSponsorsbyTier('Gold')"
							:key="index"
							:href="sponsor.link || '#'"
							target="_blank"
							class="group bg-white p-6 rounded-2xl border border-yellow-400 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-40 h-40 md:w-48 md:h-48 flex items-center justify-center"
						>
							<img
								:src="sponsor.logo"
								:alt="sponsor.name"
								class="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition"
							/>
						</a>
					</div>
				</div>

				<div v-if="getSponsorsbyTier('Silver').length > 0" class="mb-12">
					<div class="flex flex-wrap justify-center gap-6">
						<a
							v-for="(sponsor, index) in getSponsorsbyTier('Silver')"
							:key="index"
							:href="sponsor.link || '#'"
							target="_blank"
							class="group bg-white p-5 rounded-2xl border border-gray-300 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-36 h-36 md:w-40 md:h-40 flex items-center justify-center"
						>
							<img
								:src="sponsor.logo"
								:alt="sponsor.name"
								class="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition"
							/>
						</a>
					</div>
				</div>

				<div v-if="getSponsorsbyTier('Bronze').length > 0">
					<div class="flex flex-wrap justify-center gap-4">
						<a
							v-for="(sponsor, index) in getSponsorsbyTier('Bronze')"
							:key="index"
							:href="sponsor.link || '#'"
							target="_blank"
							class="group bg-white p-4 rounded-xl border border-orange-300 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 w-28 h-28 md:w-32 md:h-32 flex items-center justify-center"
						>
							<img
								:src="sponsor.logo"
								:alt="sponsor.name"
								class="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition"
							/>
						</a>
					</div>
				</div>

				<div v-if="sponsorshipData.current_sponsors && !hasAnyTieredSponsors()" class="flex flex-wrap justify-center gap-8 items-center max-w-5xl mx-auto">
					<a
						v-for="(sponsor, index) in sponsorshipData.current_sponsors"
						:key="index"
						:href="sponsor.link || '#'"
						target="_blank"
						class="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-40 h-40 md:w-56 md:h-56 flex items-center justify-center"
					>
						<img
							:src="sponsor.logo"
							:alt="sponsor.name"
							class="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition"
						/>
					</a>
				</div>
			</div>
		</section>

		<section class="py-20 bg-gray-100 border-t border-gray-200 relative">
			<div
				class="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/skulls.png')]"
			></div>

			<div class="container mx-auto px-4 text-center relative z-10">
				<h2
					class="text-2xl font-bold text-gray-600 mb-10 uppercase tracking-widest"
				>
					Past Sponsors
				</h2>

				<div
					class="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 max-w-6xl mx-auto"
				>
					<div
						v-for="sponsor in sponsorshipData.past_sponsors"
						:key="sponsor.name"
						class="group w-24 h-16 md:w-32 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
						:title="sponsor.name"
					>
						<img
							:src="sponsor.logo"
							:alt="sponsor.name"
							class="max-w-full max-h-full object-contain mix-blend-multiply hover:scale-110 transition-transform duration-300"
						/>
					</div>
				</div>
			</div>
		</section>

		<Transition name="modal">
			<div
				v-if="showEmailModal"
				class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
				@click.self="closeEmailModal"
			>
				<div
					class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
					@click.stop
				>
					<div class="bg-gradient-to-r from-primary to-primary-dark text-white p-6 relative">
						<button
							@click="closeEmailModal"
							class="absolute top-4 right-4 text-white/80 hover:text-white transition"
						>
							<Icon name="uil:times" class="text-2xl" />
						</button>
						<h3 class="text-2xl font-bold mb-2">Contact Us</h3>
						<p class="text-white/90 text-sm" v-if="selectedPackage">
							Inquiring about: <span class="font-semibold">{{ selectedPackage }}</span>
						</p>
						<p class="text-white/90 text-sm" v-else>
							Send us your sponsorship inquiry
						</p>
					</div>

					<div v-if="submitSuccess" class="p-8 text-center">
						<div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Icon name="uil:check" class="text-4xl text-green-600" />
						</div>
						<h4 class="text-xl font-bold text-gray-800 mb-2">Message Sent!</h4>
						<p class="text-gray-600">
							Your email client will open shortly. Thank you for your interest!
						</p>
					</div>

					<form v-else @submit.prevent="submitEmail" class="p-6 space-y-4">
						<div>
							<label class="block text-sm font-semibold text-gray-700 mb-2">
								Full Name <span class="text-red-500">*</span>
							</label>
							<input
								v-model="emailForm.name"
								type="text"
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
								placeholder="John Doe"
							/>
						</div>

						<div>
							<label class="block text-sm font-semibold text-gray-700 mb-2">
								Email Address <span class="text-red-500">*</span>
							</label>
							<input
								v-model="emailForm.email"
								type="email"
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
								placeholder="john@company.com"
							/>
						</div>

						<div>
							<label class="block text-sm font-semibold text-gray-700 mb-2">
								Company/Organization
							</label>
							<input
								v-model="emailForm.company"
								type="text"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
								placeholder="Your Company Name"
							/>
						</div>

						<div>
							<label class="block text-sm font-semibold text-gray-700 mb-2">
								Phone Number
							</label>
							<input
								v-model="emailForm.phone"
								type="tel"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
								placeholder="+62 xxx xxxx xxxx"
							/>
						</div>

						<div>
							<label class="block text-sm font-semibold text-gray-700 mb-2">
								Message <span class="text-red-500">*</span>
							</label>
							<textarea
								v-model="emailForm.message"
								required
								rows="5"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
								placeholder="Tell us about your interest in sponsoring our team..."
							></textarea>
						</div>

						<div class="flex gap-3 pt-4">
							<button
								type="button"
								@click="closeEmailModal"
								class="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
								:disabled="isSubmitting"
							>
								Cancel
							</button>
							<button
								type="submit"
								class="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
								:disabled="isSubmitting"
							>
								<Icon
									v-if="isSubmitting"
									name="uil:spinner"
									class="text-xl animate-spin"
								/>
								<span>{{ isSubmitting ? "Sending..." : "Send Message" }}</span>
							</button>
						</div>

						<p class="text-xs text-gray-500 text-center pt-2">
							This will open your default email client with the message pre-filled
						</p>
					</form>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import sponsorshipData from "../../assets/data/sponsorships.json";
import faqData from "../../assets/data/sponsorship_faq.json";

const activeFaq = ref<number | null>(null);
const showEmailModal = ref(false);
const selectedPackage = ref("");
const emailForm = ref({
	name: "",
	email: "",
	company: "",
	phone: "",
	message: "",
});
const isSubmitting = ref(false);
const submitSuccess = ref(false);

const toggleFaq = (index: number) => {
	activeFaq.value = activeFaq.value === index ? null : index;
};

const openEmailModal = (packageName: string = "") => {
	selectedPackage.value = packageName;
	emailForm.value.message = packageName
		? `I'm interested in the ${packageName} sponsorship package.`
		: "";
	showEmailModal.value = true;
	submitSuccess.value = false;
};

const closeEmailModal = () => {
	showEmailModal.value = false;
	setTimeout(() => {
		emailForm.value = {
			name: "",
			email: "",
			company: "",
			phone: "",
			message: "",
		};
		selectedPackage.value = "";
		submitSuccess.value = false;
	}, 300);
};

const submitEmail = async () => {
	isSubmitting.value = true;

	await new Promise((resolve) => setTimeout(resolve, 1000));

	const subject = selectedPackage.value
		? `Sponsorship Inquiry - ${selectedPackage.value}`
		: "Sponsorship Inquiry";
	
	const body = `Name: ${emailForm.value.name}
Email: ${emailForm.value.email}
Company: ${emailForm.value.company || "N/A"}
Phone: ${emailForm.value.phone || "N/A"}

Message:
${emailForm.value.message}`;

	const mailtoLink = `mailto:bengawanuv@unit.uns.ac.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

	window.location.href = mailtoLink;

	isSubmitting.value = false;
	submitSuccess.value = true;

	setTimeout(() => {
		closeEmailModal();
	}, 2500);
};

const getSponsorsbyTier = (tier: string) => {
	if (!sponsorshipData.current_sponsors) return [];
	return sponsorshipData.current_sponsors.filter(
		(sponsor: any) => sponsor.tier === tier
	);
};

const hasAnyTieredSponsors = () => {
	if (!sponsorshipData.current_sponsors) return false;
	return sponsorshipData.current_sponsors.some((sponsor: any) => sponsor.tier);
};

const getTheme = (name: string) => {
	switch (name) {
		case "Main Sponsor":
			return {
				headerBg: "bg-gradient-to-br from-yellow-700 to-yellow-900",
				btnClass:
					"bg-gradient-to-r from-yellow-700 to-yellow-800 text-white hover:shadow-lg border-transparent",
				iconColor: "text-yellow-800",
				hoverBorder: "group-hover:border-yellow-700",
			};
		case "Platinum":
			return {
				headerBg: "bg-gradient-to-br from-slate-600 to-slate-800",
				btnClass:
					"bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:shadow-lg border-transparent",
				iconColor: "text-slate-700",
				hoverBorder: "group-hover:border-slate-600",
			};
		case "Gold":
			return {
				headerBg: "bg-gradient-to-br from-amber-400 to-yellow-600",
				btnClass:
					"bg-white text-yellow-700 border-yellow-500 hover:bg-yellow-50",
				iconColor: "text-yellow-600",
				hoverBorder: "group-hover:border-yellow-500",
			};
		case "Silver":
			return {
				headerBg: "bg-gradient-to-br from-gray-300 to-gray-500",
				btnClass: "bg-white text-gray-600 border-gray-300 hover:bg-gray-50",
				iconColor: "text-gray-500",
				hoverBorder: "group-hover:border-gray-400",
			};
		case "Bronze":
			return {
				headerBg: "bg-gradient-to-br from-orange-300 to-orange-500",
				btnClass:
					"bg-white text-orange-600 border-orange-300 hover:bg-orange-50",
				iconColor: "text-orange-500",
				hoverBorder: "group-hover:border-orange-400",
			};
		default:
			return {
				headerBg: "bg-primary",
				btnClass: "bg-primary text-white",
				iconColor: "text-primary",
				hoverBorder: "group-hover:border-primary",
			};
	}
};
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
	transition: all 0.3s ease;
	max-height: 500px;
}

.accordion-enter-from,
.accordion-leave-to {
	max-height: 0;
	opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
	transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
	opacity: 0;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
	transform: scale(0.9);
}
</style>