import { initializeApp } from 'firebase-admin'
import { cert, getApps } from 'firebase-admin/app'
import { getFirestore } from 'firebase/firestore'

if (!getApps()?.length) {
	initializeApp({
		credential: cert(
			JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string),
		),
	})
}

export const adminDB = getFirestore()
