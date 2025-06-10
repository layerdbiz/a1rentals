<script>
	import { page } from '$app/state';

	let {
		links = [
			{ label: 'home', href: '/' },
			{ label: 'about', href: '/about' },
			{ label: 'contact', href: '/contact' }
		],
		classLink = null,
		classLinkActive = null,
		children,
		...props
	} = $props();
</script>

<nav {...props} class="{props.class}">
	{#each links as link}
		<a
			href={link.href}
			class="nav-link {page.url.pathname === link.href ? 'active' : ''} {classLink || ''}"
		>
			{link.label}
		</a>
	{/each}
</nav>