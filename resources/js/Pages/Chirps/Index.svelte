<script lang="ts">
    // import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.svelte';
    // import InputError from '@/Components/InputError.svelte';
    // import PrimaryButton from '@/Components/PrimaryButton.svelte';
    import { useForm } from '@inertiajs/svelte';

    let form = useForm({
        message: '',
    });

    function handleSubmit() {
        form.post(route('chirps.store'), { onSuccess: () => form.reset() });
    }
</script>

<!-- <Head title="Chirps" /> -->

<!-- <AuthenticatedLayout> -->
    <div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <form on:submit|preventDefault={handleSubmit}>
            <textarea
                bind:value={form.message}
                placeholder="What's on your mind?"
                class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
            ></textarea>
            <!-- <InputError message={form.errors.message} class="mt-2" /> -->
            <button class="mt-4">Chirp</button>
        </form>
    </div>
<!-- </AuthenticatedLayout> -->