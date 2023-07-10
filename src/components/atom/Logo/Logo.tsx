interface LogoProps {
  width?: number;
  height?: number | string;
  color?: string;
}
export function Logo(
  props: LogoProps & React.SVGProps<SVGSVGElement>,
): JSX.Element {
  const { width = 150, height = 'auto', color = '#1c7ed6', ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1069 171"
      preserveAspectRatio="xMidYMid meet"
      width={width}
      /* scale height with width*/
      height={height === 'auto' ? width * 0.39 : height}
    >
      <g
        transform="translate(0.000000,171.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M457 1694 c-205 -37 -290 -121 -370 -364 -95 -288 -104 -482 -31
                -699 84 -249 292 -566 401 -610 75 -30 153 19 153 96 0 59 -14 89 -61 131 -42
                38 -132 176 -161 247 -27 64 -60 176 -55 181 2 3 21 -6 41 -19 20 -14 89 -42
                153 -63 103 -34 130 -39 213 -39 102 0 89 -4 275 85 135 65 169 125 118 212
                -43 75 -130 85 -249 28 -57 -27 -84 -34 -154 -38 -74 -4 -92 -1 -133 18 -91
                43 -126 108 -114 213 10 79 44 138 97 165 38 20 56 23 113 19 101 -7 146 -38
                225 -157 86 -131 109 -152 169 -157 68 -6 109 21 125 82 7 25 15 45 18 45 3 0
                11 -20 18 -45 16 -61 57 -88 125 -82 60 5 83 26 169 157 79 119 124 150 225
                157 57 4 75 1 113 -19 53 -27 87 -86 97 -165 12 -105 -23 -170 -114 -213 -41
                -19 -59 -22 -133 -18 -70 4 -97 11 -154 38 -119 57 -206 47 -249 -28 -51 -87
                -17 -147 118 -212 186 -89 173 -85 275 -85 83 0 110 5 213 39 64 21 133 49
                153 63 20 13 39 22 41 19 5 -5 -28 -117 -55 -181 -29 -72 -119 -209 -161 -247
                -46 -41 -75 -107 -66 -148 14 -65 94 -105 158 -79 80 33 224 221 322 424 104
                214 136 350 124 531 -8 124 -24 198 -76 354 -81 247 -165 327 -380 364 -152
                27 -307 16 -388 -27 -26 -14 -131 -111 -160 -149 -50 -63 -72 -99 -129 -210
                -42 -83 -68 -145 -72 -178 -4 -27 -10 -50 -14 -50 -4 0 -10 23 -14 50 -4 33
                -30 95 -72 178 -57 111 -79 147 -129 210 -29 38 -134 135 -160 149 -80 43
                -248 54 -398 27z"
        />
        <path
          d="M10286 1022 c-71 -306 -131 -563 -133 -569 -4 -10 26 -13 131 -13 75
                0 136 4 136 8 0 7 237 1032 255 1105 l7 27 -133 0 -134 0 -129 -558z"
        />
        <path
          d="M2775 1503 c-11 -44 -245 -1056 -245 -1060 0 -2 64 -2 142 -1 l141 3
                38 163 c20 90 40 169 42 176 4 10 44 15 154 19 90 3 172 11 208 21 149 41 271
                132 323 243 24 52 27 70 27 163 0 97 -2 109 -28 153 -32 54 -93 98 -172 124
                -40 13 -106 17 -336 21 l-286 4 -8 -29z m473 -197 c44 -23 62 -54 62 -106 0
                -75 -34 -129 -104 -165 -52 -26 -71 -30 -163 -33 -99 -4 -105 -3 -99 14 3 11
                19 80 36 154 17 74 33 141 36 149 6 20 189 9 232 -13z"
        />
        <path
          d="M5851 1493 c-15 -57 -241 -1036 -241 -1045 0 -4 63 -8 140 -8 137 0
                140 0 145 23 37 159 75 324 75 330 0 4 53 7 118 7 194 0 312 30 428 109 114
                78 174 188 174 321 0 142 -60 224 -198 273 -51 19 -86 21 -344 25 l-287 4 -10
                -39z m429 -174 c65 -14 99 -43 107 -91 9 -56 -5 -105 -40 -145 -49 -55 -105
                -76 -224 -81 -57 -3 -103 -2 -103 1 0 9 69 299 75 315 6 15 114 16 185 1z"
        />
        <path
          d="M7936 1423 c-10 -43 -22 -95 -27 -115 l-10 -38 -54 0 -53 0 -17 -72
                c-9 -40 -18 -81 -21 -90 -5 -16 2 -18 51 -18 49 0 56 -2 51 -17 -29 -93 -96
                -423 -96 -471 0 -109 54 -155 200 -172 90 -10 237 3 256 23 10 10 44 138 44
                165 0 5 -24 3 -52 -5 -62 -17 -134 -12 -156 10 -23 23 -18 83 21 252 19 83 38
                165 42 183 l7 32 123 0 c109 0 124 2 129 18 6 20 36 151 36 158 0 2 -54 4
                -120 4 -97 0 -120 3 -120 14 0 8 11 60 24 115 l24 101 -132 0 -132 0 -18 -77z"
        />
        <path
          d="M3964 1275 c-168 -26 -156 -17 -178 -123 -11 -51 -17 -95 -14 -97 3
                -3 45 7 94 21 119 37 279 40 334 9 30 -18 35 -27 38 -62 l3 -41 -73 -7 c-322
                -30 -464 -84 -530 -202 -39 -69 -48 -154 -24 -218 57 -149 274 -180 459 -65
                27 17 50 30 53 30 2 0 1 -18 -2 -40 l-7 -40 130 0 129 0 67 293 c65 283 77
                369 58 419 -17 44 -73 88 -141 109 -86 27 -272 33 -396 14z m236 -457 c-1 -7
                -9 -47 -18 -88 l-18 -75 -59 -30 c-47 -23 -72 -30 -117 -29 -80 1 -108 21
                -108 78 0 84 62 125 215 145 101 12 105 12 105 -1z"
        />
        <path
          d="M7075 1280 c-27 -4 -82 -13 -122 -19 l-71 -12 -18 -95 c-10 -51 -15
                -96 -12 -99 3 -3 45 7 94 22 71 21 110 27 189 27 142 1 185 -20 185 -92 0 -30
                0 -30 -72 -37 -288 -26 -427 -69 -502 -157 -61 -71 -85 -194 -52 -271 59 -140
                277 -168 456 -58 59 37 63 37 56 11 -3 -11 -9 -29 -12 -40 -5 -20 -2 -21 127
                -18 l133 3 68 290 c82 352 84 399 25 463 -68 74 -281 110 -472 82z m205 -456
                c0 -3 -6 -32 -14 -63 -8 -31 -17 -68 -20 -83 -9 -40 -99 -81 -176 -81 -96 0
                -131 36 -110 112 17 65 80 93 255 114 54 7 65 7 65 1z"
        />
        <path
          d="M9575 1280 c-254 -51 -426 -265 -425 -530 1 -161 86 -277 232 -316
                68 -18 238 -18 304 0 236 63 395 289 382 541 -9 165 -86 259 -244 299 -65 17
                -181 19 -249 6z m150 -184 c52 -22 70 -65 69 -162 -3 -202 -97 -334 -238 -334
                -52 0 -61 3 -90 32 -41 41 -51 95 -36 198 29 203 161 322 295 266z"
        />
        <path
          d="M4710 1252 c0 -10 29 -193 66 -407 l65 -388 -106 -159 -105 -159 146
                3 147 3 354 554 c194 305 353 558 353 563 0 4 -60 8 -134 8 l-134 0 -159 -272
                c-121 -208 -159 -267 -161 -248 -2 14 -18 135 -35 270 l-33 245 -132 3 c-123
                2 -132 1 -132 -16z"
        />
        <path
          d="M8566 1253 c-8 -27 -186 -799 -186 -807 0 -4 59 -5 132 -4 l132 3 61
                265 c34 146 64 271 68 277 13 21 118 35 227 31 l108 -3 26 111 c33 141 33 144
                -3 144 -82 0 -200 -41 -290 -101 l-34 -23 6 25 c3 13 9 41 12 62 l7 37 -130 0
                c-116 0 -131 -2 -136 -17z"
        />
      </g>
    </svg>
  );
}