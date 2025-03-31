import { useToast } from "@/components/ui/toast";


export function useErrorToast() {
  function error(err: string) {
    console.error(err)
    const { toast } = useToast();
    toast({
      title: "发生错误",
      description: err,
      variant: "destructive"
    })
  }

  return {
    error
  }
}
