<script>
    let { children, ...props } = $props();
</script>

<header {...props} class="flex flex-col items-center justify-center {props.class}">
    {@render children()}
</header>
