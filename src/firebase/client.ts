import { initializeApp, getApps } from 'firebase/app'
// 必要な機能をインポート
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { getFunctions } from 'firebase/functions'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,

	// apiKey: 'AIzaSyB_aW6s6_fxWZBmM_D54NnwUC9700It2JY',
	// authDomain: 'tokki-app.firebaseapp.com',
	// projectId: 'tokki-app',
	// storageBucket: 'tokki-app.appspot.com',
	// messagingSenderId: '117731301925',
	// appId: '1:117731301925:web:0d13c493eac5ba41f73dcc',
	// measurementId: 'G-SVZSLZ67GE',
}

if (!getApps().length) {
	initializeApp(firebaseConfig)
}

// ここでエクスポート
export const db = getFirestore()
export const storage = getStorage()
export const auth = getAuth()
export const functions = getFunctions()
