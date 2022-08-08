<script>
import Counter from "./lib/Counter.svelte"
import Phone from './lib/phone.svelte'

  let name = 'nihaoa'
  let a = 111
  let b = 222
  let el1 = `<h1> ${name} </h1>`
  let color = 'pink'
  let foo = true
  let state = true
  let count = 0
  $: double = count * 2

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
    console.log(name,'ccc')
    name = 'henbuhao'
  }

  const handleCount = () =>{
    count += 1
  }

  const handleClickP = () =>{
    console.log(name,'pppp')
  }

  const api = new Promise((resolve,reject) =>{
    setTimeout(() =>{
      reject('request success')
    },1000)
  })

  function print(data){
    console.log(`传过来 ${data.detail}`)
  }

</script>


<!-- <div title={name}>sss</div> -->
<div>hello {name}</div>
<!-- <span>{a} + {b} = {a + b}</span> -->
<!-- <div style="color: {color}">{@html el1}</div> -->
<!-- <div class:active={foo}>{@html el1}</div> -->
<!-- {#if state}
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
</ul> -->
<!-- <input type="text" bind:value={name} />
<div>{count} fanbiehou {double}</div> -->

{#await api}
  <span>loading...</span>
{:then response} 
  <span>{response}</span>
{:catch error}
  <span>{`${error} err`}</span>
{/await}

<Phone name='lisi' on:printPhone={print} >
  <div>名字：</div>
  <div>zs</div>
</Phone>

<!-- <div on:click={handleClickP}>
  <button on:click|stopPropagation={handleClick}>改名</button>
  <button on:click={handleCount}>dianji</button>
</div> -->



<style>
  .active{
    color: red;
  }
</style>