<template>
    <div :class="{ 'hidden' : !loading }">
        <fulfilling-square-spinner
            class="mx-auto mt-5"
            :animation-duration="2000"
            :size="50"
            :color="primaryColor"
        />
    </div>
</template>

<script>
import { FulfillingSquareSpinner } from 'epic-spinners'
import Colors from '../../colors'

const colors = new Colors()

export default {
    name: 'SquareSpinner',
    props: {
        loading: Boolean
    },
    components: {
        FulfillingSquareSpinner 
    },
    data() {
        return {
            primaryColor: ''
        }
    },
    mounted() {
        this.primaryColor = colors.primary
    }
}
</script>
