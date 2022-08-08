<script>
    export let name = 'zhangsan'
    import {createEventDispatcher} from 'svelte'
    const dispatch = new createEventDispatcher()
    function printPhone(){
        
    }
</script>

<div>儿子： {name}</div>