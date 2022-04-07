import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'demo'
})
export class DemoPipe implements PipeTransform {
    transform(n: number , extensions:string): string {
        return (n * 1000).toFixed(2) + extensions;
    }

}