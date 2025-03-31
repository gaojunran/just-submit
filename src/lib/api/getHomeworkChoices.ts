import { useErrorToast } from "@/composables/useErrorToast";
import { supabase } from "@/supabase";
import { IHomeworkChoices } from "@/types";

export async function getHomeworkChoices() {
  const currentTimestamp = new Date().toISOString();
  const {data: homeworks, error} = await supabase.from("homeworks")
                .select("id,category,name,end_time")
                .lte("start_time", currentTimestamp)
                .gte("end_time", currentTimestamp);
  error && useErrorToast().error(error.message);
  return (Object.entries(
            Object.groupBy(homeworks ?? [], ({category}) => category))
         ) as IHomeworkChoices;
}
