<script lang="ts" setup>
	import type { ISetResponse, ITodo } from "types";

	interface IAllItems extends ISetResponse {
		data: ITodo[];
	}
	const {
		data: items,
		refresh,
		error,
	} = await useFetch<IAllItems>("/api/item/get-all");

	if (error.value) {
		throw createError(error.value);
	}
</script>
<template>
	<div class="p-20 flex justify-center">
		<div class="max-w-xl w-full bg-white p-4 rounded shadow-md">
			<h1 class="text-slate-800 text-xl font-bold text-center">
				MongoDB Crud With Nuxt 3
			</h1>
			<div class="mt-6">
				<Form @add-item="refresh" />
				<div class="text-slate-400 text-xs mt-2">
					Total: {{ items?.data.length }}
				</div>
				<ul v-if="items!.data.length > 0" class="mt-4 divide-y">
					<Item
						v-for="item in items!.data"
						:item="item"
						@delete="refresh"
						@update="refresh"
					/>
				</ul>
				<div v-else class="text-slate-400 text-center mt-4">
					Oops! Looks like there are no items yet. Add some.
				</div>
			</div>
			<NuxtErrorBoundary>
				<!-- ... -->
				<template #error>
					<p>An error occurred: {{ error }}</p>
				</template>
			</NuxtErrorBoundary>
		</div>
	</div>
</template>
<style scoped lang="css">
	:global(body) {
		@apply bg-slate-100;
	}
</style>
