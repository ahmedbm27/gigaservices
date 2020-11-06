<script>
  	import { Router, Link, Route } from "svelte-routing";
	import Navbar from "./components/nav.svelte";
	import Landing from "./routes/index.svelte";
	import Footer from "./components/footer.svelte";

	export let url = "";
</script>

<Navbar/>
<Router url="{url}">
<Route path="/"><Landing/></Route>
</Router>
<Footer/>