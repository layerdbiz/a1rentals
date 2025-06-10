<script>
    import '../app.css';
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';

    let { children } = $props();

    let links = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Planning Guide', href: '/planning' },
        { label: 'Products', href: '/products' },
        { label: 'Contact Us', href: '/contact' }
    ];
</script>


<main id="container" class="bg-white flex flex-col">
    <Header class="flex flex-col">
        <img src="images/header-bg.png" alt="A1 Rentals Beaumont Texas" />
        <Nav class="relative z-10 w-full flex items-center justify-center gap-3 -translate-y-[47px] " {links} />
    </Header>

    <div class="prose">
        {@render children()}
    </div>

    <Footer class="bg-white flex flex-col items-center justify-around gap-4 p-10 m-4">
        <Nav {links} />
    </Footer>
</main>


<style>
</style>