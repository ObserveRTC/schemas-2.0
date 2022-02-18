export const schema = {
  "type": "record",
  "name": "SfuOutboundRtpPadReport",
  "namespace": "org.observertc.schemas",
  "doc": "A Report created for RTP streams going through the SFU",
  "fields": [
    {
      "name": "serviceId",
      "doc": "The service id the report belongs to",
      "type": "string"
    },
    {
      "name": "mediaUnitId",
      "doc": "The media unit id the report belongs to",
      "type": "string"
    },
    {
      "name": "sfuId",
      "doc": "The provided unique identifier of the SFU",
      "type": "string"
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
      "name": "transportId",
      "doc": "The id of the transport the RTP stream uses.",
      "type": "string"
    },
    {
      "name": "mediaStreamId",
      "doc": "Unique identifier of the Media stream the event is related to",
      "type": "string"
    },
    {
      "name": "padId",
      "doc": "The id of Sfu pad.",
      "type": "string"
    },
    {
      "name": "ssrc",
      "doc": "The synchronization source id of the RTP stream",
      "type": "long"
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
      "name": "clientId",
      "doc": "If the track id was provided by the Sfu, the observer can fill up the information of which client it belongs to",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "trackId",
      "doc": "The id of the track the RTP stream related to at the client side",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "mediaType",
      "doc": "the type of the media the stream carries (\"audio\" or \"video\")",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "payloadType",
      "doc": "The payload type field of the RTP header",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "mimeType",
      "doc": "The negotiated mimeType in the SDP",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "clockRate",
      "doc": "The clock rate of the media source the RTP header carries",
      "type": [
        "null",
        "long"
      ],
      "default": null
    },
    {
      "name": "sdpFmtpLine",
      "doc": "The actual SDP line from the negotiation related to this RTP stream",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "rid",
      "doc": " The rid parameter of the corresponded RTP stream",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "rtxSsrc",
      "doc": "If RTX is negotiated as a separate stream, this is the SSRC of the RTX stream that is associated with this stream's ssrc. ",
      "type": [
        "null",
        "long"
      ],
      "default": null
    },
    {
      "name": "targetBitrate",
      "doc": "he bitrate the corresponded stream targets.",
      "type": [
        "null",
        "long"
      ],
      "default": null
    },
    {
      "name": "voiceActivityFlag",
      "doc": "The RTP header V flag indicate of the activity of the media source by the media codec if the RTP transport ships it through",
      "type": [
        "null",
        "boolean"
      ],
      "default": null
    },
    {
      "name": "firCount",
      "doc": "The total number FIR packets sent from this endpoint to the source on the corresponded RTP stream. Only for Video streams",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "pliCount",
      "doc": "The total number of Picture Loss Indication sent on the corresponded RTP stream. Only for Video streams",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "nackCount",
      "doc": "The total number of negative acknowledgement received on the corresponded RTP stream.",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "sliCount",
      "doc": "The total number of SLI indicator sent from the endpoint on the corresponded RTP stream. Only for Audio stream",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "packetsLost",
      "doc": "The total number of packets lost on the corresponded RTP stream.",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "packetsSent",
      "doc": "The total number of packets sent on the corresponded RTP stream.",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "packetsDiscarded",
      "doc": "The total number of discarded packets on the corresponded RTP stream.",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "packetsRetransmitted",
      "doc": "The total number of packets retransmitted on the corresponded RTP stream.",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "packetsFailedEncryption",
      "doc": "The total number of packets failed to be encrypted on the corresponded RTP stream.",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "packetsDuplicated",
      "doc": "The total number of duplicated packets appeared on the corresponded RTP stream.",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "fecPacketsSent",
      "doc": "The total number of FEC packets sent on the corresponded RTP stream.",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "fecPacketsDiscarded",
      "doc": "The total number of FEC packets discarded on the corresponded RTP stream.",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "bytesSent",
      "doc": "The total amount of payload bytes sent on the corresponded RTP stream.",
      "type": [
        "null",
        "long"
      ],
      "default": null
    },
    {
      "name": "rtcpSrSent",
      "doc": "The total number of SR reports sent by the corresponded RTP stream",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "rtcpRrReceived",
      "doc": "The total number of RR reports received on the corresponded RTP stream",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "rtxPacketsSent",
      "doc": "If rtx packets sent on the same stream then this number indicates how may has been sent",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "rtxPacketsDiscarded",
      "doc": "If rtx packets are received on the same stream then this number indicates how may has been discarded",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "framesSent",
      "doc": "The number of frames sent on the corresponded RTP stream",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "framesEncoded",
      "doc": "Indicate the number of frames the Sfu has been encoded",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "keyFramesEncoded",
      "doc": "Indicate the number of keyframes the Sfu has been encoded on the corresponded RTP stream",
      "type": [
        "null",
        "int"
      ],
      "default": null
    },
    {
      "name": "attachments",
      "doc": "Arbitrary attachments holds relevant information about the stream.",
      "type": [
        "null",
        "string"
      ],
      "default": null
    }
  ]
}