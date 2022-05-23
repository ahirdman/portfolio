interface ISVGProps {
  fill?: string;
  stroke?: string;
  className?: string;
}

const Github = ({ fill, className }: ISVGProps) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 40 40"
    fill={fill}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.0002 0C8.95583 0 0 9.18079 0 20.5063C0 29.5666 5.73066 37.2532 13.6773 39.9648C14.6769 40.1546 15.0438 39.5199 15.0438 38.9783C15.0438 38.4893 15.0253 36.8739 15.0167 35.1604C9.45262 36.4009 8.27853 32.7409 8.27853 32.7409C7.36874 30.3707 6.05788 29.7404 6.05788 29.7404C4.24326 28.4677 6.19466 28.4939 6.19466 28.4939C8.20302 28.6385 9.26053 30.607 9.26053 30.607C11.0443 33.742 13.9393 32.8357 15.0806 32.3117C15.2601 30.9864 15.7784 30.0817 16.3504 29.5696C11.9081 29.0511 7.23825 27.2928 7.23825 19.4353C7.23825 17.1965 8.01954 15.3672 9.29894 13.9311C9.09129 13.4146 8.40671 11.329 9.49269 8.50435C9.49269 8.50435 11.1722 7.95322 14.9942 10.6063C16.5895 10.152 18.3005 9.92412 20.0002 9.91631C21.6999 9.92412 23.4121 10.152 25.0105 10.6063C28.8278 7.95322 30.505 8.50435 30.505 8.50435C31.5936 11.329 30.9087 13.4146 30.7011 13.9311C31.9834 15.3672 32.7594 17.1965 32.7594 19.4353C32.7594 27.3115 28.0806 29.0457 23.6271 29.5533C24.3444 30.1897 24.9836 31.4376 24.9836 33.3508C24.9836 36.0946 24.9605 38.3029 24.9605 38.9783C24.9605 39.524 25.3205 40.1634 26.3343 39.962C34.2766 37.2475 40 29.5635 40 20.5063C40 9.18079 31.0455 0 20.0002 0ZM7.49071 29.2117C7.44666 29.3136 7.29034 29.3442 7.14793 29.2742C7.00286 29.2073 6.92139 29.0684 6.96842 28.9662C7.01147 28.8613 7.16813 28.8321 7.31286 28.9024C7.45826 28.9693 7.54105 29.1095 7.49071 29.2117ZM8.4745 30.1118C8.37911 30.2024 8.19265 30.1603 8.06614 30.017C7.93531 29.8741 7.91081 29.6829 8.00751 29.5908C8.10588 29.5002 8.28671 29.5426 8.41786 29.6856C8.54869 29.8302 8.57419 30.0201 8.4745 30.1118ZM9.14941 31.2633C9.02687 31.3506 8.8265 31.2688 8.70263 31.0864C8.58009 30.904 8.58009 30.6854 8.70528 30.5978C8.82948 30.5101 9.02687 30.5889 9.15239 30.7699C9.2746 30.9553 9.2746 31.174 9.14941 31.2633ZM10.2908 32.597C10.1812 32.7209 9.94772 32.6877 9.77682 32.5186C9.60195 32.3532 9.55327 32.1185 9.66322 31.9946C9.77417 31.8703 10.009 31.9053 10.1812 32.073C10.3548 32.2381 10.4077 32.4744 10.2908 32.597ZM11.766 33.0472C11.7177 33.2078 11.4928 33.2809 11.2662 33.2126C11.04 33.1423 10.892 32.9542 10.9377 32.7919C10.9847 32.6302 11.2106 32.5542 11.4388 32.6272C11.6647 32.6971 11.813 32.8839 11.766 33.0472ZM13.4448 33.2382C13.4505 33.4073 13.2584 33.5476 13.0206 33.5506C12.7815 33.5561 12.588 33.4192 12.5854 33.2528C12.5854 33.082 12.7732 32.9431 13.0123 32.939C13.2501 32.9343 13.4448 33.0701 13.4448 33.2382ZM15.0941 33.1734C15.1226 33.3384 14.9573 33.5079 14.7212 33.553C14.489 33.5965 14.274 33.4946 14.2446 33.3309C14.2158 33.1618 14.384 32.9924 14.6158 32.9486C14.8523 32.9065 15.0639 33.0056 15.0941 33.1734Z" />
  </svg>
);

