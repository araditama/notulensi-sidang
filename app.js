new Vue({
    el: '#vue-app',
    data: {
        type: "type",
        input: "",
        logs: [
        ]
    },
    methods: {
        logQuestion: function(){
            this.type = "Question: ";
            console.log('you Question');
        },
        logAnswer: function(){
            this.type = "Answer: ";
            console.log('you answer');
        },
        logJustification: function(){
            this.type = "Justification: ";
            console.log('you justification');
        },
        logOrder: function(){
            this.type = "Order: ";
            console.log('you order');
        },
        saveLog: function() {
            this.logs.push(new Object({type:this.type, des:this.input}));
            this.input = "";
        }
    },
    computed: {
    }
});