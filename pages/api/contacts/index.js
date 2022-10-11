import Contact from "../../../models/contact";
import db from "../../../lib/dbConnect";


export default async function handler(req, res) {
    if (req.method == "GET"){

        await db.connect();

        const contacts = await Contact.find({});

        await db.disconnect();

        res.status(200).json({contacts});
    } else if (req.method == "POST"){
        await db.connect();

        const { name, email, message } = req.body;

        const contact = Contact.create({
            name,
            email,
            message,
        });

        await db.disconnect();
         res.status(201).json({ contact });
    } else {
        res.status(405).json({ error: "Only POST and GET method are allowed"})
    }
}