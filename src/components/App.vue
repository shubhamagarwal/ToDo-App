<script>
import TodoPage from './TodoPage.vue'

export default {
	name: 'app',

	render (h) {
		return <div id="app">
			<TodoPage />
		</div>
	},
}
</script>

<style lang="scss">
html,
body,
#app {
	height: 50%;
}

body {
	margin: 0;
	font-family: 'Roboto', Helvetica, Arial, sans-serif;
}

.md-card {
	margin: 12px;
}
</style>
