<template>
    <div :class="{ 'hidden' : !loading }">
        <fulfilling-square-spinner
            class="mx-auto mt-5"
            :animation-duration="2000"
            :size="50"
            color="#11fe48"
        />
    </div>
</template>

<script>
import { FulfillingSquareSpinner } from 'epic-spinners'

export default {
    name: 'SquareSpinner',
    props: {
        loading: Boolean
    },
    components: {
        FulfillingSquareSpinner 
    },
}
</script>
