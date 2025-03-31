<script setup lang="ts">
import { Key, Info } from 'lucide-vue-next'

const route = useRoute()
const isIndex = computed(() => route.path === '/')
const isShow = computed(() => route.path === '/' || route.path === '/success')

const toGithubProject = () => {
  window.open('https://github.com/gaojunran/just-submit')
}

const toGithubProfile = () => {
  window.open('https://github.com/gaojunran')
}

</script>

<template>

  <nav class="flex gap-2 justify-center text-xl mt-8" v-if="isShow">
    <Dialog>
    <DialogTrigger as-child>
      <Button variant="ghost" size="icon" class="text-white/50">
        <Info />
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>使用说明</DialogTitle>
        <DialogDescription>
          <div class="text-white/50 mt-4 text-sm/7">
            <p class="text-white/75 font-bold">
            这是由高浚然开发的提交作业平台，用于解决作业收集的痛点问题。以下是使用时的一些常见问题：
            </p>
            <p class="text-white/75 font-bold">1. 密钥有什么用？</p>
            <p>
            本平台不需要注册登录，这就意味着如果没有密钥限制，任何人都可以以你的名义提交作业，这是不可接受的。因此，我谨慎地设计了密钥功能。
            </p>
            <p class="text-white/75 font-bold">2. 什么情况下需要密钥？</p>
            <p>
            你每次成功提交作业后都会得到一个密钥。下次你查看或覆盖同个作业时，需要你输入这个密钥。
            </p>
            <p>
            特别地，在同一设备的同一浏览器中再次查看或覆盖同个作业不需要输入密钥。因为这是一个非常常见的情况，我将密钥缓存在了你的浏览器中。
            </p>
            <p class="text-white/75 font-bold">3. 忘记了密钥怎么办？</p>
            <p>
            你可以在上次上传作业的设备的浏览器中访问此网站，点击<Key class="inline mx-1 w-4 h-4" />按钮，即可将密钥复制到剪贴板。
            或者更简单地，直接在上次上传作业的设备中访问即可。
            </p>
            <p class="text-white/75 font-bold">
              ✨ 如果你喜欢这个平台，可以把它推荐给其他老师！
            </p>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>

    <Button variant="ghost" size="icon" class="text-white/50" @click="toGithubProject">
      <svg fill="#ffffff8f" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    </Button>
    <Button variant="ghost" size="icon" class="font-normal text-white/50" v-if="isIndex">
      <Key />
    </Button>
  </nav>
</template>
