<script>
	import { Select as SelectPrimitive } from "bits-ui";
	import { cn } from "resources/js/utils.js";

	let { ref = $bindable(null), class: className, ...restProps } = $props();
</script>

<SelectPrimitive.GroupHeading
	bind:ref
	class={cn("px-2 py-1.5 text-sm font-semibold", className)}
	{...restProps}
/>
