import { useErrorToast } from "@/composables/useErrorToast";
import { supabase } from "@/supabase";

export async function getState() {
  const store = useSubmissionStore();
  const { data, error } = await supabase.from("submissions")
                .select("passkey")
                .eq("stu_id", store.stuId)
                .eq("stu_name", store.stuName)
                .eq("hw_id", store.hwId)
                .limit(1);
  if (error) {
    useErrorToast().error(error.message);
    return;
  }
  if (data?.[0] === undefined) {
    return store.FIRST;
  } else if (data?.[0].passkey === store.getCachedPasskey()) {
    return store.AGAIN_AUTHORIZED;
  } else {
    return store.AGAIN_UNAUTHORIZED;
  }
}
