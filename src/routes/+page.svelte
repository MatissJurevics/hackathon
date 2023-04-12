<script>
	// @ts-nocheck
	import Input from "../components/input.svelte"

	$: content = [
		"## Title",
		"Lorem ipsum, `dolor sit amet consectetur adipisicing elit.` Numquam ea eius expedita optio fugiat accusamus id. Fugiat quia laborum totam, laudantium beatae natus. Modi nihil suscipit labore consectetur, cupiditate numquam architecto unde obcaecati similique exercitationem officia, corrupti perferendis repudiandae debitis sunt ducimus laudantium amet adipisci necessitatibus est deleniti! Nesciunt, rerum.",
		"## Sub-title"
	] 
	let notes = ""
	
	
	
	
</script>

<nav class="navbar ">
	<div class="navbar-start">left</div>
	<div class="navbar-center">middle</div>
</nav>

<main class="flex flex-row justify-center align-middle w-full h-screen bg-accent/5">
	<div class="bg-white min-w-96 w-1/2 min-h-[1000px] h-2/3 mt-auto rounded-2xl drop-shadow-xl p-8 flex flex-col space-y-3" >
		<textarea name="" id="" cols="30" rows="5" class="w-full h-full p-3 text-xl font-extralight rounded-md border-2 border-black/5 focus:outline-none focus:border-secondary/30 focus:border-2 resize-none" bind:value={notes}></textarea>
	</div>
</main>

<div class="absolute bottom-5 right-5">
	<div class="card w-96 bg-base-100 shadow-xl">
		<div class="card-body">
		  <h2 class="card-title text-secondary">AI Assistant</h2>
		  <p class="text-lg">How can I help you today?</p>
		  <input type="text" class="w-full h-12 mt-4 p-3 text-lg font-extralight rounded-md border-2 border-black/5 focus:outline-none focus:border-secondary/30 focus:border-2 resize-none">
		</div>
	  </div>
</div>


