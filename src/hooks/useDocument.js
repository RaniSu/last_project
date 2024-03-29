import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'

export const useDocument = (collection, id) => {
	const [document, setDocument] = useState(null)
	const [error, setError] = useState(null)

	// realtime document data
	useEffect(() => {
		const ref = projectFirestore.collection(collection).doc(id)

		const unsubscribe = ref.onSnapshot(
			(snapshot) => {
				// need to make sure the doc exists & has data
				if (snapshot.exists) {
					setDocument({
						doc: snapshot,
						id: snapshot.id,
						...snapshot.data(),
					})
					setError(null)
				} else {
					setError('No such document exists')
				}
			},
			(err) => {
				console.log(err.message)
				setError('failed to get document')
			}
		)

		// unsubscribe on unmount
		return () => unsubscribe()
	}, [collection, id])

	return { document, error }
}
