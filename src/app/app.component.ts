import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { DataState } from './enums/data-state.enum';
import { AppState } from './model/app-state';
import { CustomResponse } from './model/custom-response';
import { TracabiliteService } from './service/tracabilite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'asfapp';

  appState$: Observable<AppState<CustomResponse>>;
  

  constructor(private tracabiliteService: TracabiliteService){} 

  ngOnInit(): void {
    this.appState$ = this.tracabiliteService.tracabilites$
      .pipe(
        map(response => {
          
            return { dataState: DataState.LOADED_STATE, appData: { ...response, data: { tracabilites: response.data.tracabilites.reverse() } } }
        }),
        catchError((error: string) => {   
          return of({ dataState: DataState.ERROR_STATE, error  });
        })
      );
  }
}
