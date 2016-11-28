/**
 * Created by C.F. Overgaard on 14/11/2016.
 */

var SDK = {

    serverURL: "https://localhost:8000",

    request: function (options, cb) {

        var headers = {};
        if (options.headers) {
            Object.keys(options.headers).forEach(function (h) {
                headers[h] = (typeof options.headers[h] === 'object') ? JSON.stringify(options.headers[h]) : options.headers[h];
            });
        }

        //Perform XHR
        $.ajax({
            url: SDK.serverURL + options.url,
            method: options.method,
            contentType: "application/json",
            headers: headers,
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
            return SDK.Storage.load("user");
        },
    },


    Book: {
        getAll: function (cb) {
            SDK.request({
                method: "GET", url: "/getbooks",
            }, cb);
        },
    },

    Ad: {
        getAds: function (cb) {
            SDK.request({
                method: "GET", url: "/getads",
            }, cb);
        },

        getMyAds: function (cb) {
            SDK.request({
                method: "GET", url: "/getmyads",
            }, cb);
        },
    },

    logOut:function() {
        SDK.Storage.remove("tokenId");
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



            SDK.Storage.persist("sessionId", data.sessionid);
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

