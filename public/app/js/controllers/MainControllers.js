var app = angular.module('myApp.controllers', []);
/**
 * Main / Root controller
 */

app.controller('MainCtrl', function ($scope,$timeout) {
})
app.controller('testCtrl', function ($scope,$proxy) {
    $proxy.configBase('/model/')
    var searchModel = $proxy.create("Search.*")
    var accountModel = $proxy.create("Account.*")
    var message = $proxy.create("message.*");
    message.add({"title":"sf","message":"000000000","messageType":0,"other":"xxxx","creator":"xxxxxx"},{"username":"11003700","apiKey":"6b05dd4fc9054dc6a17224d27d034583"}).done(function(data){
        console.dir(data);
    })

    //searchModel
    //    .list( { q: 'ihpone6' } )
    //    .list( { q: '冲锋衣' } )
    //    .suggest( { q: 'i' } )
    //    .getNav( { q: '滑板' } )
    //    .done( function( data1, data2, data3, data4 ) {
    //        console.log( '这是由前端合并请求的结果:');
    //        console.log( {
    //            "list_ihpone6": data1,
    //            "list_冲锋衣": data2,
    //            "suggest_i": data3,
    //            "getNav_滑板": data4
    //        } );
    //    } );
    //searchModel.getNav({ q: '滑板' }).done(function(data){
    //    console.log(data)
    //})
    //accountModel.update({id:1,name:"test"},{id:"1","name":3,"pp":"ssss"}).done(function(data){
    //    console.log(data)
    //})

})

