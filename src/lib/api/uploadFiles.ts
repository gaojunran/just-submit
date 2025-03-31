import { PutObjectCommand } from "@aws-sdk/client-s3";
import { supabase } from "@/supabase";
import { s3Client } from "@/s3Client";
import { useErrorToast } from "@/composables/useErrorToast";





export async function uploadFiles(files: File[]) {
  const store = useSubmissionStore();

  for (const file of files) {
    const params = {
      Bucket: "just-submit",
      Key: `${store.dirId}/${file.name}`,
      Body: file,
    }
    try {
      await s3Client.send(new PutObjectCommand(params));
      console.log(`${file.name} uploaded successfully!`);
    } catch (error) {
      useErrorToast().error(error as string);
      console.error(`Error uploading ${file.name}:`, error);
    }
  }
  const { error } = await supabase.from("submissions")
                .insert([{
                  stu_id: store.stuId,
                  stu_name: store.stuName,
                  hw_id: store.hwId,
                  passkey: store.passkey,
                  dir_id: store.dirId,
                }])
                .select()
  error && useErrorToast().error(error.message);
}
