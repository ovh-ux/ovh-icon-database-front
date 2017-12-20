<template>
    <section>
        <PageTitle :pagename="'OVH Icon Database'"></PageTitle>
        <Icons></Icons>
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
