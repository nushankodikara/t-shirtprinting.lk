<script lang="ts">
	export let name = 'Generic Item';
	export let price = '299';
	export let image = 'https://via.placeholder.com/600x600';
	export let uid = 'generic-item';
</script>

<div
	class={`group flex aspect-square flex-col justify-between bg-white bg-[url('${image}')] bg-cover bg-center p-8`}
>
	<div class="flex flex-row justify-between">
		<h2 class="text-lg font-thin underline">{name}</h2>
		<p class="text-lg font-thin">Rs.{price}/=</p>
	</div>
	<div class="hidden flex-row justify-between group-hover:flex">
		<button class="rounded-md bg-orange-400 p-2 font-thin text-white">Order</button>
		<button class="rounded-md bg-orange-400 p-2 font-thin text-white">View</button>
	</div>
</div>
