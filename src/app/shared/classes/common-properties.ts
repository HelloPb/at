import { Subscription } from 'rxjs';
import { unsubscribe } from '../utils/util';

export class CommonProperties {
    private subscriptions: Subscription[] = [];

    // read as RxJs Subscriptions
    protected rxs(s: Subscription): void {
        this.subscriptions.push(s);
    }

    protected unsubscribe() {
        unsubscribe(this.subscriptions);
    }
}
