<template>
	<div class="todo-page">
		<md-toolbar>
			<h2 class="title md-title">
				Todo List
				<span class="count">{{tasksToDo.length}}</span>
			</h2>

			<md-button
				class="md-icon-button"
				@click="addMode = !addMode"
			>
				<md-icon>add</md-icon>
			</md-button>
		</md-toolbar>
		
		<TodoCreate v-if="addMode" />
		
		<div class="lists">
			<TodoList class="todo-list" />
			
		</div>
	</div>
</template>

<script>
import TodoCreate from './TodoCreate.vue'
import TodoList from './TodoList.vue'

import All_Todos from '../graphql/AllTodos.gql'

export default {
	name: 'todo-page',

	components: {
		TodoCreate,
		TodoList,
	},

	data () {
		return {
			tasks: [],
			addMode: false,
		}
	},
	
	apollo: {
		tasks: {
			query: All_Todos,
			update ({ allTodos }) {
				return allTodos
			},
		},
	},

	computed: {
		tasksToDo () {
			return this.tasks
		},
	},
}
</script>

<style lang="scss">
.title {
	flex: 1;
	
	.count {
		opacity: .3;
	}
}

.lists {
	display: flex;
	flex-direction: row;
	align-items: stretch;

	.todo-list {
		flex: 100% 1 1;

		&:not(:last-child) {
			border-right: solid 1px #eee;
		}
	}
}
</style>

