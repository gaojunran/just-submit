<script lang="ts" setup>
import { useToast } from '@/components/ui/toast'
// @ts-expect-error: no type for canvas-confetti
import confetti from 'canvas-confetti'
import { Copy, Eye, ToggleRight } from 'lucide-vue-next'

const store = useSubmissionStore()

const router = useRouter()
const passkey = ref(store.inputPasskey)
const isHide = ref(true)
const value = computed(() => isHide.value ? ['*', '*', '*', '*', '*', '*'] : passkey.value)

const { toast } = useToast()

function toggle() {
  isHide.value = !isHide.value
}

function copy() {
  navigator.clipboard.writeText(passkey.value.join(''))
  toast({
    title: '复制成功',
    description: '密钥已复制到剪贴板！',
  })
}

function toView() {
  navigator.clipboard.writeText(passkey.value.join(''))
  store.state = store.AGAIN_AUTHORIZED
  router.push('/view')
}

setTimeout(() => {
  confetti({
    particleCount: 150,
  })
}, 500)
</script>

<template>
  <div class="w-80">
    <MySteps :step="3" />
    <div class="mt-10 text-left font-bold text-2xl ">
      提交成功 🎉
    </div>
    <Button class="w-full mt-6" @click="toView">
      <Eye />
      查看或覆盖作业
    </Button>
    <div class="mt-4 text-left text-white/50">
      此操作会将密钥复制到剪贴板，并跳转到作业页面。
    </div>
    <Separator class="my-8" />
    <div class="text-left text-2xl font-bold">
      密钥 🔑
    </div>
    <div class="my-4 text-left text-white/50">
      密钥可用于查看或替换您此次作业。请务必妥善保管好密钥！
    </div>
    <div class="flex justify-center mt-6">
      <PinInput id="pin-input" v-model="value" :disabled="true" placeholder="○">
        <PinInputGroup>
          <PinInputInput v-for="(id, index) in 6" :key="id" :index="index" />
        </PinInputGroup>
      </PinInput>
    </div>
    <div class="flex justify-center items-center gap-4 mt-8">
      <Button class="w-full" @click="toggle">
        <ToggleRight />
        显示 / 隐藏
      </Button>
      <Button class="w-full" @click="copy">
        <Copy />
        复制
      </Button>
    </div>
  </div>
</template>
