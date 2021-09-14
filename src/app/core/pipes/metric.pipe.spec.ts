import { MetricPipe } from './metric.pipe';

describe('MetricPipe', () => {
  const pipe = new MetricPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });


  it('return a formatted measure in °C', () => {
    expect(pipe.transform('10', true)).toBe('10 °C');
  });

  it('return a formatted measure in °F', () => {
    expect(pipe.transform('10', false)).toBe('10 °F');
  });

});
