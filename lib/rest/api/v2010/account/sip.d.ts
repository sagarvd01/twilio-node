/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2010 = require('../../V2010');
import { CredentialListListInstance } from './sip/credentialList';
import { DomainListInstance } from './sip/domain';
import { IpAccessControlListListInstance } from './sip/ipAccessControlList';

/**
 * Initialize the SipList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function SipList(version: V2010, accountSid: string): SipListInstance;

interface SipListInstance {
  credentialLists?: CredentialListListInstance;
  domains?: DomainListInstance;
  ipAccessControlLists?: IpAccessControlListListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface SipPayload extends SipResource, Page.TwilioResponsePayload {
}

interface SipResource {
}

interface SipSolution {
  accountSid?: string;
}

export { SipList, SipListInstance, SipPayload, SipResource, SipSolution }
