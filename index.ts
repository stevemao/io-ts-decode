import { pipe } from 'fp-ts/lib/pipeable';
import { TaskEither, fromEither, mapLeft } from 'fp-ts/lib/TaskEither';
import { Decoder } from 'io-ts';
import toError from 'to-error';

const decode = <N, M>(
  T: Decoder<M, N>,
  data: M,
): TaskEither<Error, N> =>
  pipe(
    data,
    T.decode,
    fromEither,
    mapLeft(toError)
  );

export default decode;
