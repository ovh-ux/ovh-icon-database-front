<template>
    <section>
      <page-title :pagename="'Log In'"></page-title>
      <login-form></login-form>
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
