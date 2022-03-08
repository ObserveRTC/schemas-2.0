export const schema = {
  "type": "record",
  "name": "SfuEventReport",
  "namespace": "org.observertc.schemas",
  "doc": "Events happened in calls.",
  "fields": [
    {
      "name": "serviceId",
      "doc": "The service id the report belongs to",
      "type": "string"
    },
    {
      "name": "mediaUnitId",
      "doc": "The media unit id the report belongs to",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "marker",
      "doc": "The marker the originated sample is reported with",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "timestamp",
      "doc": "The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)",
      "type": "long"
    },
    {
      "name": "sfuId",
      "doc": "The generated unique identifier of the SFU",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "callId",
      "doc": "The callId the event belongs to",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "transportId",
      "doc": "SFU provided transport identifier",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "mediaStreamId",
      "doc": "Unique identifier of the SFU stream id the rtp pad belongs to",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "mediaSinkId",
      "doc": "Unique identifier of the SFU stream id the rtp pad belongs to",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "sctpStreamId",
      "doc": "Unique identifier of the SCTP stream the event is related to",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "rtpPadId",
      "doc": "Unique identifier of the Sfu Pad the event is related to",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "name",
      "doc": "The name of the event. Possible values are: SFU_JOINED, SFU_LEFT, SFU_TRANSPORT_OPENED, SFU_TRANSPORT_CLOSED, SFU_RTP_STREAM_ADDED, SFU_RTP_STREAM_REMOVED",
      "type": "string"
    },
    {
      "name": "message",
      "doc": "the human readable message of the event",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "value",
      "doc": "the value of the event",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "attachments",
      "doc": "attachment the event may created with",
      "type": [
        "null",
        "string"
      ],
      "default": null
    }
  ]
}