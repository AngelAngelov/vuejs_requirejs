<template>
    <div>
        {{text}}
    </div>
</template>
    
<script>
    define(["Vue", "vue!nested.component"], function(Vue) {
        Vue.component("nested-component", {
            template: template, // the variable template will be injected
            data: function() {
            return { text: "Nested!" };
            }
        });
    });
</script>