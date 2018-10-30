if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js', {
      scope: ''
    })
    .then(swReg => {
      console.log('Service Worker is registered', swReg);
    })
    .catch(err => {
      console.error('Service Worker Error', err);
    })
  });
}

// if (!('serviceWorker' in navigator)) {
//     console.log('Browser does not support service worker.');
// }
// else {
//     navigator.serviceWorker.register('sw.js', {
//       scope:''
//     })
//         .then(function () {
//             console.log('Service worker has been registered.');
//         })
//         .catch(function (error) {
//             console.log('Error registering service worker:', error);
//         });
// }
