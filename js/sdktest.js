/**
 * Created by C.F. Overgaard on 14/11/2016.
 */

var SDK = {

    serverURL: "https://localhost:8000",

    request: function (options, cb) {

        //Perform XHR
        $.ajax({
            url: SDK.serverURL + options.url,
            method: options.method,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(options.data),
            xhrFields: {withCredentials: true },
            success: function (data, status, xhr) {
                cb(null, data, status, xhr);
            },
            error: function (xhr, status, errorThrown) {
                cb({xhr: xhr, status: status, error: errorThrown});
            }
        });
    },

    User: {
        create: function(data, cb) {
            SDK.request({method: "POST", url: "/createuser", data: data}, cb);
        },

        getAll: function(cb){
            SDK.request({method: "GET", url: "/getusers",
            }, cb);
        },

        current:function () {
            return SDK.Storage.load("username");
        },

        getMyReservations: function (cb){
            SDK.request({method: "GET", url: "/getmyreservations"}, cb);
        },

        delete: function(cb){
            SDK.request({method: "DELETE", url: "/deleteuser"}, cb);
        },

        update: function(data, cb){
            SDK.request({method: "POST", url:"/updateuser",data:data},cb);
        },
    },


    Book: {
        getAll: function (cb) {
            SDK.request({
                method: "GET", url: "/getbooks",
            }, cb);
        },

        create: function (data, cb){
            SDK.request({method: "POST", url: "/createbook", data: data}, cb);
        },
    },

    Ad: {
        getAds: function (cb) {
            SDK.request({
                method: "GET", url: "/getads",}, cb);
        },

        getMyAds: function (cb) {
            SDK.request({
                method: "GET", url: "/getmyads"}, cb);
        },

        createAd: function (data, cb){
            SDK.request({
                method: "POST", url: "/createad", data: data,}, cb);
        },

        reserveAd: function (data, cb){
            SDK.request({
                method: "POST", url: "/reservead", data: data,}, cb);
            },
        },


    logOut:function() {
        SDK.Storage.remove("sessionId");
        SDK.Storage.remove("userId");
        SDK.Storage.remove("user");
    },

    login: function (username, password, cb) {
        this.request({
            data: {
                username: username,
                password: password
            },
            url: "/login",
            method: "POST",
        }, function (err, data) {

            if (err) return cb(err);

            SDK.Storage.persist("sessionId", data.password);
            SDK.Storage.persist("userId", data.userId);
            SDK.Storage.persist("username", data.username);

            cb(null, data);

        });
    },

    Storage: {
        prefix: "brugtbogsbors",
        persist: function (key, value) {
            window.localStorage.setItem(this.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
        },
        load: function (key) {
            var val = window.localStorage.getItem(this.prefix + key);
            try {
                return JSON.parse(val);
            }
            catch (e) {
                return val;
            }
        },
        remove: function (key) {
            window.localStorage.removeItem(this.prefix + key);
        }
    },



};

