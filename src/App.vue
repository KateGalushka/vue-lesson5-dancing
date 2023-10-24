<template>
	<div class="main-container">
		<div class="container">
			<div>
				<h3>Хлопці:</h3>
				<dancer-list :dancer-list-data="boys" @select="onSelectBoy" />
			</div>
			<div>
				<h3>Дівчата:</h3>
				<dancer-list :dancer-list-data="girls" @select="onSelectGirl" />
			</div>
		</div>
		<button class="addBtn"
			@click="onAddPair" 
			:disabled = "!isBtnEnabled()"
		>
			Додати
		</button>
		<selected-pairs 
			v-if="selectedPairs.length != 0" 
			:selectedPairsList="selectedPairs"
			@deletePair="onDeletePair"
		/>
	</div>
</template>

<script>
	import { boys } from './constants/boys.js';
	import { girls } from './constants/girls.js';
	import DancerList from './components/DancerList.vue';
	import SelectedPairs from './components/SelectedPairs.vue';

	export default {
		name: 'App',
		components: {
			DancerList, SelectedPairs
		},
		data() {
			return {
				boys,
				girls,
				selectedBoy: null,
				selectedGirl: null,
				selectedPairs: [],
				idArr: [],
			}
		},
		
		methods: {
			onSelectBoy(dancerId) {
				this.selectedBoy = this.boys.find((boy) => boy.id == dancerId)
			},
			onSelectGirl(dancerId) {
				this.selectedGirl = this.girls.find((girl) => girl.id == dancerId)
			},
			filterBoysList() {
				return this.boys.filter((boy) => boy.id !== this.selectedBoy.id);
			},
			filterGirlsList() {
				return this.girls.filter((girl) => girl.id !== this.selectedGirl.id);
			},
			isBtnEnabled() {
				return (this.selectedBoy && this.selectedGirl)
			},
			onClearSelection(){
				this.selectedBoy = null;
				this.selectedGirl = null;
			},
			onAddPair() {
				this.selectedPairs.push(`${this.selectedBoy.name} - ${this.selectedGirl.name}`);
				this.idArr.push(`${this.selectedBoy.id} : ${this.selectedGirl.id}`);
				this.boys = this.filterBoysList();
				this.girls = this.filterGirlsList();
				this.onClearSelection();
			},
			onDeletePair(index) {
				let deletedPair;
				let deletedPairIds;
				deletedPair = this.selectedPairs.splice(index, 1);
				console.log(deletedPair);
				let [a, b] = deletedPair[0].split(' - ');
				deletedPairIds = this.idArr.splice(index, 1);
				console.log(deletedPairIds);
				let [c, d] = deletedPairIds[0].split(' : ');
				let boy = {name: a, id: c};
				let girl = {name: b, id: d};
				this.boys.push(boy);
				this.girls.push(girl);
				this.onClearSelection();
			}
		},
	
	}
</script>

<style lang="css" scoped>
	.main-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 700px;
		gap: 15px;
	}
	.container {
		display: flex;
		gap: 15px;
	}
	h3 {
		text-align: center;
	}
	.pairs {
		margin: 20px;
		padding: 0 20px;
		width: 500px;
		border: 2px solid darkblue;
	}
	.addBtn {
		font-size: 18px;
		padding: 12px 30px;
	}
</style>
