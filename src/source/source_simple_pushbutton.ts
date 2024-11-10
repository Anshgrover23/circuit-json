import { source_component_base } from "src/source/base/source_component_base"
import { z } from "zod"

export const source_simple_pushbutton = source_component_base.extend({
  ftype: z.literal("simple_pushbutton"),
})

export type SourceSimplePushbutton = z.infer<typeof source_simple_pushbutton>
export type SourceSimplePushbuttonInput = z.input<
  typeof source_simple_pushbutton
>
