import { Subject } from 'rxjs';

export class UIService {
  loadedStateChanged = new Subject<boolean>();
}
