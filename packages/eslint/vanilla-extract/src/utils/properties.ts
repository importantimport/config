// @ts-ignore missing types
import propertyGroups from 'stylelint-config-recess-order/groups.js'

export const properties: string[] = [
  ...new Set<string>(propertyGroups
    .flatMap(({ properties }: { properties: string[] }) =>
      properties.map((property: string) =>
        property
          // filtering `-ms-filter`
          .replaceAll(/-ms-filter:.*/g, 'msFilter')
          // ms is not capitalized in vanilla-extract
          .replaceAll('-ms', 'ms')
          // convert kebab-case to camelCase
          // should handle `-webkit` and `-moz` just fine
          .replaceAll(/(-[a-z])/g, s => s.slice(1).toUpperCase()),
      ),
    )),
]
