var emarsys = {
    
    track: function (args, successCallback, errorCallback) {
        cordova.exec(successCallback,errorCallback,'EmarsysPlugin','track',args);
    },
    setContact: function(contactValue,contactFieldID,successCallback,errorCallback){
        cordova.exec(successCallback,errorCallback,'EmarsysPlugin','setContact',[{"contactValue":contactValue,"contactFieldID":contactFieldID}]);  

    },
    setPushToken: function(token,successCallback,errorCallback){
        cordova.exec(successCallback,errorCallback,'EmarsysPlugin','setContact',[{"token":token}]);  

    }
}
module.exports = emarsys;