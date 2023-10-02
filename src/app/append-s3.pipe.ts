import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environmen';

@Pipe({
  name: 'appendS3',
  standalone: true,
})
export class AppendS3Pipe implements PipeTransform {
  transform(value: string | null, ...args: unknown[]): string {
    return environment.s3Url + environment.s3Object + value;
  }
}
