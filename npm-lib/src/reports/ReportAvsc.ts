export const schema = {
  "type": "record",
  "name": "Report",
  "namespace": "org.observertc.schemas",
  "doc": "A multiplexed Report object wraps an encoded report in bytes format",
  "fields": [
    {
      "name": "type",
      "doc": "The type of the report",
      "type": "string"
    },
    {
      "name": "payload",
      "doc": "The payload of contans the actual report",
      "type": "bytes"
    }
  ]
}