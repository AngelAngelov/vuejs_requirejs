<template>
    <div>
        {{text}}
        <nested-component></nested-component>
        <button v-on:click="addEl">Add</button>
        <div id="container"></div>
    </div>
</template>
    
<script>
    define(["Vue", "vue!nested.component"], function(Vue) {
        Vue.component("my-component", {
            template: template, // the variable template will be injected
            data: function() {
                return { text: "Async!" };
            },
            methods: {
                addEl: function(){
                    const el = document.querySelector('#container');
                    let component = window.vue.component('nested-component')
                    let node = new component();
                    node.$mount('#container');                
                }
            }
        });
    });
</script>