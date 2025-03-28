<script lang="ts" setup>
import {File, X} from 'lucide-vue-next'

</script>




<template>
  <div class="w-80">
    <MySteps :step="2" />
    <Button class="w-full my-6">选择文件</Button>

    <div class="border-2 border-white/30 h-20 rounded-lg font-mono flex gap-4 items-center px-4 py-4">
    <File :size="30" color="#ffffff8f" />
    <div class="text-left flex-1">
      <div class="font-bold">index.js</div>
      <div class="text-white/50">12.1kb</div>
    </div>
    <Button variant="outline" size="icon">
      <X :size="30" />
    </Button>
  </div>
  <Button class="w-full my-6">上传</Button>
  </div>


</template>
