<template>
	<div class="relative aspect-[3/2] w-full overflow-hidden bg-surface-dim">
		<img
			:src="src"
			:alt="alt"
			:width="width || undefined"
			:height="height || undefined"
			:loading="loading"
			class="absolute inset-0 block"
			:class="width && width < 800 ? 'm-auto h-auto w-auto max-h-full max-w-full object-contain' : 'h-full w-full object-cover object-center'"
		/>
		<slot />
	</div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
	src: string;
	alt: string;
	width: number | null;
	height: number | null;
	loading?: "lazy" | "eager";
}>(), {
	loading: "lazy",
});
</script>
