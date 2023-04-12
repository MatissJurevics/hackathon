<script>
    const md = markdown()
    let testString = "# This is a test"
</script>

<main>
    <h1>{md.render(testString)}</h1>
</main>