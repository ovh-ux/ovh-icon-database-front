<template>
    <section>
      <PageTitle :pagename="'Log In'"></PageTitle>
      <LoginForm></LoginForm>
    </section>
</template>

<script>
import LoginForm from '@/components/LoginForm/LoginForm';
import PageTitle from '@/components/PageTitle/PageTitle';

export default {
    name: 'LoginPage',
    components: {
        LoginForm,
        PageTitle
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
