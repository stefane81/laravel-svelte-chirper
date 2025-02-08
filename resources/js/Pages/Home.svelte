<script>
    // import Layout from './Layout.svelte'
    import Button from "$lib/components/ui/button/button.svelte";

    export let user;
</script>

<svelte:head>
    <title>Welcome</title>
</svelte:head>

<!-- <Layout> -->
<h1>Welcome</h1>
<p>Hello {user}, welcome to your first Inertia app!</p>
<!-- </Layout> -->
