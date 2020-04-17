import React from 'react';
import ReactDOM from 'react-dom';
import Display from '../display';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../types';
import { act } from 'react-dom/test-utils';

/*
 * testing the Display component features
 * - edit input fields
 */
describe('Display tests', () => {
  let propsA: any = {
    options: {
      legend: { hiddenLegend: true, x: 0, y: 0 },
      baseMap: {
        image: '',
        layerImage:
          '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" style="background-color: rgb(255, 255, 255);" version="1.1" width="776" height="411" viewBox="-0.5 -0.5 776 411" id="octsvg213">\n  <metadata id="octmetadata217">\n    \n  </metadata>\n  \n  <defs id="octdefs13">\n    <filter id="octdropShadow">\n      <feGaussianBlur in="SourceAlpha" stdDeviation="1.7" result="blur" id="octfeGaussianBlur2"/>\n      <feOffset in="blur" dx="3" dy="3" result="offsetBlur" id="octfeOffset4"/>\n      <feFlood flood-color="#3D4574" flood-opacity="0.4" result="offsetColor" id="octfeFlood6"/>\n      <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="offsetBlur" id="octfeComposite8"/>\n      <feBlend in="SourceGraphic" in2="offsetBlur" id="octfeBlend10"/>\n    </filter>\n  </defs>\n  <g filter="url(#dropShadow)" id="octg211">\n    <rect x="321" y="381.41" width="91.75" height="14.72" rx="1.96" ry="1.96" fill="#cccccc" stroke="#6881b3" stroke-width="1.96" pointer-events="all" id="octrect15"/>\n    <rect x="321" y="364.24" width="91.75" height="14.72" rx="1.96" ry="1.96" fill="#cccccc" stroke="#6881b3" stroke-width="1.96" pointer-events="all" id="octrect17"/>\n    <rect x="321" y="347.07" width="91.75" height="14.72" rx="1.96" ry="1.96" fill="#cccccc" stroke="#6881b3" stroke-width="1.96" pointer-events="all" id="octrect19"/>\n    <rect x="321" y="329.89" width="91.75" height="14.72" rx="1.96" ry="1.96" fill="#cccccc" stroke="#6881b3" stroke-width="1.96" pointer-events="all" id="octrect21"/>\n    <rect x="321" y="312.72" width="91.75" height="14.72" rx="1.96" ry="1.96" fill="#cccccc" stroke="#6881b3" stroke-width="1.96" pointer-events="all" id="octrect23"/>\n    <path d="M 325.08 310.76 L 346.49 298 L 387.26 298 L 408.67 310.76 Z" fill="#cccccc" stroke="#6881b3" stroke-width="1.96" stroke-miterlimit="10" pointer-events="all" id="octpath25"/>\n    <ellipse cx="404.59" cy="388.77" rx="4.077669902912621" ry="3.925233644859813" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse27"/>\n    <ellipse cx="404.26" cy="371.6" rx="4.077669902912621" ry="3.925233644859813" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse29"/>\n    <ellipse cx="404.59" cy="354.43" rx="4.077669902912621" ry="3.925233644859813" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse31"/>\n    <ellipse cx="404.59" cy="337.25" rx="4.077669902912621" ry="3.925233644859813" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse33"/>\n    <ellipse cx="404.59" cy="320.08" rx="4.077669902912621" ry="3.925233644859813" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse35"/>\n    <path d="M 326.1 394.17 L 331.19 383.37 L 336.29 383.37 L 331.19 394.17 Z M 336.29 394.17 L 341.39 383.37 L 346.49 383.37 L 341.39 394.17 Z M 346.49 394.17 L 351.58 383.37 L 356.68 383.37 L 351.58 394.17 Z M 356.68 394.17 L 361.78 383.37 L 366.87 383.37 L 361.78 394.17 Z M 366.87 394.17 L 371.97 383.37 L 377.07 383.37 L 371.97 394.17 Z M 377.07 394.17 L 382.17 383.37 L 387.26 383.37 L 382.17 394.17 Z M 326.1 377 L 331.19 366.2 L 336.29 366.2 L 331.19 377 Z M 336.29 377 L 341.39 366.2 L 346.49 366.2 L 341.39 377 Z M 346.49 377 L 351.58 366.2 L 356.68 366.2 L 351.58 377 Z M 356.68 377 L 361.78 366.2 L 366.87 366.2 L 361.78 377 Z M 366.87 377 L 371.97 366.2 L 377.07 366.2 L 371.97 377 Z M 377.07 377 L 382.17 366.2 L 387.26 366.2 L 382.17 377 Z M 326.1 359.82 L 331.19 349.03 L 336.29 349.03 L 331.19 359.82 Z M 336.29 359.82 L 341.39 349.03 L 346.49 349.03 L 341.39 359.82 Z M 346.49 359.82 L 351.07 349.03 L 356.17 349.03 L 351.07 359.82 Z M 356.68 359.82 L 361.78 349.03 L 366.87 349.03 L 361.78 359.82 Z M 366.87 359.82 L 371.97 349.03 L 377.07 349.03 L 371.97 359.82 Z M 377.07 359.82 L 382.17 349.03 L 387.26 349.03 L 382.17 359.82 Z M 326.1 342.65 L 331.19 331.86 L 336.29 331.86 L 331.19 342.65 Z M 336.29 342.65 L 341.39 331.86 L 346.49 331.86 L 341.39 342.65 Z M 346.49 342.65 L 351.58 331.86 L 356.68 331.86 L 351.58 342.65 Z M 356.68 342.65 L 361.78 331.86 L 366.87 331.86 L 361.78 342.65 Z M 366.87 342.65 L 371.97 331.86 L 377.07 331.86 L 371.97 342.65 Z M 377.07 342.65 L 382.17 331.86 L 387.26 331.86 L 382.17 342.65 Z M 326.1 325.48 L 331.19 314.68 L 336.29 314.68 L 331.19 325.48 Z M 336.29 325.48 L 341.39 314.68 L 346.49 314.68 L 341.39 325.48 Z M 346.49 325.48 L 351.58 314.68 L 356.68 314.68 L 351.58 325.48 Z M 356.68 325.48 L 361.78 314.68 L 366.87 314.68 L 361.78 325.48 Z M 366.87 325.48 L 371.97 314.68 L 377.07 314.68 L 371.97 325.48 Z M 377.07 325.48 L 382.17 314.68 L 387.26 314.68 L 382.17 325.48 Z" fill="#ffffff" stroke="none" pointer-events="all" id="octpath37"/>\n    <rect x="321" y="298" width="0" height="0" fill="none" stroke="#6881b3" stroke-width="1.96" pointer-events="all" id="octrect39"/>\n    <ellipse cx="407.65" cy="385.34" rx="18.349514563106794" ry="17.66355140186916" fill="#cccccc" stroke="#6881b3" stroke-width="1.96" pointer-events="all" id="octellipse41"/>\n    <rect x="395.93" y="376.5" width="23.45" height="17.66" fill="none" stroke="#ffffff" stroke-width="1.96" pointer-events="all" id="octrect43"/>\n    <rect x="398.48" y="378.96" width="18.35" height="13.25" fill="#ffffff" stroke="none" pointer-events="all" id="octrect45"/>\n    <path d="M 177 241.5 L 248.1 268.5 L 232.5 278.7 L 285 304.5 L 213.9 277.5 L 229.5 267.3 Z" fill="#cccccc" stroke="#6881b3" stroke-width="2" stroke-miterlimit="10" pointer-events="all" id="octpath47"/>\n    <rect x="611" y="64.2" width="100" height="24.82" rx="4.96" ry="4.96" fill="#cccccc" stroke="#6881b3" stroke-width="1.99" pointer-events="all" id="octrect49"/>\n    <rect x="621" y="89.03" width="80" height="3.97" fill="#cccccc" stroke="#6881b3" stroke-width="1.99" pointer-events="all" id="octrect51"/>\n    <path d="M 678 64.2 L 678.5 19.52 C 678.78 19.1 679.25 18.85 679.75 18.85 C 680.25 18.85 680.72 19.1 681 19.52 L 681.5 64.2 Z" fill="#cccccc" stroke="#6881b3" stroke-width="1.99" stroke-miterlimit="10" pointer-events="all" id="octpath53"/>\n    <ellipse cx="699" cy="76.62" rx="8" ry="7.94392523364486" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse55"/>\n    <ellipse cx="686" cy="69.17" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse57"/>\n    <ellipse cx="686" cy="84.06" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse59"/>\n    <ellipse cx="686" cy="76.62" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse61"/>\n    <ellipse cx="676.5" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse63"/>\n    <ellipse cx="668" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse65"/>\n    <ellipse cx="659.5" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse67"/>\n    <ellipse cx="651" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse69"/>\n    <ellipse cx="642.5" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse71"/>\n    <ellipse cx="634" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse73"/>\n    <ellipse cx="625.5" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse75"/>\n    <ellipse cx="617" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse77"/>\n    <path d="M 614 71.15 L 620 71.15 L 620 74.13 L 618 74.13 L 618 75.13 L 616 75.13 L 616 74.13 L 614 74.13 Z M 622.5 71.15 L 628.5 71.15 L 628.5 74.13 L 626.5 74.13 L 626.5 75.13 L 624.5 75.13 L 624.5 74.13 L 622.5 74.13 Z M 631 71.15 L 637 71.15 L 637 74.13 L 635 74.13 L 635 75.13 L 633 75.13 L 633 74.13 L 631 74.13 Z M 639.5 71.15 L 645.5 71.15 L 645.5 74.13 L 643.5 74.13 L 643.5 75.13 L 641.5 75.13 L 641.5 74.13 L 639.5 74.13 Z M 648 71.15 L 654 71.15 L 654 74.13 L 652 74.13 L 652 75.13 L 650 75.13 L 650 74.13 L 648 74.13 Z M 656.5 71.15 L 662.5 71.15 L 662.5 74.13 L 660.5 74.13 L 660.5 75.13 L 658.5 75.13 L 658.5 74.13 L 656.5 74.13 Z M 665 71.15 L 671 71.15 L 671 74.13 L 669 74.13 L 669 75.13 L 667 75.13 L 667 74.13 L 665 74.13 Z M 673.5 71.15 L 679.5 71.15 L 679.5 74.13 L 677.5 74.13 L 677.5 75.13 L 675.5 75.13 L 675.5 74.13 L 673.5 74.13 Z" fill="#ffffff" stroke="none" pointer-events="all" id="octpath79"/>\n    <rect x="611" y="8" width="0" height="0" fill="none" stroke="#6881b3" stroke-width="1.99" pointer-events="all" id="octrect81"/>\n    <path d="M 701 74.63 L 703 76.62 L 701 78.6 M 694 76.62 L 703 76.62" fill="none" stroke="#6881b3" stroke-width="1.99" stroke-miterlimit="10" pointer-events="all" id="octpath83"/>\n    <path d="M 684.8 13.86 C 687 17.17 687 21.47 684.8 24.78 L 683.3 23.79 C 684.97 21.18 684.97 17.85 683.3 15.25 Z M 688.8 10.88 C 692.79 15.92 692.79 23.02 688.8 28.06 L 687.3 26.87 C 690.7 22.55 690.7 16.49 687.3 12.17 Z M 692.8 8 C 698.83 14.47 698.83 24.47 692.8 30.94 L 691.3 29.75 C 696.82 23.99 696.82 14.95 691.3 9.19 Z M 674.8 13.86 C 672.6 17.17 672.6 21.47 674.8 24.78 L 676.3 23.79 C 674.63 21.18 674.63 17.85 676.3 15.25 Z M 670.8 10.88 C 666.76 15.94 666.76 23.1 670.8 28.16 L 672.3 26.77 C 669 22.49 669 16.55 672.3 12.27 Z M 666.8 8.1 C 660.83 14.56 660.83 24.48 666.8 30.94 L 668.3 29.75 C 662.84 24.01 662.84 15.03 668.3 9.29 Z" fill="#cccccc" stroke="#6881b3" stroke-width="1.99" stroke-miterlimit="10" pointer-events="all" id="octpath85"/>\n    <rect x="451" y="64.2" width="100" height="24.82" rx="4.96" ry="4.96" fill="#cccccc" stroke="#6881b3" stroke-width="1.99" pointer-events="all" id="octrect87"/>\n    <rect x="461" y="89.03" width="80" height="3.97" fill="#cccccc" stroke="#6881b3" stroke-width="1.99" pointer-events="all" id="octrect89"/>\n    <path d="M 518 64.2 L 518.5 19.52 C 518.78 19.1 519.25 18.85 519.75 18.85 C 520.25 18.85 520.72 19.1 521 19.52 L 521.5 64.2 Z" fill="#cccccc" stroke="#6881b3" stroke-width="1.99" stroke-miterlimit="10" pointer-events="all" id="octpath91"/>\n    <ellipse cx="539" cy="76.62" rx="8" ry="7.94392523364486" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse93"/>\n    <ellipse cx="526" cy="69.17" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse95"/>\n    <ellipse cx="526" cy="84.06" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse97"/>\n    <ellipse cx="526" cy="76.62" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse99"/>\n    <ellipse cx="516.5" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse101"/>\n    <ellipse cx="508" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse103"/>\n    <ellipse cx="499.5" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse105"/>\n    <ellipse cx="491" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse107"/>\n    <ellipse cx="482.5" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse109"/>\n    <ellipse cx="474" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse111"/>\n    <ellipse cx="465.5" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse113"/>\n    <ellipse cx="457" cy="81.08" rx="2" ry="1.985981308411215" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse115"/>\n    <path d="M 454 71.15 L 460 71.15 L 460 74.13 L 458 74.13 L 458 75.13 L 456 75.13 L 456 74.13 L 454 74.13 Z M 462.5 71.15 L 468.5 71.15 L 468.5 74.13 L 466.5 74.13 L 466.5 75.13 L 464.5 75.13 L 464.5 74.13 L 462.5 74.13 Z M 471 71.15 L 477 71.15 L 477 74.13 L 475 74.13 L 475 75.13 L 473 75.13 L 473 74.13 L 471 74.13 Z M 479.5 71.15 L 485.5 71.15 L 485.5 74.13 L 483.5 74.13 L 483.5 75.13 L 481.5 75.13 L 481.5 74.13 L 479.5 74.13 Z M 488 71.15 L 494 71.15 L 494 74.13 L 492 74.13 L 492 75.13 L 490 75.13 L 490 74.13 L 488 74.13 Z M 496.5 71.15 L 502.5 71.15 L 502.5 74.13 L 500.5 74.13 L 500.5 75.13 L 498.5 75.13 L 498.5 74.13 L 496.5 74.13 Z M 505 71.15 L 511 71.15 L 511 74.13 L 509 74.13 L 509 75.13 L 507 75.13 L 507 74.13 L 505 74.13 Z M 513.5 71.15 L 519.5 71.15 L 519.5 74.13 L 517.5 74.13 L 517.5 75.13 L 515.5 75.13 L 515.5 74.13 L 513.5 74.13 Z" fill="#ffffff" stroke="none" pointer-events="all" id="octpath117"/>\n    <rect x="451" y="8" width="0" height="0" fill="none" stroke="#6881b3" stroke-width="1.99" pointer-events="all" id="octrect119"/>\n    <path d="M 541 74.63 L 543 76.62 L 541 78.6 M 534 76.62 L 543 76.62" fill="none" stroke="#6881b3" stroke-width="1.99" stroke-miterlimit="10" pointer-events="all" id="octpath121"/>\n    <path d="M 524.8 13.86 C 527 17.17 527 21.47 524.8 24.78 L 523.3 23.79 C 524.97 21.18 524.97 17.85 523.3 15.25 Z M 528.8 10.88 C 532.79 15.92 532.79 23.02 528.8 28.06 L 527.3 26.87 C 530.7 22.55 530.7 16.49 527.3 12.17 Z M 532.8 8 C 538.83 14.47 538.83 24.47 532.8 30.94 L 531.3 29.75 C 536.82 23.99 536.82 14.95 531.3 9.19 Z M 514.8 13.86 C 512.6 17.17 512.6 21.47 514.8 24.78 L 516.3 23.79 C 514.63 21.18 514.63 17.85 516.3 15.25 Z M 510.8 10.88 C 506.76 15.94 506.76 23.1 510.8 28.16 L 512.3 26.77 C 509 22.49 509 16.55 512.3 12.27 Z M 506.8 8.1 C 500.83 14.56 500.83 24.48 506.8 30.94 L 508.3 29.75 C 502.84 24.01 502.84 15.03 508.3 9.29 Z" fill="#cccccc" stroke="#6881b3" stroke-width="1.99" stroke-miterlimit="10" pointer-events="all" id="octpath123"/>\n    <rect x="1" y="40.5" width="100" height="40" fill="#cccccc" stroke="#6881b3" stroke-width="2" pointer-events="all" id="octrect125"/>\n    <rect x="9" y="80.5" width="84" height="6" fill="#cccccc" stroke="#6881b3" stroke-width="2" pointer-events="all" id="octrect127"/>\n    <rect x="21" y="0.5" width="60" height="40" fill="#cccccc" stroke="#6881b3" stroke-width="2" pointer-events="all" id="octrect129"/>\n    <path d="M 81 70.5 L 91 100.5 L 11 100.5 L 21 70.5 Z M 26 78.5 L 76 78.5 M 23 86.5 L 79 86.5 M 19 94.5 L 83 94.5" fill="#cccccc" stroke="#6881b3" stroke-width="2" stroke-miterlimit="10" pointer-events="all" id="octpath131"/>\n    <rect x="11" y="45.5" width="25" height="3" fill="#ffffff" stroke="none" pointer-events="all" id="octrect133"/>\n    <ellipse cx="86" cy="50.5" rx="5" ry="5" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse135"/>\n    <path d="M 154.95 213.07 L 226.81 213.07 L 241 230.5 L 141 230.5 Z M 157.5 175.5 L 224 175.5 L 225.98 212.64 L 155.53 212.64 Z" fill="#cccccc" stroke="#6881b3" stroke-width="1.9" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all" id="octpath137"/>\n    <path d="M 158 217.4 L 224.99 217.4 M 153.56 222.17 L 229.42 222.17 M 172.77 226.45 L 207.26 226.45" fill="none" stroke="#6881b3" stroke-width="1.9" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all" id="octpath139"/>\n    <path d="M 160.75 178.83 L 220.85 178.83 L 222.53 209.31 L 158.98 209.31 Z" fill="#ffffff" stroke="none" pointer-events="all" id="octpath141"/>\n    <path d="M 274.95 213.07 L 346.81 213.07 L 361 230.5 L 261 230.5 Z M 277.5 175.5 L 344 175.5 L 345.98 212.64 L 275.53 212.64 Z" fill="#cccccc" stroke="#6881b3" stroke-width="1.9" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all" id="octpath143"/>\n    <path d="M 278 217.4 L 344.99 217.4 M 273.56 222.17 L 349.42 222.17 M 292.77 226.45 L 327.26 226.45" fill="none" stroke="#6881b3" stroke-width="1.9" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all" id="octpath145"/>\n    <path d="M 280.75 178.83 L 340.85 178.83 L 342.53 209.31 L 278.98 209.31 Z" fill="#ffffff" stroke="none" pointer-events="all" id="octpath147"/>\n    <path d="M 399.95 213.07 L 471.81 213.07 L 486 230.5 L 386 230.5 Z M 402.5 175.5 L 469 175.5 L 470.98 212.64 L 400.53 212.64 Z" fill="#cccccc" stroke="#6881b3" stroke-width="1.9" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all" id="octpath149"/>\n    <path d="M 403 217.4 L 469.99 217.4 M 398.56 222.17 L 474.42 222.17 M 417.77 226.45 L 452.26 226.45" fill="none" stroke="#6881b3" stroke-width="1.9" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all" id="octpath151"/>\n    <path d="M 405.75 178.83 L 465.85 178.83 L 467.53 209.31 L 403.98 209.31 Z" fill="#ffffff" stroke="none" pointer-events="all" id="octpath153"/>\n    <rect x="531" y="168" width="30" height="60" rx="2" ry="2" fill="#cccccc" stroke="#6881b3" stroke-width="2" pointer-events="all" id="octrect155"/>\n    <path d="M 531 178 L 561 178 M 531 198 L 561 198" fill="none" stroke="#6881b3" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all" id="octpath157"/>\n    <rect x="551" y="173" width="80" height="45" fill="#cccccc" stroke="#6881b3" stroke-width="2" pointer-events="all" id="octrect159"/>\n    <rect x="581" y="218" width="20" height="10" fill="#cccccc" stroke="#6881b3" stroke-width="2" pointer-events="all" id="octrect161"/>\n    <path d="M 566 227 L 616 227 L 626 238 L 556 238 Z" fill="#cccccc" stroke="#6881b3" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all" id="octpath163"/>\n    <path d="M 580 235.5 L 598 235.5 M 567 232.5 L 606 232.5 M 569 229.5 L 605 229.5 M 608 229.5 L 615 229.5 M 610 232.5 L 617 232.5 M 612 235.5 L 619 235.5" fill="none" stroke="#6881b3" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all" id="octpath165"/>\n    <rect x="554" y="176" width="73" height="39" fill="#ffffff" stroke="none" pointer-events="all" id="octrect167"/>\n    <ellipse cx="536" cy="203" rx="2" ry="2" fill="#ffffff" stroke="none" pointer-events="all" id="octellipse169"/>\n    <path d="M 336 298 L 321 258.85 L 341 262.23 L 336 230.5 L 351 269.65 L 331 266.27 Z" fill="#cccccc" stroke="#6881b3" stroke-width="1.35" stroke-miterlimit="10" pointer-events="all" id="octpath171"/>\n    <path d="M 437 313.63 L 493.92 255.58 L 497.22 275.23 L 545 234.88 L 488.08 292.92 L 484.78 273.27 Z" fill="#cccccc" stroke="#6881b3" stroke-width="2" stroke-miterlimit="10" pointer-events="all" id="octpath173"/>\n    <path d="M 403.5 285.25 L 425.55 251.05 L 429.15 260.35 L 448.5 235.75 L 426.45 269.95 L 422.85 260.65 Z" fill="#cccccc" stroke="#6881b3" stroke-width="2" stroke-miterlimit="10" pointer-events="all" id="octpath175"/>\n    <path d="M 444.31 152.56 L 472.69 105.94" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" id="octpath177"/>\n    <path d="M 441.58 157.05 L 442.23 149.25 L 444.31 152.56 L 448.21 152.89 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" id="octpath179"/>\n    <path d="M 475.42 101.45 L 474.77 109.25 L 472.69 105.94 L 468.79 105.61 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" id="octpath181"/>\n    <path d="M 316.42 164.65 L 445.58 84.77" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" id="octpath183"/>\n    <path d="M 311.95 167.41 L 316.06 160.75 L 316.42 164.65 L 319.75 166.71 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" id="octpath185"/>\n    <path d="M 450.05 82.01 L 445.94 88.67 L 445.58 84.77 L 442.25 82.71 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" id="octpath187"/>\n    <path d="M 176.97 175.79 L 435.03 80.21" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" id="octpath189"/>\n    <path d="M 172.05 177.61 L 177.4 171.9 L 176.97 175.79 L 179.83 178.46 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" id="octpath191"/>\n    <path d="M 439.95 78.39 L 434.6 84.1 L 435.03 80.21 L 432.17 77.54 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" id="octpath193"/>\n    <path d="M 556.86 173.17 L 505.14 112.83" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" id="octpath195"/>\n    <path d="M 560.27 177.15 L 553.06 174.11 L 556.86 173.17 L 558.37 169.56 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" id="octpath197"/>\n    <path d="M 501.73 108.85 L 508.94 111.89 L 505.14 112.83 L 503.63 116.44 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" id="octpath199"/>\n    <path d="M 562.37 78 L 599.63 78" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" id="octpath201"/>\n    <path d="M 557.12 78 L 564.12 74.5 L 562.37 78 L 564.12 81.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" id="octpath203"/>\n    <path d="M 604.88 78 L 597.88 81.5 L 599.63 78 L 597.88 74.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" id="octpath205"/>\n    <path d="M 141 181.13 Q 71 150.5 81 159.25 Q 91 168 76 159.5 Q 61 151 41 125.75 Q 21 100.5 64.63 100.5" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" id="octpath207"/>\n    <path d="M 69.88 100.5 L 62.88 104 L 64.63 100.5 L 62.88 97 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" id="octpath209"/>\n  </g>\n</svg>\n',
        modeSVG: true,
        width: '776',
        height: '411',
        idSVG: 'svg213',
      },
      coordinateSpaceInitial: { coordinate: { xMin: '-100', xMax: '100', yMin: '-100', yMax: '100' }, displayArea: true },
      displayButton: true,
      regionCoordinateSpace: [
        {
          colorMode: false,
          coords: {
            xMax: '50',
            xMin: '20',
            yMax: '50',
            yMin: '20',
          },
          id: 1,
          idSVG: '',
          img: '',
          label: 'PC 2',
          linkURL: {
            followLink: '',
            hoveringTooltipLink: '',
            hoveringTooltipText: '',
          },
          lowerLimit: [
            {
              backColor: '#FA6400',
              borderColor: '#E0B400',
              id: 0,
              lowerLimitMax: '',
              lowerLimitMin: '',
              sizeBorder: '2',
            },
          ],
          mainMetric: {
            expr: '',
            format: '',
            key: '',
            keyValue: '',
            manageValue: 'avg',
            refId: 'B',
            returnQuery: [],
            unit: '',
          },
          meta: '',
          metrics: [
            {
              format: '',
              key: '',
              keyValue: '',
              manageValue: 'avg',
              refId: 'B',
              returnQuery: [],
              unit: '',
            },
            {
              format: '',
              key: '',
              keyValue: '',
              manageValue: 'avg',
              refId: 'B',
              returnQuery: [],
              unit: '',
            },
          ],
          mode: false,
          orientedLink: [],
          positionParameter: {
            labelAPositionX: '0',
            labelAPositionY: '0',
            labelBPositionX: '0',
            labelBPositionY: '0',
            tooltipPositionA: {},
            tooltipPositionB: {},
          },
          textObj: {
            colorBack: '#5794F2',
            colorText: '#73BF69',
            generateAuxiliaryElement: {
              addColorBackElement: true,
              addColorTextElement: true,
              colorBackElement: '#FADE2A',
              colorTextElement: '#FF9830',
              displayObjectInText: true,
              displayObjectPermanently: true,
              legendElement: 'other legend',
              numericFormatElement: 'round',
              unityMesureElement: 'a',
            },
            generateObjectText: true,
            isTextRegion: true,
            legend: 'ceci est une legende',
            style: {
              bold: true,
              italic: false,
              underline: true,
            },
            unit: 'em',
            value: '',
            valueGenerateObjectText: {
              addColorBackElement: true,
              addColorTextElement: true,
              colorBackElement: '#B877D9',
              colorTextElement: '#F2495C',
              displayObjectInText: true,
              displayObjectPermanently: true,
              legendElement: 'cm',
              numericFormatElement: 'true',
              unityMesureElement: 'er',
            },
          },
          traceBack: true,
          traceBorder: true,
        },
      ],
      arrayPoints: [
        {
          associateLinkIn: [],
          associateLinkOut: [],
          associateOrientedLinksIn: [],
          associateOrientedLinksOut: [],
          color: 'black',
          colorMode: false,
          coordinateSpace: {},
          drawGraphicMarker: {
            label: 'Yes',
            value: 'true',
          },
          id: 1,
          label: 'ici',
          linkURL: {
            followLink: '',
            hoveringTooltipLink: '',
            hoveringTooltipText: '',
          },
          lowerLimit: [],
          mainMetric: {
            expr: '',
            format: '',
            key: '',
            keyValue: '',
            manageValue: 'avg',
            refId: 'B',
            returnQuery: [],
            unit: '',
          },
          meta: '',
          metrics: [
            {
              format: '',
              key: '',
              keyValue: '',
              manageValue: 'avg',
              refId: 'B',
              returnQuery: [],
              unit: '',
            },
            {
              format: '',
              key: '',
              keyValue: '',
              manageValue: 'avg',
              refId: 'B',
              returnQuery: [],
              unit: '',
            },
          ],
          name: 'point1',
          positionParameter: {
            labelAPositionX: '0',
            labelAPositionY: '0',
            labelBPositionX: '0',
            labelBPositionY: '0',
            tooltipPositionA: {},
            tooltipPositionB: {},
          },
          positionShapeX: '-60',
          positionShapeY: '60',
          rotateArrow: '0',
          shape: {
            label: 'Circle',
            value: 'circle',
          },
          sizeHeight: {
            label: 'Medium',
            value: 'medium',
          },
          sizeWidth: {
            label: 'Medium',
            value: 'medium',
          },
          textObj: {
            colorBack: '',
            colorText: '',
            generateAuxiliaryElement: {
              addColorBackElement: false,
              addColorTextElement: false,
              colorBackElement: 'black',
              colorTextElement: 'white',
              displayObjectInText: false,
              legendElement: '',
              numericFormatElement: '',
              unit: '',
            },
            generateObjectText: false,
            isTextRegion: false,
            style: {
              bold: true,
              italic: false,
              underline: true,
            },
            value: '',
            valueGenerateObjectText: {
              addColorBackElement: false,
              addColorTextElement: false,
              colorBackElement: 'black',
              colorTextElement: 'white',
              displayObjectInText: false,
              legendElement: '',
              numericFormatElement: '',
              unit: '',
            },
          },
          traceBack: false,
          traceBorder: false,
          valueMetric: '',
        },
      ],
      arrayLinks: [],
      arrayOrientedLinks: [
        {
          colorCoordinateA: '#5794F2',
          colorCoordinateB: '#E54658',
          colorMode: false,
          id: 1,
          mainMetric: {
            format: '',
            key: '',
            keyValue: '',
            manageValue: 'avg',
            refId: 'B',
            returnQuery: [],
            unit: '',
          },
          isIncurved: {
            label: 'No',
            value: false,
          },
          label: '',
          linkURL: {
            followLink: '',
            hoveringTooltipLink: '',
            hoveringTooltipText: '',
          },
          lowerLimit: [],

          meta: '',
          metrics: [
            {
              format: '',
              key: '',
              keyValue: '',
              manageValue: 'avg',
              refId: 'B',
              returnQuery: [],
              unit: '',
            },
            {
              format: '',
              key: '',
              keyValue: '',
              manageValue: 'avg',
              refId: 'B',
              returnQuery: [],
              unit: '',
            },
          ],
          name: 'orientedLink1',
          orientationLink: {
            label: 'Monodirectional',
            value: 'AB',
          },
          pointAPositionX: '-14',
          pointAPositionY: '88',
          pointBPositionX: '72',
          pointBPositionY: '70',
          pointCPositionX: '29',
          pointCPositionY: '79',
          pointIn: 'point2',
          pointOut: 'point1',
          positionParameter: {
            labelAPositionX: '0',
            labelAPositionY: '0',
            labelBPositionX: '0',
            labelBPositionY: '0',
            tooltipPositionA: {},
            tooltipPositionB: {},
          },
          regionIn: '',
          regionOut: '',
          textObj: {
            colorBack: '',
            colorText: '',
            generateAuxiliaryElement: {
              addColorBackElement: false,
              addColorTextElement: false,
              colorBackElement: 'black',
              colorTextElement: 'white',
              displayObjectInText: false,
              legendElement: '',
              numericFormatElement: '',
              unit: '',
            },
            generateObjectText: false,
            isTextRegion: false,
            style: {
              bold: true,
              italic: false,
              underline: true,
            },
            value: '',
            valueGenerateObjectText: {
              addColorBackElement: false,
              addColorTextElement: false,
              colorBackElement: 'black',
              colorTextElement: 'white',
              displayObjectInText: false,
              legendElement: '',
              numericFormatElement: '',
              unit: '',
            },
          },
          traceBack: false,
          traceBorder: false,
          valueMainMetricA: '-',
          valueMainMetricB: '-',
          zIndex: '5',
          mainMetricB: {
            format: '',
            key: '',
            keyValue: '',
            manageValue: 'avg',
            refId: 'A',
            returnQuery: [],
            unit: '',
          },
          metricsB: [],
        },
      ],
      display: { police: 'Helvetica', size: '1em', style: { italic: false, bold: false, underline: false } },
      fondIsActive: true,
      contourIsActive: true,
      lowerLimit: [],
      colorMode: true,
      contentJson: 'contenu du dashboard',
      Id: 0,
      uid: '',
      title: '',
      style: '',
      editable: '',
      version: 0,
      refresh: { value: '0', label: '0' },
      shemaVersion: 0,
      timezone: '',
      actualPanel: { value: '0', label: '0' },
      panelList: [{ label: '0', value: '0' }],
      panelId: 0,
      panelType: '',
      panelTargets: [],
      promTargets: [],
      promGlobalTargets: [],
      Json: {},
      timeRange: { from: '2020-01-02 00:00:00', to: '2020-01-02 00:00:00' },
      personalTarget: { expr: '' },
      timeQuery: '2020-01-02 00:00:00',
      promUrl: 'http://localhost:9090/api/v1/',
      queryProm: [],
      queryPromGlobal: [],
      queryPromRange: [],
      listStep: [{ label: '0', value: '0' }],
      jsonQueryReturn: [],
      jsonGlobalQueryReturn: [],
      mainTarget: { expr: '' },
      mainQueryProm: '',
      mainQueryReturn: { status: '', data: { resultType: '', result: [{ metric: { __name__: '', job: '' }, value: [] }] } },
      testMainQueryReturn: {},
      coordinatesToDrawLinkWithClick: [
        { id: 0 },
        { labelPoint: '', labelRegion: '', point: {}, region: {}, x: 0, y: 0 },
        { labelPoint: '', labelRegion: '', point: {}, region: {}, x: 0, y: 0 },
        { labelPoint: '', labelRegion: '', point: {}, region: {}, x: 0, y: 0 },
      ],
      indexOrientedLink: 0,
      indexPoint: 0,
      indexRegion: 0,
      listCollapsePoint: [],
      listCollapseOrientedLink: [],
      saveImportUrl: { total: [], multi: [], mono: [] },
      saveImportFile: [],
      totalUrlInput: '',
      multiUrlInput: '',
      monoUrlInput: '',
      zIndexOrientedLink: 1,
      orientedLinkToUpgrade: {},
      orientedLinkToDowngrade: {},
      checkIndexMultiLink: 0,
    },
    data: {
      state: 'Done',
      series: [
        {
          name: '{cpu="0",instance="localhost:9100",job="LinuxServer",mode="system"}',
          refId: 'A',
          fields: [
            {
              name: 'Time',
              type: 'time',
              config: {
                scopedVars: {
                  __series: { text: 'Series', value: { name: '{cpu="0",instance="localhost:9100",job="LinuxServer",mode="system"}' } },
                  __field: { text: 'Field', value: { name: '{cpu="0",instance="localhost:9100",job="LinuxServer",mode="system"}' } },
                },
                unit: 'time:YYYY-MM-DD HH:mm:ss',
              },
              values: [
                1586425005000,
                1586425020000,
                1586425035000,
                1586425050000,
                1586425065000,
                1586425080000,
                1586425095000,
                1586425110000,
                1586425125000,
                1586425140000,
                1586425155000,
                1586425170000,
                1586425185000,
                1586425200000,
                1586425215000,
                1586425230000,
                1586425245000,
                1586425260000,
                1586425275000,
                1586425290000,
                1586425305000,
              ],
              calcs: null,
            },
            {
              name: '{cpu="0",instance="localhost:9100",job="LinuxServer",mode="system"}',
              type: 'number',
              config: {
                scopedVars: {
                  __series: { text: 'Series', value: { name: '{cpu="0",instance="localhost:9100",job="LinuxServer",mode="system"}' } },
                  __field: { text: 'Field', value: { name: '{cpu="0",instance="localhost:9100",job="LinuxServer",mode="system"}' } },
                },
              },
              values: [
                null,
                null,
                0.005405337864854059,
                0.007658874333818341,
                0.013007725925925811,
                0.03509090909090921,
                0.044909090909090885,
                0.05327272727272713,
                0.05236649271778452,
                0.04345454545454546,
                0.03544552295779235,
                0.026363636363636415,
                0.02054545454545446,
                0.00854529917637859,
                0.008180330848936608,
                0.009272558680751353,
                0.009454373556844347,
                0.00963601323588235,
                0.030364188439789847,
                0.0554545454545454,
                0.08563636363636351,
              ],
              labels: { cpu: '0', instance: 'localhost:9100', job: 'LinuxServer', mode: 'system' },
              calcs: null,
            },
          ],
          length: 21,
        },
        {
          name: '{cpu="1",instance="localhost:9100",job="LinuxServer",mode="system"}',
          refId: 'A',
          fields: [
            {
              name: 'Time',
              type: 'time',
              config: {
                scopedVars: {
                  __series: { text: 'Series', value: { name: '{cpu="1",instance="localhost:9100",job="LinuxServer",mode="system"}' } },
                  __field: { text: 'Field', value: { name: '{cpu="1",instance="localhost:9100",job="LinuxServer",mode="system"}' } },
                },
                unit: 'time:YYYY-MM-DD HH:mm:ss',
              },
              values: [
                1586425005000,
                1586425020000,
                1586425035000,
                1586425050000,
                1586425065000,
                1586425080000,
                1586425095000,
                1586425110000,
                1586425125000,
                1586425140000,
                1586425155000,
                1586425170000,
                1586425185000,
                1586425200000,
                1586425215000,
                1586425230000,
                1586425245000,
                1586425260000,
                1586425275000,
                1586425290000,
                1586425305000,
              ],
              calcs: null,
            },
            {
              name: '{cpu="1",instance="localhost:9100",job="LinuxServer",mode="system"}',
              type: 'number',
              config: {
                scopedVars: {
                  __series: { text: 'Series', value: { name: '{cpu="1",instance="localhost:9100",job="LinuxServer",mode="system"}' } },
                  __field: { text: 'Field', value: { name: '{cpu="1",instance="localhost:9100",job="LinuxServer",mode="system"}' } },
                },
              },
              values: [
                null,
                null,
                0.005405337864854059,
                0.0063185713254005045,
                0.009709992592592614,
                0.03654545454545464,
                0.04418181818181804,
                0.048909090909091124,
                0.0480026183246359,
                0.03600000000000007,
                0.029447049841858516,
                0.023454545454545308,
                0.017636363636363613,
                0.005999890911074572,
                0.006544264679149235,
                0.008181669424192338,
                0.009272558680751093,
                0.008908766953928856,
                0.029636902489136085,
                0.05272727272727283,
                0.07963636363636355,
              ],
              labels: { cpu: '1', instance: 'localhost:9100', job: 'LinuxServer', mode: 'system' },
              calcs: null,
            },
          ],
          length: 21,
        },
      ],
      request: {
        app: 'dashboard',
        requestId: 'Q100',
        timezone: 'browser',
        panelId: 2,
        dashboardId: 9,
        range: { from: '2020-04-09T09:36:53.145Z', to: '2020-04-09T09:41:53.146Z', raw: { from: 'now-5m', to: 'now' } },
        timeInfo: '',
        interval: '15s',
        intervalMs: 15000,
        targets: [
          {
            expr: 'rate(node_cpu_seconds_total{mode="system"}[1m])',
            interval: '',
            legendFormat: '',
            refId: 'A',
            datasource: 'Prometheus',
            requestId: '2A',
          },
        ],
        maxDataPoints: 1856,
        scopedVars: { __interval: { text: '15s', value: '15s' }, __interval_ms: { text: '15000', value: 15000 } },
        startTime: 1586425313146,
        rangeRaw: { from: 'now-5m', to: 'now' },
        endTime: 1586425314589,
      },
      timeRange: { from: '2020-04-09T09:36:54.595Z', to: '2020-04-09T09:41:54.596Z', raw: { from: 'now-5m', to: 'now' } },
      timings: { dataProcessingTime: 2 },
    },
  };
  let container: any, component: any;
  const additionalStep = { value: '1', label: '1' };
  let testProps = { options: {}, data: {}, onOptionsChange: {} };

  /*
   * Mock "onOptionChange" by re-rendering the component with the new options
   */
  let mockFunctions = {
    onOptionsChange: (options: SimpleOptions, callback?: () => void) => {
      testProps.options = options;
      act(() => {
        ReactDOM.render(<Display ref={c => (component = c)} {...testProps} />, container);
      });
    },
  };

  beforeEach(() => {
    let clonedDefaults = JSON.parse(JSON.stringify(defaults));
    clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
    container = document.createElement('div');
    document.body.appendChild(container);
    testProps = {
      options: { ...clonedDefaults, Json: {} },
      onOptionsChange: mockFunctions.onOptionsChange,
      data: {
        state: LoadingState.Done,
        series: [
          {
            name: 'serieName',
            fields: [],
            length: 15,
          },
        ],
        timeRange: clonedDefaults.timeRange,
      },
    };
    act(() => {
      ReactDOM.render(<Display ref={c => (component = c)} {...testProps} />, container);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    component = null;
    jest.clearAllMocks();
  });

  test('update font', () => {
    expect(component.state.newPolice.value).toStrictEqual(component.props.options.display.police);
    expect(component.state.newPolice.label).toStrictEqual(component.props.options.display.police);

    component.onChangePolice({ value: 'mono', label: 'mono' });

    expect(component.state.newPolice.value).toBe('mono');
    expect(component.state.newPolice.label).toBe('mono');
  });

  test('update size', () => {
    expect(component.state.size).toBe(component.props.options.display.size);

    let input = document.createElement('input');
    input.setAttribute('value', '10px');

    const spy = jest.spyOn(component, 'handleChangesize');
    act(() => {
      component.handleChangesize({
        target: input,
        currentTarget: input,
      });
    });

    expect(spy).toHaveBeenCalled();
    expect(component.state.size).toBe('10px');
  });

  test('update style', () => {
    expect(component.state.style).toBe(component.props.options.display.style);
    const style: any = {
      bold: true,
      italic: true,
      underline: true,
    };
    const spy = jest.spyOn(component, 'saveStyleData');

    act(() => {
      component.saveStyleData(style);
    });

    expect(spy).toHaveBeenCalled();
    expect(component.state.style).toBe(style);
  });
  test('update style 2', () => {
    expect(component.state.style).toBe(component.props.options.display.style);
    const style: any = {
      bold: true,
      italic: false,
      underline: false,
    };
    const spy = jest.spyOn(component, 'saveStyleData');
    act(() => {
      component.saveStyleData(style);
    });
    expect(spy).toHaveBeenCalled();
    expect(component.state.style).toBe(style);
  });

  test('onChangeHeightBaseMap', done => {
    let target = {
      value: '200',
    } as HTMLInputElement;
    let event = {
      target: target,
    };
    component.onChangeHeightBaseMap(event);
    setTimeout(() => {
      expect(component.props.options.baseMap.height).toStrictEqual('200');
      done();
    });
  });

  test('onChangeWidthBaseMap', done => {
    let target = {
      value: '200',
    } as HTMLInputElement;
    let event = {
      target: target,
    };
    component.onChangeWidthBaseMap(event);
    setTimeout(() => {
      expect(component.props.options.baseMap.width).toStrictEqual('200');
      done();
    });
  });

  test('onImageChanged', done => {
    let target = {
      value: 'uneImageOnSenFouCUneStringCommeUneAutreEnBase64OuPasCaChangeRien',
    } as HTMLInputElement;
    let event = {
      target: target,
    };
    component.onImageChanged(event);
    setTimeout(() => {
      expect(component.props.options.baseMap.image).toStrictEqual('uneImageOnSenFouCUneStringCommeUneAutreEnBase64OuPasCaChangeRien');
      done();
    });
  });
});
