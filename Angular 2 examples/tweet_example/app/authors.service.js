System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getAuthors = function () {
                    return ["authors1", "authors2", "authors3"];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=authors.service.js.map