import React, { createRef } from 'react';
import { useScreenshot, createFileName } from 'use-react-screenshot';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

import CanvasArea from '../components/CanvasArea';

import '../css/tool.css';
// import OverviewFlow from "./CanvasArea";

const Tool = (props) => {
  const { onLayout, canvasFunc } = props;
  const handle = useFullScreenHandle();
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot({
    type: 'image/jpeg',
    quality: 1.0,
  });
  const download = (image, { name = 'img', extension = 'jpg' } = {}) => {
    const a = document.createElement('a');
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const getImage = () => {
    takeScreenshot(ref.current).then(download);
  };
  return (
    <div className="navigation" ref={ref}>
      <nav className="menu">
        <button className="toolbtn" onClick={handle.enter}>
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="ca802909">
              <g id="4f7f01f1">
                <path
                  d="M17.4374 20.1886C17.2551 20.1886 17.0802 20.261 16.9513 20.39C16.8224 20.5189 16.7499 20.6938 16.7499 20.8761C16.7499 21.0584 16.8224 21.2333 16.9513 21.3622C17.0802 21.4912 17.2551 21.5636 17.4374 21.5636L20.8769 21.5636C21.0592 21.5636 21.2341 21.4912 21.363 21.3622C21.4919 21.2333 21.5644 21.0584 21.5644 20.8761L21.5644 17.4371C21.5644 17.2547 21.4919 17.0795 21.363 16.9506C21.2341 16.8216 21.0592 16.7492 20.8769 16.7492C20.6945 16.7492 20.5196 16.8216 20.3907 16.9506C20.2618 17.0795 20.1894 17.2544 20.1894 17.4367L20.1894 20.1886L17.4374 20.1886Z"
                  fill="var(--secondary-color)"
                ></path>
                <path
                  d="M16.0155 16.9871L20.3907 21.3623C20.6592 21.6308 21.0945 21.6307 21.363 21.3622C21.6315 21.0938 21.6315 20.6585 21.363 20.39L16.9878 16.0148C16.7193 15.7463 16.284 15.7463 16.0155 16.0148C15.747 16.2833 15.747 16.7186 16.0155 16.9871Z"
                  fill="var(--secondary-color)"
                ></path>
                <path
                  d="M8.92486 8.92412L11.6768 8.92412C11.8591 8.92412 12.034 8.85168 12.1629 8.72275C12.2918 8.59382 12.3643 8.41895 12.3643 8.23662C12.3643 8.05428 12.2918 7.87941 12.1629 7.75048C12.034 7.62155 11.8591 7.54912 11.6768 7.54912L8.23736 7.54912C7.85767 7.54912 7.54986 7.85692 7.54986 8.23662L7.54986 11.676C7.54986 11.8584 7.6223 12.0332 7.75123 12.1622C7.75901 12.17 7.76699 12.1776 7.77514 12.185C7.90166 12.2999 8.06645 12.3635 8.23736 12.3635C8.4197 12.3635 8.59457 12.2911 8.7235 12.1622C8.85243 12.0332 8.92486 11.8584 8.92486 11.676L8.92486 8.92412Z"
                  fill="var(--secondary-color)"
                ></path>
                <path
                  d="M13.0987 12.1257L8.72349 7.75049C8.455 7.48201 8.0197 7.48201 7.75122 7.75049C7.48273 8.01898 7.48273 8.45428 7.75122 8.72277L12.1264 13.098C12.3949 13.3665 12.8302 13.3665 13.0987 13.098C13.3672 12.8295 13.3672 12.3942 13.0987 12.1257Z"
                  fill="var(--secondary-color)"
                ></path>
                <path
                  d="M8.92475 17.4278C8.92243 17.2486 8.85019 17.0773 8.72344 16.9506C8.59451 16.8216 8.41964 16.7492 8.2373 16.7492L8.22896 16.7493C8.04972 16.7516 7.87792 16.8238 7.75117 16.9506L7.74849 16.9533C7.6212 17.082 7.5498 17.2557 7.5498 17.4367L7.5498 20.8761C7.5498 21.2558 7.85761 21.5636 8.2373 21.5636L11.6764 21.5636C11.8587 21.5636 12.0339 21.4912 12.1629 21.3623C12.1712 21.3539 12.1794 21.3453 12.1874 21.3364C12.3012 21.2102 12.3642 21.0462 12.3642 20.8761C12.3642 20.6938 12.2918 20.5189 12.1629 20.39C12.0339 20.261 11.8591 20.1886 11.6767 20.1886L8.9248 20.1886L8.9248 17.4367L8.92475 17.4278Z"
                  fill="var(--secondary-color)"
                ></path>
                <path
                  d="M12.1264 16.0148L7.75122 20.39C7.48273 20.6585 7.48273 21.0938 7.75122 21.3623C8.0197 21.6308 8.455 21.6308 8.72349 21.3623L13.0987 16.9871C13.3672 16.7186 13.3672 16.2833 13.0987 16.0148C12.8302 15.7463 12.3949 15.7463 12.1264 16.0148Z"
                  fill="var(--secondary-color)"
                ></path>
                <path
                  d="M20.1894 11.6756C20.1894 11.858 20.2618 12.0332 20.3907 12.1621C20.3985 12.1699 20.4065 12.1775 20.4146 12.1849C20.5411 12.2998 20.7059 12.3635 20.8769 12.3635C21.0592 12.3635 21.2341 12.291 21.363 12.1621C21.4919 12.0332 21.5644 11.8583 21.5644 11.676L21.5644 8.23657C21.5644 8.05423 21.4919 7.87936 21.363 7.75043C21.2341 7.6215 21.0592 7.54907 20.8769 7.54907L17.4374 7.54907C17.2551 7.54907 17.0802 7.6215 16.9513 7.75043C16.8224 7.87936 16.7499 8.05423 16.7499 8.23657C16.7499 8.41891 16.8224 8.59377 16.9513 8.72271C17.0802 8.85164 17.2551 8.92407 17.4374 8.92407L20.1894 8.92407L20.1894 11.6756Z"
                  fill="var(--secondary-color)"
                ></path>
                <path
                  d="M16.9878 13.098L21.363 8.72276C21.6315 8.45428 21.6315 8.01892 21.363 7.75043C21.0945 7.48195 20.6592 7.48201 20.3907 7.75049L16.0155 12.1257C15.747 12.3942 15.747 12.8295 16.0155 13.098C16.284 13.3665 16.7193 13.3665 16.9878 13.098Z"
                  fill="var(--secondary-color)"
                ></path>
              </g>
            </g>
          </svg>
        </button>
        <button
          className="toolbtn1 btnicon "
          onClick={() => canvasFunc?.zoomIn()}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="6dcc6fed">
              <path
                id="ae3e14b5"
                d="M17.1875 9.96875C17.1875 13.9555 13.9556 17.1875 9.96875 17.1875C5.98189 17.1875 2.75 13.9555 2.75 9.96875C2.75 5.98197 5.98189 2.75 9.96875 2.75C13.9556 2.75 17.1875 5.98197 17.1875 9.96875Z"
                fill="var(--secondary-color)"
                fillOpacity="0.1"
              ></path>
              <path
                id="e1e5a0b7"
                d="M7.21875 10.6562H12.7188C13.0984 10.6562 13.4062 10.3484 13.4062 9.96875C13.4062 9.58905 13.0984 9.28125 12.7188 9.28125H7.21875C6.83905 9.28125 6.53125 9.58905 6.53125 9.96875C6.53125 10.3484 6.83905 10.6562 7.21875 10.6562Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="7021e1bd"
                d="M9.28125 7.21875V12.7188C9.28125 13.0984 9.58905 13.4062 9.96875 13.4062C10.3484 13.4062 10.6562 13.0984 10.6562 12.7188V7.21875C10.6562 6.83905 10.3484 6.53125 9.96875 6.53125C9.58905 6.53125 9.28125 6.83905 9.28125 7.21875Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="294d0b40"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.96875 2.0625C9.96875 2.0625 11.5768 2.0625 13.0464 2.68409C13.0464 2.68409 14.4654 3.28426 15.5593 4.37819C15.5593 4.37819 16.6532 5.47211 17.2534 6.89107C17.2534 6.89107 17.875 8.36069 17.875 9.96875C17.875 9.96875 17.875 11.5768 17.2534 13.0464C17.2534 13.0464 16.6532 14.4654 15.5593 15.5593C15.5593 15.5593 14.4654 16.6532 13.0464 17.2534C13.0464 17.2534 11.5768 17.875 9.96875 17.875C9.96875 17.875 8.36068 17.875 6.89107 17.2534C6.89107 17.2534 5.47211 16.6532 4.37819 15.5593C4.37819 15.5593 3.28426 14.4654 2.68409 13.0464C2.68409 13.0464 2.0625 11.5768 2.0625 9.96875C2.0625 9.96875 2.0625 8.36068 2.68409 6.89107C2.68409 6.89107 3.28426 5.47211 4.37819 4.37819C4.37819 4.37819 5.47211 3.28427 6.89107 2.6841C6.89107 2.6841 8.36068 2.0625 9.96875 2.0625ZM9.96875 3.4375C9.96875 3.4375 8.63951 3.4375 7.4267 3.95048C7.4267 3.95048 6.25474 4.44617 5.35046 5.35046C5.35046 5.35046 4.44617 6.25475 3.95047 7.4267C3.95047 7.4267 3.4375 8.63951 3.4375 9.96875C3.4375 9.96875 3.4375 11.298 3.95048 12.5108C3.95048 12.5108 4.44617 13.6828 5.35046 14.587C5.35046 14.587 6.25475 15.4913 7.4267 15.987C7.4267 15.987 8.63952 16.5 9.96875 16.5C9.96875 16.5 11.298 16.5 12.5108 15.987C12.5108 15.987 13.6827 15.4913 14.587 14.587C14.587 14.587 15.4913 13.6828 15.987 12.5108C15.987 12.5108 16.5 11.298 16.5 9.96875C16.5 9.96875 16.5 8.63952 15.987 7.4267C15.987 7.4267 15.4913 6.25475 14.587 5.35046C14.587 5.35046 13.6827 4.44617 12.5108 3.95048C12.5108 3.95048 11.298 3.4375 9.96875 3.4375Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="1fc561f4"
                d="M18.7643 19.7358L18.7646 19.7361C18.8936 19.8651 19.0684 19.9375 19.2508 19.9375C19.4331 19.9375 19.608 19.8651 19.7369 19.7361C19.8658 19.6072 19.9383 19.4323 19.9383 19.25C19.9383 19.0677 19.8658 18.8928 19.7369 18.7639L19.7366 18.7635L15.5604 14.5874C15.4314 14.4584 15.2566 14.3859 15.0742 14.3859C14.8919 14.3859 14.717 14.4584 14.5881 14.5873C14.4592 14.7162 14.3867 14.8911 14.3867 15.0734C14.3867 15.2558 14.4592 15.4306 14.5881 15.5596L18.7643 19.7358Z"
                fill="var(--secondary-color)"
              ></path>
            </g>
          </svg>
        </button>

        <button
          className="toolbtn1 btnicon "
          onClick={() => canvasFunc?.zoomOut()}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="ad1b2976">
              <path
                id="03b84825"
                d="M17.1875 9.96875C17.1875 13.9555 13.9556 17.1875 9.96875 17.1875C5.98189 17.1875 2.75 13.9555 2.75 9.96875C2.75 5.98197 5.98189 2.75 9.96875 2.75C13.9556 2.75 17.1875 5.98197 17.1875 9.96875Z"
                fill="var(--secondary-color)"
                fillOpacity="0.1"
              ></path>
              <path
                id="137e63b2"
                d="M7.21875 10.6562H12.7188C13.0984 10.6562 13.4062 10.3484 13.4062 9.96875C13.4062 9.58905 13.0984 9.28125 12.7188 9.28125H7.21875C6.83905 9.28125 6.53125 9.58905 6.53125 9.96875C6.53125 10.3484 6.83905 10.6562 7.21875 10.6562Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="9a53aa46"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.96875 2.0625C9.96875 2.0625 11.5768 2.0625 13.0464 2.68409C13.0464 2.68409 14.4654 3.28426 15.5593 4.37819C15.5593 4.37819 16.6532 5.47211 17.2534 6.89107C17.2534 6.89107 17.875 8.36069 17.875 9.96875C17.875 9.96875 17.875 11.5768 17.2534 13.0464C17.2534 13.0464 16.6532 14.4654 15.5593 15.5593C15.5593 15.5593 14.4654 16.6532 13.0464 17.2534C13.0464 17.2534 11.5768 17.875 9.96875 17.875C9.96875 17.875 8.36068 17.875 6.89107 17.2534C6.89107 17.2534 5.47211 16.6532 4.37819 15.5593C4.37819 15.5593 3.28426 14.4654 2.68409 13.0464C2.68409 13.0464 2.0625 11.5768 2.0625 9.96875C2.0625 9.96875 2.0625 8.36068 2.68409 6.89107C2.68409 6.89107 3.28426 5.47211 4.37819 4.37819C4.37819 4.37819 5.47211 3.28427 6.89107 2.6841C6.89107 2.6841 8.36068 2.0625 9.96875 2.0625ZM9.96875 3.4375C9.96875 3.4375 8.63951 3.4375 7.4267 3.95048C7.4267 3.95048 6.25474 4.44617 5.35046 5.35046C5.35046 5.35046 4.44617 6.25475 3.95047 7.4267C3.95047 7.4267 3.4375 8.63951 3.4375 9.96875C3.4375 9.96875 3.4375 11.298 3.95048 12.5108C3.95048 12.5108 4.44617 13.6828 5.35046 14.587C5.35046 14.587 6.25475 15.4913 7.4267 15.987C7.4267 15.987 8.63952 16.5 9.96875 16.5C9.96875 16.5 11.298 16.5 12.5108 15.987C12.5108 15.987 13.6827 15.4913 14.587 14.587C14.587 14.587 15.4913 13.6828 15.987 12.5108C15.987 12.5108 16.5 11.298 16.5 9.96875C16.5 9.96875 16.5 8.63952 15.987 7.4267C15.987 7.4267 15.4913 6.25475 14.587 5.35046C14.587 5.35046 13.6827 4.44617 12.5108 3.95048C12.5108 3.95048 11.298 3.4375 9.96875 3.4375Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="0835f16b"
                d="M18.7643 19.7358L18.7646 19.7361C18.8936 19.8651 19.0684 19.9375 19.2508 19.9375C19.4331 19.9375 19.608 19.8651 19.7369 19.7361C19.8658 19.6072 19.9383 19.4323 19.9383 19.25C19.9383 19.0677 19.8658 18.8928 19.7369 18.7639L19.7366 18.7635L15.5604 14.5874C15.4314 14.4584 15.2566 14.3859 15.0742 14.3859C14.8919 14.3859 14.717 14.4584 14.5881 14.5873C14.4592 14.7162 14.3867 14.8911 14.3867 15.0734C14.3867 15.2558 14.4592 15.4306 14.5881 15.5596L18.7643 19.7358Z"
                fill="var(--secondary-color)"
              ></path>
            </g>
          </svg>
        </button>

        <button
          className="toolbtn1 btnicon "
          onClick={() => canvasFunc?.fitView()}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="d6add0ed">
              <path
                id="5ed7dcb8"
                d="M18.1504 6.82344C18.0684 6.86212 17.9948 6.91665 17.9339 6.98389C17.873 7.05113 17.8261 7.12975 17.7957 7.21523C17.7654 7.3007 17.7522 7.39134 17.757 7.48191C17.7619 7.57249 17.7846 7.66121 17.8238 7.74297C18.6276 9.42579 18.7813 11.3463 18.2552 13.1355C17.7292 14.9247 16.5607 16.4564 14.974 17.4364C13.3874 18.4165 11.4945 18.7757 9.65916 18.4451C7.82378 18.1145 6.17528 17.1174 5.03032 15.6453C3.88537 14.1732 3.32473 12.33 3.45608 10.4697C3.58744 8.60944 4.40153 6.86328 5.74198 5.5667C7.08243 4.27011 8.85469 3.51454 10.7183 3.44513C12.5819 3.37572 14.4055 3.99736 15.8387 5.19063L13.8793 7.15001C12.9046 6.4313 11.6947 6.10654 10.491 6.2405C9.28738 6.37447 8.1785 6.95732 7.38562 7.87276C6.59274 8.78821 6.17416 9.96894 6.21339 11.1794C6.25263 12.3898 6.74679 13.541 7.59729 14.4031C8.28695 15.0926 9.16978 15.5562 10.1288 15.7327C11.0879 15.9091 12.078 15.79 12.9678 15.3912C13.8577 14.9924 14.6055 14.3327 15.112 13.4994C15.6185 12.6661 15.86 11.6986 15.8043 10.725C15.7999 10.635 15.7777 10.5469 15.7389 10.4656C15.7001 10.3843 15.6456 10.3115 15.5784 10.2515C15.5112 10.1916 15.4327 10.1455 15.3476 10.1162C15.2625 10.0868 15.1723 10.0747 15.0824 10.0805C14.9921 10.0849 14.9036 10.1071 14.8218 10.1457C14.7401 10.1844 14.6668 10.2389 14.6061 10.3059C14.5454 10.373 14.4986 10.4513 14.4683 10.5365C14.4379 10.6217 14.4247 10.712 14.4293 10.8023C14.4666 11.4395 14.3258 12.0744 14.0227 12.636C13.7196 13.1977 13.2661 13.6638 12.713 13.9823C12.1599 14.3007 11.5291 14.4589 10.8912 14.4392C10.2533 14.4194 9.63348 14.2224 9.10119 13.8703L11.1637 11.8078L14.4035 8.56797L19.7403 3.23985C19.8499 3.10627 19.9059 2.93669 19.8974 2.76409C19.889 2.59149 19.8166 2.42822 19.6944 2.30603C19.5722 2.18383 19.4089 2.11146 19.2363 2.10298C19.0637 2.09451 18.8941 2.15053 18.7606 2.26016L16.8184 4.21094C15.1081 2.74693 12.9082 1.98232 10.6586 2.06995C8.40896 2.15758 6.27526 3.09098 4.684 4.6836C3.85304 5.51225 3.19375 6.49672 2.7439 7.5806C2.29406 8.66449 2.0625 9.82648 2.0625 11C2.0625 12.1735 2.29406 13.3355 2.7439 14.4194C3.19375 15.5033 3.85304 16.4878 4.684 17.3164C5.51265 18.1474 6.49712 18.8067 7.58101 19.2565C8.66489 19.7064 9.82688 19.9379 11.0004 19.9379C12.1739 19.9379 13.3359 19.7064 14.4198 19.2565C15.5037 18.8067 16.4882 18.1474 17.3168 17.3164C18.6239 16.0108 19.4944 14.3323 19.8083 12.5117C20.1223 10.6911 19.8643 8.81797 19.0699 7.15001C19.0313 7.06796 18.9767 6.99438 18.9095 6.9335C18.8423 6.87263 18.7636 6.82566 18.6782 6.7953C18.5927 6.76495 18.502 6.75181 18.4115 6.75664C18.3209 6.76147 18.2322 6.78417 18.1504 6.82344Z"
                fill="var(--secondary-color)"
              ></path>
            </g>
          </svg>
        </button>

        <button
          className="toolbtn1 btnicon "
          onClick={() => canvasFunc?.fitView()}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="368877c8">
              <path
                id="2194708a"
                d="M13.0625 11C13.0625 12.1391 12.1391 13.0625 11 13.0625C9.86091 13.0625 8.9375 12.1391 8.9375 11C8.9375 9.86091 9.86091 8.9375 11 8.9375C12.1391 8.9375 13.0625 9.86091 13.0625 11Z"
                fill="var(--secondary-color)"
                fillOpacity="0.1"
              ></path>
              <path
                id="8893f887"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 8.25C11 8.25 12.1391 8.25 12.9445 9.05546C12.9445 9.05546 13.75 9.86091 13.75 11C13.75 11 13.75 12.1391 12.9445 12.9445C12.9445 12.9445 12.1391 13.75 11 13.75C11 13.75 9.86091 13.75 9.05546 12.9445C9.05546 12.9445 8.25 12.1391 8.25 11C8.25 11 8.25 9.86091 9.05546 9.05546C9.05546 9.05546 9.86091 8.25 11 8.25ZM11 9.625C11 9.625 10.4305 9.625 10.0277 10.0277C10.0277 10.0277 9.625 10.4305 9.625 11C9.625 11 9.625 11.5695 10.0277 11.9723C10.0277 11.9723 10.4305 12.375 11 12.375C11 12.375 11.5695 12.375 11.9723 11.9723C11.9723 11.9723 12.375 11.5695 12.375 11C12.375 11 12.375 10.4305 11.9723 10.0277C11.9723 10.0277 11.5695 9.625 11 9.625Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="14fd866e"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.25 2.0625C8.25 2.0625 9.38909 2.0625 10.1945 2.86796C10.1945 2.86796 11 3.67341 11 4.8125C11 4.8125 11 5.95159 10.1945 6.75704C10.1945 6.75704 9.38909 7.5625 8.25 7.5625C8.25 7.5625 7.11091 7.5625 6.30546 6.75704C6.30546 6.75704 5.5 5.95159 5.5 4.8125C5.5 4.8125 5.5 3.67341 6.30546 2.86796C6.30546 2.86796 7.11091 2.0625 8.25 2.0625ZM8.25 3.4375C8.25 3.4375 7.68046 3.4375 7.27773 3.84023C7.27773 3.84023 6.875 4.24296 6.875 4.8125C6.875 4.8125 6.875 5.38204 7.27773 5.78477C7.27773 5.78477 7.68046 6.1875 8.25 6.1875C8.25 6.1875 8.81954 6.1875 9.22227 5.78477C9.22227 5.78477 9.625 5.38204 9.625 4.8125C9.625 4.8125 9.625 4.24296 9.22227 3.84023C9.22227 3.84023 8.81954 3.4375 8.25 3.4375Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="220aa504"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.1875 6.1875C17.1875 6.1875 18.3266 6.1875 19.132 6.99296C19.132 6.99296 19.9375 7.79841 19.9375 8.9375C19.9375 8.9375 19.9375 10.0766 19.132 10.882C19.132 10.882 18.3266 11.6875 17.1875 11.6875C17.1875 11.6875 16.0484 11.6875 15.243 10.882C15.243 10.882 14.4375 10.0766 14.4375 8.9375C14.4375 8.9375 14.4375 7.79841 15.243 6.99296C15.243 6.99296 16.0484 6.1875 17.1875 6.1875ZM17.1875 7.5625C17.1875 7.5625 16.618 7.5625 16.2152 7.96523C16.2152 7.96523 15.8125 8.36796 15.8125 8.9375C15.8125 8.9375 15.8125 9.50704 16.2152 9.90977C16.2152 9.90977 16.618 10.3125 17.1875 10.3125C17.1875 10.3125 17.757 10.3125 18.1598 9.90977C18.1598 9.90977 18.5625 9.50704 18.5625 8.9375C18.5625 8.9375 18.5625 8.36796 18.1598 7.96523C18.1598 7.96523 17.757 7.5625 17.1875 7.5625Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="8f154ad5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.1875 13.0625C17.1875 13.0625 18.3266 13.0625 19.132 13.868C19.132 13.868 19.9375 14.6734 19.9375 15.8125C19.9375 15.8125 19.9375 16.9516 19.132 17.757C19.132 17.757 18.3266 18.5625 17.1875 18.5625C17.1875 18.5625 16.0484 18.5625 15.243 17.757C15.243 17.757 14.4375 16.9516 14.4375 15.8125C14.4375 15.8125 14.4375 14.6734 15.243 13.868C15.243 13.868 16.0484 13.0625 17.1875 13.0625ZM17.1875 14.4375C17.1875 14.4375 16.618 14.4375 16.2152 14.8402C16.2152 14.8402 15.8125 15.243 15.8125 15.8125C15.8125 15.8125 15.8125 16.382 16.2152 16.7848C16.2152 16.7848 16.618 17.1875 17.1875 17.1875C17.1875 17.1875 17.757 17.1875 18.1598 16.7848C18.1598 16.7848 18.5625 16.382 18.5625 15.8125C18.5625 15.8125 18.5625 15.243 18.1598 14.8402C18.1598 14.8402 17.757 14.4375 17.1875 14.4375Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="ad562abe"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.8125 13.75C4.8125 13.75 5.95159 13.75 6.75704 14.5555C6.75704 14.5555 7.5625 15.3609 7.5625 16.5C7.5625 16.5 7.5625 17.6391 6.75704 18.4445C6.75704 18.4445 5.95159 19.25 4.8125 19.25C4.8125 19.25 3.67341 19.25 2.86796 18.4445C2.86796 18.4445 2.0625 17.6391 2.0625 16.5C2.0625 16.5 2.0625 15.3609 2.86796 14.5555C2.86796 14.5555 3.67341 13.75 4.8125 13.75ZM4.8125 15.125C4.8125 15.125 4.24296 15.125 3.84023 15.5277C3.84023 15.5277 3.4375 15.9305 3.4375 16.5C3.4375 16.5 3.4375 17.0695 3.84023 17.4723C3.84023 17.4723 4.24296 17.875 4.8125 17.875C4.8125 17.875 5.38204 17.875 5.78477 17.4723C5.78477 17.4723 6.1875 17.0695 6.1875 16.5C6.1875 16.5 6.1875 15.9305 5.78477 15.5277C5.78477 15.5277 5.38204 15.125 4.8125 15.125Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="8bc32746"
                d="M10.7945 8.8375L9.71168 6.41406C9.60104 6.16645 9.35519 6.00702 9.08398 6.00702C9.07408 6.00702 9.06417 6.00723 9.05427 6.00766C8.96771 6.01141 8.88263 6.03148 8.80353 6.06683C8.55592 6.17746 8.39648 6.42332 8.39648 6.69452C8.39648 6.70443 8.3967 6.71434 8.39713 6.72424C8.40087 6.8108 8.42095 6.89587 8.45629 6.97498L9.5391 9.39842C9.61349 9.56489 9.75095 9.695 9.92127 9.76012C9.99966 9.79009 10.0829 9.80546 10.1668 9.80546L10.1857 9.8052C10.2759 9.80271 10.3648 9.78248 10.4473 9.74565C10.6949 9.63502 10.8543 9.38916 10.8543 9.11796C10.8543 9.10805 10.8541 9.09814 10.8537 9.08824C10.8499 9.00168 10.8298 8.9166 10.7945 8.8375Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="5769a765"
                d="M15.0103 8.93842L12.7416 9.69467C12.4608 9.78825 12.2715 10.051 12.2715 10.3469L12.2716 10.3597C12.2729 10.4293 12.2848 10.4983 12.3068 10.5643C12.4003 10.845 12.6631 11.0344 12.959 11.0344L12.9718 11.0343C13.0414 11.033 13.1104 11.0211 13.1764 10.9991L15.4451 10.2429C15.7259 10.1493 15.9152 9.88656 15.9152 9.59064L15.9151 9.57781C15.9138 9.50823 15.902 9.43925 15.88 9.37323C15.7864 9.0925 15.5237 8.90314 15.2277 8.90314L15.2149 8.90326C15.1453 8.90456 15.0763 8.91641 15.0103 8.93842Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="96a48a42"
                d="M13.0472 11.7207L15.9861 14.0066C16.1301 14.1185 16.2236 14.283 16.2463 14.464C16.2497 14.4915 16.2515 14.5191 16.2516 14.5469L16.2516 14.5492C16.2516 14.7021 16.2006 14.8506 16.1067 14.9713C15.9796 15.1348 15.7855 15.2323 15.5784 15.2366L15.5641 15.2367C15.4112 15.2367 15.2627 15.1858 15.142 15.0919L12.203 12.8061C12.0355 12.6757 11.9375 12.4755 11.9375 12.2633C11.9375 12.1297 11.9764 11.9989 12.0496 11.8871C12.0599 11.8714 12.0708 11.8561 12.0823 11.8412C12.2126 11.6738 12.4128 11.5758 12.625 11.5758C12.7586 11.5758 12.8894 11.6147 13.0012 11.6879C13.0169 11.6982 13.0322 11.7091 13.0472 11.7207Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="c5e09593"
                d="M9.00545 11.8528L5.89464 14.6199C5.74797 14.7504 5.66406 14.9373 5.66406 15.1336C5.66406 15.1439 5.66429 15.1542 5.66476 15.1645C5.67187 15.3222 5.73299 15.4726 5.83788 15.5905C5.95906 15.7267 6.1294 15.8093 6.31143 15.8199C6.32479 15.8207 6.33818 15.8211 6.35156 15.8211C6.36029 15.8211 6.36903 15.8209 6.37775 15.8206C6.53708 15.8145 6.68935 15.7532 6.80849 15.6473L9.91943 12.8801C10.0557 12.7589 10.1382 12.5886 10.1488 12.4065C10.1496 12.3932 10.15 12.3798 10.15 12.3664C10.15 12.3577 10.1498 12.3489 10.1495 12.3402C10.1434 12.1809 10.0822 12.0286 9.97619 11.9095C9.84573 11.7628 9.6588 11.6789 9.4625 11.6789C9.45218 11.6789 9.44185 11.6791 9.43154 11.6796C9.27389 11.6867 9.12349 11.7478 9.00545 11.8528Z"
                fill="var(--secondary-color)"
              ></path>
            </g>
          </svg>
        </button>
        <button className="toolbtn1 btnicon " onClick={() => onLayout('LR')}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="8a63c373">
              <path
                id="70f9f037"
                d="M2.75 8.59375H6.1875C6.56717 8.59375 6.875 8.90158 6.875 9.28125V12.7188C6.875 13.0984 6.56717 13.4062 6.1875 13.4062H2.75C2.37033 13.4062 2.0625 13.0984 2.0625 12.7188V9.28125C2.0625 8.90158 2.37033 8.59375 2.75 8.59375Z"
                fill="var(--secondary-color)"
                fillOpacity="0.1"
              ></path>
              <path
                id="4330e0a5"
                d="M14.4375 3.4375H18.5625C18.9422 3.4375 19.25 3.74533 19.25 4.125V8.25C19.25 8.62967 18.9422 8.9375 18.5625 8.9375H14.4375C14.0578 8.9375 13.75 8.62967 13.75 8.25V4.125C13.75 3.74533 14.0578 3.4375 14.4375 3.4375Z"
                fill="var(--secondary-color)"
                fillOpacity="0.1"
              ></path>
              <path
                id="8d38229e"
                d="M14.4375 13.0625H18.5625C18.9422 13.0625 19.25 13.3703 19.25 13.75V17.875C19.25 18.2547 18.9422 18.5625 18.5625 18.5625H14.4375C14.0578 18.5625 13.75 18.2547 13.75 17.875V13.75C13.75 13.3703 14.0578 13.0625 14.4375 13.0625Z"
                fill="var(--secondary-color)"
                fillOpacity="0.1"
              ></path>
              <path
                id="75398ca9"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.375 9.28125C1.375 9.28125 1.375 8.71171 1.77773 8.30898C1.77773 8.30898 2.18046 7.90625 2.75 7.90625H6.1875C6.1875 7.90625 6.75704 7.90625 7.15977 8.30898C7.15977 8.30898 7.5625 8.71171 7.5625 9.28125V12.7188C7.5625 12.7188 7.5625 13.2883 7.15977 13.691C7.15977 13.691 6.75704 14.0938 6.1875 14.0938H2.75C2.75 14.0938 2.18046 14.0938 1.77773 13.691C1.77773 13.691 1.375 13.2883 1.375 12.7188V9.28125ZM2.75 9.28125V12.7188H6.1875V9.28125H2.75Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="64db3189"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.0625 4.125C13.0625 4.125 13.0625 3.55546 13.4652 3.15273C13.4652 3.15273 13.868 2.75 14.4375 2.75H18.5625C18.5625 2.75 19.132 2.75 19.5348 3.15273C19.5348 3.15273 19.9375 3.55546 19.9375 4.125V8.25C19.9375 8.25 19.9375 8.81954 19.5348 9.22227C19.5348 9.22227 19.132 9.625 18.5625 9.625H14.4375C14.4375 9.625 13.868 9.625 13.4652 9.22227C13.4652 9.22227 13.0625 8.81954 13.0625 8.25V4.125ZM14.4375 4.125V8.25L18.5625 8.25L18.5625 4.125H14.4375Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="011fe825"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.0625 13.75C13.0625 13.75 13.0625 13.1805 13.4652 12.7777C13.4652 12.7777 13.868 12.375 14.4375 12.375H18.5625C18.5625 12.375 19.132 12.375 19.5348 12.7777C19.5348 12.7777 19.9375 13.1805 19.9375 13.75V17.875C19.9375 17.875 19.9375 18.4445 19.5348 18.8473C19.5348 18.8473 19.132 19.25 18.5625 19.25H14.4375C14.4375 19.25 13.868 19.25 13.4652 18.8473C13.4652 18.8473 13.0625 18.4445 13.0625 17.875V13.75ZM14.4375 13.75V17.875L18.5625 17.875L18.5625 13.75H14.4375Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="9d8a2f29"
                d="M6.875 11.6875H10.3125C10.6922 11.6875 11 11.3797 11 11C11 10.6203 10.6922 10.3125 10.3125 10.3125H6.875C6.4953 10.3125 6.1875 10.6203 6.1875 11C6.1875 11.3797 6.4953 11.6875 6.875 11.6875Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="4b2702d0"
                d="M11.8462 6.97792C12.0989 6.87387 12.375 6.87502 12.375 6.87502H13.75C14.1297 6.87502 14.4375 6.56722 14.4375 6.18752C14.4375 5.80783 14.1297 5.50002 13.75 5.50002H12.375C11.8296 5.49773 11.3226 5.70649 11.3226 5.70649C10.8156 5.91525 10.4279 6.30295 10.4279 6.30295C10.0402 6.69064 9.83149 7.19763 9.83149 7.19763C9.62273 7.70462 9.62503 8.25291 9.62503 8.25291L9.62502 13.75C9.62273 14.2954 9.83149 14.8024 9.83149 14.8024C10.0402 15.3094 10.4279 15.6971 10.4279 15.6971C10.8156 16.0848 11.3226 16.2936 11.3226 16.2936C11.8296 16.5023 12.3779 16.5 12.3779 16.5L13.75 16.5C14.1297 16.5 14.4375 16.1922 14.4375 15.8125C14.4375 15.4328 14.1297 15.125 13.75 15.125L12.3721 15.125C12.0989 15.1262 11.8462 15.0221 11.8462 15.0221C11.5935 14.9181 11.4002 14.7248 11.4002 14.7248C11.207 14.5316 11.1029 14.2789 11.1029 14.2789C10.9989 14.0262 11 13.75 11 13.75L11 8.24714C10.9989 7.97386 11.1029 7.72116 11.1029 7.72116C11.207 7.46846 11.4002 7.27522 11.4002 7.27522C11.5935 7.08198 11.8462 6.97792 11.8462 6.97792Z"
                fill="var(--secondary-color)"
              ></path>
            </g>
          </svg>
        </button>

        <button className="toolbtn1 btnicon " onClick={() => onLayout('TB')}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="60ab92ef">
              <path
                id="0af22366"
                d="M8.25 5.84375C8.25 7.17268 7.17268 8.25 5.84375 8.25C4.51482 8.25 3.4375 7.17268 3.4375 5.84375C3.4375 4.51482 4.51482 3.4375 5.84375 3.4375C7.17268 3.4375 8.25 4.51482 8.25 5.84375Z"
                fill="var(--secondary-color)"
                fillOpacity="0.1"
              ></path>
              <path
                id="98e0e191"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.84375 13.0625C5.84375 13.0625 7.12522 13.0625 8.03136 13.9686C8.03136 13.9686 8.9375 14.8748 8.9375 16.1562C8.9375 16.1562 8.9375 17.4377 8.03136 18.3439C8.03136 18.3439 7.12522 19.25 5.84375 19.25C5.84375 19.25 4.56228 19.25 3.65614 18.3439C3.65614 18.3439 2.75 17.4377 2.75 16.1562C2.75 16.1562 2.75 14.8748 3.65614 13.9686C3.65614 13.9686 4.56228 13.0625 5.84375 13.0625ZM5.84375 14.4375C5.84375 14.4375 5.13182 14.4375 4.62841 14.9409C4.62841 14.9409 4.125 15.4443 4.125 16.1562C4.125 16.1562 4.125 16.8682 4.62841 17.3716C4.62841 17.3716 5.13182 17.875 5.84375 17.875C5.84375 17.875 6.55568 17.875 7.05909 17.3716C7.05909 17.3716 7.5625 16.8682 7.5625 16.1562C7.5625 16.1562 7.5625 15.4443 7.05909 14.9409C7.05909 14.9409 6.55568 14.4375 5.84375 14.4375Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="c54968d2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.84375 2.75C5.84375 2.75 7.12522 2.75 8.03136 3.65614C8.03136 3.65614 8.9375 4.56228 8.9375 5.84375C8.9375 5.84375 8.9375 7.12522 8.03136 8.03136C8.03136 8.03136 7.12522 8.9375 5.84375 8.9375C5.84375 8.9375 4.56228 8.9375 3.65614 8.03136C3.65614 8.03136 2.75 7.12522 2.75 5.84375C2.75 5.84375 2.75 4.56228 3.65614 3.65614C3.65614 3.65614 4.56228 2.75 5.84375 2.75ZM5.84375 4.125C5.84375 4.125 5.13182 4.125 4.62841 4.62841C4.62841 4.62841 4.125 5.13182 4.125 5.84375C4.125 5.84375 4.125 6.55568 4.62841 7.05909C4.62841 7.05909 5.13182 7.5625 5.84375 7.5625C5.84375 7.5625 6.55568 7.5625 7.05909 7.05909C7.05909 7.05909 7.5625 6.55568 7.5625 5.84375C7.5625 5.84375 7.5625 5.13182 7.05909 4.62841C7.05909 4.62841 6.55568 4.125 5.84375 4.125Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="0b4674ad"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.1563 8.9375C16.1563 8.9375 17.4377 8.9375 18.3439 9.84364C18.3439 9.84364 19.25 10.7498 19.25 12.0312C19.25 12.0312 19.25 13.3127 18.3439 14.2189C18.3439 14.2189 17.4377 15.125 16.1563 15.125C16.1563 15.125 14.8748 15.125 13.9686 14.2189C13.9686 14.2189 13.0625 13.3127 13.0625 12.0312C13.0625 12.0312 13.0625 10.7498 13.9686 9.84364C13.9686 9.84364 14.8748 8.9375 16.1563 8.9375ZM16.1563 10.3125C16.1563 10.3125 15.4443 10.3125 14.9409 10.8159C14.9409 10.8159 14.4375 11.3193 14.4375 12.0312C14.4375 12.0312 14.4375 12.7432 14.9409 13.2466C14.9409 13.2466 15.4443 13.75 16.1563 13.75C16.1563 13.75 16.8682 13.75 17.3716 13.2466C17.3716 13.2466 17.875 12.7432 17.875 12.0312C17.875 12.0312 17.875 11.3193 17.3716 10.8159C17.3716 10.8159 16.8682 10.3125 16.1563 10.3125Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="4d4bb5a2"
                d="M5.15625 8.25V13.75C5.15625 14.1297 5.46405 14.4375 5.84375 14.4375C6.22345 14.4375 6.53125 14.1297 6.53125 13.75V10.148L7.51574 11.3286C8.19925 12.1534 9.17107 12.609 9.17107 12.609C10.1429 13.0646 11.2162 13.0625 11.2162 13.0625L13.75 13.0625C14.1297 13.0625 14.4375 12.7547 14.4375 12.375C14.4375 11.9953 14.1297 11.6875 13.75 11.6875L11.2135 11.6875C10.4479 11.689 9.75475 11.364 9.75475 11.364C9.06159 11.0391 8.57176 10.448 8.57176 10.448L6.37176 7.8097C6.24114 7.65306 6.04771 7.5625 5.84375 7.5625C5.46405 7.5625 5.15625 7.8703 5.15625 8.25Z"
                fill="var(--secondary-color)"
              ></path>
            </g>
          </svg>
        </button>

        <button className="toolbtn1 btnicon " onClick={getImage}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="57a97939">
              <path
                id="24cc2370"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.125 5.5H17.875C18.2397 5.5 18.5894 5.64487 18.8473 5.90273C19.1051 6.16058 19.25 6.51033 19.25 6.875V16.5C19.25 16.8647 19.1051 17.2144 18.8473 17.4723C18.5894 17.7301 18.2397 17.875 17.875 17.875H4.125C3.76027 17.875 3.41064 17.7301 3.15266 17.4723C2.89485 17.2144 2.75 16.8647 2.75 16.5V6.875C2.75 6.51033 2.89485 6.16058 3.15266 5.90273C3.41064 5.64487 3.76027 5.5 4.125 5.5H6.875L8.25 3.4375H13.75L15.125 5.5ZM9.28125 13.9161C9.78999 14.2561 10.388 14.4375 11 14.4375C11.8204 14.4375 12.6075 14.1115 13.1875 13.5314C13.7678 12.9512 14.0938 12.1643 14.0938 11.3438C14.0938 10.7319 13.9123 10.1337 13.5724 9.62496C13.2324 9.11619 12.7493 8.71966 12.184 8.48549C11.6187 8.25134 10.9966 8.19008 10.3964 8.30944C9.79637 8.42882 9.245 8.72347 8.81245 9.15614C8.37975 9.58881 8.08501 10.1401 7.96567 10.7402C7.84633 11.3403 7.90759 11.9624 8.14174 12.5277C8.37589 13.093 8.77251 13.5762 9.28125 13.9161Z"
                fill="var(--secondary-color)"
                fillOpacity="0.1"
              ></path>
              <path
                id="75e9c6cf"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.3334 17.9584C19.3334 17.9584 18.7293 18.5625 17.875 18.5625H4.125C4.125 18.5625 3.27069 18.5625 2.66659 17.9584C2.66659 17.9584 2.0625 17.3543 2.0625 16.5V6.875C2.0625 6.875 2.0625 6.02068 2.66659 5.41659C2.66659 5.41659 3.27068 4.8125 4.125 4.8125H6.50706L7.67797 3.05614C7.80547 2.86488 8.02013 2.75 8.25 2.75H13.75C13.9799 2.75 14.1945 2.86488 14.322 3.05614L15.4929 4.8125H17.875C17.875 4.8125 18.7293 4.8125 19.3334 5.41659C19.3334 5.41659 19.9375 6.02069 19.9375 6.875V16.5C19.9375 16.5 19.9375 17.3543 19.3334 17.9584ZM18.3611 16.9861C18.3611 16.9861 18.5625 16.7848 18.5625 16.5V6.875C18.5625 6.875 18.5625 6.59023 18.3611 6.38886C18.3611 6.38886 18.1598 6.1875 17.875 6.1875H15.125C14.8951 6.1875 14.6805 6.07262 14.553 5.88136L13.3821 4.125H8.61794L7.44703 5.88136C7.31953 6.07262 7.10487 6.1875 6.875 6.1875H4.125C4.125 6.1875 3.84023 6.1875 3.63886 6.38886C3.63886 6.38886 3.4375 6.59023 3.4375 6.875V16.5C3.4375 16.5 3.4375 16.7848 3.63886 16.9861C3.63886 16.9861 3.84023 17.1875 4.125 17.1875H17.875C17.875 17.1875 18.1598 17.1875 18.3611 16.9861Z"
                fill="var(--secondary-color)"
              ></path>
              <path
                id="d31685ff"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 7.5625C11 7.5625 12.5662 7.5625 13.6737 8.67C13.6737 8.67 14.7812 9.7775 14.7812 11.3438C14.7812 11.3438 14.7812 12.91 13.6737 14.0175C13.6737 14.0175 12.5662 15.125 11 15.125C11 15.125 9.43375 15.125 8.32625 14.0175C8.32625 14.0175 7.21875 12.91 7.21875 11.3437C7.21875 11.3437 7.21875 9.7775 8.32625 8.67C8.32625 8.67 9.43375 7.5625 11 7.5625ZM11 8.9375C11 8.9375 10.0033 8.9375 9.29852 9.64227C9.29852 9.64227 8.59375 10.347 8.59375 11.3437C8.59375 11.3437 8.59375 12.3405 9.29852 13.0452C9.29852 13.0452 10.0033 13.75 11 13.75C11 13.75 11.9967 13.75 12.7015 13.0452C12.7015 13.0452 13.4062 12.3405 13.4062 11.3438C13.4062 11.3438 13.4062 10.347 12.7015 9.64227C12.7015 9.64227 11.9967 8.9375 11 8.9375Z"
                fill="var(--secondary-color)"
              ></path>
            </g>
          </svg>
        </button>

        <FullScreen handle={handle}>
          <CanvasArea />
        </FullScreen>
      </nav>
    </div>
  );
};

export default Tool;
