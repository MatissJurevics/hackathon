<script>
	const converToInput = () => {
		console.log("Clicked")
	}
	$: content = [
		"## Title",
		"Lorem ipsum, `dolor sit amet consectetur adipisicing elit.` Numquam ea eius expedita optio fugiat accusamus id. Fugiat quia laborum totam, laudantium beatae natus. Modi nihil suscipit labore consectetur, cupiditate numquam architecto unde obcaecati similique exercitationem officia, corrupti perferendis repudiandae debitis sunt ducimus laudantium amet adipisci necessitatibus est deleniti! Nesciunt, rerum.",
		"## Sub-title"
	] 
	let inputText = ""
	const enterDetect = (e) => {
		if (e.key == "Enter") {
			content.push(inputText)
			content = content
			inputText = ""
		}
	}
	const turnToInput = (e) => {
		let element = e.target
		let index = content.indexOf(e.target.firstChild.data)
		console.log(index)
		e.target.classList.add("hidden")
		console.log(e.target.parentNode)
	}
	
</script>

<nav ></nav>

<main class="flex flex-row justify-center align-middle w-full h-screen bg-accent/5">
	<div class="bg-white min-w-96 w-1/2 min-h-[1000px] h-2/3 mt-auto rounded-2xl drop-shadow-xl p-8 flex flex-col space-y-3" >
		{#each content as item}
			<span on:click={e => turnToInput(e)} on:keydown={() => {console.log("hi")}}>{item}</span>
		{/each}
		<textarea name="" id="" cols="30" rows="5" class="w-full h-32 p-3 text-xl font-extralight rounded-md border-2 border-black/5 focus:outline-none focus:border-secondary/30 focus:border-2 resize-none" bind:value={inputText} on:keypress={e => enterDetect(e)}></textarea>
	</div>
</main>

<ul class="absolute bottom-5 right-5">
	<li class="h-16 w-16 rounded-full border-[2px] border-secondary bg-white flex justify-center align-middle">h1</li>
	<li></li>
</ul>


