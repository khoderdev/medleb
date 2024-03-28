const MedLebLogoMobileDrawer = ({ onClick, color }) => {
  const style = {
    // width: "30px",
    // height: "30px",
  };
  return (
    <a onClick={onClick} style={style} target="_blank" rel="noreferrer">
      <svg
        width="160"
        height="auto"
        viewBox="0 0 757 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.99976 174.501V203.589V255H301V174.127V133H246.83V172.647C246.83 191.183 231.998 206.207 213.706 206.207C195.414 206.207 179 191.183 179 172.647V133H126.418V172.647C126.418 191.183 111.585 206.207 93.2934 206.207C75.0015 206.207 57.9998 191.183 57.9998 172.647V133H30.0749H5.99976V142.458V174.501Z"
          stroke="#ED1C24"
          strokeWidth="10"
        />
        <path
          d="M1.5 60.2451V37.8315V30.999C1.5 14.4322 14.8851 1 31.3937 1H274.606C291.115 1 304.5 14.4322 304.5 30.999L305 60.5V94.5V127.5L244.877 128V67.5489C244.877 50.3515 230.986 36.4111 213.843 36.4111C196.706 36.4111 182.814 50.3515 182.814 67.5489V128H123.192V67.5489C123.192 50.3515 109.294 36.4111 92.157 36.4111C75.02 36.4111 62 50.3026 62 67.5V128L31.3142 128H2L1.5 84.9238V60.2451Z"
          fill="#ED1C24"
          stroke="#ED1C24"
          strokeWidth="2"
        />
        <path
          d="M259 161.99V166.847C259 183.497 245.567 197 229.003 197C212.433 197 199 183.497 199 166.847V125H259V161.99Z"
          fill="#00A651"
          stroke="#00A651"
          strokeWidth="2"
        />
        <path
          d="M137 161.99V166.847C137 183.497 123.567 197 106.997 197C90.4265 197 76.9998 183.497 76.9998 166.847V125H137V161.99Z"
          fill="#00A651"
          stroke="#00A651"
          strokeWidth="2"
        />
        <path
          d="M358.688 41.7441H375.228L394.337 104.884L413.38 41.7441H427.987L401.35 134.044H387.257L358.688 41.7441ZM352 41.7441H367.765L370.212 102.602V134.044H352V41.7441ZM420.777 41.7441H436.608V134.044H418.461V102.602L420.777 41.7441Z"
          fill="#ED1C24"
        />
        <path
          d="M477.674 135.143C472.855 135.143 468.58 134.417 464.842 132.972C461.153 131.528 458.034 129.454 455.468 126.735C452.91 123.976 450.954 120.644 449.609 116.747C448.264 112.842 447.596 108.388 447.596 103.377V97.7131C447.596 92.1136 448.248 87.208 449.543 83.0124C450.847 78.7683 452.695 75.2021 455.08 72.3136C457.465 69.4331 460.394 67.2869 463.868 65.883C467.384 64.4468 471.353 63.7207 475.784 63.7207C480.207 63.7207 484.093 64.4468 487.435 65.883C490.819 67.2869 493.616 69.4088 495.835 72.2489C498.047 75.0487 499.714 78.5344 500.845 82.6897C501.975 86.845 502.536 91.686 502.536 97.2049V105.354H455.344V92.8076H484.638V91.2179C484.638 88.4182 484.333 86.0864 483.722 84.2146C483.12 82.3104 482.162 80.8903 480.859 79.9544C479.555 79.0184 477.822 78.5505 475.652 78.5505C473.828 78.5505 472.285 78.9136 471.031 79.6317C469.768 80.3579 468.77 81.4793 468.035 83.0124C467.301 84.5373 466.757 86.5301 466.41 88.991C466.063 91.4116 465.89 94.3163 465.89 97.7131V103.377C465.89 106.556 466.17 109.235 466.732 111.397C467.301 113.519 468.118 115.262 469.207 116.618C470.338 117.933 471.699 118.885 473.308 119.482C474.917 120.03 476.782 120.305 478.903 120.305C482.121 120.305 485.001 119.756 487.567 118.651C490.166 117.505 492.378 115.956 494.202 114.003L501.496 124.831C500.234 126.437 498.501 128.051 496.29 129.664C494.078 131.278 491.429 132.593 488.343 133.61C485.265 134.626 481.709 135.143 477.674 135.143Z"
          fill="#ED1C24"
        />
        <path
          d="M546.832 118.676V36.25H565.168V133.869L548.594 133.934L546.832 118.676ZM510.228 101.904V97.3284C510.228 91.7297 510.707 86.8399 511.667 82.6429C512.667 78.4539 514.148 74.9577 516.1 72.1623C518.06 69.367 520.45 67.2886 523.278 65.9353C526.148 64.5336 529.431 63.8328 533.128 63.8328C536.478 63.8328 539.414 64.6624 541.936 66.3139C544.508 67.925 546.675 70.1888 548.461 73.1131C550.248 76.0373 551.679 79.485 552.77 83.4726C553.854 87.4522 554.615 91.8184 555.053 96.5632V103.169C554.532 107.664 553.722 111.861 552.638 115.752C551.596 119.651 550.157 123.042 548.329 125.926C546.551 128.802 544.393 131.074 541.87 132.725C539.348 134.337 536.412 135.142 533.062 135.142C529.365 135.142 526.082 134.417 523.212 132.975C520.384 131.533 517.993 129.423 516.033 126.619C514.123 123.784 512.667 120.312 511.667 116.203C510.707 112.046 510.228 107.285 510.228 101.904ZM528.497 97.3284V101.904C528.497 105.118 528.654 107.898 528.952 110.226C529.299 112.514 529.845 114.399 530.589 115.881C531.367 117.323 532.392 118.402 533.649 119.127C534.915 119.804 536.478 120.142 538.347 120.142C540.787 120.142 542.763 119.546 544.285 118.362C545.807 117.13 546.94 115.462 547.676 113.343C548.462 111.176 548.9 108.703 548.983 105.908V93.8967C548.9 91.5605 548.619 89.4662 548.139 87.6053C547.659 85.7364 546.981 84.1493 546.113 82.8362C545.244 81.5231 544.153 80.5082 542.854 79.7832C541.589 79.0663 540.108 78.7037 538.413 78.7037C536.585 78.7037 535.022 79.0663 533.715 79.7832C532.458 80.5082 531.458 81.6279 530.713 83.1505C529.977 84.6327 529.415 86.566 529.018 88.9344C528.671 91.2706 528.497 94.0659 528.497 97.3284Z"
          fill="#ED1C24"
        />
        <path
          d="M629.997 118.704V134.044H592.148V118.704H629.997ZM597.778 41.7441V134.044H579.452V41.7441H597.778Z"
          fill="#ED1C24"
        />
        <path
          d="M668.259 135.143C663.537 135.143 659.349 134.417 655.694 132.972C652.08 131.528 649.015 129.454 646.509 126.735C644.002 123.976 642.086 120.644 640.768 116.747C639.451 112.842 638.787 108.388 638.787 103.377V97.7131C638.787 92.1136 639.426 87.208 640.704 83.0124C641.981 78.7683 643.784 75.2021 646.121 72.3136C648.466 69.4331 651.336 67.2869 654.732 65.883C658.177 64.4468 662.074 63.7207 666.408 63.7207C670.75 63.7207 674.55 64.4468 677.824 65.883C681.148 67.2869 683.888 69.4088 686.055 72.2489C688.222 75.0487 689.864 78.5344 690.963 82.6897C692.071 86.845 692.629 91.686 692.629 97.2049V105.354H646.38V92.8076H675.083V91.2179C675.083 88.4182 674.784 86.0864 674.194 84.2146C673.596 82.3104 672.657 80.8903 671.388 79.9544C670.11 79.0184 668.405 78.5505 666.278 78.5505C664.499 78.5505 662.987 78.9136 661.75 79.6317C660.521 80.3579 659.543 81.4793 658.815 83.0124C658.096 84.5373 657.562 86.5301 657.222 88.991C656.883 91.4116 656.713 94.3163 656.713 97.7131V103.377C656.713 106.556 656.988 109.235 657.546 111.397C658.096 113.519 658.904 115.262 659.963 116.618C661.071 117.933 662.413 118.885 663.982 119.482C665.559 120.03 667.386 120.305 669.472 120.305C672.617 120.305 675.447 119.756 677.954 118.651C680.509 117.505 682.676 115.956 684.463 114.003L691.602 124.831C690.373 126.437 688.667 128.051 686.5 129.664C684.333 131.278 681.738 132.593 678.722 133.61C675.698 134.626 672.213 135.143 668.259 135.143Z"
          fill="#ED1C24"
        />
        <path
          d="M702.518 36.25H720.379V117.919L719.104 133.869H702.518V36.25ZM756.359 97.1996V101.711C756.359 107.302 755.913 112.175 755.012 116.324C754.16 120.481 752.813 123.953 750.979 126.748C749.186 129.543 746.881 131.646 744.066 133.04C741.25 134.441 737.922 135.142 734.084 135.142C730.627 135.142 727.658 134.337 725.183 132.725C722.708 131.074 720.614 128.802 718.91 125.926C717.246 123.002 715.883 119.586 714.812 115.696C713.789 111.748 713.043 107.455 712.572 102.79V96.1201C713.002 91.5444 713.725 87.2831 714.747 83.3438C715.818 79.4045 717.181 75.997 718.845 73.1131C720.508 70.1888 722.578 67.925 725.053 66.3139C727.576 64.6624 730.538 63.8328 733.955 63.8328C737.882 63.8328 741.25 64.5578 744.066 65.9917C746.881 67.3934 749.186 69.4879 750.979 72.2833C752.813 75.0867 754.16 78.5748 755.012 82.7719C755.913 86.9206 756.359 91.7298 756.359 97.1996ZM738.499 101.711V97.1996C738.499 94.0176 738.369 91.2868 738.117 88.9989C737.858 86.7111 737.387 84.8099 736.705 83.2793C736.024 81.7568 735.042 80.6128 733.76 79.8475C732.526 79.0903 730.879 78.7037 728.834 78.7037C727 78.7037 725.458 79.0663 724.225 79.7832C722.983 80.4599 721.921 81.4828 721.02 82.8362C720.168 84.1493 719.526 85.7202 719.104 87.5408C718.715 89.3211 718.504 91.2868 718.463 93.4457V105.457C718.504 108.381 718.869 110.967 719.551 113.215C720.233 115.462 721.32 117.194 722.813 118.427C724.355 119.651 726.4 120.271 728.964 120.271C730.968 120.271 732.591 119.925 733.825 119.248C735.066 118.572 736.024 117.492 736.705 116.01C737.436 114.528 737.898 112.618 738.117 110.29C738.369 107.914 738.499 105.054 738.499 101.711Z"
          fill="#ED1C24"
        />
        <path
          d="M365.026 186.507H356.104V181.293H365.026C366.716 181.293 368.076 180.899 369.106 180.102C370.151 179.306 370.908 178.197 371.375 176.777C371.866 175.364 372.107 173.747 372.107 171.932C372.107 170.273 371.866 168.713 371.375 167.252C370.908 165.79 370.151 164.616 369.106 163.729C368.076 162.826 366.716 162.366 365.026 162.366H357.165V205.466H352V157.119H365.026C367.673 157.119 369.894 157.751 371.713 159.016C373.531 160.28 374.907 162.03 375.84 164.263C376.798 166.472 377.272 169.009 377.272 171.867C377.272 174.962 376.798 177.614 375.84 179.798C374.907 181.991 373.531 183.666 371.713 184.815C369.894 185.948 367.673 186.507 365.026 186.507Z"
          fill="#ED1C24"
          stroke="#ED1C24"
        />
        <path
          d="M388.957 153.822V205.466H383.865V153.822H388.957ZM387.721 185.901L385.653 185.801C385.628 183.307 385.867 181.012 386.37 178.908C386.889 176.78 387.614 174.925 388.553 173.354C389.509 171.791 390.654 170.577 391.972 169.729C393.299 168.856 394.765 168.415 396.372 168.415C397.641 168.415 398.794 168.664 399.824 169.155C400.862 169.629 401.744 170.386 402.469 171.442C403.202 172.498 403.754 173.861 404.141 175.541C404.545 177.204 404.742 179.233 404.742 181.627V205.466H399.651V181.561C399.651 179.657 399.47 178.135 399.107 176.988C398.761 175.823 398.226 174.984 397.492 174.468C396.784 173.928 395.886 173.662 394.79 173.662C393.793 173.662 392.87 173.986 392.005 174.634C391.14 175.283 390.382 176.181 389.731 177.328C389.097 178.468 388.603 179.781 388.24 181.261C387.894 182.716 387.721 184.263 387.721 185.901Z"
          fill="#ED1C24"
          stroke="#ED1C24"
        />
        <path
          d="M426.132 198.84V179.867C426.132 178.492 425.941 177.381 425.551 176.542C425.186 175.703 424.63 175.087 423.875 174.696C423.145 174.312 422.216 174.12 421.096 174.12C420.017 174.12 419.08 174.368 418.284 174.864C417.512 175.359 416.915 176.014 416.492 176.83C416.085 177.653 415.886 178.556 415.886 179.547H410.759C410.759 178.3 411 177.061 411.481 175.831C411.987 174.6 412.7 173.489 413.621 172.498C414.55 171.491 415.662 170.692 416.956 170.108C418.267 169.509 419.735 169.205 421.353 169.205C423.286 169.205 424.995 169.557 426.48 170.268C427.965 170.963 429.135 172.09 429.981 173.665C430.836 175.239 431.259 177.325 431.259 179.938V197.194C431.259 198.36 431.333 199.599 431.491 200.91C431.665 202.221 431.906 203.355 432.213 204.307V204.818H426.92C426.663 204.131 426.472 203.212 426.339 202.077C426.198 200.91 426.132 199.831 426.132 198.84ZM426.945 183.623L427.003 187.819H423.444C422.224 187.819 421.113 187.971 420.109 188.274C419.13 188.578 418.275 189.018 417.562 189.601C416.848 190.161 416.301 190.856 415.911 191.703C415.546 192.542 415.363 193.501 415.363 194.572C415.363 195.979 415.537 197.098 415.886 197.937C416.234 198.752 416.749 199.351 417.446 199.711C418.143 200.079 419.022 200.263 420.084 200.263C421.378 200.263 422.515 199.927 423.502 199.264C424.481 198.592 425.244 197.785 425.783 196.834C426.347 195.891 426.605 195.004 426.571 194.189L427.7 196.874C427.617 197.713 427.368 198.624 426.945 199.615C426.538 200.59 425.966 201.525 425.236 202.429C424.505 203.316 423.635 204.043 422.631 204.626C421.644 205.186 420.532 205.466 419.304 205.466C417.487 205.466 415.894 205.082 414.526 204.307C413.173 203.531 412.12 202.389 411.365 200.878C410.618 199.368 410.237 197.505 410.237 195.284C410.237 193.605 410.502 192.055 411.016 190.632C411.539 189.209 412.31 187.979 413.339 186.948C414.36 185.893 415.646 185.078 417.189 184.494C418.748 183.911 420.557 183.623 422.598 183.623H426.945Z"
          fill="#ED1C24"
          stroke="#ED1C24"
        />
        <path
          d="M444.692 175.455V205.466H439.904V169.864H444.529L444.692 175.455ZM451.96 169.669L451.991 175.324C451.596 175.219 451.231 175.154 450.906 175.129C450.604 175.088 450.24 175.064 449.829 175.064C448.923 175.064 448.132 175.284 447.45 175.723C446.784 176.163 446.203 176.773 445.715 177.562C445.227 178.352 444.84 179.296 444.553 180.394C444.266 181.468 444.065 182.656 443.956 183.95L442.717 184.935C442.717 182.787 442.848 180.768 443.119 178.881C443.406 176.993 443.848 175.324 444.444 173.876C445.041 172.411 445.8 171.264 446.715 170.458C447.652 169.62 448.775 169.205 450.069 169.205C450.356 169.205 450.713 169.262 451.123 169.368C451.557 169.457 451.836 169.555 451.96 169.669Z"
          fill="#ED1C24"
          stroke="#ED1C24"
        />
        <path
          d="M461.553 176.936V205.466H456.386V169.864H461.259L461.553 176.936ZM460.494 186.318L458.091 186.22C458.066 183.779 458.285 181.533 458.73 179.475C459.184 177.391 459.856 175.577 460.755 174.039C461.679 172.509 462.821 171.321 464.191 170.491C465.577 169.636 467.19 169.205 469.03 169.205C470.239 169.205 471.365 169.449 472.398 169.929C473.457 170.393 474.373 171.126 475.154 172.135C475.935 173.144 476.54 174.438 476.969 176.016C477.422 177.595 477.649 179.507 477.649 181.745V205.466H472.457V182.038C472.457 180.174 472.23 178.685 471.785 177.562C471.348 176.447 470.735 175.634 469.937 175.129C469.131 174.6 468.173 174.34 467.064 174.34C465.787 174.34 464.728 174.657 463.863 175.292C463.023 175.927 462.351 176.805 461.838 177.928C461.351 179.043 460.998 180.329 460.788 181.777C460.595 183.201 460.494 184.715 460.494 186.318ZM477.59 182.957L474.129 184.21C474.104 182.257 474.322 180.386 474.776 178.588C475.221 176.781 475.885 175.186 476.767 173.778C477.666 172.379 478.783 171.264 480.111 170.458C481.438 169.62 482.984 169.205 484.74 169.205C486.185 169.205 487.47 169.457 488.587 169.962C489.696 170.466 490.637 171.248 491.402 172.297C492.183 173.331 492.763 174.657 493.158 176.276C493.553 177.904 493.746 179.833 493.746 182.07V205.466H488.554V182.005C488.554 180.012 488.327 178.466 487.882 177.367C487.453 176.244 486.832 175.471 486.034 175.031C485.227 174.568 484.269 174.34 483.16 174.34C482.261 174.34 481.455 174.568 480.758 175.031C480.069 175.487 479.497 176.13 479.027 176.936C478.556 177.725 478.195 178.636 477.943 179.67C477.708 180.703 477.59 181.794 477.59 182.957Z"
          fill="#ED1C24"
          stroke="#ED1C24"
        />
        <path
          d="M515.439 198.84V179.867C515.439 178.492 515.257 177.381 514.895 176.542C514.54 175.703 514.012 175.087 513.295 174.696C512.601 174.312 511.719 174.12 510.655 174.12C509.63 174.12 508.74 174.368 507.991 174.864C507.258 175.359 506.683 176.014 506.281 176.83C505.895 177.653 505.705 178.556 505.705 179.547H500.835C500.835 178.3 501.063 177.061 501.521 175.831C502.001 174.6 502.679 173.489 503.562 172.498C504.437 171.491 505.493 170.692 506.722 170.108C507.967 169.509 509.362 169.205 510.907 169.205C512.735 169.205 514.359 169.557 515.77 170.268C517.188 170.963 518.292 172.09 519.103 173.665C519.907 175.239 520.309 177.325 520.309 179.938V197.194C520.309 198.36 520.388 199.599 520.53 200.91C520.695 202.221 520.924 203.355 521.216 204.307V204.818H516.188C515.943 204.131 515.762 203.212 515.636 202.077C515.51 200.91 515.439 199.831 515.439 198.84ZM516.211 183.623L516.266 187.819H512.885C511.727 187.819 510.679 187.971 509.725 188.274C508.787 188.578 507.975 189.018 507.297 189.601C506.62 190.161 506.1 190.856 505.729 191.703C505.383 192.542 505.209 193.501 505.209 194.572C505.209 195.979 505.374 197.098 505.705 197.937C506.036 198.752 506.533 199.351 507.187 199.711C507.849 200.079 508.685 200.263 509.693 200.263C510.923 200.263 512.003 199.927 512.94 199.264C513.878 198.592 514.595 197.785 515.115 196.834C515.643 195.891 515.896 195.004 515.856 194.189L516.928 196.874C516.857 197.713 516.613 198.624 516.211 199.615C515.825 200.59 515.289 201.525 514.587 202.429C513.894 203.316 513.066 204.043 512.113 204.626C511.183 205.186 510.127 205.466 508.953 205.466C507.227 205.466 505.714 205.082 504.413 204.307C503.129 203.531 502.128 202.389 501.41 200.878C500.701 199.368 500.338 197.505 500.338 195.284C500.338 193.605 500.591 192.055 501.087 190.632C501.576 189.209 502.309 187.979 503.286 186.948C504.255 185.893 505.477 185.078 506.943 184.494C508.425 183.911 510.143 183.623 512.089 183.623H516.211Z"
          fill="#ED1C24"
          stroke="#ED1C24"
        />
        <path
          d="M538.338 200.59C539.335 200.59 540.242 200.358 541.052 199.911C541.879 199.431 542.559 198.704 543.086 197.713C543.613 196.698 543.921 195.387 543.994 193.765H548.686C548.613 196.091 548.094 198.145 547.13 199.911C546.19 201.653 544.942 203.02 543.402 204.011C541.871 204.986 540.185 205.466 538.338 205.466C536.361 205.466 534.635 205.098 533.16 204.371C531.709 203.635 530.502 202.58 529.538 201.198C528.598 199.799 527.893 198.113 527.423 196.131C526.953 194.125 526.71 191.847 526.71 189.305V185.365C526.71 182.824 526.953 180.562 527.423 178.58C527.893 176.574 528.598 174.88 529.538 173.505C530.502 172.106 531.709 171.035 533.16 170.3C534.635 169.573 536.361 169.205 538.338 169.205C540.412 169.205 542.203 169.709 543.71 170.724C545.242 171.715 546.425 173.161 547.275 175.055C548.143 176.926 548.613 179.203 548.686 181.873H543.994C543.921 180.154 543.645 178.716 543.175 177.573C542.705 176.414 542.057 175.551 541.247 174.991C540.436 174.408 539.472 174.12 538.338 174.12C537.017 174.12 535.923 174.384 535.056 174.927C534.205 175.439 533.54 176.198 533.046 177.189C532.56 178.18 532.212 179.363 532.001 180.746C531.814 182.12 531.718 183.663 531.718 185.365V189.305C531.718 191.008 531.814 192.558 532.001 193.965C532.212 195.339 532.552 196.522 533.022 197.513C533.508 198.504 534.189 199.272 535.056 199.815C535.923 200.327 537.017 200.59 538.338 200.59Z"
          fill="#ED1C24"
          stroke="#ED1C24"
        />
        <path
          d="M561.348 201.481L567.815 169.205H572.859L563.278 210.772C563.047 211.652 562.732 212.607 562.34 213.627C561.963 214.672 561.479 215.66 560.895 216.59C560.302 217.528 559.595 218.277 558.772 218.853C557.949 219.454 556.98 219.75 555.873 219.75C555.535 219.75 555.096 219.684 554.558 219.552C554.035 219.421 553.666 219.314 553.428 219.223V214.228C553.536 214.253 553.705 214.278 553.943 214.294C554.174 214.343 554.343 214.36 554.45 214.36C555.381 214.36 556.165 214.17 556.811 213.8C557.473 213.446 558.034 212.829 558.503 211.965C558.964 211.126 559.364 209.957 559.68 208.476L561.348 201.481ZM557.157 169.205L562.932 197.16L564.163 203.645L560.787 205.908L551.982 169.205H557.157Z"
          fill="#ED1C24"
          stroke="#ED1C24"
        />
        <path
          d="M606.984 194.025C606.984 192.926 606.863 191.956 606.628 191.116C606.393 190.252 605.979 189.476 605.388 188.789C604.796 188.095 603.969 187.44 602.907 186.818C601.845 186.188 600.491 185.558 598.861 184.911C597.086 184.216 595.481 183.457 594.046 182.617C592.611 181.752 591.379 180.775 590.358 179.676C589.352 178.577 588.574 177.317 588.023 175.895C587.472 174.473 587.196 172.841 587.196 171.015C587.196 169.181 587.48 167.492 588.055 165.941C588.647 164.39 589.474 163.04 590.536 161.901C591.614 160.738 592.919 159.833 594.435 159.186C595.943 158.54 597.638 158.217 599.51 158.217C602.307 158.217 604.658 158.895 606.571 160.253C608.493 161.586 609.952 163.339 610.941 165.521C611.922 167.67 612.416 169.981 612.416 172.437H606.984C606.984 170.667 606.717 169.108 606.182 167.751C605.671 166.369 604.86 165.294 603.758 164.519C602.68 163.719 601.261 163.323 599.51 163.323C597.937 163.323 596.632 163.654 595.611 164.325C594.606 164.987 593.86 165.892 593.365 167.04C592.895 168.179 592.66 169.48 592.66 170.95C592.66 171.936 592.814 172.841 593.13 173.665C593.446 174.457 593.933 175.2 594.581 175.895C595.246 176.581 596.073 177.22 597.062 177.801C598.067 178.383 599.243 178.941 600.605 179.482C602.712 180.233 604.512 181.074 606.004 182.003C607.503 182.924 608.719 183.974 609.668 185.137C610.616 186.277 611.306 187.578 611.735 189.048C612.189 190.486 612.416 192.126 612.416 193.96C612.416 195.875 612.116 197.612 611.524 199.163C610.957 200.715 610.122 202.04 609.019 203.138C607.917 204.237 606.587 205.086 605.031 205.691C603.474 206.273 601.723 206.564 599.778 206.564C598.083 206.564 596.421 206.257 594.784 205.659C593.171 205.053 591.703 204.148 590.382 202.945C589.068 201.733 588.015 200.246 587.228 198.485C586.442 196.691 586.045 194.623 586.045 192.28H591.476C591.476 193.896 591.695 195.285 592.125 196.449C592.563 197.588 593.163 198.533 593.933 199.293C594.695 200.044 595.57 200.602 596.559 200.973C597.564 201.313 598.635 201.49 599.778 201.49C601.351 201.49 602.672 201.183 603.734 200.585C604.812 199.979 605.623 199.115 606.158 198C606.709 196.877 606.984 195.552 606.984 194.025Z"
          fill="#ED1C24"
          stroke="#ED1C24"
        />
        <path
          d="M630.282 206.565C628.547 206.565 626.99 206.25 625.593 205.628C624.204 204.998 623.014 204.053 622.036 202.784C621.052 201.491 620.302 199.859 619.788 197.904C619.266 195.941 619.009 193.622 619.009 190.956V187.013C619.009 183.927 619.303 181.325 619.891 179.192C620.501 177.059 621.317 175.346 622.331 174.054C623.345 172.737 624.498 171.791 625.784 171.21C627.07 170.604 628.386 170.305 629.745 170.305C631.568 170.305 633.118 170.66 634.404 171.371C635.683 172.082 636.734 173.133 637.535 174.538C638.336 175.936 638.924 177.657 639.299 179.709C639.695 181.753 639.886 184.113 639.886 186.787V190.115H621.794V185.236H635.154V184.428C635.08 182.618 634.875 181.018 634.537 179.645C634.213 178.263 633.677 177.188 632.927 176.413C632.178 175.613 631.119 175.217 629.745 175.217C628.871 175.217 628.055 175.395 627.306 175.766C626.578 176.106 625.946 176.72 625.41 177.609C624.888 178.465 624.484 179.661 624.175 181.196C623.888 182.723 623.749 184.662 623.749 187.013V190.956C623.749 192.83 623.888 194.446 624.175 195.803C624.484 197.136 624.917 198.243 625.49 199.132C626.078 199.989 626.791 200.635 627.629 201.071C628.489 201.475 629.459 201.685 630.546 201.685C632.133 201.685 633.449 201.314 634.485 200.586C635.514 199.827 636.418 198.874 637.182 197.71L639.673 201.297C639.159 202.178 638.475 203.026 637.638 203.85C636.822 204.642 635.8 205.305 634.588 205.822C633.39 206.315 631.957 206.565 630.282 206.565Z"
          fill="#ED1C24"
          stroke="#ED1C24"
        />
        <path
          d="M652.794 176.557V206.565H647.578V170.963H652.624L652.794 176.557ZM660.731 170.765L660.764 176.425C660.326 176.31 659.937 176.244 659.581 176.228C659.249 176.178 658.852 176.162 658.407 176.162C657.419 176.162 656.552 176.376 655.807 176.82C655.078 177.256 654.446 177.873 653.92 178.662C653.385 179.452 652.964 180.39 652.648 181.492C652.332 182.562 652.122 183.746 652 185.046L650.648 186.033C650.648 183.878 650.793 181.862 651.085 179.979C651.401 178.087 651.887 176.425 652.535 174.977C653.183 173.505 654.009 172.361 655.013 171.555C656.033 170.716 657.249 170.305 658.666 170.305C658.982 170.305 659.37 170.354 659.816 170.469C660.294 170.552 660.593 170.65 660.731 170.765Z"
          fill="#ED1C24"
          stroke="#ED1C24"
        />
        <path
          d="M674.931 201.137L681.801 171.402H687.135L677.622 206.564H674.158L674.931 201.137ZM669.394 171.402L676.557 201.3L677.126 206.564H673.686L664.06 171.402H669.394Z"
          fill="#ED1C24"
          stroke="#ED1C24"
        />
        <path
          d="M697.711 171.123V206.564H692.906V171.123H697.711ZM692.629 161.722C692.629 160.739 692.861 159.904 693.319 159.232C693.768 158.553 694.45 158.217 695.365 158.217C696.272 158.217 696.954 158.553 697.411 159.232C697.883 159.904 698.123 160.739 698.123 161.722C698.123 162.655 697.883 163.466 697.411 164.146C696.954 164.801 696.272 165.128 695.365 165.128C694.45 165.128 693.768 164.801 693.319 164.146C692.861 163.466 692.629 162.655 692.629 161.722Z"
          fill="#ED1C24"
          stroke="#ED1C24"
        />
        <path
          d="M716.921 201.685C717.965 201.685 718.919 201.459 719.767 201.006C720.64 200.53 721.357 199.795 721.912 198.809C722.466 197.791 722.776 196.482 722.858 194.866H727.79C727.709 197.193 727.162 199.237 726.151 201.006C725.165 202.752 723.86 204.117 722.238 205.111C720.631 206.08 718.862 206.565 716.921 206.565C714.842 206.565 713.032 206.193 711.483 205.466C709.958 204.731 708.694 203.673 707.683 202.299C706.697 200.893 705.947 199.205 705.457 197.225C704.96 195.222 704.716 192.943 704.716 190.406V186.464C704.716 183.918 704.96 181.656 705.457 179.677C705.947 177.673 706.697 175.976 707.683 174.603C708.694 173.197 709.958 172.131 711.483 171.404C713.032 170.668 714.842 170.305 716.921 170.305C719.099 170.305 720.974 170.806 722.564 171.824C724.162 172.809 725.41 174.256 726.307 176.154C727.212 178.029 727.709 180.299 727.79 182.973H722.858C722.776 181.244 722.49 179.814 722.001 178.675C721.504 177.512 720.827 176.647 719.979 176.09C719.123 175.508 718.104 175.217 716.921 175.217C715.535 175.217 714.386 175.484 713.472 176.025C712.584 176.542 711.882 177.293 711.369 178.287C710.847 179.273 710.488 180.461 710.268 181.842C710.072 183.216 709.967 184.759 709.967 186.464V190.406C709.967 192.103 710.072 193.654 710.268 195.06C710.488 196.434 710.839 197.621 711.336 198.615C711.85 199.601 712.559 200.368 713.472 200.91C714.386 201.427 715.535 201.685 716.921 201.685Z"
          fill="#ED1C24"
          stroke="#ED1C24"
        />
        <path
          d="M744.637 206.565C742.728 206.565 740.998 206.25 739.463 205.628C737.92 204.998 736.612 204.053 735.524 202.784C734.443 201.491 733.615 199.859 733.038 197.904C732.47 195.941 732.186 193.622 732.186 190.956V187.013C732.186 183.927 732.511 181.325 733.16 179.192C733.826 177.059 734.728 175.346 735.849 174.054C736.977 172.737 738.245 171.791 739.666 171.21C741.087 170.604 742.549 170.305 744.044 170.305C746.058 170.305 747.772 170.66 749.193 171.371C750.615 172.082 751.768 173.133 752.653 174.538C753.539 175.936 754.196 177.657 754.611 179.709C755.041 181.753 755.261 184.113 755.261 186.787V190.115H735.256V185.236H750.022V184.428C749.94 182.618 749.713 181.018 749.34 179.645C748.99 178.263 748.397 177.188 747.569 176.413C746.74 175.613 745.563 175.217 744.044 175.217C743.077 175.217 742.184 175.395 741.355 175.766C740.543 176.106 739.845 176.72 739.252 177.609C738.683 178.465 738.228 179.661 737.895 181.196C737.579 182.723 737.416 184.662 737.416 187.013V190.956C737.416 192.83 737.579 194.446 737.895 195.803C738.228 197.136 738.708 198.243 739.341 199.132C739.991 199.989 740.779 200.635 741.705 201.071C742.655 201.475 743.727 201.685 744.937 201.685C746.692 201.685 748.137 201.314 749.282 200.586C750.428 199.827 751.419 198.874 752.271 197.71L755.025 201.297C754.448 202.178 753.701 203.026 752.775 203.85C751.865 204.642 750.745 205.305 749.405 205.822C748.081 206.315 746.489 206.565 744.637 206.565Z"
          fill="#ED1C24"
          stroke="#ED1C24"
        />
      </svg>
    </a>
  );
};

export default MedLebLogoMobileDrawer;
