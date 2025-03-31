<script setup lang="ts">
import { useChineseTimeAgo } from '@/composables/useChineseTimeAgo';
import { useSubmissionStore } from '@/composables/useStore'
import { getDirId } from '@/lib/api/getDirId';
import { getHomeworkChoices } from '@/lib/api/getHomeworkChoices';
import { getState } from '@/lib/api/getState';
import { IHomeworkChoices } from '@/types';
import { Info } from 'lucide-vue-next';
import { Loader2, ChevronRight } from 'lucide-vue-next';

const store = useSubmissionStore();
const choices = ref([] as IHomeworkChoices);
const router = useRouter();
const errorMsg = ref("")
const choicesLoading = ref(true)
const loading = ref(false)
const timeDisplay = computed(() => {
  return useChineseTimeAgo(choices.value
                .map(category => category[1])
                .flat().find(it => it.id === store.hwId)!!.end_time).value
                .replace("in ", "")
})

async function nextStep() {
  if (store.inputStuId.length === 0) {
    errorMsg.value = "请填写学号！"
    return
  } else if (store.stuName.length === 0) {
    errorMsg.value = "请填写姓名！"
    return
  } else if (store.hwId === -1) {
    errorMsg.value = "请选择作业类目！"
    return
  } else {
    errorMsg.value = ""
  }
  loading.value = true;
  store.cacheStuInfo();
  store.state = await getState() ?? store.FIRST;

  if (store.state === store.FIRST) {
    router.push("/upload")
  } else {
    store.dirId = await getDirId() ?? -1;
    router.push(store.state === store.AGAIN_UNAUTHORIZED ? "/again" : "/view")
  }
}

onMounted(async () => {
  choices.value = await getHomeworkChoices();
  choicesLoading.value = false
})

</script>

<template>
  <div class="w-80 flex flex-col gap-6">
    <MySteps :step="1" />
    <div class="flex gap-8 items-center justify-center">
      <Label for="stuId">学号</Label>
      <Input id="stuId" v-model="store.inputStuId" placeholder="请输入学号" class="w-52" />
    </div>
    <div class="flex gap-8 items-center justify-center">
      <Label for="stuName">姓名</Label>
      <Input id="stuName" v-model="store.stuName" placeholder="请输入姓名" class="w-52" />
    </div>
    <div class="text-center flex gap-8 items-center justify-center">
      <Label>类目</Label>
      <div class="flex flex-col w-52 items-start">
        <Select v-model="store.hwId" :disabled="choicesLoading">
          <SelectTrigger>
            <SelectValue :placeholder="choicesLoading ? '加载中...' : '选取一个作业类目'"  />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup v-for="[category, item] in choices">
              <SelectLabel>{{ category }}</SelectLabel>
              <SelectItem :value="id" v-for="{ id, name } in item">
                {{ name }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div class="text-xs text-white/60 mt-2" v-if="store.hwId != -1 && !choicesLoading">
          此作业将于<span class="text-white font-bold">{{ timeDisplay }}</span>截止。
        </div>
      </div>
    </div>
    <div class="mt-2 flex flex-col items-center">
      <Button class="w-64" @click="nextStep()" :disabled="loading">
        <Loader2 class="animate-spin" v-if="loading"  />
        <ChevronRight v-else />
        下一步
      </Button>
      <div class="mt-4 w-64" v-if="errorMsg">
        <div class="bg-red-800/30 rounded-lg p-2 flex gap-4 text-sm items-center">
          <Info />
          <div class="flex-1 text-left">{{ errorMsg }}</div>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>
.gradient-title {
  background: linear-gradient(to right, #0d5661, #33a6b8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.dark .gradient-title {
  background: linear-gradient(to right, #d9ab42, #fad689);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
</style>
