requirejs.config({
    baseUrl: './',
    paths: {
        "Vue": "https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue",
        "vue": "https://rawgit.com/edgardleal/require-vue/master/dist/require-vuejs"
    },
    shim: {
        "Vue": {"exports": "Vue"}
    }
});

// to use component in your code with RequireJS: 
// put a reference to your component file with or without extencion after 'vue!' 
require(["Vue", "vue!async.component"], function(Vue){
    var app = new Vue({
        el: "#app"
    });
});