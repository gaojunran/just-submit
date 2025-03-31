<script lang="ts" setup>
import { ToggleRight, Copy } from "lucide-vue-next";
import { useToast } from "@/components/ui/toast";
// @ts-ignore
import confetti from "canvas-confetti";
const store = useSubmissionStore();


const passkey = ref(store.inputPasskey)
const isHide = ref(true)
const value = computed(() => isHide.value ? ['*', '*', '*', '*', '*', '*'] : passkey.value)

const { toast } = useToast()

const toggle = () => {
  isHide.value = !isHide.value
}

const copy = () => {
  navigator.clipboard.writeText(passkey.value.join(''))
  toast({
    title: '复制成功',
    description: '密钥已复制到剪贴板！',
  })
}

setTimeout(() => {
  confetti({
    particleCount: 150
  });
}, 500)

</script>

<template>
  <div class="w-80">
    <MySteps :step="3" />
    <div class="mt-10 text-left font-bold text-2xl ">
      提交成功 🎉
    </div>
    <Separator class="my-8"></Separator>
    <div class="text-left text-2xl font-bold">
      密钥 🔑
    </div>
    <div class="my-2 text-left text-white/50 font-bold">
      密钥可用于查看或替换您此次作业。请务必妥善保管好密钥！
    </div>
    <div class="flex justify-center mt-6">
      <PinInput :disabled="true" id="pin-input" v-model="value" placeholder="○">
        <PinInputGroup>
          <PinInputInput v-for="(id, index) in 6" :key="id" :index="index" />
        </PinInputGroup>
      </PinInput>


    </div>
    <div class="flex justify-center items-center gap-4 mt-8">
      <Button @click="toggle" class="w-full">
        <ToggleRight />
        显示 / 隐藏
      </Button>
      <Button @click="copy" class="w-full">
        <Copy />
        复制
      </Button>
    </div>
  </div>

</template>
