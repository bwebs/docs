import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const MessageStatus: ApiParam = {
  type: "string",
  displayName: "MessageStatus",
  example: "DELIVERED",
  enum: [
    "CLICKED",
    "DELIVERED",
    "OPENED",
    "CANCELED",
    "SENT",
    "UNDELIVERABLE",
    "ENQUEUED",
    "UNMAPPED",
    "UNROUTABLE",
  ],
  description: `
Message Status:

* \`CLICKED\` - The recipient has clicked on any link in the message at least one time.
* \`DELIVERED\` - The provider successfully delivered the message to the recipient.
* \`ENQUEUED\` - The request has been received to send a message, is waiting in the work queue.
* \`OPENED\` - The recipient has opened the message at least one time.
* \`CANCELED\` - The message has been canceled such that it will not be delivered.
* \`SENT\` - The message has been accepted by the provider.
* \`UNDELIVERABLE\` - The message could not be delivered to at least one provider, or the provider could not deliver the message to the recipient. This can happen for multiple reasons: an error, insufficient profile data, invalid notification setup, invalid integration configuration, etc.
* \`UNMAPPED\` - Could not find a corresponding notification or event for the messages.
* \`UNROUTABLE\` - The message could not be routed to any channel or provider. This can happen for multiple reasons: insufficient profile data, invalid notification setup, invalid integration configuration, etc.
  `.trim(),
};

export default MessageStatus;
