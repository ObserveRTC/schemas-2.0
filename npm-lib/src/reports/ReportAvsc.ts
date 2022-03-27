export const schema = {
  "type": "record",
  "name": "Report",
  "namespace": "org.observertc.schemas.reports",
  "doc": "A multiplexed Report object wraps an encoded report in bytes format",
  "fields": [
    {
      "name": "type",
      "doc": "The type of the report",
      "type": "string"
    },
    {
      "name": "schemaVersion",
      "doc": "The version of the schema the payload holds",
      "type": [
        "null",
        "string"
      ],
      "default": null
    },
    {
      "name": "payload",
      "doc": "The payload of contans the actual report",
      "type": "bytes"
    }
  ]
}