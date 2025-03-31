import { s3Client } from "@/s3Client";
import { GetObjectCommand } from "@aws-sdk/client-s3";

export async function downloadFile(key: string) {
  const command = new GetObjectCommand({
    Bucket: "just-submit",
    Key: key,
  });

  const response = await s3Client.send(command);

  const fileName = key.split("/").pop();

  if (!response.Body) {
    console.error("No file content received.");
    return;
  }

  const blob = await response.Body.transformToByteArray();
  const blobUrl = URL.createObjectURL(new Blob([blob]));

  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = fileName ?? "unknown-file";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);


}
