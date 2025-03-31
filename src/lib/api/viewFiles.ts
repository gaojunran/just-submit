import { s3Client } from "@/s3Client";
import { ListObjectsCommand } from "@aws-sdk/client-s3";

export async function viewFiles() {
  const store = useSubmissionStore();
  const command = new ListObjectsCommand({
    Bucket: "just-submit",
    Prefix: `${store.dirId}/`
  })

  const response = await s3Client.send(command);

  // console.log(response.Contents);

  if (!response.Contents) {
    return [];
  } else {
    return response.Contents.map((file) => {
      return {
        name: file.Key?.split("/")[1],
        size: file.Size,
        key: file.Key
      }
    })
  }
}
