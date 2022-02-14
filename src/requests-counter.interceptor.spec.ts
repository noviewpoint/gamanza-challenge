import { RequestsCounterInterceptor } from './requests-counter.interceptor';

describe('RequestsCounterInterceptor', () => {
  it('should be defined', () => {
    expect(new RequestsCounterInterceptor()).toBeDefined();
  });
});
