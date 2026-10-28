const stroke = "#ff4500";

export function FeatureIcon({ name }: { name: string }) {
  switch (name) {
    case "globe":
      return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
          <path
            d="M8.25 15.75a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.598 3.066C10.665 6.104 6.75 7.08.938 7.454m14.625 1.429c-4.966-1.057-9.106.75-12.285 4.74"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.67 1.313c3.278 4.5 4.5 7.065 6 13.29"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "monitor":
      return (
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true">
          <path
            d="M16.05.75H3.45a1.8 1.8 0 0 0-1.8 1.8v7.2a1.8 1.8 0 0 0 1.8 1.8h12.6a1.8 1.8 0 0 0 1.8-1.8v-7.2a1.8 1.8 0 0 0-1.8-1.8M.75 15.148h18"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "earth":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <g clipPath="url(#earth)" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 14.665A6.667 6.667 0 1 0 8 1.332a6.667 6.667 0 0 0 0 13.333" />
            <path d="M8 1.332a9.667 9.667 0 0 0 0 13.333A9.667 9.667 0 0 0 8 1.332M1.333 8h13.334" />
          </g>
          <defs>
            <clipPath id="earth">
              <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      );
    case "layers":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <g clipPath="url(#layers)" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.553 1.452a1.33 1.33 0 0 0-1.106 0l-5.714 2.6a.667.667 0 0 0 0 1.22l5.72 2.607a1.33 1.33 0 0 0 1.107 0l5.72-2.6a.667.667 0 0 0 0-1.22z" />
            <path d="M1.333 8a.67.67 0 0 0 .387.607l5.733 2.606a1.33 1.33 0 0 0 1.1 0l5.72-2.6A.67.67 0 0 0 14.667 8" />
            <path d="M1.333 11.332a.67.67 0 0 0 .387.607l5.733 2.606a1.33 1.33 0 0 0 1.1 0l5.72-2.6a.67.67 0 0 0 .394-.613" />
          </g>
          <defs>
            <clipPath id="layers">
              <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      );
    case "refresh":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M11.333 1.332 14 3.999l-2.667 2.666"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 7.333v-.666A2.667 2.667 0 0 1 4.667 4H14M4.667 14.665 2 12l2.667-2.667"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 8.668v.667A2.667 2.667 0 0 1 11.333 12H2"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "zap":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M2.667 9.334a.667.667 0 0 1-.52-1.087l6.6-6.8a.333.333 0 0 1 .573.307L8.04 5.767a.667.667 0 0 0 .627.9h4.666a.666.666 0 0 1 .52 1.087l-6.6 6.8a.334.334 0 0 1-.573-.307l1.28-4.013a.667.667 0 0 0-.627-.9z"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "key":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <g clipPath="url(#key)">
            <path
              d="M9.8 4.201a.667.667 0 0 0 0 .933l1.067 1.067a.666.666 0 0 0 .933 0l2.07-2.07c.214-.215.576-.147.656.145A4 4 0 0 1 9.02 8.981l-5.273 5.274a1.414 1.414 0 0 1-2-2L7.021 6.98a4 4 0 0 1 4.704-5.506c.292.08.36.441.146.656z"
              stroke={stroke}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="key">
              <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="m10.667 12 4-4-4-4M5.333 4l-4 4 4 4"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
