export interface Options {
  functional: 'lite' | 'recommended' | 'strict' | false
  perfectionist: 'alphabetical' | 'line-length' | 'natural' | false
  vanillaExtract: boolean
}

export const defaultOptions: Options = {
  functional: 'recommended',
  perfectionist: 'natural',
  vanillaExtract: false,
}
