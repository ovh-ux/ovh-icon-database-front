<template>
    <header class="header">
        <div class="header__container">
            <h1 class="header__title">
                <img class="header__title__logo" src="../../assets/logo.svg" alt="Ovh group logo" >
                <span>UI Kit</span><span class="header__title--colored">{{ title }}</span>
            </h1>
            <LoginButton></LoginButton>
        </div>
    </header>
</template>

<script>
import LoginButton from '@/components/AppHeader/LoginButton/LoginButton';

export default {
    name: 'AppHeader',
    data () {
        return {
            title: 'Icon Database'
        }
    },
    components: {
        LoginButton
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "./AppHeader.scss";
</style>
