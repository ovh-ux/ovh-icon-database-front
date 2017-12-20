<template>
    <section>
        <page-title :pagename="'OVH Icon Database'"></page-title>
        <icons></icons>
    </section>
</template>

<script>
import PageTitle from '@/components/PageTitle/PageTitle'
import Icons from '@/components/Icons/Icons'

export default {
    name: 'HomePage',
    components: {
        Icons,
        PageTitle
    }
}
</script>
