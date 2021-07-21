<div>
  <p>{message}</p>
</div>

<script>
  import { onMount } from 'svelte';

  let message = '';

  onMount(()=>{
    getMessage();
  });

  function getMessage() {
    fetch('http://localhost:9878/api/', {
        method: 'get',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(data => {
        return(data.text());
      }).then(data => {
        message = data;
        console.log(data);
        
      });
  }
</script>

