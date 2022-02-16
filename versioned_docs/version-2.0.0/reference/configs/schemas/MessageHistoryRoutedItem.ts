import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const MessageHistoryRoutedItem: ApiParam = {
  type: "object",
  displayName: "MessageHistoryRoutedItem",
  fields: [
    {
      type: "object",
      name: "channel",
      description: "The channel used while sending the message",
      fields: [
        {
          type: "string",
          name: "id",
          description: "The ID of the channel used while sending the message",
          example: "ae25b99c-3d05-4f26-8108-f91d5d0fe8c9",
        },
      ],
    },
    {
      type: "object",
      name: "integration",
      description: "The integration used while sending the message",
      fields: [
        {
          type: "string",
          name: "id",
          description: "The ID of the integration used while sending the message",
          example: "8431c89d-aff0-484c-914d-36a257ea371f",
        },
        {
          type: "string",
          name: "provider",
          description: "The name of the provider used while sending the message",
          example: "sendgrid",
        },
      ],
    },
    {
      type: "number",
      name: "ts",
      example: 1562611083411,
      description:
        "A UTC timestamp at which the message was routed. This is stored as a millisecond representation of the Unix epoch (the time passed since January 1, 1970).",
    },
    {
      type: "string",
      name: "type",
      enum: ["DELIVERING", "SENT", "OPENED", "CLICKED"],
      example: "SENT",
    },
  ],
};

export default MessageHistoryRoutedItem;
