<script lang="ts" setup>
import { downloadFile } from '@/lib/api/downloadFile';
import { viewFiles } from '@/lib/api/viewFiles';
import { renderSize } from '@/lib/tools';
import { File, Download, RefreshCcw, ChevronRight } from 'lucide-vue-next';
const router = useRouter()
const files = ref([] as { name?: string, size?: number, key?: string }[])
const upload = () => {
  router.push('/upload')
}
const store = useSubmissionStore()
const submitAnother = () => {
  store.reset();
  router.push('/')
}

onMounted(async () => {
  files.value = await viewFiles()
  console.log(store.dirId);
})

</script>



<template>

<div class="w-80">
  <h1 class="text-left text-2xl font-bold mb-6">已提交的作业 📚</h1>
  <div class="border-2 border-white/30 hover:border-white transition duration-300 min-h-20 rounded-lg font-mono flex gap-4 items-center px-4 py-4 mt-4" v-for="file in files" :key="file.key">
    <File :size="30" color="#ffffff8f" />
    <div class="text-left flex-1">
      <div class="font-bold">{{ file.name }}</div>
      <div class="text-white/50">{{ renderSize(String(file.size)) }}</div>
    </div>
    <Button variant="outline" size="icon" @click="downloadFile(file.key!!)">
      <Download :size="30" />
    </Button>
  </div>
  <Button class="w-full mt-6" @click="upload">
    <RefreshCcw />
    重新提交
  </Button>
  <div class="text-left text-white/50 mt-4 text-sm">重新提交将覆盖已提交的作业，请谨慎操作。</div>
  <Separator label="要提交其它作业吗？" class="my-8 text-white/50" />
  <Button class="w-full" @click="submitAnother">
    <ChevronRight />
    提交其它作业
  </Button>
</div>

</template>
