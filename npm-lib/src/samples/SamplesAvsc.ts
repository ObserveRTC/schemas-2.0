export const schema = {
  "type": "record",
  "name": "Samples",
  "namespace": "org.observertc.schemas.samples",
  "doc": "Observer created reports related to events (call started, call ended, client joined, etc...) indicated by the incoming samples.",
  "fields": [
    {
      "name": "controls",
      "doc": "Additional control flags indicate various operation has to be performed",
      "type": [
        "null",
        {
          "name": "Controls",
          "type": "record",
          "fields": [
            {
              "name": "close",
              "doc": "Indicate that the server should close the connection",
              "type": [
                "null",
                "boolean"
              ],
              "default": null
            },
            {
              "name": "accessClaim",
              "doc": "Holds a new claim to process",
              "type": [
                "null",
                "string"
              ],
              "default": null
            }
          ]
        }
      ],
      "default": null
    },
    {
      "name": "clientSamples",
      "doc": "Samples taken from the client",
      "type": [
        "null",
        {
          "type": "array",
          "items": {
            "name": "ClientSample",
            "type": "record",
            "doc": "docs",
            "fields": [
              {
                "name": "callId",
                "doc": "If it is provided the server uses the given id to match clients in the same call. Must be a valid UUID. ",
                "type": [
                  "null",
                  "string"
                ],
                "default": null
              },
              {
                "name": "clientId",
                "doc": "Unique id of the client providing samples. Must be a valid UUID",
                "type": "string"
              },
              {
                "name": "sampleSeq",
                "doc": "The sequence number a source assigns to the sample. Every time the source make a sample at a client this number should be monothonically incremented.",
                "type": [
                  "null",
                  "int"
                ],
                "default": null
              },
              {
                "name": "roomId",
                "doc": "The WebRTC app configured room id the client joined for the call.",
                "type": [
                  "null",
                  "string"
                ],
                "default": null
              },
              {
                "name": "userId",
                "doc": "The WebRTC app configured human readable user id the client is joined.",
                "type": [
                  "null",
                  "string"
                ],
                "default": null
              },
              {
                "name": "engine",
                "doc": "WebRTC App provided information related to the engine the client uses.",
                "type": [
                  "null",
                  {
                    "name": "Engine",
                    "type": "record",
                    "fields": [
                      {
                        "name": "name",
                        "type": [
                          "null",
                          "string"
                        ],
                        "doc": "The name of the Engine",
                        "default": null
                      },
                      {
                        "name": "version",
                        "type": [
                          "null",
                          "string"
                        ],
                        "doc": "The version of the engine",
                        "default": null
                      }
                    ]
                  }
                ],
                "default": null
              },
              {
                "name": "platform",
                "doc": "WebRTC App provided information related to the platform the client uses.",
                "type": [
                  "null",
                  {
                    "name": "Platform",
                    "type": "record",
                    "fields": [
                      {
                        "name": "type",
                        "type": [
                          "null",
                          "string"
                        ],
                        "doc": "The name of the platform",
                        "default": null
                      },
                      {
                        "name": "vendor",
                        "type": [
                          "null",
                          "string"
                        ],
                        "doc": "The name of the vendor",
                        "default": null
                      },
                      {
                        "name": "model",
                        "type": [
                          "null",
                          "string"
                        ],
                        "doc": "The name of the model",
                        "default": null
                      }
                    ]
                  }
                ],
                "default": null
              },
              {
                "name": "browser",
                "doc": "WebRTC App provided information related to the browser the client uses.",
                "type": [
                  "null",
                  {
                    "name": "Browser",
                    "type": "record",
                    "fields": [
                      {
                        "name": "name",
                        "type": [
                          "null",
                          "string"
                        ],
                        "doc": "The name of the operation system (e.g.: linux) the webrtc app uses",
                        "default": null
                      },
                      {
                        "name": "version",
                        "type": [
                          "null",
                          "string"
                        ],
                        "doc": "The version of the operation system",
                        "default": null
                      }
                    ]
                  }
                ],
                "default": null
              },
              {
                "name": "os",
                "doc": "WebRTC App provided information related to the operation system the client uses.",
                "type": [
                  "null",
                  {
                    "name": "OperationSystem",
                    "type": "record",
                    "fields": [
                      {
                        "name": "name",
                        "type": [
                          "null",
                          "string"
                        ],
                        "doc": "The name of the operation system (e.g.: linux) the webrtc app uses",
                        "default": null
                      },
                      {
                        "name": "version",
                        "type": [
                          "null",
                          "string"
                        ],
                        "doc": "The version of the operation system",
                        "default": null
                      },
                      {
                        "name": "versionName",
                        "type": [
                          "null",
                          "string"
                        ],
                        "doc": "The name of the version of the operation system",
                        "default": null
                      }
                    ]
                  }
                ],
                "default": null
              },
              {
                "name": "mediaConstraints",
                "doc": "The WebRTC app provided List of the media constraints the client has.",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": "string"
                  }
                ],
                "default": null
              },
              {
                "name": "mediaDevices",
                "doc": "The WebRTC app provided List of the media devices the client has.",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "MediaDevice",
                      "type": "record",
                      "fields": [
                        {
                          "name": "id",
                          "type": [
                            "null",
                            "string"
                          ],
                          "doc": "the provided id of the media input / output",
                          "default": null
                        },
                        {
                          "name": "kind",
                          "doc": "The media kind of the media device",
                          "type": [
                            "null",
                            {
                              "type": "enum",
                              "name": "InputMediaDeviceKind",
                              "symbols": [
                                "videoinput",
                                "audioinput",
                                "audiooutput"
                              ]
                            }
                          ],
                          "default": null
                        },
                        {
                          "name": "label",
                          "type": [
                            "null",
                            "string"
                          ],
                          "doc": "The name of the device",
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "userMediaErrors",
                "doc": "The WebRTC app provided List of user media errors the client has.",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": "string"
                  }
                ],
                "default": null
              },
              {
                "name": "extensionStats",
                "doc": "The WebRTC app provided custom stats payload",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "ExtensionStat",
                      "type": "record",
                      "fields": [
                        {
                          "name": "type",
                          "type": "string",
                          "doc": "The type of the extension stats the custom app provides"
                        },
                        {
                          "name": "payload",
                          "type": "string",
                          "doc": "The payload of the extension stats the custom app provides"
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "customCallEvents",
                "doc": "User provided custom call events",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "CustomCallEvent",
                      "type": "record",
                      "fields": [
                        {
                          "name": "name",
                          "doc": "the name of the event used as identifier. (e.g.: MEDIA_TRACK_MUTED, USER_REJOINED, etc..)",
                          "type": "string"
                        },
                        {
                          "name": "mediaTrackId",
                          "doc": "The identifier of the media track the event is related to",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
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
                          "name": "attachments",
                          "doc": "Additional attachment relevant for the event",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "timestamp",
                          "doc": "The EPOCH timestamp the event is generated",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "customObserverEvents",
                "doc": "User provided custom call events",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "CustomObserverEvent",
                      "type": "record",
                      "fields": [
                        {
                          "name": "name",
                          "doc": "the name of the event used as identifier. (e.g.: MEDIA_TRACK_MUTED, USER_REJOINED, etc..)",
                          "type": "string"
                        },
                        {
                          "name": "mediaTrackId",
                          "doc": "The identifier of the media track the event is related to",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
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
                          "name": "attachments",
                          "doc": "Additional attachment relevant for the event",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "timestamp",
                          "doc": "The EPOCH timestamp the event is generated",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "iceServers",
                "doc": "The WebRTC app provided List of ICE server the client used.",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": "string"
                  }
                ],
                "default": null
              },
              {
                "name": "localSDPs",
                "doc": "The local part of the Signal Description Protocol to establish connections",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": "string"
                  }
                ],
                "default": null
              },
              {
                "name": "dataChannels",
                "doc": "Measurements about the data channels currently avaialble on peer connections",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "DataChannel",
                      "type": "record",
                      "fields": [
                        {
                          "name": "peerConnectionId",
                          "type": "string",
                          "doc": "The id of the peer connection the data channel is assigned to"
                        },
                        {
                          "name": "dataChannelIdentifier",
                          "type": [
                            "null",
                            "int"
                          ],
                          "doc": "The id of the data channel assigned by the peer connection when it is opened",
                          "default": null
                        },
                        {
                          "name": "label",
                          "doc": "The label of the data channel",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "protocol",
                          "doc": "The protocol the data channel utilizes",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "state",
                          "doc": "The state of the data channel",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "messageSent",
                          "doc": "The total number of message sent on the data channel",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "bytesSent",
                          "doc": "The total number of bytes sent on the data channel",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "messageReceived",
                          "doc": "The total number of message received on the data channel",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "bytesReceived",
                          "doc": "The total number of bytes received on the data channel",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "pcTransports",
                "doc": "Transport stats of Peer Connection",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "PeerConnectionTransport",
                      "type": "record",
                      "fields": [
                        {
                          "name": "transportId",
                          "doc": "The identifier of the transport the ice candidate pair is negotiated on",
                          "type": "string"
                        },
                        {
                          "name": "peerConnectionId",
                          "doc": "The unique identifier of the peer connection",
                          "type": "string"
                        },
                        {
                          "name": "label",
                          "doc": "The label associated with the peer connection",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsSent",
                          "doc": "Represents the total number of packets sent on the corresponded transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsReceived",
                          "doc": "Represents the total number of packets received on the corresponded transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "bytesSent",
                          "doc": "Represents the total amount of bytes sent on the corresponded transport",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "bytesReceived",
                          "doc": "Represents the total amount of bytes received on the corresponded transport",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "iceRole",
                          "doc": "Represent the current role of ICE under DTLS Transport",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "iceLocalUsernameFragment",
                          "doc": "Represent the current local username fragment used in message validation procedures for ICE under DTLS Transport",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "dtlsState",
                          "doc": "Represents the current state of DTLS for the peer connection transport layer",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "selectedCandidatePairId",
                          "doc": "The identifier of the candidate pair the transport currently uses",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "iceState",
                          "doc": "Represents the current transport state (RTCIceTransportState) of ICE for the peer connection transport layer",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "localCertificateId",
                          "doc": "If DTLS negotiated it gives the id of the local certificate",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "remoteCertificateId",
                          "doc": "If DTLS negotiated it gives the id of the remote certificate",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "tlsVersion",
                          "doc": "Represents the version number of the TLS used in the corresponded transport",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "dtlsCipher",
                          "doc": "Represents the name of the DTLS cipher used in the corresponded transport",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "dtlsRole",
                          "doc": "The role this host plays in DTLS negotiations",
                          "type": [
                            "null",
                            {
                              "type": "enum",
                              "name": "DtlsRole",
                              "symbols": [
                                "client",
                                "server",
                                "unknown"
                              ]
                            }
                          ],
                          "default": null
                        },
                        {
                          "name": "srtpCipher",
                          "doc": "Represents the name of the SRTP cipher used in the corresponded transport",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "tlsGroup",
                          "doc": "Represents the name of the IANA TLS Supported Groups used in the corresponded transport",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "selectedCandidatePairChanges",
                          "doc": "The total number of candidate pair changes over the peer connection",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "iceCandidatePairs",
                "doc": "Candidate pair stats",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "IceCandidatePair",
                      "type": "record",
                      "fields": [
                        {
                          "name": "candidatePairId",
                          "doc": "The unique identifier of the peer connection",
                          "type": "string"
                        },
                        {
                          "name": "peerConnectionId",
                          "doc": "The unique identifier of the peer connection",
                          "type": "string"
                        },
                        {
                          "name": "label",
                          "doc": "The label associated to the peer connection",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "transportId",
                          "doc": "The identifier of the transport the ice candidate pair is negotiated on",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "localCandidateId",
                          "doc": "The unique identifier of the candidate the negotiated pair is selected at local side",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "remoteCandidateId",
                          "doc": "The unique identifier of the candidate the negotiated pair is selected at remote side",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "state",
                          "doc": "The state of ICE Candidate Pairs (RTCStatsIceState) on the corresponded transport",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "nominated",
                          "doc": "indicate if the ice candidate pair is nominated or not",
                          "type": [
                            "null",
                            "boolean"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsSent",
                          "doc": "The total number of packets sent using the last selected candidate pair over the corresponded transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsReceived",
                          "doc": "The total number of packets received using the last selected candidate pair over the corresponded transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "bytesSent",
                          "doc": "The total number of bytes sent using the last selected candidate pair over the corresponded transport",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "bytesReceived",
                          "doc": "The total number of bytes received using the last selected candidate pair over the corresponded transport",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "lastPacketSentTimestamp",
                          "doc": "Represents the timestamp at which the last packet was sent on the selected candidate pair, excluding STUN packets over the corresponded transport (UTC Epoch in ms)",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "lastPacketReceivedTimestamp",
                          "doc": "Represents the timestamp at which the last packet was received on the selected candidate pair, excluding STUN packets over the corresponded transport (UTC Epoch in ms)",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalRoundTripTime",
                          "doc": "Represents the sum of all round trip time measurements in seconds since the beginning of the session, based on STUN connectivity check over the corresponded transport",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "currentRoundTripTime",
                          "doc": "Represents the last round trip time measurements in seconds based on STUN connectivity check over the corresponded transport",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "availableOutgoingBitrate",
                          "doc": "The sum of the underlying cc algorithm provided outgoing bitrate for the RTP streams over the corresponded transport",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "availableIncomingBitrate",
                          "doc": "The sum of the underlying cc algorithm provided incoming bitrate for the RTP streams over the corresponded transport",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "requestsReceived",
                          "doc": "Represents the total number of connectivity check requests received on the selected candidate pair using the corresponded transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "requestsSent",
                          "doc": "Represents the total number of connectivity check requests sent on the selected candidate pair using the corresponded transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "responsesReceived",
                          "doc": "Represents the total number of connectivity check responses received on the selected candidate pair using the corresponded transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "responsesSent",
                          "doc": "Represents the total number of connectivity check responses sent on the selected candidate pair using the corresponded transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "consentRequestsSent",
                          "doc": "Represents the total number of consent requests sent on the selected candidate pair using the corresponded transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsDiscardedOnSend",
                          "doc": "Total amount of packets for this candidate pair that have been discarded due to socket errors on the selected candidate pair using the corresponded transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "bytesDiscardedOnSend",
                          "doc": "Total amount of bytes for this candidate pair that have been discarded due to socket errors on the selected candidate pair using the corresponded transport",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "mediaSources",
                "doc": "WebRTC App provided information related to the operation system the client uses.",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "MediaSourceStat",
                      "type": "record",
                      "fields": [
                        {
                          "name": "trackIdentifier",
                          "type": [
                            "null",
                            "string"
                          ],
                          "doc": "The unique identifier of the corresponded media track",
                          "default": null
                        },
                        {
                          "name": "kind",
                          "type": [
                            "null",
                            {
                              "type": "enum",
                              "name": "MediaSourceMediaKind",
                              "symbols": [
                                "audio",
                                "video"
                              ]
                            }
                          ],
                          "doc": "The type of the media the Mediasource produces.",
                          "default": null
                        },
                        {
                          "name": "relayedSource",
                          "type": [
                            "null",
                            "boolean"
                          ],
                          "doc": "Flag indicating if the media source is relayed or not, meaning the local endpoint is not the actual source of the media, but a proxy for that media.",
                          "default": null
                        },
                        {
                          "name": "audioLevel",
                          "type": [
                            "null",
                            "double"
                          ],
                          "doc": "The value is between 0..1 (linear), where 1.0 represents 0 dBov, 0 represents silence, and 0.5 represents approximately 6 dBSPL change in the sound pressure level from 0 dBov.",
                          "default": null
                        },
                        {
                          "name": "totalAudioEnergy",
                          "type": [
                            "null",
                            "double"
                          ],
                          "doc": "The audio energy of the media source. For calculation see www.w3.org/TR/webrtc-stats/#dom-rtcaudiosourcestats-totalaudioenergy",
                          "default": null
                        },
                        {
                          "name": "totalSamplesDuration",
                          "type": [
                            "null",
                            "double"
                          ],
                          "doc": "The duration of the audio type media source",
                          "default": null
                        },
                        {
                          "name": "echoReturnLoss",
                          "type": [
                            "null",
                            "double"
                          ],
                          "doc": "if echo cancellation is applied on the media source, then this number represents the loss calculation defined in www.itu.int/rec/T-REC-G.168-201504-I/en",
                          "default": null
                        },
                        {
                          "name": "echoReturnLossEnhancement",
                          "type": [
                            "null",
                            "double"
                          ],
                          "doc": "www.itu.int/rec/T-REC-G.168-201504-I/en",
                          "default": null
                        },
                        {
                          "name": "droppedSamplesDuration",
                          "type": [
                            "null",
                            "double"
                          ],
                          "doc": ". The total duration, in seconds, of samples produced by the device that got dropped before reaching the media source",
                          "default": null
                        },
                        {
                          "name": "droppedSamplesEvents",
                          "type": [
                            "null",
                            "int"
                          ],
                          "doc": "A counter increases every time a sample is dropped after a non-dropped sample",
                          "default": null
                        },
                        {
                          "name": "totalCaptureDelay",
                          "type": [
                            "null",
                            "double"
                          ],
                          "doc": "Total delay, in seconds, for each audio sample between the time the sample was emitted by the capture device and the sample reaching the source",
                          "default": null
                        },
                        {
                          "name": "totalSamplesCaptured",
                          "type": [
                            "null",
                            "double"
                          ],
                          "doc": "The total number of captured samples reaching the audio source",
                          "default": null
                        },
                        {
                          "name": "width",
                          "type": [
                            "null",
                            "int"
                          ],
                          "doc": "The width, in pixels, of the last frame originating from the media source",
                          "default": null
                        },
                        {
                          "name": "height",
                          "type": [
                            "null",
                            "int"
                          ],
                          "doc": "The height, in pixels, of the last frame originating from the media source",
                          "default": null
                        },
                        {
                          "name": "frames",
                          "type": [
                            "null",
                            "int"
                          ],
                          "doc": "The total number of frames originated from the media source",
                          "default": null
                        },
                        {
                          "name": "framesPerSecond",
                          "type": [
                            "null",
                            "double"
                          ],
                          "doc": " The number of frames origianted from the media source in the last second",
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "codecs",
                "doc": "List of codec the client has",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "MediaCodecStats",
                      "type": "record",
                      "fields": [
                        {
                          "name": "payloadType",
                          "type": [
                            "null",
                            "string"
                          ],
                          "doc": "Payload type used in RTP encoding / decoding process.",
                          "default": null
                        },
                        {
                          "name": "codecType",
                          "type": [
                            "null",
                            {
                              "type": "enum",
                              "name": "CodecType",
                              "symbols": [
                                "encode",
                                "decode"
                              ]
                            }
                          ],
                          "doc": "Indicates the role of the codec (encode or decode)",
                          "default": null
                        },
                        {
                          "name": "mimeType",
                          "type": [
                            "null",
                            "string"
                          ],
                          "doc": "The MIME type of the media. eg.: audio/opus.",
                          "default": null
                        },
                        {
                          "name": "clockRate",
                          "type": [
                            "null",
                            "int"
                          ],
                          "doc": "the clock rate used in RTP transport to generate the timestamp for the carried frames",
                          "default": null
                        },
                        {
                          "name": "channels",
                          "type": [
                            "null",
                            "int"
                          ],
                          "doc": "Audio Only. Represnts the number of chanels an audio media source have. Only interesting if stereo is presented",
                          "default": null
                        },
                        {
                          "name": "sdpFmtpLine",
                          "type": [
                            "null",
                            "string"
                          ],
                          "doc": "The SDP line determines the codec",
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "certificates",
                "doc": "List of certificates the client provided",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "Certificate",
                      "type": "record",
                      "fields": [
                        {
                          "name": "fingerprint",
                          "type": [
                            "null",
                            "string"
                          ],
                          "doc": " The fingerprint of the certificate.",
                          "default": null
                        },
                        {
                          "name": "fingerprintAlgorithm",
                          "type": [
                            "null",
                            "string"
                          ],
                          "doc": "The hash function used to generate the fingerprint.",
                          "default": null
                        },
                        {
                          "name": "base64Certificate",
                          "type": [
                            "null",
                            "string"
                          ],
                          "doc": "The DER encoded base-64 representation of the certificate.",
                          "default": null
                        },
                        {
                          "name": "issuerCertificateId",
                          "type": [
                            "null",
                            "string"
                          ],
                          "doc": "The id of the next certificate in the certificate chain",
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "inboundAudioTracks",
                "doc": "List of compound measurements related to inbound audio tracks",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "InboundAudioTrack",
                      "type": "record",
                      "fields": [
                        {
                          "name": "trackId",
                          "doc": "The id of the track",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "peerConnectionId",
                          "doc": " The unique generated identifier of the peer connection the inbound audio track belongs to",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "remoteClientId",
                          "doc": "The remote clientId the source outbound track belongs to",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "sfuStreamId",
                          "doc": "The id of the SFU stream this track is sinked from",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "sfuSinkId",
                          "doc": "The id of the sink this track belongs to in the SFU",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "ssrc",
                          "doc": "The RTP SSRC field",
                          "type": "long"
                        },
                        {
                          "name": "packetsReceived",
                          "doc": "The total number of packets received on the corresponded synchronization source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsLost",
                          "doc": "The total number of bytes received on the corresponded synchronization source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "jitter",
                          "doc": "The corresponded synchronization source reported jitter",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "lastPacketReceivedTimestamp",
                          "doc": "Represents the timestamp at which the last packet was received on the corresponded synchronization source (ssrc)",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "headerBytesReceived",
                          "doc": "Total number of RTP header and padding bytes received over the corresponding synchronization source (ssrc)",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsDiscarded",
                          "doc": "The total number of packets missed the playout point and therefore discarded by the jitterbuffer",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "fecPacketsReceived",
                          "doc": "Total number of FEC packets received over the corresponding synchronization source (ssrc)",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "fecPacketsDiscarded",
                          "doc": "Total number of FEC packets discarded over the corresponding synchronization source (ssrc) due to 1) late arrive; 2) the target RTP packet has already been repaired.",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "bytesReceived",
                          "doc": "Total number of bytes received over the corresponding synchronization source (ssrc) due to 1) late arrive; 2) the target RTP packet has already been repaired.",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "nackCount",
                          "doc": "Count the total number of Negative ACKnowledgement (NACK) packets sent and belongs to the corresponded synchronization source (ssrc)",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalProcessingDelay",
                          "doc": "The total processing delay in seconds spend on buffering RTP packets from received up until packets are decoded",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "estimatedPlayoutTimestamp",
                          "doc": "The estimated playout time of the corresponded synchronization source",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "jitterBufferDelay",
                          "doc": "The total time of RTP packets spent in jitterbuffer waiting for frame completion due to network uncertenity.",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "jitterBufferTargetDelay",
                          "doc": "This value is increased by the target jitter buffer delay every time a sample is emitted by the jitter buffer. The added target is the target delay, in seconds, at the time that the sample was emitted from the jitter buffer. ",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "jitterBufferEmittedCount",
                          "doc": "The total number of audio samples or video frames that have come out of the jitter buffer on the corresponded synchronization source (ssrc)",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "jitterBufferMinimumDelay",
                          "doc": "This metric is purely based on the network characteristics such as jitter and packet loss, and can be seen as the minimum obtainable jitter buffer delay if no external factors would affect it",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalSamplesReceived",
                          "doc": "The total number of audio samples received on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "concealedSamples",
                          "doc": "The total number of samples decoded by the media decoder from the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "silentConcealedSamples",
                          "doc": "The total number of samples concealed from the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "concealmentEvents",
                          "doc": "The total number of concealed event emitted to the media codec by the corresponded jitterbuffer",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "insertedSamplesForDeceleration",
                          "doc": "The total number of samples inserted to decelarete the audio playout (happens when the jitterbuffer detects a shrinking buffer and need to increase the jitter buffer delay)",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "removedSamplesForAcceleration",
                          "doc": "The total number of samples inserted to accelerate the audio playout (happens when the jitterbuffer detects a growing buffer and need to shrink the jitter buffer delay)",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "audioLevel",
                          "doc": "The current audio level",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalAudioEnergy",
                          "doc": "Represents the energy level reported by the media source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalSamplesDuration",
                          "doc": "Represents the total duration of the audio samples the media source actually transconverted in seconds",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "decoderImplementation",
                          "doc": "Indicate the name of the decoder implementation library",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsSent",
                          "doc": "Total number of RTP packets sent at the remote endpoint to this endpoint on this synchronization source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "bytesSent",
                          "doc": "Total number of payload bytes sent at the remote endpoint to this endpoint on this synchronization source",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "remoteTimestamp",
                          "doc": "The timestamp corresnponds to the time in UTC Epoch the remote endpoint reported the statistics belong to the sender side and correspond to the synchronization source (ssrc)",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "reportsSent",
                          "doc": "The number of SR reports the remote endpoint sent corresponded to synchronization source (ssrc) this report belongs to",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "roundTripTime",
                          "doc": "Estimated round trip time for the SR reports based on DLRR reports on the corresponded RTP stream",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalRoundTripTime",
                          "doc": " Represents the cumulative sum of all round trip time measurements performed on the corresponded RTP stream",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "roundTripTimeMeasurements",
                          "doc": "Represents the total number of SR reports received with DLRR reports to be able to calculate the round trip time on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "synthesizedSamplesDuration",
                          "doc": "This metric can be used together with totalSamplesDuration to calculate the percentage of played out media being synthesized",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "synthesizedSamplesEvents",
                          "doc": "The number of synthesized samples events.",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalPlayoutDelay",
                          "doc": " The playout delay includes the delay from being emitted to the actual time of playout on the device",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalSamplesCount",
                          "doc": "When audio samples are pulled by the playout device, this counter is incremented with the number of samples emitted for playout",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "inboundVideoTracks",
                "doc": "List of compound measurements related to inbound video tracks",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "InboundVideoTrack",
                      "type": "record",
                      "fields": [
                        {
                          "name": "trackId",
                          "doc": "The id of the track",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "peerConnectionId",
                          "doc": " The unique generated identifier of the peer connection the inbound audio track belongs to",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "remoteClientId",
                          "doc": "The remote clientId the source outbound track belongs to",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "sfuStreamId",
                          "doc": "The id of the SFU stream this track is sinked from",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "sfuSinkId",
                          "doc": "The id of the sink this track belongs to in the SFU",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "ssrc",
                          "doc": "The RTP SSRC field",
                          "type": "long"
                        },
                        {
                          "name": "packetsReceived",
                          "doc": "The total number of packets received on the corresponded synchronization source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsLost",
                          "doc": "The total number of bytes received on the corresponded synchronization source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "jitter",
                          "doc": "The corresponded synchronization source reported jitter",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "framesDropped",
                          "doc": "The number of frames dropped prior to decode or missing chunks",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "lastPacketReceivedTimestamp",
                          "doc": "Represents the timestamp at which the last packet was received on the corresponded synchronization source (ssrc)",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "headerBytesReceived",
                          "doc": "Total number of RTP header and padding bytes received over the corresponding synchronization source (ssrc)",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsDiscarded",
                          "doc": "The total number of packets missed the playout point and therefore discarded by the jitterbuffer",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "fecPacketsReceived",
                          "doc": "Total number of FEC packets received over the corresponding synchronization source (ssrc)",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "fecPacketsDiscarded",
                          "doc": "Total number of FEC packets discarded over the corresponding synchronization source (ssrc) due to 1) late arrive; 2) the target RTP packet has already been repaired.",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "bytesReceived",
                          "doc": "Total number of bytes received over the corresponding synchronization source (ssrc) due to 1) late arrive; 2) the target RTP packet has already been repaired.",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "nackCount",
                          "doc": "Count the total number of Negative ACKnowledgement (NACK) packets sent and belongs to the corresponded synchronization source (ssrc)",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalProcessingDelay",
                          "doc": "The total processing delay in seconds spend on buffering RTP packets from received up until packets are decoded",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "estimatedPlayoutTimestamp",
                          "doc": "The estimated playout time of the corresponded synchronization source",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "jitterBufferDelay",
                          "doc": "The total time of RTP packets spent in jitterbuffer waiting for frame completion due to network uncertenity.",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "jitterBufferTargetDelay",
                          "doc": "This value is increased by the target jitter buffer delay every time a sample is emitted by the jitter buffer. The added target is the target delay, in seconds, at the time that the sample was emitted from the jitter buffer. ",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "jitterBufferEmittedCount",
                          "doc": "The total number of audio samples or video frames that have come out of the jitter buffer on the corresponded synchronization source (ssrc)",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "jitterBufferMinimumDelay",
                          "doc": "This metric is purely based on the network characteristics such as jitter and packet loss, and can be seen as the minimum obtainable jitter buffer delay if no external factors would affect it",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "decoderImplementation",
                          "doc": "Indicate the name of the decoder implementation library",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "framesDecoded",
                          "doc": "The total number of frames decoded on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "keyFramesDecoded",
                          "doc": "The total number of keyframes decoded on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "frameWidth",
                          "doc": "The width of the frame of the video sent by the remote source on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "frameHeight",
                          "doc": "The height of the frame of the video sent by the remote source on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "framesPerSecond",
                          "doc": "The frame per seconds of the video sent by the remote source on the corresponded RTP stream",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "qpSum",
                          "doc": "The QP sum (only interested in VP8,9) of the frame of the video sent by the remote source on the corresponded RTP stream",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalDecodeTime",
                          "doc": "The total tiem spent on decoding video on the corresponded RTP stream",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalInterFrameDelay",
                          "doc": "The total interframe delay",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalSquaredInterFrameDelay",
                          "doc": "The total number of inter frame delay squere on the corresponded synchronization source (ssrc) Useful for variance calculation for interframe delays",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "firCount",
                          "doc": "The total number FIR packets sent from this endpoint to the source on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "pliCount",
                          "doc": "The total number of Picture Loss Indication sent on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "framesReceived",
                          "doc": "The total number of frames received on the corresponded RTP stream.",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsSent",
                          "doc": "Total number of RTP packets sent at the remote endpoint to this endpoint on this synchronization source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "bytesSent",
                          "doc": "Total number of payload bytes sent at the remote endpoint to this endpoint on this synchronization source",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "remoteTimestamp",
                          "doc": "The timestamp corresnponds to the time in UTC Epoch the remote endpoint reported the statistics belong to the sender side and correspond to the synchronization source (ssrc)",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "reportsSent",
                          "doc": "The number of SR reports the remote endpoint sent corresponded to synchronization source (ssrc) this report belongs to",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "roundTripTime",
                          "doc": "Estimated round trip time for the SR reports based on DLRR reports on the corresponded RTP stream",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalRoundTripTime",
                          "doc": " Represents the cumulative sum of all round trip time measurements performed on the corresponded RTP stream",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "roundTripTimeMeasurements",
                          "doc": "Represents the total number of SR reports received with DLRR reports to be able to calculate the round trip time on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "outboundAudioTracks",
                "doc": "List of compound measurements related to outbound audio tracks",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "OutboundAudioTrack",
                      "type": "record",
                      "fields": [
                        {
                          "name": "trackId",
                          "doc": "The id of the track",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "peerConnectionId",
                          "doc": " The unique generated identifier of the peer connection the inbound audio track belongs to",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "sfuStreamId",
                          "doc": "The id of the SFU stream this track is related to",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "ssrc",
                          "doc": "The RTP SSRC field",
                          "type": "long"
                        },
                        {
                          "name": "packetsSent",
                          "doc": "The total number of packets sent on the corresponded synchronization source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "bytesSent",
                          "doc": "The total number of bytes sent on the corresponded synchronization source",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "rid",
                          "doc": " The rid encoding parameter of the corresponded synchronization source",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "headerBytesSent",
                          "doc": "Total number of RTP header and padding bytes sent over the corresponding synchronization source (ssrc)",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "retransmittedPacketsSent",
                          "doc": "Total number of retransmitted packets sent over the corresponding synchronization source (ssrc).",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "retransmittedBytesSent",
                          "doc": "Total number of retransmitted bytes sent over the corresponding synchronization source (ssrc).",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "targetBitrate",
                          "doc": "Reflects the current encoder target in bits per second.",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalEncodedBytesTarget",
                          "doc": "The total number of bytes of RTP coherent frames encoded completly depending on the frame size the encoder targets",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalPacketSendDelay",
                          "doc": "The total number of delay packets buffered at the sender side in seconds over the corresponding synchronization source",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "averageRtcpInterval",
                          "doc": "The average RTCP interval between two consecutive compound RTCP packets sent for the corresponding synchronization source (ssrc)",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "nackCount",
                          "doc": "Count the total number of Negative ACKnowledgement (NACK) packets received over the corresponding synchronization source (ssrc)",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "encoderImplementation",
                          "doc": "Indicate the name of the encoder implementation library",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "active",
                          "doc": "Indicates whether this RTP stream is configured to be sent or disabled",
                          "type": [
                            "null",
                            "boolean"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsReceived",
                          "doc": "The total number of packets received on the corresponded synchronization source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsLost",
                          "doc": "The total number of bytes received on the corresponded synchronization source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "jitter",
                          "doc": "The corresponded synchronization source reported jitter",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "roundTripTime",
                          "doc": "RTT measurement in seconds based on (most likely) SR, and RR belongs to the corresponded synchronization source",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalRoundTripTime",
                          "doc": "The sum of RTT measurements belongs to the corresponded synchronization source",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "fractionLost",
                          "doc": "The receiver reported fractional lost belongs to the corresponded synchronization source",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "roundTripTimeMeasurements",
                          "doc": "The total number of calculated RR measurements received on this source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "relayedSource",
                          "doc": "True if the corresponded media source is remote, false otherwise (or null depending on browser and version)",
                          "type": [
                            "null",
                            "boolean"
                          ],
                          "default": null
                        },
                        {
                          "name": "audioLevel",
                          "doc": "Represents the audio level reported by the media source",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalAudioEnergy",
                          "doc": "Represents the energy level reported by the media source",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalSamplesDuration",
                          "doc": "Represents the total duration of the audio samples the media source actually transconverted in seconds",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "echoReturnLoss",
                          "doc": "Represents the echo cancellation in decibels corresponded to the media source.",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "echoReturnLossEnhancement",
                          "doc": "Represents the echo cancellation in decibels added as a postprocessing by the library after the audio is catched from the emdia source.",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "droppedSamplesDuration",
                          "type": [
                            "null",
                            "double"
                          ],
                          "doc": ". The total duration, in seconds, of samples produced by the device that got dropped before reaching the media source",
                          "default": null
                        },
                        {
                          "name": "droppedSamplesEvents",
                          "type": [
                            "null",
                            "int"
                          ],
                          "doc": "A counter increases every time a sample is dropped after a non-dropped sample",
                          "default": null
                        },
                        {
                          "name": "totalCaptureDelay",
                          "type": [
                            "null",
                            "double"
                          ],
                          "doc": "Total delay, in seconds, for each audio sample between the time the sample was emitted by the capture device and the sample reaching the source",
                          "default": null
                        },
                        {
                          "name": "totalSamplesCaptured",
                          "type": [
                            "null",
                            "double"
                          ],
                          "doc": "The total number of captured samples reaching the audio source",
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "outboundVideoTracks",
                "doc": "List of compound measurements related to outbound video tracks",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "OutboundVideoTrack",
                      "type": "record",
                      "fields": [
                        {
                          "name": "trackId",
                          "doc": "The id of the track",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "peerConnectionId",
                          "doc": " The unique generated identifier of the peer connection the inbound audio track belongs to",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "sfuStreamId",
                          "doc": "The id of the SFU stream this track is related to",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "ssrc",
                          "doc": "The RTP SSRC field",
                          "type": "long"
                        },
                        {
                          "name": "packetsSent",
                          "doc": "The total number of packets sent on the corresponded synchronization source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "bytesSent",
                          "doc": "The total number of bytes sent on the corresponded synchronization source",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "rid",
                          "doc": " The rid encoding parameter of the corresponded synchronization source",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "headerBytesSent",
                          "doc": "Total number of RTP header and padding bytes sent over the corresponding synchronization source (ssrc)",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "retransmittedPacketsSent",
                          "doc": "Total number of retransmitted packets sent over the corresponding synchronization source (ssrc).",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "retransmittedBytesSent",
                          "doc": "Total number of retransmitted bytes sent over the corresponding synchronization source (ssrc).",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "targetBitrate",
                          "doc": "Reflects the current encoder target in bits per second.",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalEncodedBytesTarget",
                          "doc": "The total number of bytes of RTP coherent frames encoded completly depending on the frame size the encoder targets",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalPacketSendDelay",
                          "doc": "The total number of delay packets buffered at the sender side in seconds over the corresponding synchronization source",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "averageRtcpInterval",
                          "doc": "The average RTCP interval between two consecutive compound RTCP packets sent for the corresponding synchronization source (ssrc)",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "nackCount",
                          "doc": "Count the total number of Negative ACKnowledgement (NACK) packets received over the corresponding synchronization source (ssrc)",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "encoderImplementation",
                          "doc": "Indicate the name of the encoder implementation library",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "active",
                          "doc": "Indicates whether this RTP stream is configured to be sent or disabled",
                          "type": [
                            "null",
                            "boolean"
                          ],
                          "default": null
                        },
                        {
                          "name": "frameWidth",
                          "doc": "The frame width in pixels of the frames targeted by the media encoder",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "frameHeight",
                          "doc": "The frame width the media encoder targeted",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "framesPerSecond",
                          "doc": "The encoded number of frames in the last second on the corresponded media source",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "framesSent",
                          "doc": "TThe total number of frames sent on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "hugeFramesSent",
                          "doc": "The total number of huge frames (avgFrameSize * 2.5) on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "framesEncoded",
                          "doc": "The total number of frames encoded by the media source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "keyFramesEncoded",
                          "doc": "The total number of keyframes encoded on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "qpSum",
                          "doc": "The sum of the QP the media encoder provided on the corresponded RTP stream.",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalEncodeTime",
                          "doc": "The total time in seconds spent in encoding media frames for the corresponded RTP stream.",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "qualityLimitationDurationNone",
                          "doc": "Time elapsed in seconds when the RTC connection has not limited the quality",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "qualityLimitationDurationCPU",
                          "doc": "Time elapsed in seconds the RTC connection had a limitation because of CPU",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "qualityLimitationDurationBandwidth",
                          "doc": "Time elapsed in seconds the RTC connection had a limitation because of Bandwidth",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "qualityLimitationDurationOther",
                          "doc": "Time elapsed in seconds the RTC connection had a limitation because of Other factor",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "qualityLimitationReason",
                          "doc": "Indicate a reason for the quality limitation of the corresponded synchronization source",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "qualityLimitationResolutionChanges",
                          "doc": "The total number of resolution changes occured ont he corresponded RTP stream due to quality changes",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "firCount",
                          "doc": "The total number FIR packets sent from this endpoint to the source on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "pliCount",
                          "doc": "The total number of Picture Loss Indication sent on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsReceived",
                          "doc": "The total number of packets received on the corresponded synchronization source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsLost",
                          "doc": "The total number of bytes received on the corresponded synchronization source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "jitter",
                          "doc": "The corresponded synchronization source reported jitter",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "roundTripTime",
                          "doc": "RTT measurement in seconds based on (most likely) SR, and RR belongs to the corresponded synchronization source",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "totalRoundTripTime",
                          "doc": "The sum of RTT measurements belongs to the corresponded synchronization source",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "fractionLost",
                          "doc": "The receiver reported fractional lost belongs to the corresponded synchronization source",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "roundTripTimeMeasurements",
                          "doc": "The total number of calculated RR measurements received on this source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "framesDropped",
                          "doc": "The total number of frames reported to be lost by the remote endpoit on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "relayedSource",
                          "doc": "True if the corresponded media source is remote, false otherwise (or null depending on browser and version)",
                          "type": [
                            "null",
                            "boolean"
                          ],
                          "default": null
                        },
                        {
                          "name": "width",
                          "doc": "The width, in pixels, of the last frame originating from the media source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "height",
                          "doc": "The height, in pixels, of the last frame originating from the media source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "frames",
                          "doc": "The total number of frames originated from the media source",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "iceLocalCandidates",
                "doc": "List of local ICE candidates",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "IceLocalCandidate",
                      "type": "record",
                      "fields": [
                        {
                          "name": "peerConnectionId",
                          "doc": "Refers to the peer connection the local candidate belongs to",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "id",
                          "doc": "The unique identifier of the local candidate",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "address",
                          "doc": "The address of the local endpoint (Ipv4, Ipv6, FQDN)",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "port",
                          "doc": "The port number of the local endpoint the ICE uses",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "protocol",
                          "doc": "The protocol for the ICE",
                          "type": [
                            "null",
                            {
                              "type": "enum",
                              "name": "LocalCandidateProtocol",
                              "symbols": [
                                "tcp",
                                "udp"
                              ]
                            }
                          ],
                          "default": null
                        },
                        {
                          "name": "candidateType",
                          "doc": "The type of the local candidate",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "priority",
                          "doc": "The priority of the local candidate",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "url",
                          "doc": "The url of the ICE server",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "relayProtocol",
                          "doc": "The relay protocol the local candidate uses",
                          "type": [
                            "null",
                            {
                              "type": "enum",
                              "name": "LocalCandidateRelayProtocol",
                              "symbols": [
                                "tcp",
                                "udp",
                                "tls"
                              ]
                            }
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "iceRemoteCandidates",
                "doc": "List of remote ICE candidates",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "IceRemoteCandidate",
                      "type": "record",
                      "fields": [
                        {
                          "name": "peerConnectionId",
                          "doc": "Refers to the peer connection the local candidate belongs to",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "id",
                          "doc": "The unique identifier of the local candidate",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "address",
                          "doc": "The address of the local endpoint (Ipv4, Ipv6, FQDN)",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "port",
                          "doc": "The port number of the local endpoint the ICE uses",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "protocol",
                          "doc": "The protocol for the ICE",
                          "type": [
                            "null",
                            {
                              "type": "enum",
                              "name": "RemoteCandidateProtocol",
                              "symbols": [
                                "tcp",
                                "udp"
                              ]
                            }
                          ],
                          "default": null
                        },
                        {
                          "name": "candidateType",
                          "doc": "The type of the local candidate",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "priority",
                          "doc": "The priority of the local candidate",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "url",
                          "doc": "The url of the ICE server",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "relayProtocol",
                          "doc": "The relay protocol the local candidate uses",
                          "type": [
                            "null",
                            {
                              "type": "enum",
                              "name": "RemoteCandidateRelayProtocol",
                              "symbols": [
                                "tcp",
                                "udp",
                                "tls"
                              ]
                            }
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "timestamp",
                "doc": "The timestamp the sample is created in GMT",
                "type": "long"
              },
              {
                "name": "timeZoneOffsetInHours",
                "doc": "The offset from GMT in hours",
                "type": [
                  "null",
                  "int"
                ],
                "default": null
              },
              {
                "name": "marker",
                "doc": "Special marker for the samples",
                "type": [
                  "null",
                  "string"
                ],
                "default": null
              }
            ]
          }
        }
      ],
      "default": null
    },
    {
      "name": "sfuSamples",
      "doc": "Samples taken from an Sfu",
      "type": [
        "null",
        {
          "type": "array",
          "items": {
            "name": "SfuSample",
            "type": "record",
            "doc": "docs",
            "fields": [
              {
                "name": "sfuId",
                "doc": "Unique generated id for the sfu samples are originated from",
                "type": "string"
              },
              {
                "name": "timestamp",
                "doc": "The timestamp the sample is created in GMT",
                "type": "long"
              },
              {
                "name": "timeZoneOffsetInHours",
                "doc": "The offset from GMT in hours",
                "type": [
                  "null",
                  "int"
                ],
                "default": null
              },
              {
                "name": "marker",
                "doc": "Special marker for the samples",
                "type": [
                  "null",
                  "string"
                ],
                "default": null
              },
              {
                "name": "transports",
                "doc": "The Sfu Transports obtained measurements",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "SfuTransport",
                      "type": "record",
                      "fields": [
                        {
                          "name": "noReport",
                          "doc": "Flag indicate to not generate report from this sample",
                          "type": [
                            "null",
                            "boolean"
                          ],
                          "default": null
                        },
                        {
                          "name": "transportId",
                          "doc": "The generated unique identifier of the transport",
                          "type": "string"
                        },
                        {
                          "name": "internal",
                          "doc": "Flag to indicate that the transport is used as an internal transport between SFU instances",
                          "type": [
                            "null",
                            "boolean"
                          ],
                          "default": null
                        },
                        {
                          "name": "dtlsState",
                          "doc": "Represent the current value of the state attribute of the underlying RTCDtlsTransport.",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "iceState",
                          "doc": "Represent the current value of the state attribute of the underlying RTCIceTransport",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "sctpState",
                          "doc": "Represents the the current value of the SCTP state of the transport of the SFU",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "iceRole",
                          "doc": "Represent the current value of the role SFU takes place in ICE",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "localAddress",
                          "doc": "The local address of the ICE candidate selected for the transport (IPv4, IPv6, FQDN)",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "localPort",
                          "doc": "The local port number",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "protocol",
                          "doc": "The protocol used by the transport",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "remoteAddress",
                          "doc": "The remote address of the ICE candidate selected for the transport (IPv4, IPv6, FQDN)",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "remotePort",
                          "doc": "The remote port number",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "rtpBytesReceived",
                          "doc": "The total amount of RTP bytes received on this transport",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "rtpBytesSent",
                          "doc": "The total amount of RTP bytes sent on this transport",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "rtpPacketsReceived",
                          "doc": "The total amount of RTP packets received on this transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "rtpPacketsSent",
                          "doc": "The total amount of RTP packets sent on this transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "rtpPacketsLost",
                          "doc": "The total amount of RTP packets lost on this transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "rtxBytesReceived",
                          "doc": "The total amount of RTX bytes received on this transport",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "rtxBytesSent",
                          "doc": "The total amount of RTX bytes sent on this transport",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "rtxPacketsReceived",
                          "doc": "The total amount of RTX packets received on this transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "rtxPacketsSent",
                          "doc": "The total amount of RTX packets sent on this transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "rtxPacketsLost",
                          "doc": "The total amount of RTX packets lost on this transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "rtxPacketsDiscarded",
                          "doc": "The total amount of RTX packets discarded on this transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "sctpBytesReceived",
                          "doc": "The total amount of SCTP bytes received on this transport",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "sctpBytesSent",
                          "doc": "The total amount of SCTP bytes sent on this transport",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "sctpPacketsReceived",
                          "doc": "The total amount of SCTP packets received on this transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "sctpPacketsSent",
                          "doc": "The total amount of SCTP packets sent on this transport",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "inboundRtpPads",
                "doc": "The Sfu Inbound Rtp Pad obtained measurements",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "SfuInboundRtpPad",
                      "type": "record",
                      "fields": [
                        {
                          "name": "noReport",
                          "doc": "Flag indicate to not generate report from this sample",
                          "type": [
                            "null",
                            "boolean"
                          ],
                          "default": null
                        },
                        {
                          "name": "transportId",
                          "doc": "The id of the transport the RTP Pad uses.",
                          "type": "string"
                        },
                        {
                          "name": "internal",
                          "doc": "Flag to indicate that the rtp pad is used as an internal communication between SFU instances",
                          "type": [
                            "null",
                            "boolean"
                          ],
                          "default": null
                        },
                        {
                          "name": "streamId",
                          "doc": "The id of the media stream the RTP pad belongs to. This id is to group rtp pads (e.g.: simulcast) carrying payloads to the same media. ",
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
                          "name": "mediaType",
                          "doc": "the type of the media the stream carries (\"audio\" or \"video\")",
                          "type": [
                            "null",
                            {
                              "type": "enum",
                              "name": "SfuInboundMediaType",
                              "symbols": [
                                "audio",
                                "video"
                              ]
                            }
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
                            "int"
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
                            "int"
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
                          "name": "packetsReceived",
                          "doc": "The total number of packets received on the corresponded RTP stream.",
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
                          "name": "packetsRepaired",
                          "doc": "The total number of packets repaired by either retransmission or FEC on the corresponded RTP stream.",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "packetsFailedDecryption",
                          "doc": "The total number of packets failed to be decrypted on the corresponded RTP stream.",
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
                          "name": "fecPacketsReceived",
                          "doc": "The total number of FEC packets received on the corresponded RTP stream.",
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
                          "name": "bytesReceived",
                          "doc": "The total amount of payload bytes received on the corresponded RTP stream.",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "rtcpSrReceived",
                          "doc": "The total number of SR reports received by the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "rtcpRrSent",
                          "doc": "The total number of RR reports sent on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "rtxPacketsReceived",
                          "doc": "If rtx packets are sent or received on the same stream then this number indicates how may has been sent",
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
                          "name": "framesReceived",
                          "doc": "The number of frames received on the corresponded RTP stream",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "framesDecoded",
                          "doc": "Indicate the number of frames the Sfu has been decoded",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "keyFramesDecoded",
                          "doc": "Indicate the number of keyframes the Sfu has been decoded",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "fractionLost",
                          "doc": "The calculated fractionLost of the stream",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "jitter",
                          "doc": "The calculated jitter of the stream",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "roundTripTime",
                          "doc": "The calculated RTT of the stream",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "outboundRtpPads",
                "doc": "The Sfu Outbound Rtp Pad obtained measurements",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "SfuOutboundRtpPad",
                      "type": "record",
                      "fields": [
                        {
                          "name": "noReport",
                          "doc": "Flag indicate to not generate report from this sample",
                          "type": [
                            "null",
                            "boolean"
                          ],
                          "default": null
                        },
                        {
                          "name": "transportId",
                          "doc": "The id of the transport the RTP stream uses.",
                          "type": "string"
                        },
                        {
                          "name": "internal",
                          "doc": "Flag to indicate that the rtp pad is used as an internal communication between SFU instances",
                          "type": [
                            "null",
                            "boolean"
                          ],
                          "default": null
                        },
                        {
                          "name": "streamId",
                          "doc": "The id of the stream this outbound RTP pad sinks the media from",
                          "type": "string"
                        },
                        {
                          "name": "sinkId",
                          "doc": "The id of a group of RTP pad sinks the media stream out from the SFU.",
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
                            {
                              "type": "enum",
                              "name": "SfuOutboundMediaType",
                              "symbols": [
                                "audio",
                                "video"
                              ]
                            }
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
                            "int"
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
                            "int"
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
                          "name": "fractionLost",
                          "doc": "The calculated fractionLost of the stream",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "jitter",
                          "doc": "The calculated jitter of the stream",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "roundTripTime",
                          "doc": "The calculated RTT of the stream",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "sctpChannels",
                "doc": "The Sfu Outbound Rtp Pad obtained measurements",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "SfuSctpChannel",
                      "type": "record",
                      "fields": [
                        {
                          "name": "noReport",
                          "doc": "Flag indicate to not generate report from this sample",
                          "type": [
                            "null",
                            "boolean"
                          ],
                          "default": null
                        },
                        {
                          "name": "transportId",
                          "doc": "The id of the transport the RTP stream uses.",
                          "type": "string"
                        },
                        {
                          "name": "streamId",
                          "doc": "The id of the sctp stream",
                          "type": "string"
                        },
                        {
                          "name": "channelId",
                          "doc": "The id of the sctp stream",
                          "type": "string"
                        },
                        {
                          "name": "internal",
                          "doc": "Flag to indicate that the SCTP channel is used as an internally between SFU instances",
                          "type": [
                            "null",
                            "boolean"
                          ],
                          "default": null
                        },
                        {
                          "name": "label",
                          "doc": "The label of the sctp stream",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "protocol",
                          "doc": "The protocol used to establish an sctp stream",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "sctpSmoothedRoundTripTime",
                          "doc": "The latest smoothed round-trip time value, corresponding to spinfo_srtt defined in [RFC6458] but converted to seconds. If there has been no round-trip time measurements yet, this value is undefined.",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "sctpCongestionWindow",
                          "doc": "The latest congestion window, corresponding to spinfo_cwnd defined in [RFC6458].",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "sctpReceiverWindow",
                          "doc": "The latest receiver window, corresponding to sstat_rwnd defined in [RFC6458].",
                          "type": [
                            "null",
                            "double"
                          ],
                          "default": null
                        },
                        {
                          "name": "sctpMtu",
                          "doc": "The latest maximum transmission unit, corresponding to spinfo_mtu defined in [RFC6458].",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "sctpUnackData",
                          "doc": "The number of unacknowledged DATA chunks, corresponding to sstat_unackdata defined in [RFC6458].",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "messageReceived",
                          "doc": "The number of message received on the corresponded SCTP stream.",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "messageSent",
                          "doc": "The number of message sent on the corresponded SCTP stream.",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "bytesReceived",
                          "doc": "The number of bytes received on the corresponded SCTP stream.",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "bytesSent",
                          "doc": "The number of bytes sent on the corresponded SCTP stream.",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "extensionStats",
                "doc": "The Sfu provided custom stats payload",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "SfuExtensionStats",
                      "type": "record",
                      "fields": [
                        {
                          "name": "type",
                          "type": "string",
                          "doc": "The type of the extension stats the custom app provides"
                        },
                        {
                          "name": "payload",
                          "type": "string",
                          "doc": "The payload of the extension stats the custom app provides"
                        }
                      ]
                    }
                  }
                ],
                "default": null
              }
            ]
          }
        }
      ],
      "default": null
    },
    {
      "name": "turnSamples",
      "doc": "Samples taken from the TURN server",
      "type": [
        "null",
        {
          "type": "array",
          "items": {
            "name": "TurnSample",
            "type": "record",
            "doc": "docs",
            "fields": [
              {
                "name": "serverId",
                "doc": "A unique id of the turn server",
                "type": "string"
              },
              {
                "name": "allocations",
                "doc": "Peer Alloocation data",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "TurnPeerAllocation",
                      "type": "record",
                      "fields": [
                        {
                          "name": "peerId",
                          "doc": "a unique id for the allocation",
                          "type": "string"
                        },
                        {
                          "name": "sessionId",
                          "doc": "The corresponded session the allocation belongs to",
                          "type": "string"
                        },
                        {
                          "name": "relayedAddress",
                          "doc": "The allocated address",
                          "type": "string"
                        },
                        {
                          "name": "relayedPort",
                          "doc": "The allocated port",
                          "type": "int"
                        },
                        {
                          "name": "transportProtocol",
                          "doc": "protocol (TCP, UDP)",
                          "type": "string"
                        },
                        {
                          "name": "peerAddress",
                          "doc": "The address of the address the serever connect to",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "peerPort",
                          "doc": "The portnumber the server connects to",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "sendingBitrate",
                          "doc": "the bitrate the TURN server sending to the peer",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "receivingBitrate",
                          "doc": "the bitrate the TURN server receiving from the peer",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "sentBytes",
                          "doc": "the amount of bytes sent to the peer",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "receivedBytes",
                          "doc": "the amount of bytes received from the peer",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "sentPackets",
                          "doc": "the amount of packets sent to the peer",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "receivedPackets",
                          "doc": "the amount of packets received from the peer",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              },
              {
                "name": "sessions",
                "doc": "Session data",
                "type": [
                  "null",
                  {
                    "type": "array",
                    "items": {
                      "name": "TurnSession",
                      "type": "record",
                      "fields": [
                        {
                          "name": "sessionId",
                          "doc": "Flag indicate to not generate report from this sample",
                          "type": "string"
                        },
                        {
                          "name": "realm",
                          "doc": "The Authentication Realm (RFC 8656)",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "username",
                          "doc": "The username of the used in authentication",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "clientId",
                          "doc": "The id of the client the TURN session belongs to (ClientSample)",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "started",
                          "doc": "The timestamp when the session has been started. Epoch in milliseconds, GMT",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "nonceExpirationTime",
                          "doc": "For each Allocate request, the server SHOULD generate a new random nonce when the allocation is first attempted following the randomness recommendations in [RFC4086] and SHOULD expire the nonce at least once every hour during the lifetime of the allocation.  Epoch in millis GMT",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "serverAddress",
                          "doc": "The address of the server the client connected to",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "serverPort",
                          "doc": "The portnumber the server listens the client requests",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "transportProtocol",
                          "doc": "the transport protocol betwwen the client and the server (TCP, UDP, TCPTLS, UDPTLS, SCTP, SCTPTLS)",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "clientAddress",
                          "doc": "The address of the client connected from",
                          "type": [
                            "null",
                            "string"
                          ],
                          "default": null
                        },
                        {
                          "name": "clientPort",
                          "doc": "The portnumber the client requested from",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "sendingBitrate",
                          "doc": "the bitrate the TURN server sending to the client",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "receivingBitrate",
                          "doc": "the bitrate the TURN server receiving from the client",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "sentBytes",
                          "doc": "the amount of bytes sent to the client",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "receivedBytes",
                          "doc": "the amount of bytes received from the client",
                          "type": [
                            "null",
                            "long"
                          ],
                          "default": null
                        },
                        {
                          "name": "sentPackets",
                          "doc": "the amount of packets sent to the client",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        },
                        {
                          "name": "receivedPackets",
                          "doc": "the amount of packets received from the client",
                          "type": [
                            "null",
                            "int"
                          ],
                          "default": null
                        }
                      ]
                    }
                  }
                ],
                "default": null
              }
            ]
          }
        }
      ],
      "default": null
    }
  ]
}