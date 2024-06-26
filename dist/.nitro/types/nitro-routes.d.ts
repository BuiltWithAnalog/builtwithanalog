// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/projects': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../src/server/routes/projects.get').default>>>>
    }
    '/v1/hello': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../src/server/routes/v1/hello').default>>>>
    }
  }
}
export {}