import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';

import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { environment } from 'src/environments/environmen';
@Injectable({
  providedIn: 'root',
})
export class S3Service {
  private readonly S3Client = new S3Client(environment.s3Config);
  /**
   *
   * @param file File or blob to be uploaded
   * @param key Name of file in s3 bucket
   * @returns Observable<string | null> return the key of file if upload was success, if not null
   */
  uploadFile(
    file: File | Blob,
    key?: string
  ): Observable<string | null | undefined> {
    const k = environment.s3Object + key;
    const contentType = file.type;
    const putCommand = new PutObjectCommand({
      Body: file,
      Bucket: environment.s3Bucket,
      Key: k,
      ContentType: contentType,
    });
    return from(this.S3Client.send(putCommand)).pipe(map((res) => key));
  }
  /**
   *
   * @param key file Name to be deleted..
   * @returns
   */
  removeFile(key: string) {
    const deleteCommand = new DeleteObjectCommand({
      Bucket: environment.s3Bucket,
      Key: key,
    });
    return from(this.S3Client.send(deleteCommand));
  }
}
