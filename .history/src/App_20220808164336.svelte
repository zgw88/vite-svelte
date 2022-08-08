<script>
  let name = 'nihaoa'
  let a = 111
  let b = 222

  const handleClick = () =>{
    name = 'henbuhao'
  }
</script>


<div title={name}></div>
<div>hello {name}</div>
<span>{a} + {b} = {a + b}</span>
<button on:click={handleClick}>改名</button>