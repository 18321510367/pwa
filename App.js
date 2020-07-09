if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/pwa/serviceWorker.js')
		.then(reg => {
			if (reg.intalling) {
				console.log('installing');
			} else if (reg.waiting) {
				console.log('waiting');
			} else if (reg.active) {
				console.log('active');
			}
		});
};