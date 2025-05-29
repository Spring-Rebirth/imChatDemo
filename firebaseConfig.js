import firebase from '@react-native-firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyCmbm5D-PftmsteyS0LE2aYOZfB-yqAeVc',
    authDomain: 'im-chat-demo.firebaseapp.com',
    projectId: 'im-chat-demo',
    storageBucket: 'im-chat-demo.firebasestorage.app',
    messagingSenderId: '690718059209',
    appId: '1:690718059209:web:e99c513f80aaf778e7fb18',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
