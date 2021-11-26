export interface SfuInboundRtpPadReport {
	serviceId: string;
	mediaUnitId: string;
	sfuId: string;
	marker?: null | undefined | string;
	timestamp: number;
	transportId: string;
	rtpStreamId: string;
	padId: string;
	ssrc: number;
	trackId?: null | undefined | string;
	clientId?: null | undefined | string;
	callId?: null | undefined | string;
	mediaType?: null | undefined | string;
	payloadType?: null | undefined | number;
	mimeType?: null | undefined | string;
	clockRate?: null | undefined | number;
	sdpFmtpLine?: null | undefined | string;
	rid?: null | undefined | string;
	rtxSsrc?: null | undefined | number;
	targetBitrate?: null | undefined | number;
	voiceActivityFlag?: null | undefined | boolean;
	firCount?: null | undefined | number;
	pliCount?: null | undefined | number;
	nackCount?: null | undefined | number;
	sliCount?: null | undefined | number;
	packetsLost?: null | undefined | number;
	packetsReceived?: null | undefined | number;
	packetsDiscarded?: null | undefined | number;
	packetsRepaired?: null | undefined | number;
	packetsFailedDecryption?: null | undefined | number;
	packetsDuplicated?: null | undefined | number;
	fecPacketsReceived?: null | undefined | number;
	fecPacketsDiscarded?: null | undefined | number;
	bytesReceived?: null | undefined | number;
	rtcpSrReceived?: null | undefined | number;
	rtcpRrSent?: null | undefined | number;
	rtxPacketsReceived?: null | undefined | number;
	rtxPacketsDiscarded?: null | undefined | number;
	framesReceived?: null | undefined | number;
	framesDecoded?: null | undefined | number;
	keyFramesDecoded?: null | undefined | number;
	fractionLost?: null | undefined | number;
	jitter?: null | undefined | number;
	roundTripTime?: null | undefined | number;
	attachments?: null | undefined | string;
}