<script lang="ts" setup>
import { File, Download } from 'lucide-vue-next';




</script>



<template>

<div class="w-80">
  <h1 class="text-left text-2xl font-bold mb-6">已提交的作业 📚</h1>
  <div class="border-2 border-white/30 h-20 rounded-lg font-mono flex gap-4 items-center px-4 py-4">
    <File :size="30" color="#ffffff8f" />
    <div class="text-left flex-1">
      <div class="font-bold">index.js</div>
      <div class="text-white/50">12.1kb</div>
    </div>
    <Button variant="outline" size="icon">
      <Download :size="30" class="pointer-cursor" />
    </Button>
  </div>
  <Button class="w-full mt-12"> 重新提交</Button>
  <div class="text-left text-white/50 mt-4 text-sm">重新提交将覆盖已提交的作业，请谨慎操作。</div>
</div>

</template>
