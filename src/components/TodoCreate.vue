<template>
	<md-card class="todo-list-create">
		<md-card-header>
			<div class="md-title">Create a new todo</div>
		</md-card-header>

		<md-card-content>
			<md-input-container>
				<label>Title</label>
				<md-input
					v-model="title"
					@keyup.enter.native="createTodo"
				/>
			</md-input-container>
		</md-card-content>

		<md-card-actions>
			<md-button
				class="create-button md-primary"
				type="button"
				@click="createTodo"
			>
				Create
			</md-button>
		</md-card-actions>
	</md-card>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import All_Todos from '../graphql/AllTodos.gql'
import CREATE_TODO from '../graphql/CreateTodo.gql'

export default {
	data () {
		return {
			title: '',
		}
	},

	validations: {
		title: {
			required,
		},
	},

	methods: {
		createTodo () {
			if (!this.$v.$invalid) {
				const title = this.title
				this.title = ''
				try {
					this.$apollo.mutate({
						mutation: CREATE_TODO,
						variables: {
							title,
						},
						update: (store, { data: { createTodo } }) => {
							// Add to All tasks list
							const data = store.readQuery({ query: All_Todos })
							data.allTodos.push(createTodo)
							store.writeQuery({ query: All_Todos, data })
						},
						optimisticResponse: {
							__typename: 'Mutation',
							createTodo: {
								__typename: 'Todo',
								id: (new Date()).getTime(),
								completed: false,
								title,
							},
						},
					})
				} catch (e) {
					console.error(e)
					this.title = title
				}
			}
		},
	},	
}
</script>

<style lang="scss">
.form {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.create-button {
	position: relative;

	.spinner {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>

