<template>
    <div>{{parameter.name}}</div>
</template>

<script>
    export default {
        name: 'DownloadParameter',
        props: {
            parameter: {
                type: Object
            }
        }
    }
</script>
