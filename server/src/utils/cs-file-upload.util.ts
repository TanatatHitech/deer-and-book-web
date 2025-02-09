import { Storage } from '@google-cloud/storage'
import { extname } from 'path'

const storage = new Storage()
const bucketName = 'mls-bot-431413.appspot.com' // Replace with your bucket name
const bucket = storage.bucket(bucketName)

export async function uploadFileToGCS(file: any, folder: string = 'avatars'): Promise<string> {
	const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
	const fileName = `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`
	const blob = bucket.file(`${folder}/${fileName}`)

	const blobStream = blob.createWriteStream({
		resumable: false,
		contentType: file.mimetype,
	})

	return new Promise((resolve, reject) => {
		blobStream.on('error', err => {
			console.error('Error uploading file to GCS:', err)
			reject(new Error('Error uploading file'))
		})

		blobStream.on('finish', async () => {
			try {
				// Make the file public
				await blob.makePublic()

				// Return the public URL
				const publicUrl = `https://storage.googleapis.com/${bucketName}/${folder}/${fileName}`
				resolve(publicUrl)
			} catch (err) {
				console.error('Error making file public:', err)
				reject(err)
			}
		})

		blobStream.end(file.buffer)
	})
}
