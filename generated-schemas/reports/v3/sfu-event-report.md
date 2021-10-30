## SfuEventReport
---


Events happened in calls.


Name | Type | Required | Description 
--- | --- | --- | ---
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
name | string | Yes | The name of the event. Possible values are: SFU_JOINED, SFU_LEFT, SFU_TRANSPORT_OPENED, SFU_TRANSPORT_CLOSED, SFU_RTP_STREAM_ADDED, SFU_RTP_STREAM_REMOVED
mediaUnitId | string | No | The media unit id the report belongs to
marker | string | No | The marker the originated sample is reported with
sfuId | string | No | The generated unique identifier of the SFU
sfuName | string | No | The provided name of the SFU
callId | string | No | The callId the event belongs to
transportId | string | No | SFU provided transport identifier
streamId | string | No | Unique identifier of the RTP stream the event is related to
sourceId | string | No | Unique identifier of the RTP stream the event is related to
sinkId | string | No | Unique identifier of the RTP stream the event is related to
sctpStreamId | string | No | Unique identifier of the SCTP stream the event is related to
SSRC | long | No | The SSRC identifier of the RTP stream realted to
message | string | No | the human readable message of the event
value | string | No | the value of the event
attachments | string | No | attachment the event may created with