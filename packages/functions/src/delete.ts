import { Resource } from "sst";
import { Util } from "@notes/core/util";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DeleteCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const main = Util.handler(async (event) => {
  const params = {
    TableName: Resource.Notes.name,
    Key: {
      userId: "123", // The id of the author
      noteId: event?.pathParameters?.id, // The id of the note from the path
    },
    ReturnValues: "ALL_OLD",
  };

  // Delete the item from the table
  let isDeleted = false
  let text = ""
  try {
    const result = await dynamoDb.send(new DeleteCommand(params));
    if (!result.Attributes) {
      throw new Error("Item not found.");
    }
    isDeleted = true;
    text = "Delete success"
  } catch (error) {
    isDeleted = false;
    console.error(error);
    text = "Delete: " + error;
  } 
  
  //await dynamoDb.send(new DeleteCommand(params));

  return JSON.stringify({ status: isDeleted, message: text });
});
