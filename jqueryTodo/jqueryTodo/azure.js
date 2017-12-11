var azure = {
    utilities: {},
    layout: {},
    page: {
        handlers: {},
        startUp: null
    },
    services: {},
    ui: {}
};
azure.moduleOptions = {
    APPNAME: "AzureApp",
    extraModuleDependencies: [],
    runners: [],
    page: azure.page //we need this object here for later use
}
var AZURE_AUTH = null;
azure.layout.startUp = function () {
    console.debug("azure.layout.startUp");
    if (AZURE_AUTH) {
        console.debug("setting AZURE_AUTH header to " + AZURE_AUTH);
        $.ajaxSetup({
            headers: {
                'AZURE-AUTH': AZURE_AUTH
            }
        });
    }
    //this does a null check on azure.page.startUp
    if (azure.page.startUp) {
        console.debug("azure.page.startUp");
        azure.page.startUp();
    }
};
azure.APPNAME = "AzureApp"; //legacy
$(document).ready(azure.layout.startUp);