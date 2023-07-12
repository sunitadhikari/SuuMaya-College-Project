import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
  standalone: true,
})
export class ImagePipe implements PipeTransform {
  transform(value: string | undefined, ...args: unknown[]): string[] {
    return value?.split(',') ?? [];
  }
}
