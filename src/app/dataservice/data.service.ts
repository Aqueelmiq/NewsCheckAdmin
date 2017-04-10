import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Source} from "../adminpanel/Source";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

@Injectable()
export class DataService {

  private _result = new BehaviorSubject<Source>(new Source("No Result", "No Result", false));
  private _show = new BehaviorSubject<boolean>(false);

  public show: Observable<boolean> = this._show.asObservable();
  public result:Observable<Source> = this._result.asObservable();

  public sources: FirebaseListObservable<any>;
  public last_id: FirebaseObjectObservable<any>

  constructor(public af: AngularFire) {
    this.sources = af.database.list('/sources');
    this.last_id = af.database.object('/id');
  }

  setCurrentResult(result: Source) {
    this._show.next(true);
    this._result.next(result);
  }

  getCurrentResult():Observable<Source> {
    return this.result;
  }

  newResult(result: Source) {
    this.setCurrentResult(result)
    const sub = this.last_id.subscribe(id => {
      result.id = id.id + 1;
      this.sources.push(result).then(() => {
        sub.unsubscribe();
        this.last_id.set({id: result.id});
      });
    })
  }


  updateResult(result: Source) {
    this._result.next(result);
    this.sources.subscribe(sources => {
      sources.map(source => {
        if (source.id == result.id)
          this.sources.update(source.$key, result);
      });
    });

  }

  hideResult() {
    this._show.next(false);
  }
}
