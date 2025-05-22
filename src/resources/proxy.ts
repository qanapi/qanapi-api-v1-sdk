// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Proxy extends APIResource {
  /**
   * Encrypt or Decrypt fields in request payload and optionally forward
   *
   * @example
   * ```ts
   * const response = await client.proxy.forward('api_token', {
   *   body: {
   *     userId: 'bar',
   *     id: 'bar',
   *     title: 'bar',
   *     body: 'bar',
   *   },
   *   'X-Qanapi-Authorization':
   *     'cd_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   * });
   * ```
   */
  forward(
    apiToken: string,
    params: ProxyForwardParams,
    options?: RequestOptions,
  ): APIPromise<ProxyForwardResponse> {
    const {
      body,
      'X-Qanapi-Authorization': xQanapiAuthorization,
      'X-Qanapi-Classification': xQanapiClassification,
      'X-Qanapi-Destination': xQanapiDestination,
      'X-Qanapi-Fields': xQanapiFields,
      'X-Qanapi-Geofence': xQanapiGeofence,
      'X-Qanapi-Mode': xQanapiMode,
    } = params;
    return this._client.post(path`/proxy/${apiToken}`, {
      body: body,
      ...options,
      headers: buildHeaders([
        {
          'X-Qanapi-Authorization': xQanapiAuthorization,
          ...(xQanapiClassification != null ?
            { 'X-Qanapi-Classification': xQanapiClassification }
          : undefined),
          ...(xQanapiDestination != null ? { 'X-Qanapi-Destination': xQanapiDestination } : undefined),
          ...(xQanapiFields != null ? { 'X-Qanapi-Fields': xQanapiFields } : undefined),
          ...(xQanapiGeofence != null ? { 'X-Qanapi-Geofence': xQanapiGeofence } : undefined),
          ...(xQanapiMode?.toString() != null ? { 'X-Qanapi-Mode': xQanapiMode?.toString() } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

/**
 * The encrypted or decrypted payload, or destination's response
 */
export type ProxyForwardResponse = Record<string, unknown>;

export interface ProxyForwardParams {
  /**
   * Body param: JSON payload to be encrypted or decrypted. Fields must match those
   * listed in `X-Qanapi-Fields`.
   */
  body: Record<string, unknown>;

  /**
   * Header param: API key used to authenticate the request
   */
  'X-Qanapi-Authorization': string;

  /**
   * Header param: Optional classification label for auditing or filtering
   */
  'X-Qanapi-Classification'?: string;

  /**
   * Header param: If provided, the transformed request will be forwarded to this
   * destination
   */
  'X-Qanapi-Destination'?: string;

  /**
   * Header param: Comma-separated field paths to encrypt/decrypt (dot notation
   * supported)
   */
  'X-Qanapi-Fields'?: string;

  /**
   * Header param: Optional geolocation-based routing or logging tag
   */
  'X-Qanapi-Geofence'?: string;

  /**
   * Header param: Whether to encrypt or decrypt payload fields (default is encrypt)
   */
  'X-Qanapi-Mode'?: 'encrypt' | 'decrypt';
}

export declare namespace Proxy {
  export { type ProxyForwardResponse as ProxyForwardResponse, type ProxyForwardParams as ProxyForwardParams };
}
