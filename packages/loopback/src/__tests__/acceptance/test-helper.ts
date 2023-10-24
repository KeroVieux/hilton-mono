import {HiltonAppApplication} from '../..';
import {
  createRestAppClient,
  givenHttpServerConfig,
  Client,
} from '@loopback/testlab';

export async function setupApplication(): Promise<AppWithClient> {
  const restConfig = givenHttpServerConfig({
    port: 3003,
  });

  const app = new HiltonAppApplication({
    rest: restConfig,
  });

  await app.boot();
  await app.start();

  const client = createRestAppClient(app);
  const restUrl = `http://${app.options.rest.host}:${app.options.rest.port}`
  return {app, client, restUrl};
}

export interface AppWithClient {
  app: HiltonAppApplication;
  client: Client;
  restUrl: string;
}
