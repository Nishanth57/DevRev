
import { client } from "@devrev/typescript-sdk";

async function handleEvent(
  event: any,
) {
  const devrevPAT = event.context.secrets.service_account_token;
  const API_BASE = event.execution_metadata.devrev_endpoint;
  const devrevSDK = client.setup({
    endpoint: API_BASE,
    token: 'eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzFpMGhGeGp4NDQ6ZGV2dS8xIiwiZXhwIjoxODA3MDg5MjMzLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL29pZGN8cGFzc3dvcmRsZXNzfGVtYWlsfDY2MTI0NDc1MTdiZTc4OGI2ZjI5ZmFjYyIsImh0dHA6Ly9kZXZyZXYuYWkvYXV0aDBfdXNlcl9pZCI6Im9pZGN8cGFzc3dvcmRsZXNzfGVtYWlsfDY2MTI0NDc1MTdiZTc4OGI2ZjI5ZmFjYyIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2b19kb24iOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vMWkwaEZ4ang0NCIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2b2lkIjoiREVWLTFpMGhGeGp4NDQiLCJodHRwOi8vZGV2cmV2LmFpL2RldnVpZCI6IkRFVlUtMSIsImh0dHA6Ly9kZXZyZXYuYWkvZGlzcGxheW5hbWUiOiI0bm0yMGFpMDI5IiwiaHR0cDovL2RldnJldi5haS9lbWFpbCI6IjRubTIwYWkwMjlAbm1hbWl0LmluIiwiaHR0cDovL2RldnJldi5haS9mdWxsbmFtZSI6IjRubTIwYWkwMjlAbm1hbWl0LmluIiwiaHR0cDovL2RldnJldi5haS9pc192ZXJpZmllZCI6dHJ1ZSwiaHR0cDovL2RldnJldi5haS90b2tlbnR5cGUiOiJ1cm46ZGV2cmV2OnBhcmFtczpvYXV0aDp0b2tlbi10eXBlOnBhdCIsImlhdCI6MTcxMjQ4MTIzMywiaXNzIjoiaHR0cHM6Ly9hdXRoLXRva2VuLmRldnJldi5haS8iLCJqdGkiOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vMWkwaEZ4ang0NDp0b2tlbi8xMFIwdmRsS0YiLCJvcmdfaWQiOiJvcmdfbmxWbWFLU2xHWEdFblpCUSIsInN1YiI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by8xaTBoRnhqeDQ0OmRldnUvMSJ9.m-2GGzrHPgfoTxNqHt17WNoKyLeAB77l7xi0Y1fqh43IgN_ot1gjLTaHZnXMEcIwtxHP3yfV7C_rAYD7y9xGtxImlw5H-Xj5e6u0KVGMYLn1AzMSmtD-iwKuYeFqB8lJFiFAe0qbGP8oWP4eABLM2dgSaNKRZV2Lz49zsg92qSTjrFK8hH4het4TPkikQ2wAALpHUGcU98cJo5DdnvTqjBGm2_T1Q76AZEcDvxw5j7nvihUTGsj6XzUtvj6OSbVdy2_g9V9lk4FLg91WKUfZgofA3Qu8uQ3Wkmc8yLHT6vvAoklgbzrgt8cZNuPiNB3JHIWKAIp2qchMT6K-nlwOjQ',
  })
  const workCreated = event.payload.work_created.work;
  const messageInput = event.input_data.global_values.input_field_1;
  let bodyComment = 'Hello World  '  + messageInput;
  const body = {
    object: workCreated.id,
    type: 'timeline_comment',
    body:  bodyComment,
  }
  const response = await devrevSDK.timelineEntriesCreate(body as any);
  return response;

}

export const run = async (events: any[]) => {
  console.info('events', JSON.stringify(events), '\n\n\n');
  for (let event of events) {
    const resp = await handleEvent(event);
    console.log(JSON.stringify(resp.data));
  }
};

export default run;
