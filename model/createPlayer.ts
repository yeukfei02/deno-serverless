import { getDynamodb } from "../db/db.ts";

const db = getDynamodb();
const tableName = "Players";

export const createPlayerModel = async (player: any) => {
  try {
    await db.putItem({
      TableName: tableName,
      Item: player,
    });
  } catch (e) {
    console.log("error = ", e);
  }
};
