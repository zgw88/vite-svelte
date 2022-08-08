<script>
  let name = 'nihaoa'
  let a = 111
  let b = 222
  let el1 = `<h1> ${name} </h1>`
  let color = 'pink'
  let foo = true
  let state = true
  // let list = ['1',2,3,4,5]
  // let list = [
  //   {name: 'hhhh'},
  //   {name: 'cccc'}
  // ]
  let list = []
  setTimeout(() =>{
    color = 'green'
    foo = false
    state = false
  },1000)

  const handleClick = () =>{
    console.log(name)
    name = 'henbuhao'
  }

  const handleClickP = () =>{
    console.log(name,'pppp')
  }
</script>


<!-- <div title={name}>sss</div> -->
<div>hello {name}</div>
<!-- <span>{a} + {b} = {a + b}</span> -->
<!-- <div style="color: {color}">{@html el1}</div> -->
<!-- <div class:active={foo}>{@html el1}</div> -->
{#if state}
  <div style="color: {color}">{@html el1}</div>
{:else}
  <div style="color: {color}">{@html el1}</div>
{/if}
<ul>
  {#each list as {name}}
    <li>{`${name} -- ${name}`}</li>
    {:else}
    <div>暂无</div>
  {/each}
</ul>
<div on:click={handleClickP}>
  <button on:click|stopPropagation={handleClick}>改名</button>
</div>



<style>
  .active{
    color: red;
  }
</style>