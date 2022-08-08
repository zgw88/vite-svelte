<script>
  let name = 'nihaoa'

  const handleClick = () =>{
    name = 'henbuhao'
  }
</script>


<div>hello {name}</div>
<button on:click={handleClick}>改名</button>