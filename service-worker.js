console.log('Service worker loaded');

self.addEventListener('install', (event) => {
	console.info(`instalando service worker`);
});

self.addEventListener('activate', (event) => {
	console.info(`ativando service worker`);
});