import { getDynamodb } from "../db/db.ts";

const db = getDynamodb();
const tableName = "Players";

export const deletePlayerByIdModel = async (id: string) => {
  try {
    const params = {
      TableName: tableName,
      Key: {
        id: id,
      },
    };
    await db.deleteItem(params);
  } catch (e) {
    console.log("error = ", e);
  }
};
