const version = 'v1';

self.addEventListener('install', e => {
	e.waitUntil(
		caches.open(version).then(cache => {
			return cache.addAll([
				'/pwa/App.js',
				'/pwa/index.html',
				'/pwa/css/index.css',
				'/pwa/img/bg.jpg'
			]);
		})
	);
});

self.addEventListener('fetch', e => {
	e.respondWith(caches.match(e.request).then(response => {
		if (response !== undefined) {
			return response;
		} else {
			return fetch(e.request).then(response => {
				caches.open(version).then(cache => {
					cache.put(e.request, response.clone);
				});
				return response;
			})
			.catch(err => {
				// return caches.match('defaultPage.html');
			});
		}	
	}));
});