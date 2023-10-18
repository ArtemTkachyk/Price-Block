import fs from "fs";

export default function handler(req, res) {
  try {
    const filePath = "./public/data.json";
    const data = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(data);

    res.status(200).json({ data: jsonData });
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).json({ error: "Read error:" });
  }
}
