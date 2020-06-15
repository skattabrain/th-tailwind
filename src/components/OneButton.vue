<template>
	<button class="inline-block border-2 rounded-none leading-normal text-center select-none text-base border-transparent py-1 px-3 focus:outline-none focus:shadow-button-focus"
		:class="typeClasses">
		<slot/>
	</button>
</template>

<script>
export default {
	name: 'OneButton',
	props: {
		type: {
			default: 'default',
			type: String,
		}
	},
	computed: {
		typeClasses() {
			switch (this.type) {
				case 'default':
					return 'text-grey-900 bg-grey-200 border-grey-200 focus:bg-grey-200 focus:border-blue-600 hover:bg-grey-300 hover:border-grey-300 active:bg-grey-400 active:border-grey-400';

				case 'primary':
					return 'text-white bg-primary-500 border-primary-500 focus:bg-primary-500 focus:border-primary-600 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700';

				default:
					return 'bg-grey-500';
			}

		}
	}
}
</script>
