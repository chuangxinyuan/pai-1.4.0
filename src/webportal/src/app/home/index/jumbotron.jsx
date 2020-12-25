// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
// to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
// BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import { FontClassNames, ColorClassNames } from '@uifabric/styling';
import { PrimaryButton } from 'office-ui-fabric-react';
import MediaQuery from 'react-responsive';
import c from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as SignInBackground } from '../../../assets/img/sign-in-background.svg';
import t from 'tachyons-sass/tachyons.scss';

const BREAKPOINT = 960;

const Jumbotron = ({ showLoginModal }) => (
  <div className={c(ColorClassNames.neutralLightBackground)}>
    {/* small */}
    <MediaQuery maxWidth={BREAKPOINT}>
      <div className={c(t.flex, t.flexColumn, t.itemsCenter, t.pv4)}>
        <SignInBackground style={{ maxWidth: '20rem' }} />
        <div className={c(t.flex, t.flexColumn, t.itemsCenter)}>
          <div className={c(FontClassNames.large, t.pt3)}>
            人工智能资源调度管理平台
          </div>
          <div
            className={c(FontClassNames.mediumPlus, t.tc, t.lhCopy, t.mv4)}
            style={{ maxWidth: '500px' }}
          >
            融合微软算力调度项目OpenPAI,突破新型GPU调度、混合云架构、容器和虚机混合编排蓝图部署，适用于人工智能应用的新型API安全网关等场景落地关键技术，
            开发了人工智能资源调度平台，
          </div>
          <PrimaryButton
            styles={{ root: { maxWidth: '6rem' } }}
            text='立即登录'
            onClick={showLoginModal}
          />
        </div>
      </div>
    </MediaQuery>
    {/* large */}
    <MediaQuery minWidth={BREAKPOINT + 1}>
      <div
        className={c(t.flex, t.itemsCenter, t.justifyBetween, t.pv5, t.center)}
        style={{ maxWidth: '75rem', fontFamily: 'Microsoft YaHei' }}
      >
        <div
          className={c(t.flex, t.flexColumn)}
          // style={{ minWidth: '20rem' }}
        >
          <div style={{ fontSize:'2.2rem', color: '#18588c', fontWeight: 'bold'}}>
            人工智能资源调度管理平台
          </div>
          <div className={c(t.lhCopy, t.mv3)} style={{ fontSize:'1.1rem', color: '#333333', lineHeight: '1.1rem'}}>
            <p>融合微软算力调度项目OpenPAI,突破新型GPU调度、混合云架构、</p>
            <p>容器和虚机混合编排蓝图部署，适用于人工智能应用的新型API安全网</p>
            <p>关等场景落地关键技术， 开发了人工智能资源调度平台，</p>
          </div>
          <PrimaryButton
            styles={{ root: { maxWidth: '10rem', height: '3rem', fontSize:'1.1rem' } }}
            text='立即登录'
            onClick={showLoginModal}
          />
        </div>
        <img src="../../../assets/img/bg.png" alt="" style={{ maxWidth: '39rem', minWidth: '25rem' }}/>
      </div>
    </MediaQuery>
  </div>
);

Jumbotron.propTypes = {
  showLoginModal: PropTypes.func,
};

export default Jumbotron;
