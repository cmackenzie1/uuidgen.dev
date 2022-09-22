interface AnalyticsEngine {
  writeDataPoint(event?: AnalyticsEngineEvent): void;
}

interface AnalyticsEngineEvent {
  version?: any;
  doubles?: number[];
  blobs?: (ArrayBuffer | string | null)[];
}

export interface AppEnv {
  requests: AnalyticsEngine;
  stats: AnalyticsEngine;
  logs: AnalyticsEngine;
  DURABLE_COUNTER: DurableObjectNamespace;
}
