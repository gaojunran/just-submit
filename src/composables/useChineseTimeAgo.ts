export function useChineseTimeAgo(time: MaybeRefOrGetter<Date | number | string>) {
  return useTimeAgo(time, {
    messages: {
      justNow: '刚刚',
      past: (n: number | string, past: boolean) => (typeof n === 'number' ? `${n} 以前` : n),
      future: (n: number | string, past: boolean) => (typeof n === 'number' ? `未来 ${n}` : n),
      month: (n: number, past: boolean) => (n === 1 ? (past ? '上个月' : '下个月') : (past ? `${n}个月前` :`${n}个月后`)),
      year: (n: number, past: boolean) => (n === 1 ? (past ? '去年' : '明年') : (past ? `${n}年前` : `${n}年后`)),
      day: (n: number, past: boolean) => (n === 1 ? (past ? '昨天' : '明天') : (past ? `${n}天前` : `${n}天后`)),
      week: (n: number, past: boolean) => (n === 1 ? (past ? '上一周' : '下一周') : (past ? `${n}周前` : `${n}周后`)),
      hour: (n: number, past: boolean) => (n === 1 ? (past ? '一小时前' : '一小时后') : (past ? `${n}小时前` : `${n}小时后`)),
      minute: (n: number, past: boolean) => (n === 1 ? (past ? '一分钟前' : '一分钟后') : (past ? `${n}分钟前` : `${n}分钟后`)),
      second: (n: number, past: boolean) => (n === 1 ? (past ? '一秒前' : '一秒后') : (past ? `${n}秒前` : `${n}秒后`)),
      invalid: '无效时间',
    },
  });
}
