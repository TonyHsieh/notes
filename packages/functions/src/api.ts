import { Resource } from "sst";
import { Handler } from "aws-lambda";
import { Example } from "@notes/core/example";

export const handler: Handler = async (_event) => {
  return {
    statusCode: 200,
    //body: `hello world!`,
    //body: `hello world!  Linked to ${Resource.Uploads.name}.`,
    body: `${Example.hello()} Linked to ${Resource.Uploads.name}.`,
  };
};
