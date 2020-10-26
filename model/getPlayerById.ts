import { getDynamodb } from "../db/db.ts";

const db = getDynamodb();
const tableName = "Players";

export const getPlayerByIdModel = async (id: string) => {
  let result = null;

  try {
    const params = {
      TableName: tableName,
      Key: {
        id: id,
      },
    };
    result = await db.getItem(params);
  } catch (e) {
    console.log("error = ", e);
  }

  return result;
};
