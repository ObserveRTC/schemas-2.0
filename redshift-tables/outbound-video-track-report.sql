create table  IF NOT EXISTS outbound_video_track_report (
	serviceid	VARCHAR(255)	not null,
	mediaunitid	VARCHAR(255)	not null,
	timestamp	BIGINT	not null,
	callid	CHAR(36)	not null,
	clientid	CHAR(36)	not null,
	peerconnectionid	CHAR(36)	not null,
	sampleseq	INTEGER	not null,
	ssrc	BIGINT	not null,
	active	BOOLEAN,
	averagertcpinterval	REAL,
	bytessent	BIGINT,
	encoderimplementation	VARCHAR(65535),
	fircount	INTEGER,
	fractionlost	REAL,
	frameheight	INTEGER,
	frames	INTEGER,
	framesdropped	INTEGER,
	framesencoded	INTEGER,
	framespersecond	REAL,
	framessent	INTEGER,
	framewidth	INTEGER,
	headerbytessent	BIGINT,
	height	INTEGER,
	hugeframessent	INTEGER,
	jitter	REAL,
	keyframesencoded	INTEGER,
	label	VARCHAR(65535),
	marker	VARCHAR(65535),
	nackcount	INTEGER,
	packetslost	INTEGER,
	packetsreceived	INTEGER,
	packetssent	INTEGER,
	plicount	INTEGER,
	qpsum	BIGINT,
	qualitylimitationdurationbandwidth	REAL,
	qualitylimitationdurationcpu	REAL,
	qualitylimitationdurationnone	REAL,
	qualitylimitationdurationother	REAL,
	qualitylimitationreason	VARCHAR(65535),
	qualitylimitationresolutionchanges	INTEGER,
	relayedsource	BOOLEAN,
	retransmittedbytessent	BIGINT,
	retransmittedpacketssent	INTEGER,
	rid	VARCHAR(65535),
	roomid	VARCHAR(255),
	roundtriptime	REAL,
	roundtriptimemeasurements	INTEGER,
	sfustreamid	CHAR(36),
	targetbitrate	INTEGER,
	totalencodedbytestarget	BIGINT,
	totalencodetime	REAL,
	totalpacketsenddelay	REAL,
	totalroundtriptime	REAL,
	trackid	CHAR(36),
	userid	VARCHAR(255),
	width	INTEGER
) diststyle even;
ALTER TABLE outbound_video_track_report ALTER diststyle KEY DISTKEY serviceid;
ALTER TABLE outbound_video_track_report ALTER COMPOUND SORTKEY (callid, clientid, peerconnectionid, sfustreamid, trackid);