<template>
    <button class="loginButton">
        Log In
    </button>
</template>

<script>
export default {
    name: 'LoginButton'
}
</script>
<style lang="scss" scoped>
.loginButton {
    float: right;
    border: none;
    cursor:pointer;
    color: white;
    background-color: transparent;
    width:110px;
    height:30px;
    overflow: hidden;
    &:hover, &:focus, &:active {
        font-weight: bold;
    }
}
</style>
