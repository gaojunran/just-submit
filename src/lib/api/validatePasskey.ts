import { useErrorToast } from "@/composables/useErrorToast";
import { supabase } from "@/supabase";

export async function validatePasskey(passkey: string) {
  const store = useSubmissionStore();
  const {data: result, error} = await supabase.from("submissions").select("passkey")
                .eq("stu_id", store.stuId)
                .eq("stu_name", store.stuName)
                .eq("hw_id", store.hwId)
                .order("created_at", { ascending: false })
                .limit(1);
  error && useErrorToast().error(error.message);

  return result?.[0].passkey === passkey;
}
