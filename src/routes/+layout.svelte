<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { afterNavigate } from '$app/navigation';

	// Stylesheets
	import '../app.postcss';

	// Settings
	const stickyHeader = true;

	// (optional) Scroll App Shell to top after route navigation
	afterNavigate((params: any) => {
		const isNewPage: boolean =
			params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) elemPage.scrollTop = 0;
	});
</script>

<AppShell slotPageHeader={stickyHeader ? 'sticky top-0 z-10' : ''}>
	<!-- Slot: Page Header -->
	<svelte:fragment slot="pageHeader">
		<Header />
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />

	<!-- Slot: Page Footer -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
