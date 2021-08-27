import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TypographyPlaygroundModel } from '../interfaces';

interface TypographyRepositoryState {
  playgroundModel: TypographyPlaygroundModel;
}

@Injectable({
  providedIn: 'root',
})
export class TypographyRepository {
  private stateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private state$: Subscription;
  private state: TypographyRepositoryState = {
    playgroundModel: {
      component: 'h1',
      display: 'block',
      variant: '',
      marginBottom: '',
      gutterBottom: true,
      align: '',
    },
  };

  subscribe(callback: (state: TypographyRepositoryState) => void): void {
    this.state$ = this.stateSubject.subscribe(() => {
      callback(this.state);
    });
  }

  updatePlaygroundModelState(model: TypographyPlaygroundModel): void {
    this.state.playgroundModel = { ...model, ...this.state.playgroundModel };
    this.emitChange();
  }

  private emitChange(): void {
    this.stateSubject.next(!this.stateSubject.getValue());
  }

  unsubscribe(): void {
    this.state$.unsubscribe();
  }
}
