<template>
    <section>
      <h2>Log In</h2>
      <LoginForm></LoginForm>
    </section>
</template>

<script>
import LoginForm from '@/components/LoginForm/LoginForm';

export default {
    name: 'LoginPage',
    components: {
        LoginForm
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
