/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...all]': RouteRecordInfo<'/[...all]', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    '/admin/': RouteRecordInfo<'/admin/', '/admin', Record<never, never>, Record<never, never>>,
    '/admin/auth': RouteRecordInfo<'/admin/auth', '/admin/auth', Record<never, never>, Record<never, never>>,
    '/again': RouteRecordInfo<'/again', '/again', Record<never, never>, Record<never, never>>,
    '/success': RouteRecordInfo<'/success', '/success', Record<never, never>, Record<never, never>>,
    '/upload': RouteRecordInfo<'/upload', '/upload', Record<never, never>, Record<never, never>>,
    '/view': RouteRecordInfo<'/view', '/view', Record<never, never>, Record<never, never>>,
  }
}
