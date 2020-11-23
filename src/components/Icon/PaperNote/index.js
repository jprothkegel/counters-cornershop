import React from 'react';

function PaperNote({ ...props }) {
  const { className } = props;
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      fill="none"
      viewBox="0 0 100 100"
    >
      <g filter="url(#filter0_d)">
        <rect width="84" height="84" x="8" y="6" fill="#fff" rx="4"></rect>
      </g>
      <path
        fill="#000"
        d="M32.232 15.504l-1.12.92-.56-.664 1.768-1.424h.872V20h-.96v-4.496zm7.09 1.664c0 .459-.044.872-.135 1.24-.085.368-.213.68-.384.936a1.74 1.74 0 01-.624.592 1.693 1.693 0 01-.848.208c-.32 0-.606-.07-.856-.208a1.807 1.807 0 01-.632-.592 2.946 2.946 0 01-.392-.936 5.506 5.506 0 01-.128-1.24c0-.459.042-.872.128-1.24.09-.368.221-.68.392-.936.17-.256.381-.453.632-.592.25-.139.536-.208.856-.208.32 0 .602.07.848.208.25.139.459.336.624.592.17.256.299.568.384.936.09.368.136.781.136 1.24zm-.983 0c0-.197-.014-.421-.04-.672a3.062 3.062 0 00-.144-.712c-.07-.224-.17-.41-.304-.56a.654.654 0 00-.52-.232.663.663 0 00-.528.232c-.133.15-.237.336-.312.56-.07.224-.117.461-.144.712-.027.25-.04.475-.04.672 0 .197.013.421.04.672.026.25.075.485.144.704.075.219.178.405.312.56.133.15.31.224.528.224a.665.665 0 00.52-.224c.133-.155.235-.341.304-.56a2.94 2.94 0 00.144-.704c.026-.25.04-.475.04-.672zm6.09-.16l1.457-1.456.56.56-1.448 1.448 1.48 1.488-.592.592-1.464-1.448-1.448 1.448-.592-.584 1.48-1.456-1.472-1.488.576-.568 1.464 1.464zm5.289-2.672h1.968c.266 0 .525.03.776.088.25.053.472.144.664.272.197.128.354.296.472.504.117.208.176.461.176.76 0 .41-.118.747-.352 1.008-.23.256-.544.43-.944.52L53.99 20h-1.216l-1.312-2.4h-.736V20h-1.008v-5.664zm1.832 2.44c.144 0 .288-.01.432-.032a1.2 1.2 0 00.384-.12.762.762 0 00.288-.248.75.75 0 00.112-.424.628.628 0 00-.104-.376.761.761 0 00-.264-.24 1.106 1.106 0 00-.368-.12 2.484 2.484 0 00-.392-.032h-.912v1.592h.824zm5.761.92c0-.123-.018-.24-.056-.352a.762.762 0 00-.16-.296.756.756 0 00-.288-.2.923.923 0 00-.4-.08c-.288 0-.533.088-.736.264a.94.94 0 00-.328.664h1.968zm.96.432v.128c0 .043-.002.085-.008.128h-2.92c.01.139.046.267.104.384.064.112.147.21.248.296.102.08.216.144.344.192.128.048.262.072.4.072.24 0 .443-.043.608-.128.166-.09.302-.213.408-.368l.64.512c-.378.512-.928.768-1.648.768-.298 0-.573-.045-.824-.136-.25-.096-.47-.23-.656-.4a1.866 1.866 0 01-.432-.624 2.244 2.244 0 01-.152-.848c0-.31.05-.59.152-.84a1.915 1.915 0 011.072-1.064c.25-.101.52-.152.808-.152.267 0 .512.045.736.136.23.085.427.216.592.392.166.17.294.387.384.648.096.256.144.557.144.904zm3.554-.904a.817.817 0 00-.336-.264 1.009 1.009 0 00-.92 0c-.133.07-.245.163-.336.28-.085.117-.15.25-.192.4a1.54 1.54 0 00-.064.44c0 .15.021.299.064.448.048.144.117.275.208.392.09.117.203.213.336.288.139.07.299.104.48.104.15 0 .299-.03.448-.088a.854.854 0 00.36-.256l.6.608c-.16.17-.365.304-.616.4a2.29 2.29 0 01-.8.136c-.283 0-.552-.045-.808-.136a1.957 1.957 0 01-.664-.4 1.974 1.974 0 01-.448-.64 2.168 2.168 0 01-.16-.856c0-.31.053-.59.16-.84.112-.25.261-.464.448-.64s.403-.312.648-.408a2.218 2.218 0 011.616.016c.267.107.477.253.632.44l-.656.576zm1.058.84c0-.304.054-.579.16-.824.112-.25.262-.464.448-.64.187-.176.408-.312.664-.408.256-.096.528-.144.816-.144.288 0 .56.048.816.144a1.879 1.879 0 011.104 1.048c.112.245.168.52.168.824 0 .304-.056.581-.168.832-.106.25-.253.467-.44.648a2.063 2.063 0 01-.664.416 2.197 2.197 0 01-.816.152c-.288 0-.56-.05-.816-.152a2.062 2.062 0 01-.664-.416 2.069 2.069 0 01-.448-.648 2.103 2.103 0 01-.16-.832zm.976 0c0 .15.022.299.064.448.048.15.118.283.208.4.09.117.206.213.344.288.139.075.304.112.496.112s.358-.037.496-.112a1.07 1.07 0 00.344-.288c.09-.117.158-.25.2-.4a1.383 1.383 0 000-.888 1.177 1.177 0 00-.2-.4.985.985 0 00-.344-.28 1.032 1.032 0 00-.496-.112c-.192 0-.357.037-.496.112a.983.983 0 00-.344.28c-.09.117-.16.25-.208.4a1.54 1.54 0 00-.064.44zm4.131-1.904h.92v.64h.016a1.4 1.4 0 01.448-.544 1.117 1.117 0 01.792-.2c.043 0 .08.005.112.016v.88a1.29 1.29 0 00-.296-.04c-.219 0-.395.04-.528.12a.958.958 0 00-.312.288 1.03 1.03 0 00-.152.344c-.027.117-.04.21-.04.28V20h-.96v-3.84zM74.668 20h-.913v-.576h-.015c-.134.224-.32.395-.56.512a1.676 1.676 0 01-.76.176c-.294 0-.558-.053-.793-.16a1.95 1.95 0 01-.591-.44 2.11 2.11 0 01-.377-.648 2.467 2.467 0 01-.128-.8c0-.283.046-.547.136-.792.091-.245.22-.459.385-.64s.362-.323.591-.424c.23-.107.48-.16.752-.16.177 0 .334.021.473.064.138.037.258.085.36.144.106.059.197.123.272.192.074.07.135.136.183.2h.024v-2.696h.96V20zm-3.16-1.936c0 .15.02.299.064.448.047.15.117.283.207.4a1.014 1.014 0 00.832.4c.177 0 .334-.035.473-.104a1.16 1.16 0 00.352-.288c.1-.117.175-.248.223-.392.054-.15.08-.299.08-.448 0-.15-.026-.299-.08-.448a1.14 1.14 0 00-.224-.4 1.16 1.16 0 00-.352-.288.98.98 0 00-.471-.112c-.187 0-.35.037-.488.112a.984.984 0 00-.344.28c-.091.117-.16.25-.209.4a1.54 1.54 0 00-.064.44zm6.43-.88a1.066 1.066 0 00-.352-.288.967.967 0 00-.488-.128.935.935 0 00-.424.096.33.33 0 00-.192.32c0 .15.07.256.208.32.144.059.352.12.624.184.144.032.288.075.432.128.15.053.282.125.4.216a.972.972 0 01.296.328.922.922 0 01.112.472c0 .235-.046.435-.136.6-.086.16-.203.29-.352.392a1.39 1.39 0 01-.512.216 2.465 2.465 0 01-1.472-.088 1.882 1.882 0 01-.704-.472l.632-.592c.106.139.245.253.416.344.17.09.36.136.568.136a.922.922 0 00.408-.096.395.395 0 00.208-.36.354.354 0 00-.224-.344 3.423 3.423 0 00-.656-.208 3.847 3.847 0 01-.424-.12 1.565 1.565 0 01-.36-.2.968.968 0 01-.256-.312.978.978 0 01-.096-.456c0-.213.043-.397.128-.552.09-.155.208-.28.352-.376.144-.101.306-.176.488-.224.181-.048.368-.072.56-.072.277 0 .546.048.808.144.266.096.477.243.632.44l-.624.552zM31.496 27.16v.536h.024c.048-.075.11-.15.184-.224.08-.08.176-.15.288-.208.112-.064.237-.115.376-.152.144-.043.304-.064.48-.064.272 0 .523.053.752.16.23.101.427.243.592.424.165.181.293.395.384.64.09.245.136.51.136.792 0 .283-.045.55-.136.8-.085.245-.21.461-.376.648-.16.181-.357.328-.592.44-.23.107-.49.16-.784.16a1.69 1.69 0 01-.752-.168 1.28 1.28 0 01-.52-.456h-.016v2.432h-.96v-5.76h.92zm2.24 1.904c0-.15-.024-.296-.072-.44a1.175 1.175 0 00-.2-.4.984.984 0 00-.344-.28 1.014 1.014 0 00-.488-.112.98.98 0 00-.472.112c-.139.075-.259.17-.36.288-.096.117-.17.25-.224.4-.048.15-.072.299-.072.448 0 .15.024.299.072.448.053.144.128.275.224.392.101.117.221.213.36.288.139.07.296.104.472.104a1.014 1.014 0 00.832-.4c.09-.117.157-.25.2-.4.048-.15.072-.299.072-.448zm1.919-4.112h.96V31h-.96v-6.048zm4.508 5.56h-.024c-.096.17-.25.312-.464.424-.213.107-.456.16-.728.16-.155 0-.317-.021-.488-.064a1.473 1.473 0 01-.464-.192 1.29 1.29 0 01-.352-.368 1.107 1.107 0 01-.136-.568c0-.288.08-.517.24-.688.166-.17.376-.301.632-.392.256-.09.539-.15.848-.176.315-.032.622-.048.92-.048v-.096c0-.24-.088-.416-.264-.528a1.06 1.06 0 00-.616-.176 1.39 1.39 0 00-.584.128c-.187.085-.341.19-.464.312l-.496-.584c.219-.203.47-.355.752-.456.288-.101.579-.152.872-.152.341 0 .621.048.84.144.224.096.4.221.528.376s.216.328.264.52c.053.192.08.384.08.576V31h-.896v-.488zm-.016-1.264h-.216c-.154 0-.317.008-.488.024-.17.01-.328.04-.472.088a.932.932 0 00-.36.192.413.413 0 00-.144.336c0 .09.019.168.056.232a.518.518 0 00.16.144.697.697 0 00.216.08c.08.016.16.024.24.024.33 0 .581-.088.752-.264.17-.176.256-.416.256-.72v-.136zm1.455-2.088h1.064l1.072 2.792h.016l.952-2.792h1l-1.816 4.664c-.07.176-.144.33-.224.464-.08.139-.176.253-.288.344a1.114 1.114 0 01-.4.216c-.15.048-.331.072-.544.072-.08 0-.163-.005-.248-.016a1.409 1.409 0 01-.248-.04l.08-.832a.816.816 0 00.184.04c.064.01.122.016.176.016a.716.716 0 00.256-.04.385.385 0 00.176-.112.702.702 0 00.128-.184c.037-.075.077-.163.12-.264L43.25 31l-1.648-3.84zm7.381 1.536c0-.123-.018-.24-.056-.352a.76.76 0 00-.16-.296.754.754 0 00-.288-.2.923.923 0 00-.4-.08c-.288 0-.533.088-.736.264a.94.94 0 00-.328.664h1.968zm.96.432v.128c0 .043-.002.085-.008.128h-2.92c.01.139.045.267.104.384.064.112.147.21.248.296.102.08.216.144.344.192.128.048.261.072.4.072.24 0 .443-.043.608-.128.166-.09.301-.213.408-.368l.64.512c-.379.512-.928.768-1.648.768-.298 0-.573-.045-.824-.136-.25-.096-.47-.23-.656-.4a1.869 1.869 0 01-.432-.624 2.246 2.246 0 01-.152-.848c0-.31.05-.59.152-.84A1.918 1.918 0 0147.28 27.2c.25-.101.52-.152.808-.152.267 0 .512.045.736.136.23.085.427.216.592.392.166.17.294.387.384.648.096.256.144.557.144.904zM54.777 31h-.912v-.576h-.016c-.133.224-.32.395-.56.512a1.676 1.676 0 01-.76.176c-.294 0-.558-.053-.792-.16a1.95 1.95 0 01-.592-.44 2.108 2.108 0 01-.376-.648 2.464 2.464 0 01-.128-.8c0-.283.045-.547.136-.792a1.93 1.93 0 01.384-.64c.165-.181.362-.323.592-.424.23-.107.48-.16.752-.16.176 0 .333.021.472.064.139.037.259.085.36.144a1.368 1.368 0 01.456.392h.024v-2.696h.96V31zm-3.16-1.936c0 .15.021.299.064.448.048.15.117.283.208.4a1.014 1.014 0 00.832.4c.176 0 .333-.035.472-.104.139-.075.256-.17.352-.288.101-.117.176-.248.224-.392.053-.15.08-.299.08-.448 0-.15-.027-.299-.08-.448a1.14 1.14 0 00-.224-.4 1.161 1.161 0 00-.352-.288.98.98 0 00-.472-.112c-.187 0-.35.037-.488.112a.983.983 0 00-.344.28c-.09.117-.16.25-.208.4a1.54 1.54 0 00-.064.44z"
      ></path>
      <circle cx="16.5" cy="14.5" r="2.5" fill="#fff"></circle>
      <circle
        cx="16.5"
        cy="14.5"
        r="3"
        stroke="#000"
        strokeOpacity="0.1"
      ></circle>
      <circle cx="16.5" cy="24.5" r="2.5" fill="#fff"></circle>
      <circle
        cx="16.5"
        cy="24.5"
        r="3"
        stroke="#000"
        strokeOpacity="0.1"
      ></circle>
      <circle cx="16.5" cy="34.5" r="2.5" fill="#fff"></circle>
      <circle
        cx="16.5"
        cy="34.5"
        r="3"
        stroke="#000"
        strokeOpacity="0.1"
      ></circle>
      <circle cx="16.5" cy="44.5" r="2.5" fill="#fff"></circle>
      <circle
        cx="16.5"
        cy="44.5"
        r="3"
        stroke="#000"
        strokeOpacity="0.1"
      ></circle>
      <circle cx="16.5" cy="54.5" r="2.5" fill="#fff"></circle>
      <circle
        cx="16.5"
        cy="54.5"
        r="3"
        stroke="#000"
        strokeOpacity="0.1"
      ></circle>
      <circle cx="16.5" cy="64.5" r="2.5" fill="#fff"></circle>
      <circle
        cx="16.5"
        cy="64.5"
        r="3"
        stroke="#000"
        strokeOpacity="0.1"
      ></circle>
      <circle cx="16.5" cy="74.5" r="2.5" fill="#fff"></circle>
      <circle
        cx="16.5"
        cy="74.5"
        r="3"
        stroke="#000"
        strokeOpacity="0.1"
      ></circle>
      <path fill="#FF3B30" d="M24 6H25V90H24z" opacity="0.2"></path>
      <defs>
        <filter
          id="filter0_d"
          width="100"
          height="100"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2"></feOffset>
          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default PaperNote;