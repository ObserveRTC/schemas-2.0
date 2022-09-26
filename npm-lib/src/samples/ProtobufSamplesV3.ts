export const schema = `
syntax = "proto3";

package org.observertc.schemas.protobuf;

message Samples {
	message Controls {
		string accessClaim = 1;
		bool close = 2;
	}
	message ClientSample {
		message Engine {
			string name = 1;
			string version = 2;
		}
		message Platform {
			string model = 1;
			string type = 2;
			string vendor = 3;
		}
		message Browser {
			string name = 1;
			string version = 2;
		}
		message OperationSystem {
			string name = 1;
			string version = 2;
			string versionName = 3;
		}
		message MediaDevice {
			string id = 1;
			string kind = 2;
			string label = 3;
		}
		message ExtensionStat {
			string payload = 1;
			string type = 2;
		}
		message DataChannel {
			string peerConnectionId = 1;
			int64 bytesReceived = 2;
			int64 bytesSent = 3;
			int32 dataChannelIdentifier = 4;
			string label = 5;
			int32 messageReceived = 6;
			int32 messageSent = 7;
			string protocol = 8;
			string state = 9;
		}
		message PeerConnectionTransport {
			string peerConnectionId = 1;
			string transportId = 2;
			int64 bytesReceived = 3;
			int64 bytesSent = 4;
			string dtlsCipher = 5;
			string dtlsRole = 6;
			string dtlsState = 7;
			string iceLocalUsernameFragment = 8;
			string iceRole = 9;
			string iceState = 10;
			string localCertificateId = 11;
			int32 packetsReceived = 12;
			int32 packetsSent = 13;
			string remoteCertificateId = 14;
			int32 selectedCandidatePairChanges = 15;
			string selectedCandidatePairId = 16;
			string srtpCipher = 17;
			string tlsGroup = 18;
			string tlsVersion = 19;
		}
		message IceCandidatePair {
			string candidatePairId = 1;
			string peerConnectionId = 2;
			double availableIncomingBitrate = 3;
			double availableOutgoingBitrate = 4;
			int64 bytesDiscardedOnSend = 5;
			int64 bytesReceived = 6;
			int64 bytesSent = 7;
			int32 consentRequestsSent = 8;
			double currentRoundTripTime = 9;
			int64 lastPacketReceivedTimestamp = 10;
			int64 lastPacketSentTimestamp = 11;
			string localCandidateId = 12;
			bool nominated = 13;
			int32 packetsDiscardedOnSend = 14;
			int32 packetsReceived = 15;
			int32 packetsSent = 16;
			string remoteCandidateId = 17;
			int32 requestsReceived = 18;
			int32 requestsSent = 19;
			int32 responsesReceived = 20;
			int32 responsesSent = 21;
			string state = 22;
			double totalRoundTripTime = 23;
			string transportId = 24;
		}
		message MediaSourceStat {
			double audioLevel = 1;
			double droppedSamplesDuration = 2;
			int32 droppedSamplesEvents = 3;
			double echoReturnLoss = 4;
			double echoReturnLossEnhancement = 5;
			int32 frames = 6;
			double framesPerSecond = 7;
			int32 height = 8;
			string kind = 9;
			bool relayedSource = 10;
			double totalAudioEnergy = 11;
			double totalCaptureDelay = 12;
			double totalSamplesCaptured = 13;
			double totalSamplesDuration = 14;
			string trackIdentifier = 15;
			int32 width = 16;
		}
		message MediaCodecStats {
			int32 channels = 1;
			int32 clockRate = 2;
			string codecType = 3;
			string mimeType = 4;
			string payloadType = 5;
			string sdpFmtpLine = 6;
		}
		message Certificate {
			string base64Certificate = 1;
			string fingerprint = 2;
			string fingerprintAlgorithm = 3;
			string issuerCertificateId = 4;
		}
		message InboundAudioTrack {
			int64 ssrc = 1;
			int32 audioLevel = 2;
			int64 bytesReceived = 3;
			int64 bytesSent = 4;
			int32 concealedSamples = 5;
			int32 concealmentEvents = 6;
			string decoderImplementation = 7;
			int64 estimatedPlayoutTimestamp = 8;
			int32 fecPacketsDiscarded = 9;
			int32 fecPacketsReceived = 10;
			int64 headerBytesReceived = 11;
			int32 insertedSamplesForDeceleration = 12;
			double jitter = 13;
			double jitterBufferDelay = 14;
			int32 jitterBufferEmittedCount = 15;
			double jitterBufferMinimumDelay = 16;
			double jitterBufferTargetDelay = 17;
			int64 lastPacketReceivedTimestamp = 18;
			int32 nackCount = 19;
			int32 packetsDiscarded = 20;
			int32 packetsLost = 21;
			int32 packetsReceived = 22;
			int32 packetsSent = 23;
			string peerConnectionId = 24;
			string remoteClientId = 25;
			int64 remoteTimestamp = 26;
			int32 removedSamplesForAcceleration = 27;
			int32 reportsSent = 28;
			double roundTripTime = 29;
			int32 roundTripTimeMeasurements = 30;
			string sfuSinkId = 31;
			string sfuStreamId = 32;
			int32 silentConcealedSamples = 33;
			int32 synthesizedSamplesDuration = 34;
			int32 synthesizedSamplesEvents = 35;
			int32 totalAudioEnergy = 36;
			double totalPlayoutDelay = 37;
			double totalProcessingDelay = 38;
			double totalRoundTripTime = 39;
			int32 totalSamplesCount = 40;
			int32 totalSamplesDuration = 41;
			int32 totalSamplesReceived = 42;
			string trackId = 43;
		}
		message InboundVideoTrack {
			int64 ssrc = 1;
			int64 bytesReceived = 2;
			int64 bytesSent = 3;
			string decoderImplementation = 4;
			int64 estimatedPlayoutTimestamp = 5;
			int32 fecPacketsDiscarded = 6;
			int32 fecPacketsReceived = 7;
			int32 firCount = 8;
			int32 frameHeight = 9;
			int32 frameWidth = 10;
			int32 framesDecoded = 11;
			int32 framesDropped = 12;
			double framesPerSecond = 13;
			int32 framesReceived = 14;
			int64 headerBytesReceived = 15;
			double jitter = 16;
			double jitterBufferDelay = 17;
			int32 jitterBufferEmittedCount = 18;
			double jitterBufferMinimumDelay = 19;
			double jitterBufferTargetDelay = 20;
			int32 keyFramesDecoded = 21;
			int64 lastPacketReceivedTimestamp = 22;
			int32 nackCount = 23;
			int32 packetsDiscarded = 24;
			int32 packetsLost = 25;
			int32 packetsReceived = 26;
			int32 packetsSent = 27;
			string peerConnectionId = 28;
			int32 pliCount = 29;
			int64 qpSum = 30;
			string remoteClientId = 31;
			int64 remoteTimestamp = 32;
			int32 reportsSent = 33;
			double roundTripTime = 34;
			int32 roundTripTimeMeasurements = 35;
			string sfuSinkId = 36;
			string sfuStreamId = 37;
			double totalDecodeTime = 38;
			double totalInterFrameDelay = 39;
			double totalProcessingDelay = 40;
			double totalRoundTripTime = 41;
			double totalSquaredInterFrameDelay = 42;
			string trackId = 43;
		}
		message OutboundAudioTrack {
			int64 ssrc = 1;
			bool active = 2;
			double audioLevel = 3;
			double averageRtcpInterval = 4;
			int64 bytesSent = 5;
			double droppedSamplesDuration = 6;
			int32 droppedSamplesEvents = 7;
			double echoReturnLoss = 8;
			double echoReturnLossEnhancement = 9;
			string encoderImplementation = 10;
			double fractionLost = 11;
			int64 headerBytesSent = 12;
			double jitter = 13;
			int32 nackCount = 14;
			int32 packetsLost = 15;
			int32 packetsReceived = 16;
			int32 packetsSent = 17;
			string peerConnectionId = 18;
			bool relayedSource = 19;
			int64 retransmittedBytesSent = 20;
			int32 retransmittedPacketsSent = 21;
			string rid = 22;
			double roundTripTime = 23;
			int32 roundTripTimeMeasurements = 24;
			string sfuStreamId = 25;
			int32 targetBitrate = 26;
			double totalAudioEnergy = 27;
			double totalCaptureDelay = 28;
			int64 totalEncodedBytesTarget = 29;
			double totalPacketSendDelay = 30;
			double totalRoundTripTime = 31;
			double totalSamplesCaptured = 32;
			double totalSamplesDuration = 33;
			string trackId = 34;
		}
		message OutboundVideoTrack {
			int64 ssrc = 1;
			bool active = 2;
			double averageRtcpInterval = 3;
			int64 bytesSent = 4;
			string encoderImplementation = 5;
			int32 firCount = 6;
			double fractionLost = 7;
			int32 frameHeight = 8;
			int32 frameWidth = 9;
			int32 frames = 10;
			int32 framesDropped = 11;
			int32 framesEncoded = 12;
			double framesPerSecond = 13;
			int32 framesSent = 14;
			int64 headerBytesSent = 15;
			int32 height = 16;
			int32 hugeFramesSent = 17;
			double jitter = 18;
			int32 keyFramesEncoded = 19;
			int32 nackCount = 20;
			int32 packetsLost = 21;
			int32 packetsReceived = 22;
			int32 packetsSent = 23;
			string peerConnectionId = 24;
			int32 pliCount = 25;
			int64 qpSum = 26;
			double qualityLimitationDurationBandwidth = 27;
			double qualityLimitationDurationCPU = 28;
			double qualityLimitationDurationNone = 29;
			double qualityLimitationDurationOther = 30;
			string qualityLimitationReason = 31;
			int32 qualityLimitationResolutionChanges = 32;
			bool relayedSource = 33;
			int64 retransmittedBytesSent = 34;
			int32 retransmittedPacketsSent = 35;
			string rid = 36;
			double roundTripTime = 37;
			int32 roundTripTimeMeasurements = 38;
			string sfuStreamId = 39;
			int32 targetBitrate = 40;
			double totalEncodeTime = 41;
			int64 totalEncodedBytesTarget = 42;
			double totalPacketSendDelay = 43;
			double totalRoundTripTime = 44;
			string trackId = 45;
			int32 width = 46;
		}
		message IceLocalCandidate {
			string address = 1;
			string candidateType = 2;
			string id = 3;
			string peerConnectionId = 4;
			int32 port = 5;
			int64 priority = 6;
			string protocol = 7;
			string relayProtocol = 8;
			string url = 9;
		}
		message IceRemoteCandidate {
			string address = 1;
			string candidateType = 2;
			string id = 3;
			string peerConnectionId = 4;
			int32 port = 5;
			int64 priority = 6;
			string protocol = 7;
			string relayProtocol = 8;
			string url = 9;
		}
		repeated Certificate certificates = 1;
		repeated MediaCodecStats codecs = 2;
		repeated DataChannel dataChannels = 3;
		repeated ExtensionStat extensionStats = 4;
		repeated IceCandidatePair iceCandidatePairs = 5;
		repeated IceLocalCandidate iceLocalCandidates = 6;
		repeated IceRemoteCandidate iceRemoteCandidates = 7;
		repeated string iceServers = 8;
		repeated InboundAudioTrack inboundAudioTracks = 9;
		repeated InboundVideoTrack inboundVideoTracks = 10;
		repeated string localSDPs = 11;
		repeated string mediaConstraints = 12;
		repeated MediaDevice mediaDevices = 13;
		repeated MediaSourceStat mediaSources = 14;
		repeated OutboundAudioTrack outboundAudioTracks = 15;
		repeated OutboundVideoTrack outboundVideoTracks = 16;
		repeated PeerConnectionTransport pcTransports = 17;
		repeated string userMediaErrors = 18;
		string clientId = 19;
		int64 timestamp = 20;
		Browser browser = 21;
		string callId = 22;
		Engine engine = 23;
		string marker = 24;
		OperationSystem os = 25;
		Platform platform = 26;
		string roomId = 27;
		int32 sampleSeq = 28;
		int32 timeZoneOffsetInHours = 29;
		string userId = 30;
	}
	message SfuSample {
		message SfuTransport {
			string transportId = 1;
			string dtlsState = 2;
			string iceRole = 3;
			string iceState = 4;
			bool internal = 5;
			string localAddress = 6;
			int32 localPort = 7;
			bool noReport = 8;
			string protocol = 9;
			string remoteAddress = 10;
			int32 remotePort = 11;
			int64 rtpBytesReceived = 12;
			int64 rtpBytesSent = 13;
			int32 rtpPacketsLost = 14;
			int32 rtpPacketsReceived = 15;
			int32 rtpPacketsSent = 16;
			int64 rtxBytesReceived = 17;
			int64 rtxBytesSent = 18;
			int32 rtxPacketsDiscarded = 19;
			int32 rtxPacketsLost = 20;
			int32 rtxPacketsReceived = 21;
			int32 rtxPacketsSent = 22;
			int64 sctpBytesReceived = 23;
			int64 sctpBytesSent = 24;
			int32 sctpPacketsReceived = 25;
			int32 sctpPacketsSent = 26;
			string sctpState = 27;
		}
		message SfuInboundRtpPad {
			string padId = 1;
			int64 ssrc = 2;
			string streamId = 3;
			string transportId = 4;
			int64 bytesReceived = 5;
			int32 clockRate = 6;
			int32 fecPacketsDiscarded = 7;
			int32 fecPacketsReceived = 8;
			int32 firCount = 9;
			double fractionLost = 10;
			int32 framesDecoded = 11;
			int32 framesReceived = 12;
			bool internal = 13;
			double jitter = 14;
			int32 keyFramesDecoded = 15;
			string mediaType = 16;
			string mimeType = 17;
			int32 nackCount = 18;
			bool noReport = 19;
			int32 packetsDiscarded = 20;
			int32 packetsDuplicated = 21;
			int32 packetsFailedDecryption = 22;
			int32 packetsLost = 23;
			int32 packetsReceived = 24;
			int32 packetsRepaired = 25;
			int32 payloadType = 26;
			int32 pliCount = 27;
			string rid = 28;
			double roundTripTime = 29;
			int32 rtcpRrSent = 30;
			int32 rtcpSrReceived = 31;
			int32 rtxPacketsDiscarded = 32;
			int32 rtxPacketsReceived = 33;
			int64 rtxSsrc = 34;
			string sdpFmtpLine = 35;
			int32 sliCount = 36;
			int32 targetBitrate = 37;
			bool voiceActivityFlag = 38;
		}
		message SfuOutboundRtpPad {
			string padId = 1;
			string sinkId = 2;
			int64 ssrc = 3;
			string streamId = 4;
			string transportId = 5;
			int64 bytesSent = 6;
			string callId = 7;
			string clientId = 8;
			int32 clockRate = 9;
			int32 fecPacketsDiscarded = 10;
			int32 fecPacketsSent = 11;
			int32 firCount = 12;
			double fractionLost = 13;
			int32 framesEncoded = 14;
			int32 framesSent = 15;
			bool internal = 16;
			double jitter = 17;
			int32 keyFramesEncoded = 18;
			string mediaType = 19;
			string mimeType = 20;
			int32 nackCount = 21;
			bool noReport = 22;
			int32 packetsDiscarded = 23;
			int32 packetsDuplicated = 24;
			int32 packetsFailedEncryption = 25;
			int32 packetsLost = 26;
			int32 packetsRetransmitted = 27;
			int32 packetsSent = 28;
			int32 payloadType = 29;
			int32 pliCount = 30;
			string rid = 31;
			double roundTripTime = 32;
			int32 rtcpRrReceived = 33;
			int32 rtcpSrSent = 34;
			int32 rtxPacketsDiscarded = 35;
			int32 rtxPacketsSent = 36;
			int64 rtxSsrc = 37;
			string sdpFmtpLine = 38;
			int32 sliCount = 39;
			int32 targetBitrate = 40;
			string trackId = 41;
			bool voiceActivityFlag = 42;
		}
		message SfuSctpChannel {
			string channelId = 1;
			string streamId = 2;
			string transportId = 3;
			int64 bytesReceived = 4;
			int64 bytesSent = 5;
			bool internal = 6;
			string label = 7;
			int32 messageReceived = 8;
			int32 messageSent = 9;
			bool noReport = 10;
			string protocol = 11;
			double sctpCongestionWindow = 12;
			int32 sctpMtu = 13;
			double sctpReceiverWindow = 14;
			double sctpSmoothedRoundTripTime = 15;
			int32 sctpUnackData = 16;
		}
		message SfuExtensionStats {
			string payload = 1;
			string type = 2;
		}
		repeated SfuExtensionStats extensionStats = 1;
		repeated SfuInboundRtpPad inboundRtpPads = 2;
		repeated SfuOutboundRtpPad outboundRtpPads = 3;
		repeated SfuSctpChannel sctpChannels = 4;
		repeated SfuTransport transports = 5;
		string sfuId = 6;
		int64 timestamp = 7;
		string marker = 8;
		int32 timeZoneOffsetInHours = 9;
	}
	message TurnSample {
		message TurnPeerAllocation {
			string peerId = 1;
			string relayedAddress = 2;
			int32 relayedPort = 3;
			string sessionId = 4;
			string transportProtocol = 5;
			string peerAddress = 6;
			int32 peerPort = 7;
			int64 receivedBytes = 8;
			int32 receivedPackets = 9;
			int32 receivingBitrate = 10;
			int32 sendingBitrate = 11;
			int64 sentBytes = 12;
			int32 sentPackets = 13;
		}
		message TurnSession {
			string sessionId = 1;
			string clientAddress = 2;
			string clientId = 3;
			int32 clientPort = 4;
			int64 nonceExpirationTime = 5;
			string realm = 6;
			int64 receivedBytes = 7;
			int32 receivedPackets = 8;
			int32 receivingBitrate = 9;
			int32 sendingBitrate = 10;
			int64 sentBytes = 11;
			int32 sentPackets = 12;
			string serverAddress = 13;
			int32 serverPort = 14;
			int64 started = 15;
			string transportProtocol = 16;
			string username = 17;
		}
		repeated TurnPeerAllocation allocations = 1;
		repeated TurnSession sessions = 2;
		string serverId = 3;
	}
	repeated ClientSample clientSamples = 1;
	repeated SfuSample sfuSamples = 2;
	repeated TurnSample turnSamples = 3;
	Controls controls = 4;
}
`;