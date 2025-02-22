import { PixiEntity } from "./entities"

export const KEY_ATTRS = "__attrs__"
export type IEntity = { [KEY_ATTRS]: string[] }
export type Attrs = Record<string, any>

export function attr(constructor: unknown, context: unknown) {
  if (typeof context != "string")
    throw new Error(`Invalid attribute: ${context}`)
  const _name = context as string
  const _constructor = constructor as IEntity
  if (!Object.hasOwn(_constructor, KEY_ATTRS)) {
    const parentAttrs = _constructor[KEY_ATTRS] ?? []
    _constructor[KEY_ATTRS] = parentAttrs.slice()
  }
  _constructor[KEY_ATTRS].push(_name)
}

export function getAttrs(entity: PixiEntity) {
  const attrNames = (entity as unknown as IEntity)[KEY_ATTRS] ?? []
  const _entity = entity as Record<string, any>
  return Object.fromEntries(attrNames.map((i) => [i, _entity[i]]))
}

export function setAttrs(entity: PixiEntity, attrs: Attrs) {
  const _entity = entity as Record<string, any>
  for (const attrName in attrs) {
    _entity[attrName] = attrs[attrName]
  }
}

export function saveAttrs(entity: PixiEntity) {
  const attrs = getAttrs(entity)
  localStorage[KEY_ATTRS] = JSON.stringify(attrs)
}
