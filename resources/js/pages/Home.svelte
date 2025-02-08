<script>
    // import Layout from './Layout.svelte'
    import Button from "$lib/components/ui/button/button.svelte";

    // export let user;
</script>

<svelte:head>
    <title>Welcome</title>
</svelte:head>

<div class="container">
    <!-- <Layout> -->
        <h1>Welcome</h1>
        <!-- <p>Hello {user}, welcome to your first Inertia app!</p> -->
        <Button variant="destructive" href="/dashboard">Dashboard</Button>
        <button variant="destructive" href="/dashboard">Dashboard</button>
</div>
<!-- </Layout> -->

<style>
    h1 {
        color: #333;
        font-size: larger;

    }
    .container {
        background-color: powderblue;
    }
</style>
