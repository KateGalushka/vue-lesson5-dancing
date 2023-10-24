<template>
	<div class="dancer__list">
		<dancer-card
			v-for="dancer in dancerListData" :key="dancer.id"
			:dancer-data="dancer"
			@click="onSelect(dancer.id)"
			:class="{
				selected: dancer.id == this.selectedDancer.id
			}"
		/>

	</div>
</template>

<script>
	import DancerCard from './DancerCard.vue';

	export default {
		name: 'DancerList',
		components: {
			DancerCard,
		},

		props: {
			dancerListData: {
				type: Array,
				default: ()=>[]
			},
		},
		data() {
			return {
				selectedDancer: {}
			}
		},
		methods: {
			onSelect(id) {
				this.selectedDancer.id = id;
				// console.log(this.selectedDancer)
				this.$emit('select', id)
			}
		},
	}
</script>

<style lang="css" scoped>
	.dancer__list{
		border: 1px solid #000;
		width: 300px;
		margin-bottom: 20px;
	}
	.selected{
		border: 2px solid blue;
		border-radius: 8px;
	}
</style>