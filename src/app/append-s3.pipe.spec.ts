import { AppendS3Pipe } from './append-s3.pipe';

describe('AppendS3Pipe', () => {
  it('create an instance', () => {
    const pipe = new AppendS3Pipe();
    expect(pipe).toBeTruthy();
  });
});
