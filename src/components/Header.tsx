const Header = () => {
  return (
    <div className=" w-full sticky z-10 top-0 left-0 bg-secondaryBackground px-5 py-2">
      <svg
        className="w-[200px]"
        viewBox="0 0 263 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.3868 31.4613C29.3811 31.4613 31.2378 31.255 32.957 30.8424C34.7106 30.3954 36.2235 29.7077 37.4957 28.7794C38.8023 27.8166 39.8166 26.5788 40.5387 25.0659C41.2607 23.5186 41.6218 21.6275 41.6218 19.3925C41.6218 17.192 41.2436 15.318 40.4871 13.7708C39.765 12.2235 38.7679 10.9857 37.4957 10.0573C36.2235 9.09455 34.7106 8.40688 32.957 7.99427C31.2378 7.54728 29.3811 7.32378 27.3868 7.32378H21.7135C19.6848 7.32378 17.7937 7.54728 16.0401 7.99427C14.3209 8.40688 12.8252 9.09455 11.553 10.0573C10.2808 10.9857 9.26647 12.2235 8.51003 13.7708C7.78797 15.318 7.42693 17.192 7.42693 19.3925C7.42693 21.6275 7.78797 23.5186 8.51003 25.0659C9.26647 26.5788 10.2808 27.8166 11.553 28.7794C12.8252 29.7421 14.3209 30.4298 16.0401 30.8424C17.7937 31.255 19.6848 31.4613 21.7135 31.4613H27.3868ZM4.17765 19.3925C4.17765 16.6074 4.60745 14.2521 5.46705 12.3266C6.36103 10.4011 7.58166 8.83667 9.12894 7.63324C10.7106 6.39541 12.5673 5.51862 14.6991 5.00286C16.8653 4.45272 19.2034 4.17765 21.7135 4.17765H27.3868C29.8968 4.17765 32.2178 4.45272 34.3496 5.00286C36.4814 5.55301 38.3209 6.4298 39.8682 7.63324C41.4499 8.83667 42.6705 10.4011 43.5301 12.3266C44.4241 14.2521 44.8711 16.6074 44.8711 19.3925C44.8711 22.1776 44.4241 24.5329 43.5301 26.4584C42.6705 28.384 41.4499 29.9484 39.8682 31.1519C38.3209 32.3553 36.4814 33.2321 34.3496 33.7822C32.2178 34.3324 29.8968 34.6074 27.3868 34.6074H21.7135C19.2034 34.6074 16.8653 34.3496 14.6991 33.8338C12.5673 33.2837 10.7106 32.4069 9.12894 31.2034C7.58166 29.9656 6.36103 28.384 5.46705 26.4584C4.60745 24.5329 4.17765 22.1776 4.17765 19.3925ZM1.2894 19.3925C1.2894 22.659 1.78797 25.4441 2.7851 27.7478C3.81662 30.0172 5.22636 31.8739 7.01433 33.318C8.83668 34.7622 10.9857 35.8281 13.4613 36.5158C15.9713 37.1691 18.7221 37.4957 21.7135 37.4957H27.3868C30.3782 37.4957 33.1117 37.1691 35.5874 36.5158C38.063 35.8281 40.1948 34.7622 41.9828 33.318C43.8052 31.8739 45.2149 30.0172 46.212 27.7478C47.2092 25.4441 50.0246 30.5501 50.0246 27.2837C50.0246 24.0172 47.2092 13.3582 46.212 11.0888C45.2149 8.7851 43.8052 6.91117 41.9828 5.46705C40.1948 4.02292 38.063 2.97421 35.5874 2.32091C33.1117 1.63324 30.3782 1.2894 27.3868 1.2894H21.7135C18.7221 1.2894 15.9713 1.63324 13.4613 2.32091C10.9857 2.97421 8.83668 4.02292 7.01433 5.46705C5.22636 6.91117 3.81662 8.7851 2.7851 11.0888C1.78797 13.3582 1.2894 16.1261 1.2894 19.3925ZM0 19.3925C0 15.8854 0.532951 12.9112 1.59885 10.4699C2.66476 7.99427 4.16046 5.98281 6.08596 4.43553C8.01146 2.88825 10.298 1.77077 12.9456 1.08309C15.6275 0.361031 18.5501 0 21.7135 0H27.3868C29.3811 0 31.255 0.120343 33.0086 0.36103C34.7966 0.567333 36.5501 1.03152 38.2693 1.75358C39.9885 2.44126 41.6905 3.43839 43.3754 4.74499C45.0946 6.01719 46.8653 7.73639 48.6877 9.90258C50.235 11.4499 51.5072 13.4957 52.5043 16.0401C53.5014 18.5845 54 21.4212 54 24.5501C54 28.0229 53.467 30.9799 52.4011 33.4212C51.3696 35.8625 49.8911 37.8395 47.9656 39.3524C46.0745 40.8997 43.8052 42.0172 41.1576 42.7049C38.5444 43.4269 35.6734 43.788 32.5444 43.788H26.8711C23.3639 43.788 20.0974 43.3925 17.0716 42.6017C14.0458 41.8109 11.553 40.4527 9.59312 38.5272C7.63324 36.808 6.03438 35.192 4.79656 33.6791C3.55874 32.1318 2.5788 30.6017 1.85673 29.0888C1.16905 27.5759 0.687679 26.0287 0.412607 24.447C0.137536 22.8653 0 21.1805 0 19.3925Z"
          fill="#3A4DF4"
        />
        <path
          d="M18.0343 15.3401L14.6582 24.1817H29.6278L31.284 19.1792L36.7622 24.1817L31.1566 15.3401C26.723 23.949 20.5611 18.9271 18.0343 15.3401Z"
          fill="#3A4DF4"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M91.8863 31.075L73.0213 13.75V31.075H70.9563V10.425H72.7413L91.5363 27.75V10.425H93.6363V31.075H91.8863ZM95.5963 33.035V8.465H89.6113V23.34L73.4063 8.465H68.9963V33.035H74.9813V18.125L91.2213 33.035H95.5963ZM68.1212 33.91V7.59H73.7213L88.7362 21.345V7.59H96.4713L99.8663 11.195V37.305H94.4063L79.2513 23.41V37.305H71.7263L68.1212 33.91ZM122.506 28.94C123.86 28.94 125.12 28.8 126.286 28.52C127.476 28.2167 128.503 27.75 129.366 27.12C130.253 26.4667 130.941 25.6267 131.431 24.6C131.921 23.55 132.166 22.2667 132.166 20.75C132.166 19.2567 131.91 17.985 131.396 16.935C130.906 15.885 130.23 15.045 129.366 14.415C128.503 13.7617 127.476 13.295 126.286 13.015C125.12 12.7117 123.86 12.56 122.506 12.56H118.656C117.28 12.56 115.996 12.7117 114.806 13.015C113.64 13.295 112.625 13.7617 111.761 14.415C110.898 15.045 110.21 15.885 109.696 16.935C109.206 17.985 108.961 19.2567 108.961 20.75C108.961 22.2667 109.206 23.55 109.696 24.6C110.21 25.6267 110.898 26.4667 111.761 27.12C112.625 27.7733 113.64 28.24 114.806 28.52C115.996 28.8 117.28 28.94 118.656 28.94H122.506ZM118.656 26.98C117.606 26.98 116.615 26.875 115.681 26.665C114.748 26.455 113.931 26.1167 113.231 25.65C112.531 25.16 111.971 24.5183 111.551 23.725C111.131 22.9317 110.921 21.94 110.921 20.75C110.921 19.5833 111.131 18.6033 111.551 17.81C111.971 17.0167 112.531 16.375 113.231 15.885C113.955 15.395 114.783 15.045 115.716 14.835C116.65 14.625 117.63 14.52 118.656 14.52H122.506C123.533 14.52 124.513 14.625 125.446 14.835C126.38 15.045 127.196 15.395 127.896 15.885C128.596 16.375 129.156 17.0167 129.576 17.81C129.996 18.6033 130.206 19.5833 130.206 20.75C130.206 21.9167 129.996 22.8967 129.576 23.69C129.18 24.4833 128.631 25.125 127.931 25.615C127.231 26.105 126.415 26.455 125.481 26.665C124.548 26.875 123.556 26.98 122.506 26.98H118.656ZM106.756 20.75C106.756 18.86 107.048 17.2617 107.631 15.955C108.238 14.6483 109.066 13.5867 110.116 12.77C111.19 11.93 112.45 11.335 113.896 10.985C115.366 10.6117 116.953 10.425 118.656 10.425H122.506C124.21 10.425 125.785 10.6117 127.231 10.985C128.678 11.3583 129.926 11.9533 130.976 12.77C132.05 13.5867 132.878 14.6483 133.461 15.955C134.068 17.2617 134.371 18.86 134.371 20.75C134.371 22.64 134.068 24.2383 133.461 25.545C132.878 26.8517 132.05 27.9133 130.976 28.73C129.926 29.5467 128.678 30.1417 127.231 30.515C125.785 30.8883 124.21 31.075 122.506 31.075H118.656C116.953 31.075 115.366 30.9 113.896 30.55C112.45 30.1767 111.19 29.5817 110.116 28.765C109.066 27.925 108.238 26.8517 107.631 25.545C107.048 24.2383 106.756 22.64 106.756 20.75ZM104.796 20.75C104.796 22.9667 105.135 24.8567 105.811 26.42C106.511 27.96 107.468 29.22 108.681 30.2C109.918 31.18 111.376 31.9033 113.056 32.37C114.76 32.8133 116.626 33.035 118.656 33.035H122.506C124.536 33.035 126.391 32.8133 128.071 32.37C129.751 31.9033 131.198 31.18 132.411 30.2C133.648 29.22 134.605 27.96 135.281 26.42C135.958 24.8567 136.296 22.9667 136.296 20.75C136.296 18.5333 135.958 16.655 135.281 15.115C134.605 13.5517 133.648 12.28 132.411 11.3C131.198 10.32 129.751 9.60833 128.071 9.165C126.391 8.69833 124.536 8.465 122.506 8.465H118.656C116.626 8.465 114.76 8.69833 113.056 9.165C111.376 9.60833 109.918 10.32 108.681 11.3C107.468 12.28 106.511 13.5517 105.811 15.115C105.135 16.655 104.796 18.5333 104.796 20.75ZM103.921 20.75C103.921 18.37 104.283 16.3517 105.006 14.695C105.73 13.015 106.745 11.65 108.051 10.6C109.358 9.55 110.91 8.79166 112.706 8.325C114.526 7.835 116.51 7.59 118.656 7.59H122.506C123.86 7.59 125.131 7.67167 126.321 7.835C127.535 7.975 128.725 8.29 129.891 8.78C131.058 9.24667 132.213 9.92333 133.356 10.81C134.523 11.6733 135.725 12.84 136.961 14.31C138.011 15.36 138.875 16.7483 139.551 18.475C140.228 20.2017 140.566 22.1267 140.566 24.25C140.566 26.6067 140.205 28.6133 139.481 30.27C138.781 31.9267 137.778 33.2683 136.471 34.295C135.188 35.345 133.648 36.1033 131.851 36.57C130.078 37.06 128.13 37.305 126.006 37.305H122.156C119.776 37.305 117.56 37.0367 115.506 36.5C113.453 35.9633 111.761 35.0417 110.431 33.735C109.101 32.5683 108.016 31.4717 107.176 30.445C106.336 29.395 105.671 28.3567 105.181 27.33C104.715 26.3033 104.388 25.2533 104.201 24.18C104.015 23.1067 103.921 21.9633 103.921 20.75ZM122.506 26.105C123.416 26.105 124.28 26.0233 125.096 25.86C125.936 25.6733 126.671 25.37 127.301 24.95C127.931 24.53 128.421 23.9817 128.771 23.305C129.145 22.605 129.331 21.7533 129.331 20.75C129.331 20.19 129.261 19.6767 129.121 19.21C128.165 18.93 127.126 18.79 126.006 18.79H122.156C121.223 18.79 120.336 18.8833 119.496 19.07C118.656 19.2567 117.91 19.56 117.256 19.98C116.626 20.4 116.125 20.96 115.751 21.66C115.378 22.36 115.191 23.2233 115.191 24.25C115.191 24.81 115.238 25.2767 115.331 25.65C115.821 25.8133 116.346 25.93 116.906 26C117.466 26.07 118.05 26.105 118.656 26.105H122.506ZM161.642 28.94C162.995 28.94 164.255 28.8 165.422 28.52C166.612 28.2167 167.639 27.75 168.502 27.12C169.389 26.4667 170.077 25.6267 170.567 24.6C171.057 23.55 171.302 22.2667 171.302 20.75C171.302 19.2567 171.045 17.985 170.532 16.935C170.042 15.885 169.365 15.045 168.502 14.415C167.639 13.7617 166.612 13.295 165.422 13.015C164.255 12.7117 162.995 12.56 161.642 12.56H157.792C156.415 12.56 155.132 12.7117 153.942 13.015C152.775 13.295 151.76 13.7617 150.897 14.415C150.034 15.045 149.345 15.885 148.832 16.935C148.342 17.985 148.097 19.2567 148.097 20.75C148.097 22.2667 148.342 23.55 148.832 24.6C149.345 25.6267 150.034 26.4667 150.897 27.12C151.76 27.7733 152.775 28.24 153.942 28.52C155.132 28.8 156.415 28.94 157.792 28.94H161.642ZM157.792 26.98C156.742 26.98 155.75 26.875 154.817 26.665C153.884 26.455 153.067 26.1167 152.367 25.65C151.667 25.16 151.107 24.5183 150.687 23.725C150.267 22.9317 150.057 21.94 150.057 20.75C150.057 19.5833 150.267 18.6033 150.687 17.81C151.107 17.0167 151.667 16.375 152.367 15.885C153.09 15.395 153.919 15.045 154.852 14.835C155.785 14.625 156.765 14.52 157.792 14.52H161.642C162.669 14.52 163.649 14.625 164.582 14.835C165.515 15.045 166.332 15.395 167.032 15.885C167.732 16.375 168.292 17.0167 168.712 17.81C169.132 18.6033 169.342 19.5833 169.342 20.75C169.342 21.9167 169.132 22.8967 168.712 23.69C168.315 24.4833 167.767 25.125 167.067 25.615C166.367 26.105 165.55 26.455 164.617 26.665C163.684 26.875 162.692 26.98 161.642 26.98H157.792ZM145.892 20.75C145.892 18.86 146.184 17.2617 146.767 15.955C147.374 14.6483 148.202 13.5867 149.252 12.77C150.325 11.93 151.585 11.335 153.032 10.985C154.502 10.6117 156.089 10.425 157.792 10.425H161.642C163.345 10.425 164.92 10.6117 166.367 10.985C167.814 11.3583 169.062 11.9533 170.112 12.77C171.185 13.5867 172.014 14.6483 172.597 15.955C173.204 17.2617 173.507 18.86 173.507 20.75C173.507 22.64 173.204 24.2383 172.597 25.545C172.014 26.8517 171.185 27.9133 170.112 28.73C169.062 29.5467 167.814 30.1417 166.367 30.515C164.92 30.8883 163.345 31.075 161.642 31.075H157.792C156.089 31.075 154.502 30.9 153.032 30.55C151.585 30.1767 150.325 29.5817 149.252 28.765C148.202 27.925 147.374 26.8517 146.767 25.545C146.184 24.2383 145.892 22.64 145.892 20.75ZM143.932 20.75C143.932 22.9667 144.27 24.8567 144.947 26.42C145.647 27.96 146.604 29.22 147.817 30.2C149.054 31.18 150.512 31.9033 152.192 32.37C153.895 32.8133 155.762 33.035 157.792 33.035H161.642C163.672 33.035 165.527 32.8133 167.207 32.37C168.887 31.9033 170.334 31.18 171.547 30.2C172.784 29.22 173.74 27.96 174.417 26.42C175.094 24.8567 175.432 22.9667 175.432 20.75C175.432 18.5333 175.094 16.655 174.417 15.115C173.74 13.5517 172.784 12.28 171.547 11.3C170.334 10.32 168.887 9.60833 167.207 9.165C165.527 8.69833 163.672 8.465 161.642 8.465H157.792C155.762 8.465 153.895 8.69833 152.192 9.165C150.512 9.60833 149.054 10.32 147.817 11.3C146.604 12.28 145.647 13.5517 144.947 15.115C144.27 16.655 143.932 18.5333 143.932 20.75ZM143.057 20.75C143.057 18.37 143.419 16.3517 144.142 14.695C144.865 13.015 145.88 11.65 147.187 10.6C148.494 9.55 150.045 8.79166 151.842 8.325C153.662 7.835 155.645 7.59 157.792 7.59H161.642C162.995 7.59 164.267 7.67167 165.457 7.835C166.67 7.975 167.86 8.29 169.027 8.78C170.194 9.24667 171.349 9.92333 172.492 10.81C173.659 11.6733 174.86 12.84 176.097 14.31C177.147 15.36 178.01 16.7483 178.687 18.475C179.364 20.2017 179.702 22.1267 179.702 24.25C179.702 26.6067 179.34 28.6133 178.617 30.27C177.917 31.9267 176.914 33.2683 175.607 34.295C174.324 35.345 172.784 36.1033 170.987 36.57C169.214 37.06 167.265 37.305 165.142 37.305H161.292C158.912 37.305 156.695 37.0367 154.642 36.5C152.589 35.9633 150.897 35.0417 149.567 33.735C148.237 32.5683 147.152 31.4717 146.312 30.445C145.472 29.395 144.807 28.3567 144.317 27.33C143.85 26.3033 143.524 25.2533 143.337 24.18C143.15 23.1067 143.057 21.9633 143.057 20.75ZM161.642 26.105C162.552 26.105 163.415 26.0233 164.232 25.86C165.072 25.6733 165.807 25.37 166.437 24.95C167.067 24.53 167.557 23.9817 167.907 23.305C168.28 22.605 168.467 21.7533 168.467 20.75C168.467 20.19 168.397 19.6767 168.257 19.21C167.3 18.93 166.262 18.79 165.142 18.79H161.292C160.359 18.79 159.472 18.8833 158.632 19.07C157.792 19.2567 157.045 19.56 156.392 19.98C155.762 20.4 155.26 20.96 154.887 21.66C154.514 22.36 154.327 23.2233 154.327 24.25C154.327 24.81 154.374 25.2767 154.467 25.65C154.957 25.8133 155.482 25.93 156.042 26C156.602 26.07 157.185 26.105 157.792 26.105H161.642ZM188.241 13.75V31.075H186.176V10.425H187.961L206.756 27.75V10.425H208.856V31.075H207.106L188.241 13.75ZM210.816 8.465H204.831V23.34L188.626 8.465H184.216V33.035H190.201V18.125L206.441 33.035H210.816V8.465ZM183.341 33.91V7.59H188.941L203.956 21.345V7.59H211.691L215.086 11.195V37.305H209.626L194.471 23.41V37.305H186.946L183.341 33.91ZM225.819 10.425V20.75C225.819 22.2667 226.064 23.55 226.554 24.6C227.044 25.6267 227.721 26.4667 228.584 27.12C229.471 27.75 230.498 28.2167 231.664 28.52C232.831 28.8 234.103 28.94 235.479 28.94H239.329C240.683 28.94 241.943 28.8 243.109 28.52C244.299 28.2167 245.326 27.75 246.189 27.12C247.076 26.4667 247.764 25.6267 248.254 24.6C248.768 23.55 249.024 22.2667 249.024 20.75V10.425H251.229V20.75C251.229 22.64 250.926 24.2383 250.319 25.545C249.713 26.8517 248.873 27.925 247.799 28.765C246.749 29.5817 245.501 30.1767 244.054 30.55C242.608 30.9 241.033 31.075 239.329 31.075H235.479C233.776 31.075 232.189 30.9 230.719 30.55C229.273 30.1767 228.013 29.5817 226.939 28.765C225.889 27.925 225.061 26.8517 224.454 25.545C223.871 24.2383 223.579 22.64 223.579 20.75V10.425H225.819ZM221.654 20.75C221.654 22.9667 221.993 24.8567 222.669 26.42C223.346 27.96 224.291 29.22 225.504 30.2C226.741 31.18 228.199 31.9033 229.879 32.37C231.583 32.8133 233.449 33.035 235.479 33.035H239.329C241.359 33.035 243.214 32.8133 244.894 32.37C246.598 31.9033 248.056 31.18 249.269 30.2C250.506 29.22 251.463 27.96 252.139 26.42C252.816 24.8567 253.154 22.9667 253.154 20.75V8.465H247.064V20.75C247.064 21.94 246.854 22.9317 246.434 23.725C246.014 24.5183 245.454 25.16 244.754 25.65C244.054 26.1167 243.238 26.455 242.304 26.665C241.371 26.875 240.379 26.98 239.329 26.98H235.479C234.429 26.98 233.438 26.875 232.504 26.665C231.571 26.455 230.754 26.105 230.054 25.615C229.354 25.125 228.794 24.4833 228.374 23.69C227.978 22.8967 227.779 21.9167 227.779 20.75V8.465H221.654V20.75ZM220.779 7.59H228.654L232.049 11.195V24.25C232.049 24.5067 232.049 24.7517 232.049 24.985C232.073 25.2183 232.108 25.44 232.154 25.65C233.134 25.9533 234.243 26.105 235.479 26.105H239.329C240.239 26.105 241.103 26.0233 241.919 25.86C242.759 25.6733 243.494 25.37 244.124 24.95C244.754 24.53 245.256 23.9817 245.629 23.305C246.003 22.6283 246.189 21.7767 246.189 20.75V7.59H254.029L257.424 11.195V24.25C257.424 26.6067 257.063 28.6133 256.339 30.27C255.616 31.9267 254.613 33.2683 253.329 34.295C252.046 35.345 250.506 36.1033 248.709 36.57C246.913 37.06 244.953 37.305 242.829 37.305H238.979C237.789 37.305 236.634 37.2467 235.514 37.13C234.418 37.0133 233.368 36.815 232.364 36.535C231.384 36.2783 230.474 35.9283 229.634 35.485C228.794 35.0417 228.048 34.4933 227.394 33.84C226.064 32.6967 224.968 31.6117 224.104 30.585C223.264 29.535 222.599 28.485 222.109 27.435C221.619 26.385 221.269 25.3233 221.059 24.25C220.873 23.1533 220.779 21.9867 220.779 20.75V7.59Z"
          fill="#F2F2F2"
        />
      </svg>
    </div>
  );
};

export default Header;