const LinkedIn = ({ fill, className }: ISVGProps) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 40 40"
    fill={fill}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M34.0819 34.0827H28.1552V24.8008C28.1552 22.5875 28.1157 19.7382 25.0726 19.7382C21.9858 19.7382 21.5135 22.1498 21.5135 24.6397V34.0821H15.5867V14.9948H21.2764V17.6033H21.3561C21.9255 16.6297 22.7483 15.8288 23.7368 15.2858C24.7254 14.7429 25.8427 14.4782 26.9698 14.5201C32.9768 14.5201 34.0844 18.4714 34.0844 23.6117L34.0819 34.0827ZM8.89938 12.3857C8.21913 12.3859 7.55412 12.1843 6.98845 11.8064C6.42278 11.4286 5.98188 10.8915 5.72145 10.263C5.46102 9.63461 5.39277 8.94306 5.52536 8.27584C5.65795 7.60862 5.98542 6.99571 6.46633 6.5146C6.94725 6.0335 7.56003 5.70581 8.22718 5.57297C8.89433 5.44014 9.58587 5.50813 10.2144 5.76834C10.8429 6.02856 11.3801 6.46931 11.7581 7.03486C12.1362 7.60041 12.338 8.26537 12.3381 8.94563C12.3382 9.39731 12.2493 9.84458 12.0765 10.2619C11.9038 10.6792 11.6505 11.0584 11.3312 11.3779C11.0119 11.6973 10.6328 11.9508 10.2155 12.1237C9.79826 12.2966 9.35104 12.3856 8.89938 12.3857V12.3857ZM11.8627 34.0827H5.92983V14.9948H11.8627V34.0827ZM37.0366 0.00272526H2.95165C2.17802 -0.00600548 1.43253 0.292772 0.879067 0.833404C0.325604 1.37404 0.00944177 2.11229 0 2.88594V37.1135C0.00911862 37.8875 0.325095 38.6263 0.878539 39.1674C1.43198 39.7086 2.17763 40.008 2.95165 39.9998H37.0366C37.8122 40.0095 38.5599 39.711 39.1155 39.1698C39.6712 38.6286 39.9893 37.889 40 37.1135V2.88347C39.9889 2.10829 39.6706 1.36919 39.115 0.828574C38.5593 0.287955 37.8118 -0.00996905 37.0366 0.000254703" />
  </svg>
);

const Close = ({ className }: ISVGProps) => (
  <svg
    width="18"
    height="18"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m1 1 16.111 16.111M17.111 1 1 17.111"
      className={className}
      stroke="#B8B8B8"
    />
  </svg>
);

