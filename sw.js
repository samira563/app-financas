const CACHE_NAME = 'financas-v1';

self.addEventListener('install', (evento) => {
  console.log('Service Worker: Instalado');
});

self.addEventListener('activate', (evento) => {
  console.log('Service Worker: Ativado');
});

self.addEventListener('fetch', (evento) => {
  evento.respondWith(
    fetch(evento.request).catch(() => {
      console.log('Usuário está offline.');
    })
  );
});
