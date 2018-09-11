import { Facenet } from 'facenet'
const facenet = new Facenet()
const imageFile = `${__dirname}/../tests/fixtures/two-faces.jpg`
const faceList = await facenet.align(imageFile)
console.log("hello")
for (const face of faceList){
	console.log('bounding box : ', face.boundingBox)
	console.log('landmarks:', face.facialLandMark)
	const embedding = await facenet.embedding(face)
	console.log('embedding:', embedding)
}
faceList[0].embedding = await facenet.embedding(faceList[0])
faceList[1].embedding = await facenet.embedding(faceList[1])
console.log('distance between the different face: ', faceList[0].distance(faceList[1]))
console.log('distance between the same face : ', faceList[0].distance(faceList[0]))
