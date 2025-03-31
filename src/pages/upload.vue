<script lang="ts" setup>
import { uploadFiles } from '@/lib/api/uploadFiles';
import { generatePasskey, renderSize } from '@/lib/tools';
import { File, X, Loader2, Upload, Plus } from 'lucide-vue-next'

const loading = ref(false);
const files = ref<File[]>([]);
// const store = useSubmissionStore();
const { open, onChange } = useFileDialog({})
const router = useRouter();
const store = useSubmissionStore();
onChange((fileList: FileList | null) => {
  files.value = [...files.value, ...Array.from(fileList ?? [])]
  console.log(files.value);
})

async function upload() {
  loading.value = true;
  store.dirId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
  store.passkey = generatePasskey();
  await uploadFiles(files.value);
  loading.value = false;
  store.cachePasskey();
  router.push("/success");
}

function remove(name: string) {
  files.value = [...files.value].filter(file => file.name !== name)
}

onMounted(() => {
  console.log(files.value.length);

})

</script>




<template>
  <div class="w-80">
    <MySteps :step="2" class="mb-8" />
    <div class="mt-2 border-2 border-white/30 min-h-20 rounded-lg font-mono flex gap-4 items-center px-4 py-4 hover:border-white transition duration-300"
        v-for="file in files">
      <File :size="30" color="#ffffff8f" />
      <div class="text-left flex-1">
        <div class="font-bold line-clamp-2 break-all">{{ file.name }}</div>
        <div class="text-white/50">{{ renderSize(String(file.size)) }}</div>
      </div>
      <Button variant="outline" size="icon" @click="remove(file.name)">
        <X :size="30" />
      </Button>
    </div>
    <div class="flex gap-4 justify-center items-center mt-4">
      <Button class="w-full my-6" @click="open">
        <Plus />
        选择文件
      </Button>
      <Button class="w-full my-6" :disabled="loading || files.length === 0" @click="upload">
        <Upload v-if="!loading"/>
        <Loader2 v-else class="animate-spin" />
        上传
      </Button>
    </div>

  </div>


</template>
