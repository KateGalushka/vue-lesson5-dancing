<template>
	<div class="pairs">
		<h3>Обрані пари</h3>
		<ul v-for="pair in selectedPairsList" :key="pair.id">
			<li>
				{{ pair.boy.name }} - {{ pair.girl.name }}
				<button @click="$emit('deletePair', pair)">
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