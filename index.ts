import { pipe } from 'fp-ts/lib/pipeable';
import * as TE from 'fp-ts/lib/TaskEither';
import * as t from 'io-ts';
import toError from 'to-error';

const decode = <N>(
  T: t.Decoder<unknown, N>,
  data: unknown,
): TE.TaskEither<Error, N> =>
  pipe(
    pipe(
      data,
      T.decode,
      TE.fromEither
    ),
    TE.mapLeft(toError)
  );

export default decode;
