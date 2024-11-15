import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

const echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.VITE_REVERB_APP_KEY, // Use environment variable for security
    cluster: process.env.VITE_REVERB_APP_CLUSTER,
    forceTLS: true,
});

export default echo;