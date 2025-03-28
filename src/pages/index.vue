<script setup lang="ts">

</script>

<template>
  <div class="w-80 flex flex-col gap-6">
    <MySteps :step="1" />
    <div class="flex gap-8 items-center justify-center">
      <Label for="summitter">学号</Label>
      <Input id="summitter" placeholder="请输入学号" class="w-52" />
    </div>
    <div class="flex gap-8 items-center justify-center">
      <Label for="summitter">姓名</Label>
      <Input id="summitter" placeholder="请输入姓名" class="w-52" />
    </div>
    <div class="text-center flex gap-8 items-center justify-center">
      <Label>类目</Label>
      <div class="flex flex-col w-52 items-start">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="选取一个作业类目" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>陈霖老师</SelectLabel>
              <SelectItem value="apple">
                Lab1
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div class="text-xs text-white/60 mt-2">
          此作业将于 3月30日 23:59 截止。
        </div>
      </div>
    </div>
    <div class="mt-2 flex justify-center">
      <Button class="w-64">
        下一步 🏃🏻‍♀️
      </Button>
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
