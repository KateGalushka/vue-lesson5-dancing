<template>
	<div class="dancer">
		{{ dancerData.name }}
	</div>
</template>

<script>
	export default {
		name: 'DancerCard',
		props: {
			dancerData: {
				type: Object,
				default: ()=>({})
			},
		},
	}
</script>

<style lang="css" scoped>
.dancer {
	padding: 5px 10px;
	margin: 5px 0;
	cursor: pointer;
}

</style>