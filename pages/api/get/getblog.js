import { getDocumentById } from "@/firebase";


export default async function handler(req, res) {
    const {method} = req;
    if (method === 'GET'){
        const { id } = req.query;
        try {
            const blog = await getDocumentById(id);
            res.status(200).json({blog: blog});
        } catch (error) {
            console.error('Error writing to Firebase:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        // Handle other HTTP methods
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}