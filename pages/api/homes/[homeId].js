import db from "../../../lib/dbConnect";
import Home from "../../../models/home";


export async function handler (req, res) {
    if(req.method === "GET"){
      const { homeId } = req.params;

        await db.connect();
        const home = await Home.findById(postId);
        db.disconnect();

        if (!home) {
            res.status(404).json({message: "Home Not Found"});
            return;
        }

        res.status(200).json({ home });
    }
}

