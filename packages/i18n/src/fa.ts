import type { Language } from './types';

// prettier-ignore
const language: Language = {
  code:             'fa',
  schema:           (issue) => `نوع نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
  specific: {
    bic:            (issue) => `BIC نامعتبر: ${issue.received} دریافت شد`,
    bytes:          (issue) => `بایت‌های نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    check:          (issue) => `ورودی نامعتبر: ${issue.received} دریافت شد`,
    checkAsync:     (issue) => `ورودی نامعتبر: ${issue.received} دریافت شد`,
    creditCard:     (issue) => `کارت اعتباری نامعتبر: ${issue.received} دریافت شد`,
    cuid2:          (issue) => `Cuid2 نامعتبر: ${issue.received} دریافت شد`,
    decimal:        (issue) => `اعشار نامعتبر: ${issue.received} دریافت شد`,
    email:          (issue) => `ایمیل نامعتبر: ${issue.received} دریافت شد`,
    emoji:          (issue) => `ایموجی نامعتبر: ${issue.received} دریافت شد`,
    empty:          (issue) => `طول نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    endsWith:       (issue) => `پایان نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    excludes:       (issue) => `محتوای نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    finite:         (issue) => `عدد متناهی نامعتبر: ${issue.received} دریافت شد`,
    hash:           (issue) => `هش نامعتبر: ${issue.received} دریافت شد`,
    hexColor:       (issue) => `رنگ هگزادسیمال نامعتبر: ${issue.received} دریافت شد`,
    hexadecimal:    (issue) => `هگزادسیمال نامعتبر: ${issue.received} دریافت شد`,
    imei:           (issue) => `IMEI نامعتبر: ${issue.received} دریافت شد`,
    includes:       (issue) => `محتوای نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    integer:        (issue) => `عدد صحیح نامعتبر: ${issue.received} دریافت شد`,
    ip:             (issue) => `ip نامعتبر: ${issue.received} دریافت شد`,
    ipv4:           (issue) => `IPv4 نامعتبر: ${issue.received} دریافت شد`,
    ipv6:           (issue) => `IPv6 نامعتبر: ${issue.received} دریافت شد`,
    isoDate:        (issue) => `تاریخ ISO نامعتبر: ${issue.received} دریافت شد`,
    isoDateTime:    (issue) => `تاریخ‌ و زمان ISO نامعتبر: ${issue.received} دریافت شد`,
    isoTime:        (issue) => `زمان ISO نامعتبر: ${issue.received} دریافت شد`,
    isoTimeSecond:  (issue) => `ثانیه ISO نامعتبر: ${issue.received} دریافت شد`,
    isoTimestamp:   (issue) => `تایم‌استمپ ISO نامعتبر: ${issue.received} دریافت شد`,
    isoWeek:        (issue) => `هفته ISO نامعتبر: ${issue.received} دریافت شد`,
    length:         (issue) => `طول نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    mac:            (issue) => `MAC نامعتبر: ${issue.received} دریافت شد`,
    mac48:          (issue) => `MAC 48 بیتی نامعتبر: ${issue.received} دریافت شد`,
    mac64:          (issue) => `MAC 64 بیتی نامعتبر: ${issue.received} دریافت شد`,
    maxBytes:       (issue) => `بایت‌های نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    maxLength:      (issue) => `طول نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    maxSize:        (issue) => `اندازه نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    maxValue:       (issue) => `مقدار نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    mimeType:       (issue) => `MIME type نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    minBytes:       (issue) => `بایت‌های نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    minLength:      (issue) => `طول نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    minSize:        (issue) => `اندازه نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    minValue:       (issue) => `مقدار نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    multipleOf:     (issue) => `ضریب نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    nonEmpty:       (issue) => `طول نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    notBytes:       (issue) => `بایت‌های نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    notLength:      (issue) => `طول نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    notSize:        (issue) => `اندازه نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    notValue:       (issue) => `مقدار نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    octal:          (issue) => `هشت‌دویی نامعتبر: ${issue.received} دریافت شد`,
    regex:          (issue) => `قالب نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    safeInteger:    (issue) => `عدد صحیح امن نامعتبر: ${issue.received} دریافت شد`,
    size:           (issue) => `اندازه نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    startsWith:     (issue) => `شروع نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
    ulid:           (issue) => `ULID نامعتبر: ${issue.received} دریافت شد`,
    url:            (issue) => `URL نامعتبر: ${issue.received} دریافت شد`,
    uuid:           (issue) => `UUID نامعتبر: ${issue.received} دریافت شد`,
    value:          (issue) => `مقدار نامعتبر: ${issue.expected} انتظار می‌رفت اما ${issue.received} دریافت شد`,
  },
};

export default language;
