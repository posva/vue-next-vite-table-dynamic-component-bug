<template>
    <h1>Table view</h1>

    <table>
		<thead>
			<tr>
				<th scope="col">Name</th>
				<th scope="col">Amount</th>
				<th scope="col">Price</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Some name</td>
				<td>2 pc</td>
				<td>32 CZK</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<th scope="row">Sum</th>
				<td>2 pc</td>
				<td>32 CZK</td>
			</tr>
		</tfoot>
	</table>

    <button>Pay</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Cart'
})
</script>