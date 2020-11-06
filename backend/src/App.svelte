<script>
	import { Router, Link, Route } from "svelte-routing";
	import Landing from "./routes/Index.svelte";
	import Login from "./routes/Login.svelte";
	

	

	export let url = "";
</script>

<div style="height: 100%;width: 100%;">
	<Router url="{url}">
		<Route path="/" ><Landing/></Route>
		<Route path="/login" ><Login/></Route>
	</Router>
</div>
