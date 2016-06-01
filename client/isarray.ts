import { Pipe } from '@angular/core';
import {isArray} from "rxjs/util/isArray";

@Pipe({
    name: 'isarray'
})

export class IsArray{
    transform(value){
        if (value){
            return isArray(value);
        }

    }
}
