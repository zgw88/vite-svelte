<script>
    export let name = 'zhangsan'
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()
    function printPhone(){
        dispatch('printPhone','wangwu')
    }

</script>

<div>儿子： {name}</div>

<button on:click={printPhone}>改名</button>