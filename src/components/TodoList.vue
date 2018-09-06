<template>
	<md-list class="todo-list">
		<TodoListItem
			v-for="task of tasks"
			:key="task.id"
			:task="task"
		/>
	</md-list>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
import All_Todos from '../graphql/AllTodos.gql'

export default {
	name: 'todo-list',

	components: {
		TodoListItem,
	},

	props: {
		filter: {
			type: Object,
			default: undefined,
		},
	},

	data () {
		return {
			tasks: [],
		}
	},
	
	apollo: {
		tasks: {
			query: All_Todos,
			
			update ({ allTodos }) {
				// The field is different from 'tasks'
				return allTodos
			},
		},
	},
}
</script>
