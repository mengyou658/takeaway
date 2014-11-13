require.config({
    baseUrl : "/js/lib",
    shim : {
        "underscore" : {
            exports : "_"
        }
    },
    path : {
        nav : "../widget/home/nav",
        ads : "../widget/home/ads",
        collection: "../widget/home/collection",
        more_shops : "../widget/home/more_shops",
        shops : "../widget/home/shops",
        swipe : "../widget/home/swipe"
    }
});
