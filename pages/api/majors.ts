import { gApi } from "@/src/api/google-sheets-api";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const obj = await gApi.listMajors();
    res.status(obj.status).json(obj.data);
}