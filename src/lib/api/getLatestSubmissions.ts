import { supabase } from "@/supabase";

export async function viewSubmissions(hwId: number) {
  // 对每个学生来说，只返回其最后一次提交。
  const { data, error } = await supabase.from("select_latest_view").select("*").eq("hw_id", hwId);
  if (error) {
    useErrorToast().error(error.message)
  }
  return data
}