const ChevronsRight = ({ className }: ISVGProps) => (
  <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.208 12.042 12.75 8.5 9.208 4.958M4.25 12.042 7.792 8.5 4.25 4.958"
      stroke="#000"
      className={className}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Planet = ({ className }: ISVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 27c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M23.025 7.537c3.463-.95 6.063-.862 6.838.463 1.375 2.387-3.713 7.912-11.363 12.325C10.85 24.738 3.525 26.388 2.138 24c-.763-1.325.462-3.625 3.012-6.15"
    />
  </svg>
);

const Jeep = ({ className }: ISVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M27.5 22v4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-4m-13 0v4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-4M2 12h28m-12 4v6m-4-6v6"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M27.5 22h-23V12l.875-6.138A1 1 0 0 1 6.362 5h19.275a1 1 0 0 1 .988.862L27.5 12v10Z"
    />
    <path
      fill="#fff"
      d="M9 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm14 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

const Paw = ({ className }: ISVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M26.5 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-21 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm6-6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm9 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm2.4 9.488a5.45 5.45 0 0 1-2.575-3.25v0a4.5 4.5 0 0 0-8.65 0 5.45 5.45 0 0 1-2.575 3.25 4 4 0 0 0 3.463 7.2 8.975 8.975 0 0 1 6.874 0 4 4 0 0 0 3.462-7.2Z"
    />
  </svg>
);

const CaretRight = ({ className }: ISVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7.5 3.75 13.75 10 7.5 16.25"
    />
  </svg>
);

const React = ({ className }: ISVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M26.256 26.253c2.147-2.148-.702-8.48-6.364-14.142C14.229 6.448 7.897 3.599 5.749 5.747c-2.147 2.148.702 8.48 6.364 14.142 5.663 5.663 11.995 8.512 14.143 6.364Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19.892 19.89c5.662-5.664 8.511-11.995 6.364-14.143-2.148-2.148-8.48.701-14.143 6.364-5.662 5.663-8.511 11.994-6.364 14.142 2.148 2.148 8.48-.701 14.143-6.364Z"
    />
    <path fill="#fff" d="M16 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

const Database = ({ className }: ISVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 16c6.075 0 11-2.686 11-6s-4.925-6-11-6S5 6.686 5 10s4.925 6 11 6Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 10v6c0 3.313 4.925 6 11 6s11-2.688 11-6v-6"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 16v6c0 3.313 4.925 6 11 6s11-2.688 11-6v-6"
    />
  </svg>
);

const TypeScript = ({ className }: ISVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.5 21H6m2.25 6v-6M14 26.5a3.15 3.15 0 0 0 1.875.625C17 27.125 18 26.75 18 25.5c0-2-4-1.125-4-3 0-1 .75-1.625 1.875-1.625a3.15 3.15 0 0 1 1.875.625"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M23 28h2a1 1 0 0 0 1-1V11l-7-7H7a1 1 0 0 0-1 1v11"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 4v7h7"
    />
  </svg>
);

const User = ({ className }: ISVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 20a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7.975 24.925a9 9 0 0 1 16.05 0"
    />
  </svg>
);

const Team = ({ className }: ISVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 22.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm8.5-8a7.475 7.475 0 0 1 6 3m-29 0a7.474 7.474 0 0 1 6-3"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8.8 27a8.013 8.013 0 0 1 14.4 0M7.5 14.5a4 4 0 1 1 3.925-4.75m9.15 0A4 4 0 1 1 24.5 14.5"
    />
  </svg>
);

const Test = ({ className }: ISVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 4v7.725a1.05 1.05 0 0 1-.137.513l-7.95 13.25A1 1 0 0 0 5.763 27h20.475a1 1 0 0 0 .85-1.512l-7.95-13.25a1.05 1.05 0 0 1-.138-.513V4m-8 0h10"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7.825 20.625C9.3 19.538 11.838 18.925 16 21c4.462 2.238 7.062 1.35 8.487.137"
    />
  </svg>
);

const Mail = ({ className }: ISVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="none"
    viewBox="0 0 30 30"
  >
    <path
      fill="#414141"
      d="M15 0C6.72 0 0 6.72 0 15c0 8.28 6.72 15 15 15h7.5v-3H15C8.49 27 3 21.51 3 15S8.49 3 15 3s12 5.49 12 12v2.145c0 1.185-1.065 2.355-2.25 2.355s-2.25-1.17-2.25-2.355V15c0-4.14-3.36-7.5-7.5-7.5-4.14 0-7.5 3.36-7.5 7.5 0 4.14 3.36 7.5 7.5 7.5 2.07 0 3.96-.84 5.31-2.205.975 1.335 2.655 2.205 4.44 2.205 2.955 0 5.25-2.4 5.25-5.355V15c0-8.28-6.72-15-15-15Zm0 19.5c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5Z"
    />
  </svg>
);

const LineArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="500"
    fill="none"
    viewBox="0 0 16 509"
  >
    <path
      fill="#000"
      d="M9 1a1 1 0 0 0-2 0h2ZM7.293 508.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 1 0-1.414-1.414L8 506.586l-5.657-5.657a1 1 0 1 0-1.414 1.414l6.364 6.364ZM7 1v507h2V1H7Z"
    />
  </svg>
);

export {
  Github,
  LinkedIn,
  Close,
  ChevronsRight,
  Planet,
  Jeep,
  Paw,
  CaretRight,
  React,
  TypeScript,
  Database,
  Test,
  User,
  Team,
  Mail,
  LineArrow,
};
