<script lang="ts" setup>
const props = defineProps<{
  step: number
}>()

const store = useSubmissionStore();
const router = useRouter()
const curr = ref(props.step)

watch(curr, (step) => {
  if (step === 1) {
    store.reset();
    router.push("/")
  } else if (step === 2) {
    router.push("/upload")
  } else if (step === 3) {
    router.push("/success")
  }
})
</script>

<template>
  <!-- 仅允许第二步向第一步跳转 -->
  <Stepper :default-value="curr" v-model="curr" class="justify-between">
    <StepperItem :step="1" :disabled="curr === 3">
      <StepperTrigger>
        <StepperIndicator>1</StepperIndicator>
        <StepperTitle :class="{'text-white/50': curr !== 1, 'text-white': curr === 1}">填写信息</StepperTitle>
      </StepperTrigger>
      <StepperSeparator />
    </StepperItem>
    <StepperItem :step="2" :disabled="curr !== 2">
      <StepperTrigger>
        <StepperIndicator>2</StepperIndicator>
        <StepperTitle :class="{'text-white/50': curr !== 2, 'text-white': curr === 2}">上传作业</StepperTitle>
      </StepperTrigger>
    </StepperItem>
    <StepperItem :step="3" :disabled="curr !== 3">
      <StepperTrigger>
        <StepperIndicator>3</StepperIndicator>
        <StepperTitle :class="{'text-white/50': curr !== 3, 'text-white': curr === 3}">获取密钥</StepperTitle>
      </StepperTrigger>
    </StepperItem>
  </Stepper>
</template>
