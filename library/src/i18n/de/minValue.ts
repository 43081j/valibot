import { setLocalMessage } from '../../index.ts';

setLocalMessage(
  'min_value',
  (issue) =>
    `Ungültiger Wert: ${issue.expected} erwartet aber ${issue.received} erhalten`,
  'de'
);
