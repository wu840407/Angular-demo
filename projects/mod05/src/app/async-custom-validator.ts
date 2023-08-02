import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";

export class AsyncCustomValidator {
    static AsyncCheckExistName(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            let memeber = ["anita", "amy", "bob"];
            let result: Observable<ValidationErrors | null> = of(null);
            let value = control.value;
            if (memeber.find(m => m.toLowerCase() == value.toLowerCase())) {
                result = of({
                    "CheckExistName": {
                        actualValue: value,
                        requiredValue: '此帳號已經有人註冊了，請重新命名'
                    }
                })
            }
            return result;
        }
    }
}
