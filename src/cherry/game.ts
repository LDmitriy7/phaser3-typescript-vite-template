import { Assets } from "./assets"
import {
  Circle,
  CircleWithBorder,
  Container,
  Image,
  Label,
  RoundedRect,
} from "./entities"

export type GameSize = { width: number; height: number }

export interface Game<AssetId extends string> {
  assets: Assets<AssetId>
  addContainer(): Container
  addImage(): Image<AssetId>
  addLabel(): Label
  addCircle(): Circle
  addCircleWithBorder(): CircleWithBorder
  addRoundedRect(): RoundedRect
  play(init: () => void): Promise<void>
  onResize(callback: (size: GameSize) => void): void
}
