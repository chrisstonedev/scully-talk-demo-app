import { BuildService } from './build.service';

import { inject, TestBed, waitForAsync } from '@angular/core/testing';

describe('BuildService', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [BuildService],
      });
    })
  );

  it(
    'should return a Projects list with the expected count',
    waitForAsync(
      inject([BuildService], (service: BuildService) => {
        const response = service.getProjects();
        expect(response.length).toBe(13);
      })
    )
  );
});
