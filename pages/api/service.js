import { Services } from "@/models/service";
import {mongoosedbServiceConnection} from '@/lib/mongoosedbservice'

export default async function handleteam(req, res) {
  const { method } = req;
  await mongoosedbServiceConnection();

  if(method === "GET"){
    res.json(await Services.find())
  }

  if (method === "POST") {
    const { title, about, image } = req.body;
    const serviceDoc = await Services.create({
      title,
      about,
      image
    });
    res.json(serviceDoc);
  }
};