<template>
	<div class="pairs">
		<h3>Обрані пари</h3>
		<ul>
			<li v-for="pair in selectedPairsList" :key="pair.id">
				<p>{{ pair.boy.name }} - {{ pair.girl.name }}</p>
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

<style lang="css" scoped>
ul{
	margin: 0;
	padding: 0;
}
.pairs li{
	display: flex;
	justify-content: space-between;
}
.pairs p{
	margin: 0;
	padding: 10px 0;
}
.pairs button{
	padding: 5px 10px;
	margin-bottom: 5px;
}
</style>