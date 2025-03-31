<script lang="ts" setup>
import { validatePasskey } from '@/lib/api/validatePasskey';
import { Loader2, ChevronRight } from 'lucide-vue-next';

const inputPasskey = ref([] as string[])
const store = useSubmissionStore()
const router = useRouter()
const loading = ref(false)

const nextStep = async () => {
  loading.value = true
  if (await validatePasskey(inputPasskey.value.join(''))) {
    store.state = store.AGAIN_AUTHORIZED;
    router.push("/view");
  } else {
    useErrorToast().error("密钥错误!")
    inputPasskey.value = []
  }
  loading.value = false
}
</script>



<template>
  <div>
    <p class="text-2xl font-bold mb-4 text-left">
      您已经提交过此作业 ⚠️
    </p>

    <Separator label="" class="my-8"/>

    <div>
      <h2 class="text-xl font-bold text-left mb-4">查看或覆盖已提交作业</h2>
      <p class="text-left text-white/50">
        您可输入上次上传作业后得到的密钥，来查看或覆盖已提交的作业。
      </p>
    </div>
    <div class="flex flex-col items-center mt-6 gap-6">
      <PinInput
        id="pin-input"
        v-model="inputPasskey"
        placeholder="○"
      >
        <PinInputGroup>
          <PinInputInput
            v-for="(id, index) in 6"
            :key="id"
            :index="index"
          />
        </PinInputGroup>
      </PinInput>
      <Button class="w-52" @click="nextStep" :disabled="inputPasskey.length != 6 || loading">
        <Loader2 class="animate-spin" v-if="loading"  />
        <ChevronRight v-else />
        下一步
      </Button>
  </div>

  <Separator label="Or" class="my-12"/>
      <h2 class="text-xl font-bold text-left mb-4">如果您没提交过此作业</h2>
      <p class="text-left text-white/50">
        如果您确定从未提交过此作业，可能是您被别人顶替提交了。
      </p>
      <p class="text-left text-white/50">
        请联系开发者高浚然（QQ 489601672）进行处理。
      </p>
  </div>
</template>
