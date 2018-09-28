import { Subscription } from 'rxjs';

export function unsubscribe(subscriptions: Subscription[]): void {
    subscriptions.forEach(x => x.unsubscribe());
  }

export function hasValue(e: any): boolean {
    return (e === undefined || e == null || e === '') ? false : true;
}

export function isArray(e: any): boolean {
    return (hasValue(e) && e instanceof Array) ? true : false;
}

export function addRemoveClasses(e, add: string[], remove: string[]): void {

    if (isArray(add)) {
        add.forEach(x => e.classList.add(x));
    }

    if (isArray(remove)) {
        remove.forEach(x => e.classList.remove(x));
    }
}
