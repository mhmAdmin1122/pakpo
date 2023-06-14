import { Teams } from "@/models/teams";
import {mongoosedbTeamConnection} from '@/lib/mongoosedbteam'

export default async function handleteam(req, res) {
  const { method } = req;
  await mongoosedbTeamConnection();

  if(method === "GET"){
    res.json(await Teams.find().limit(6))
  }

  if (method === "POST") {
    const { memberName, memberPosition, age, image, bio } = req.body;
    const teamsDoc = await Teams.create({
      memberName,
      memberPosition,
      age,
      image,
      bio,
    });
    res.json(teamsDoc);
  }
};