<script>
  let name = 'nihaoa'
  let a = 111
  let b = 222

  const handleClick = () =>{
    name = 'henbuhao'
  }
</script>


<div>hello {name}</div>
<button on:click={handleClick}>改名</button>