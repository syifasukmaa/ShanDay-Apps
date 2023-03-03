import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');
  if ('serviceWorker' in navigator && navigator.onLine) {
    try {
      await wb.register();
      console.log('Service worker registered');
    } catch (error) {
      console.log('Failed to register service worker', error);
    }
  } else {
    // eslint-disable-next-line no-alert
    alert('saat ini anda sedang offline');
  }
};

export default swRegister;
