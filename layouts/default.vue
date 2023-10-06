
import TheHeader from '../components/TheHeader.vue';
<template>
    <div class="h-screen flex flex-col justify-between">
        <div>
            <TheHeader />
            <slot />
        </div>
        <div class="bg-red-500">
            <h1>Footer</h1>
        </div>
    </div>
</template>