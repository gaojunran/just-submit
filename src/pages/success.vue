<script lang="ts" setup>
// @ts-ignore
import confetti from "canvas-confetti";

const value = ref(['1', '2', '3', '4', '5', '6'])

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
      <PinInput
        id="pin-input"
        v-model="value"
        placeholder="○"
        @complete="handleComplete"
      >
        <PinInputGroup>
          <PinInputInput
            v-for="(id, index) in 6"
            :key="id"
            :index="index"
          />
        </PinInputGroup>
      </PinInput>
    </div>

  </div>

</template>
