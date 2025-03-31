import { useErrorToast } from "@/composables/useErrorToast";
import { supabase } from "@/supabase";

export async function getDirId() {
  const store = useSubmissionStore();
  const { data, error } = await supabase.from("submissions")
                .select("dir_id")
                .eq("stu_id", store.stuId)
                .eq("stu_name", store.stuName)
                .eq("hw_id", store.hwId)
                .limit(1);
  if (error) {
    useErrorToast().error(error.message);
    return;
  }
  return data?.[0].dir_id as number;
}

