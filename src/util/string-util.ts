import { HttpResponseCodeMapper } from '../http-response-code'

export const stringUtil = {
  codeNameFromEnum: (codeEnum: HttpResponseCodeMapper): string => {
    const nameWithUnderscore = HttpResponseCodeMapper[codeEnum]
    if (!nameWithUnderscore) return 'Unknown error code name'
    return nameWithUnderscore.split('__').join('-').split('_').join(' ')
  },
}
