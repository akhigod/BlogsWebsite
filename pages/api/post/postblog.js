import { addBlogs } from "@/firebase";


export default async function handler(req, res) {
    const {method} = req;
    if (method === 'POST'){
        const { author, title, body, uid } = req.body;
        try {
            await addBlogs(author, title, body, uid);
            res.status(200).json({ message: 'You have posted successfully' });
        } catch (error) {
            console.error('Error writing to Firebase:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        // Handle other HTTP methods
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}