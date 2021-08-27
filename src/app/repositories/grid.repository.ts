import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { GridPlayground } from '../interfaces';

interface GridRepositoryState {
  playgroundModel: any;
}

@Injectable({
  providedIn: 'root',
})
export class GridRepository {
  private stateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private state$: Subscription;
  private state: GridRepositoryState = {
    playgroundModel: {
      sm: 12,
      md: 4,
      spacing: 0,
      cardPadding: 0,
    },
  };

  subscribe(callback: (state: GridRepositoryState) => void): void {
    this.state$ = this.stateSubject.subscribe(() => {
      callback(this.state);
    });
  }

  updatePlaygroundModelState(model: GridPlayground): void {
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
