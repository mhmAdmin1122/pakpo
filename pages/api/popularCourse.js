import { PopCourse } from "@/models/popCourse";
import {mongodbPopCourseConnection} from '@/lib/mongodbPopCourse'

export default async function handleteam(req, res) {
  const { method } = req;
  await mongodbPopCourseConnection();

  if(method === "GET"){
    res.json(await PopCourse.find().limit(6))
  }

  if (method === "POST") {
    const { name, about, price, category, image } = req.body;
    const teamsDoc = await PopCourse.create({
      name,
      about,
      price,
      category,
      image,
    });
    res.json(teamsDoc);
  }
};