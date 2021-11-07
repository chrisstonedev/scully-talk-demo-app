import {PortfolioService} from './portfolio.service';

import {inject, TestBed, waitForAsync} from '@angular/core/testing';

describe('PortfolioService', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [PortfolioService],
      });
    })
  );

  it(
    'should return a Projects list with 13 users',
    waitForAsync(
      inject([PortfolioService], (service: PortfolioService) => {
        const response = service.getProjects();
        expect(response.length).toBe(6);
      })
    )
  );
});
