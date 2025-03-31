import { defineStore } from 'pinia'

export const useSubmissionStore = defineStore('submission', () => {
  const inputStuId = ref(localStorage.getItem('stuId') || '')
  const stuName = ref(localStorage.getItem('stuName') || '')
  const hwId = ref(-1)
  const dirId = ref(-1)
  const inputPasskey = ref([] as string[])
  const state = ref(0) // 0 - 未初始化，1 - 首次，2 - 非首次未认证，3 - 非首次已认证

  const UNINITIALIZED = 0
  const FIRST = 1
  const AGAIN_UNAUTHORIZED = 2
  const AGAIN_AUTHORIZED = 3

  const stuId = computed(() =>
    inputStuId.value ? parseInt(inputStuId.value) : -1
  )
  const passkey = computed({
    get() {
      return inputPasskey.value.join('')
    },
    set(value) {
      inputPasskey.value = value.split('')
    }
  })

  function cacheStuInfo() {
    localStorage.setItem('stuId', stuId.value.toString())
    localStorage.setItem('stuName', stuName.value)
  }

  function resetStuInfo() {
    inputStuId.value = ''
    stuName.value = ''
    localStorage.removeItem('stuId')
    localStorage.removeItem('stuName')
  }

  function cachePasskey() {
    localStorage.setItem('passkey', passkey.value)
  }

  function getCachedPasskey() {
    return localStorage.getItem('passkey') || ''
  }

  function checkFormInfo() {
    return stuId.value !== -1 && stuName.value !== '' && hwId.value !== -1
  }

  function checkAgainRoute() {
    return state.value === AGAIN_UNAUTHORIZED && checkFormInfo()  // 非首次提交
  }

  function checkViewRoute() {
    return state.value === AGAIN_AUTHORIZED && checkFormInfo()
  }

  function checkUploadRoute() {
    return (state.value === FIRST && checkFormInfo())  // 首次提交
           || checkViewRoute()  // 非首次提交
  }

  function checkSuccessRoute() {
    return checkUploadRoute() && dirId.value !== -1
  }

  return {
    inputStuId,
    stuId,
    stuName,
    hwId,
    dirId,
    inputPasskey,
    passkey,
    state,
    UNINITIALIZED,
    FIRST,
    AGAIN_UNAUTHORIZED,
    AGAIN_AUTHORIZED,
    cacheStuInfo,
    resetStuInfo,
    cachePasskey,
    getCachedPasskey,
    checkFormInfo,
    checkAgainRoute,
    checkViewRoute,
    checkUploadRoute,
    checkSuccessRoute
  }
})
