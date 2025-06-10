<script>
    let { children, ...props } = $props();
</script>

<footer {...props} class="flex flex-col items-center justify-center {props.class}">
    <p>A-1 Rentals of Beaumont, Inc.  Wedding and Party Equipment Rental</p>
    <p>565 South 11th Street  Beaumont, Texas 77701  409-833-6464 p  409-833-7182 f</p>

    {@render children()}
</footer>
