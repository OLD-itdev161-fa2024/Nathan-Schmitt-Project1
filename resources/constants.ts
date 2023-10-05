export const HTTP_HEADER_NAMES = {
    ACCEPT: 'Accept',
    ACCEPT_CHARSET: 'Accept-CH',
    ACCEPT_CHARSET_LIFETIME: 'Accept-CH-Lifetime',
    ACCEPT_ENCODING: 'Accept-Encoding',
    ACCEPT_LANGUAGE: 'Accept-Language',
    ACCEPT_PATCH: 'Accept-Patch',
    ACCEPT_POST: 'Accept-Post',
    ACCEPT_RANGES: 'Accept-Ranges',
    ACCESS_CONTROL_ALLOW_CREDENTIALS: 'Access-Control-Allow-Credentials',
    ACCESS_CONTROL_ALLOW_HEADERS: 'Access-Control-Allow-Headers',
    ACCESS_CONTROL_ALLOW_METHODS: 'Access-Control-Allow-Methods',
    ACCESS_CONTROL_ALLOW_ORIGIN: 'Access-Control-Allow-Origin',
    ACCESS_CONTROL_EXPOSE_HEADERS: 'Access-Control-Expose-Headers',
    ACCESS_CONTROL_MAX_AGE: 'Access-Control-Max-Age',
    ACCESS_CONTROL_REQUEST_HEADERS: 'Access-Control-Request-Headers',
    ACCESS_CONTROL_REQUEST_METHOD: 'Access-Control-Request-Method',
    AGE: 'Age',
    ALLOW: 'Allow',
    ALT_SVC: 'Alt-Svc',
    CACHE_CONTROL: 'Cache-Control',
    CLEAR_SITE_DATA: 'Clear-Site-Data',
    CONNECTION: 'Connection',
    CONTENT_DISPOSITION: 'Content-Disposition',
    CONTEND_DPR: 'Content-DPR',
    CONTENT_ENCODING: 'Content-Encoding',
    CONTENT_LANGUAGE: 'Content-Language',
    CONTENT_LENGTH: 'Content-Length',
    CONTENT_LOCATION: 'Content-Location',
    CONTENT_RANGE: 'Content-Range',
    CONTENT_SECURITY_POLICY: 'Content-Security-Policy',
    CONTENT_SECURITY_POLICY_REPORT_ONLY: 'Content-Security-Policy-Report-Only',
    CONTENT_TYPE: 'Content-Type',
    COOKIE: 'Cookie',
    CRITICAL_CH: 'Critical-CH',
    CROSS_ORIGIN_EMBEDDER_POLICY: 'Cross-Origin-Embedder-Policy',
    CROSS_ORIGIN_OPENER_POLICY: 'Cross-Origin-Opener-Policy',
    CROSS_ORIGIN_RESOURCE_POLICY: 'Cross-Origin-Resource-Policy',
    DATE: 'Date',
    DEVICE_MEMORY: 'Device-Memory',
    DIGEST: 'Digest',
    DNT: 'DNT',
    DOWNLINK: 'Downlink',
    DPR: 'DPR',
    EARLY_DATA: 'Early-Data',
    ECT: 'ECT',
    ETag: 'ETag',
    EXPECT: 'Expect',
    EXPECT_CT: 'Expect-CT',
    EXPIRES: 'Expires',
    FEATURE_POLICY: 'Feature-Policy',
    FORWARDED: 'Forwarded',
    FROM: 'From',
    HOST: 'Host',
    IF_MATCH: 'If-Match',
    IF_MODIFIED_SINCE: 'If-Modified-Since',
    IF_NONE_MATCH: 'If-None-Match',
    IF_RANGE: 'If-Range',
    IF_UNMODIFIED_SINCE: 'If-Unmodified-Since',
    KEEP_ALIVE: 'Keep-Alive',
    LARGE_ALLOCATION: 'Large-Allocation',
    LAST_MODIFIED: 'Last-Modified',
    LINK: 'Link',
    LOCATION: 'Location',
    MAX_FORWARDS: 'Max-Forwards',
    NEL: 'NEL',
    ORIGIN: 'Origin',
    PERMISSIONS_POLICY: 'Permissions-Policy',
    PRAGMA: 'Pragma',
    PROXY_AUTHENTICATE: 'Proxy-Authenticate',
    PROXY_AUTHORIZATION: 'Proxy-Authorization',
    RANGE: 'Range',
    REFERER: 'Referer',
    REFERRER_POLICY: 'Referrer-Policy',
    RETRY_AFTER: 'Retry-After',
    RTT: 'RTT',
    SAVE_DATA: 'Save-Data',
    SEC_CH_PREFERS_COLOR_SCHEME: 'Sec-CH-Prefers-Color-Scheme',
    SEC_CH_PREFERS_REDUCED_MOOTION: 'Sec-CH-Prefers-Reduced-Motion',
    SEC_CH_PREFERS_REDUCED_TRANSPARENCY: 'Sec-CH-Prefers-Reduced-Transparency',
    SEC_CH_UA: 'Sec-CH-UA',
    SEC_CH_UA_ARCH: 'Sec-CH-UA-Arch',
    SEC_CH_UA_Bitness: 'Sec-CH-UA-Bitness',
    SEC_CH_UA_FULL_VERSION: 'Sec-CH-UA-Full-Version',
    SEC_CH_UA_FULL_VERSION_LIST: 'Sec-CH-UA-Full-Version-List',
    SEC_CH_UA_MOBILE: 'Sec-CH-UA-Mobile',
    SEC_CH_UA_MODEL: 'Sec-CH-UA-Model',
    SEC_CH_UA_PLATFORM: 'Sec-CH-UA-Platform',
    SEC_CH_UA_PLATFORM_VERSION: 'Sec-CH-UA-Platform-Version',
    SEC_FETCH_DEST: 'Sec-Fetch-Dest',
    SEC_FETCH_MODE: 'Sec-Fetch-Mode',
    SEC_FETCH_SITE: 'Sec-Fetch-Site',
    SEC_FETCH_USER: 'Sec-Fetch-User',
    SEC_GPC: 'Sec-GPC',
    SEC_PURPOSE: 'Sec-Purpose',
    SEC_WEBSOCKET_ACCEPT: 'Sec-WebSocket-Accept',
    SERVER: 'Server',
    SERVER_TIMING: 'Server-Timing',
    SERVICE_WORKER_NAVIGATION_PRELOAD: 'Service-Worker-Navigation-Preload',
    SET_COOKIE: 'Set-Cookie',
    SOURCEMAP: 'SourceMap',
    STRICT_TRANSPORT_SECURITY: 'Strict-Transport-Security',
    TE: 'TE',
    TIMING_ALLOW_ORIGIN: 'Timing-Allow-Origin',
    TK: 'Tk',
    TRAILER: 'Trailer',
    TRANSFER_ENCODING: 'Transfer-Encoding',
    UPGRADE: 'Upgrade',
    UPGRADE_INSECURE_REQUESTS: 'Upgrade-Insecure-Requests',
    USER_AGENT: 'User-Agent',
    VARY: 'Vary',
    VIA: 'Via',
    VIEWPORT_WIDTH: 'Viewport-Width',
    WANT_DIGEST: 'Want-Digest',
    WARNING: 'Warning',
    WIDTH: 'Width',
    WWW_AUTHENTICATE: 'WWW-Authenticate',
    X_CONTENT_TYPE_OPTIONS: 'X-Content-Type-Options',
    X_DNS_PREFETCH_CONTROL: 'X-DNS-Prefetch-Control',
    X_FORWARDED_FOR: 'X-Forwarded-For',
    X_FORWARDED_HOST: 'X-Forwarded-Host',
    X_FORWARDED_PROTO: 'X-Forwarded-Proto',
    X_FRAME_OPTIONS: 'X-Frame-Options',
    X_POWERED_BY: 'X-Powered-By',
    X_WITH_Reason: 'X-With-Reason',
    X_XSS_PROTECTION: 'X-XSS-Protection'
}

export const HTTP_STATUS_CODES = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,
    EARLY_HINTS: 103,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTI_STATUS: 207,
    ALREADY_REPORTED: 208,
    IM_USED: 226,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    UNUSED: 306,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    IM_A_TEAPOT: 418,
    MISDIRECTED_REQUEST: 421,
    UNPROCESSABLE_ENTITY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    TOO_EARLY: 425,
    UPGRADE_REQUIRED: 426,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    LOOP_DETECTED: 508,
    BANDWIDTH_LIMIT_EXCEEDED: 509,
    NOT_EXTENDED: 510,
    NETWORK_AUTHENTICATION_REQUIRED: 511
};

