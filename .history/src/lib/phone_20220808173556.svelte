<script>
    export let name = 'zhangsan'
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()
    function printPhone(){
        dispatch('')
    }
</script>

<div>儿子： {name}</div>