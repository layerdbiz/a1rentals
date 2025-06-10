<script>
    import '../app.css';
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
    import { page } from '$app/state';

    let { children } = $props();

    let links = [
        { 
            label: 'Home', 
            href: '/', 
            title: 'A-1 Wedding Rentals | Call (409) 833-6464',
            description: 'A-1 Rentals of Beaumont, Texas is making every effort to meet your wedding rental needs.'
        },
        { 
            label: 'About Us', 
            href: '/about',
            title: 'About Us | A-1 Rentals',
            description: 'Elegant wedding and party rental solutions for every celebration in Beaumont and the surrounding Southeast Texas area.'
        },
        { 
            label: 'Planning Guide', 
            href: '/planning',
            title: 'Wedding Planning Guide | A-1 Rentals',
            description: "Download our free PDF for wedding rental ideas, custom options, and planning tips — we'll help bring your event to life."
        },
        { 
            label: 'Products', 
            href: '/wedding-party-rentals',
            title: 'Wedding & Event Rentals in Beaumont, Texas',
            description: 'From tents to tables, A-1 Rentals provides stylish, reliable rentals for weddings, parties, and backyard celebrations.'
        },
        { 
            label: 'Contact Us', 
            href: '/contact-us',
            title: 'Contact A-1 Rentals | Call (409) 833-6464',
            description: 'Questions about rentals? Reach out to A-1 Rentals for fast support, directions, and direct contact with our team.'
        }
    ];

    function getPageMeta(pathname) {
        const link = links.find(link => link.href === pathname);
        return link ? { title: link.title, description: link.description } : { 
            title: 'A-1 Rentals | Call (409) 833-6464', 
            description: 'A-1 Rentals of Beaumont, Texas is making every effort to meet your wedding rental needs.' 
        };
    }

    let meta = $derived(getPageMeta(page.url.pathname));
</script>

<svelte:head>
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
    <meta property="og:title" content={meta.title} />
    <meta property="og:description" content={meta.description} />
    <meta name="twitter:title" content={meta.title} />
    <meta name="twitter:description" content={meta.description} />
</svelte:head>

<main id="container" class="bg-white flex flex-col">
    <Header class="flex flex-col">
        <img src="/images/header-bg.png" alt="A1 Rentals Beaumont Texas" />
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