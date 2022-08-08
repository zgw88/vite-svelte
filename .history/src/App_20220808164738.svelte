<script>
  let name = 'nihaoa'
  let a = 111
  let b = 222
  let el1 = '<h1 style="color: pink;">${a}</h1>'

  const handleClick = () =>{
    name = 'henbuhao'
  }
</script>


<!-- <div title={name}>sss</div>
<div>hello {name}</div>
<span>{a} + {b} = {a + b}</span> -->
<div>{el1}</div>
<button on:click={handleClick}>改名</button>