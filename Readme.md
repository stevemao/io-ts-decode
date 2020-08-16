> Decode with error to reduce boilerplate

```ts
import ioTsDecode from 'io-ts-decode'
import * as t from 'io-ts'
import { pipe } from 'fp-ts/lib/pipeable'

const onLeft = (e: Error): string => String(e)

const onRight = (s: string) => `No errors: ${s}`

pipe(
    ioTsDecode(t.string, null),
    ... // compose with other `TaskEither`s
)
```
