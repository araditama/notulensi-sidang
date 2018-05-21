new Vue({
    el: '#vue-app',
    data: {
        type: "type",
        input: "",
        logs: [
        ],
        selectedValue: null,
        absensi: [
            "Apache", "Cochise", 'joko', 'ilham'
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
            this.logs.push(new Object({user:this.selectedValue, type:this.type, des:this.input}));
            this.input = "";
        },
        del: function(index) {
            this.logs.splice(index, 1);
        },
        edit: function(index) {
        }
    },
    computed: {
    }
});
