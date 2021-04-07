/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/lipenghuihenu.github.io/2020/07/22/你好/index.html","20b12e344a76b24b30d0afdf7050ef5b"],["/lipenghuihenu.github.io/2020/07/26/Hexo-admin插件使用/index.html","3df3c4e95bd8a9232cb55c0e2921cf7b"],["/lipenghuihenu.github.io/2021/04/07/hello-world/index.html","7815bf5c854bd560a95088ba87993d82"],["/lipenghuihenu.github.io/about/index.html","ae2b384bc03f5ca9c55869084c8b7791"],["/lipenghuihenu.github.io/archives/2020/07/index.html","f38ac5a3d9e018ee958e1a3fd6b935a9"],["/lipenghuihenu.github.io/archives/2020/index.html","70029911711558527767c2dccd4e0b5f"],["/lipenghuihenu.github.io/archives/2021/04/index.html","085165d5dc0785bc13b05ff62fc2b2a9"],["/lipenghuihenu.github.io/archives/2021/index.html","8174bc830beb0ba6e8757ddb692a4fb7"],["/lipenghuihenu.github.io/archives/index.html","68509dfd978103d6487b4db249a45fe2"],["/lipenghuihenu.github.io/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/lipenghuihenu.github.io/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/lipenghuihenu.github.io/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/lipenghuihenu.github.io/categories/Hexo/index.html","52bd46e6dde9fba7a86ea7f9f950075a"],["/lipenghuihenu.github.io/categories/index.html","5b71161c9cc7b8cd76de6424cf9905c6"],["/lipenghuihenu.github.io/css/VolantisTags.css","00e86b5f8f0c685af0cd50a0e5c72c14"],["/lipenghuihenu.github.io/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/lipenghuihenu.github.io/css/index.css","fa1ac0441cb76ab05a8bdb2e5def3a29"],["/lipenghuihenu.github.io/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/lipenghuihenu.github.io/css/volantis.css","cd2a3ce6b8506d280e2ed38354b97b44"],["/lipenghuihenu.github.io/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/lipenghuihenu.github.io/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/lipenghuihenu.github.io/img/alipay.jpg","3f382c9182e84bdbb4c5ddde4e2f3476"],["/lipenghuihenu.github.io/img/avatar.png","01fd6950a18c415383f3323b0d874ed8"],["/lipenghuihenu.github.io/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/lipenghuihenu.github.io/img/cover/bg0.jpg","227c284f50c2f53829a24d51077af375"],["/lipenghuihenu.github.io/img/cover/bg1.jpg","ca56a080a292048402bdf56c16e53c05"],["/lipenghuihenu.github.io/img/cover/bg10.jpg","304cb1245e076b490c9f1b43d8197d44"],["/lipenghuihenu.github.io/img/cover/bg2.jpg","ddb5eb139c8a704672457d365a2f505b"],["/lipenghuihenu.github.io/img/cover/bg4.jpg","5de4213d6f3f9aa744a8156a6ce6e628"],["/lipenghuihenu.github.io/img/cover/bg6.jpg","b42bdb3911fa8e275a98878301452b54"],["/lipenghuihenu.github.io/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/lipenghuihenu.github.io/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/lipenghuihenu.github.io/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/lipenghuihenu.github.io/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/lipenghuihenu.github.io/img/wechat.jpg","8bd0ec1546995f7b851e51e240fe5cc8"],["/lipenghuihenu.github.io/index.html","07f68a0ec41cd705999c928710169465"],["/lipenghuihenu.github.io/js/VolantisTags.js","3d18dd231aba8d8ae6ca554723630b3b"],["/lipenghuihenu.github.io/js/classify.js","2ec4725eff203ca3defe053eb5ec65ee"],["/lipenghuihenu.github.io/js/main.js","b382597891e958e71bb7c1099977ec66"],["/lipenghuihenu.github.io/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/lipenghuihenu.github.io/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/lipenghuihenu.github.io/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/lipenghuihenu.github.io/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/lipenghuihenu.github.io/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/lipenghuihenu.github.io/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/lipenghuihenu.github.io/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/lipenghuihenu.github.io/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/lipenghuihenu.github.io/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/lipenghuihenu.github.io/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/lipenghuihenu.github.io/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/lipenghuihenu.github.io/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/lipenghuihenu.github.io/link/index.html","325b9c77e03839cf07e9e0678826c32f"],["/lipenghuihenu.github.io/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/lipenghuihenu.github.io/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/lipenghuihenu.github.io/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/lipenghuihenu.github.io/sw-register.js","2ef08164ec78ed0da904c0ba999ce4e1"],["/lipenghuihenu.github.io/tags/Hexo/index.html","82eee592b8eac1c6307d5da5dca35e02"],["/lipenghuihenu.github.io/tags/index.html","3c9f78ff882ab2afc707f8a9cfcaf4be"],["/lipenghuihenu.github.io/tags/生活杂谈/index.html","bf72e99198cf3071a3d294a0d034d6a0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
