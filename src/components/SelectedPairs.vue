<template>
	<div class="pairs">
		<h3>Обрані пари</h3>
		<ul v-for="(pair, index) in selectedPairsList" :key="index">
			<li>
				{{ pair }}
				<button @click="$emit('deletePair', index)">
					Видалити пару
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'SelectedPairs',
	props: {
		selectedPairsList: {
			type: Array,
			default: () => []
		},
	},
	
}
</script>

<style lang="scss" scoped></style>