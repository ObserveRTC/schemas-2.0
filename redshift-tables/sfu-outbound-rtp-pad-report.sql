create table  IF NOT EXISTS sfu_outbound_rtp_pad_report (
	serviceid	VARCHAR(1024)	not null,
	mediaunitid	VARCHAR(1024)	not null,
	sfuid	VARCHAR(254)	not null,
	timestamp	BIGINT	not null,
	transportid	VARCHAR(254)	not null,
	sfustreamid	VARCHAR(254)	not null,
	sfusinkid	VARCHAR(254)	not null,
	rtppadid	VARCHAR(1024)	not null,
	ssrc	BIGINT	not null,
	bytessent	BIGINT,
	callid	VARCHAR(254),
	clientid	VARCHAR(254),
	clockrate	INTEGER,
	fecpacketsdiscarded	INTEGER,
	fecpacketssent	INTEGER,
	fircount	INTEGER,
	framesencoded	INTEGER,
	framessent	INTEGER,
	internal	BOOLEAN,
	keyframesencoded	INTEGER,
	marker	VARCHAR(65535),
	mediatype	VARCHAR(65535),
	mimetype	VARCHAR(65535),
	nackcount	INTEGER,
	packetsdiscarded	INTEGER,
	packetsduplicated	INTEGER,
	packetsfailedencryption	INTEGER,
	packetslost	INTEGER,
	packetsretransmitted	INTEGER,
	packetssent	INTEGER,
	payloadtype	INTEGER,
	plicount	INTEGER,
	rid	VARCHAR(65535),
	roundtriptime	REAL,
	rtcprrreceived	INTEGER,
	rtcpsrsent	INTEGER,
	rtxpacketsdiscarded	INTEGER,
	rtxpacketssent	INTEGER,
	rtxssrc	BIGINT,
	sdpfmtpline	VARCHAR(65535),
	slicount	INTEGER,
	targetbitrate	INTEGER,
	trackid	VARCHAR(254),
	voiceactivityflag	BOOLEAN
) diststyle even;
ALTER TABLE sfu_outbound_rtp_pad_report ALTER diststyle KEY DISTKEY serviceid;
ALTER TABLE sfu_outbound_rtp_pad_report ALTER COMPOUND SORTKEY (sfuid, transportid, sfustreamid, sfusinkid, callid, clientid, trackid);