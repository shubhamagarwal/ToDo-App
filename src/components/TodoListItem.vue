<template>
	<md-list-item class="todo-list-item">
		<div class="content">
			<template>
				
					{{task.title}}
				
				
			</template>

			
		</div>
	</md-list-item>
</template>

<script>
export default {
	name: 'todo-list-item',

	props: {
		task: {
			type: Object,
			required: true,
		},
	},	
}
</script>

<style lang="scss">
.content {
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
}

.checkbox {
	flex: auto 1 1;

	 .md-checkbox-label {
		flex: 100% 1 1;
	}
}
</style>

