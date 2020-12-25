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

import { FontClassNames, FontWeights } from '@uifabric/styling';
import c from 'classnames';
import { Icon } from 'office-ui-fabric-react';
import React from 'react';
import t from 'tachyons-sass/tachyons.scss';

const Feature = () => (
  <div style={{ fontFamily: 'Microsoft YaHei' }}>
    <div
      className={c(t.pt5)}
      style={{
        width: '100%',
        fontSize: '2.2rem',
        color: '#18588c',
        lineHeight: '5rem',
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    >
      平台优势
    </div>
    <div className={c(t.bgWhite, t.pb4, t.flexL, t.center)} style={{ width: '50rem' }}>
      <div
        style={{
          width: '18rem',
          height: '.7rem',
          borderBottom: '1px solid #eaeaea',
        }}
      ></div>
      <div
        className={c(t.trackedMega, t.flex, t.flexColumn, t.itemsCenter)}
        style={{
          width: '14rem',
          height: '1px',
          fontSize: '1.4rem',
          color: '#999999',
          lineHeight: '1.4rem',
        }}
      >
        ADVANTAGES
      </div>
      <div
        style={{
          width: '18rem',
          height: '.7rem',
          borderBottom: '1px solid #eaeaea',
        }}
      ></div>
    </div>
    <div
      style={{
        width: '100%',
        fontSize: '1.1rem',
        color: '#333333',
        lineHeight: '1.1rem',
        textAlign: 'center',
      }}
    >
      <p>支持Tensorflow、Pytorch、MXNet、Keras等多种深度学习计算框架</p>
      <p>适配智慧金融、智慧物流、智慧医疗等各种人工场景</p>
      <p>具备数据处理标记、模型开发、模型训练优化和部署全程保驾护航的能力</p>
    </div>
    <div
      className={c(t.bgWhite, t.pt4, t.flexL, t.center, t.justifyAround)}
      style={{
        width: '72rem',
        fontSize: '1.2rem',
        color: '#333333',
      }}
    >
      <img
        src='../../../assets/img/card1.png'
        alt=''
        style={{ width: '20rem' }}
      />
      <img
        src='../../../assets/img/card2.png'
        alt=''
        style={{ width: '20rem' }}
      />
      <img
        src='../../../assets/img/card3.png'
        alt=''
        style={{ width: '20rem' }}
      />
    </div>
    <div
      className={c(t.pt5)}
      style={{
        width: '100%',
        fontSize: '2.2rem',
        color: '#18588c',
        lineHeight: '5rem',
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    >
      平台亮点
    </div>
    <div
      className={c(t.bgWhite, t.flexL, t.center)}
      style={{ maxWidth: '50rem', fontFamily: 'Microsoft YaHei' }}
    >
      <div
        style={{
          width: '18rem',
          height: '.7rem',
          borderBottom: '1px solid #eaeaea',
        }}
      ></div>
      <div
        className={c(t.trackedMega, t.flex, t.flexColumn, t.itemsCenter)}
        style={{
          width: '14rem',
          height: '1px',
          fontSize: '1.4rem',
          color: '#999999',
          lineHeight: '1.4rem',
        }}
      >
        HIGHLIGHTS
      </div>
      <div
        style={{
          width: '18rem',
          height: '.7rem',
          borderBottom: '1px solid #eaeaea',
        }}
      ></div>
    </div>
    <div
      className={c(t.bgWhite, t.pt5, t.flexL, t.center)}
      style={{ maxWidth: '75rem', fontFamily: 'Microsoft YaHei' }}
    >
      <div
        className={c(
          t.w33L,
          t.w100,
          t.tc,
          t.flex,
          t.flexColumn,
          t.itemsStart,
          t.justifyBetween,
        )}
      >
        <div className={c(t.flex, t.flexColumn, t.itemsCenter)}>
          <img
            src='../../../assets/img/icon1.png'
            alt=''
            style={{ width: '6.6rem' }}
          />
          <div
            className={c(FontClassNames.xxLarge, t.mv4)}
            style={{ fontWeight: FontWeights.semibold }}
          >
            自由定制化课程
          </div>
          <div
            className={c(FontClassNames.mediumPlus, t.lhCopy)}
            style={{ maxWidth: '20rem' }}
          >
            支持多种深度学习框架，包括TensorFlow，PyTorch，MXNet，CNTK，支持一键部署深度学习模型在线预测服务。
          </div>
        </div>
      </div>
      <div
        className={c(
          t.w33L,
          t.w100,
          t.mt0L,
          t.mt5,
          t.tc,
          t.ph4,
          t.flex,
          t.flexColumn,
          t.itemsCenter,
          t.justifyBetween,
        )}
      >
        <div className={c(t.flex, t.flexColumn, t.itemsCenter)}>
          <img
            src='../../../assets/img/icon2.png'
            alt=''
            style={{ width: '6.6rem' }}
          />
          <div
            className={c(FontClassNames.xxLarge, t.mv4)}
            style={{ fontWeight: FontWeights.semibold }}
          >
            先进的GPU调度
          </div>
          <div
            className={c(FontClassNames.mediumPlus, t.lhCopy)}
            style={{ maxWidth: '20rem' }}
          >
            支持GPU和CPU进行模型训练，根据用户需求调度和分配GPU等计算资源的能力，提高模型训练的效率。
          </div>
        </div>
      </div>
      <div
        className={c(
          t.w33L,
          t.w100,
          t.mt0L,
          t.mt5,
          t.tc,
          t.flex,
          t.flexColumn,
          t.itemsEnd,
          t.justifyBetween,
        )}
      >
        <div className={c(t.flex, t.flexColumn, t.itemsCenter)}>
          <img
            src='../../../assets/img/icon3.png'
            alt=''
            style={{ width: '6.6rem' }}
          />
          <div
            className={c(FontClassNames.xxLarge, t.mv4)}
            style={{ fontWeight: FontWeights.semibold }}
          >
            超大规模异构计算能力
          </div>
          <div
            className={c(FontClassNames.mediumPlus, t.lhCopy)}
            style={{ maxWidth: '20rem' }}
          >
            支持云端和本地算力的混合云架构，实现高效的算力迁移。单任务支持上百worker并发执行，支持500+超大规模异构计算集群。
          </div>
        </div>
      </div>
    </div>
    <div
      className={c(t.bgWhite, t.pt5, t.pb5, t.flexL, t.center)}
      style={{ maxWidth: '75rem', fontFamily: 'Microsoft YaHei' }}
    >
      <div
        className={c(
          t.w33L,
          t.w100,
          t.tc,
          t.flex,
          t.flexColumn,
          t.itemsStart,
          t.justifyBetween,
        )}
      >
        <div className={c(t.flex, t.flexColumn, t.itemsCenter)}>
          <img
            src='../../../assets/img/icon4.png'
            alt=''
            style={{ width: '6.6rem' }}
          />
          <div
            className={c(FontClassNames.xxLarge, t.mv4)}
            style={{ fontWeight: FontWeights.semibold }}
          >
            资源市场统一管理
          </div>
          <div
            className={c(FontClassNames.mediumPlus, t.lhCopy)}
            style={{ maxWidth: '20rem' }}
          >
            平台针对培训业务用途进行功能适配和开发，包括Notebook服务、数据共享及管理等
            ，共享资源市场：提供资源共享市场，实现模型、算法、数据、镜像等的共享
            。
          </div>
        </div>
      </div>
      <div
        className={c(
          t.w33L,
          t.w100,
          t.mt0L,
          t.mt5,
          t.tc,
          t.ph4,
          t.flex,
          t.flexColumn,
          t.itemsCenter,
          t.justifyBetween,
        )}
      >
        <div className={c(t.flex, t.flexColumn, t.itemsCenter)}>
          <img
            src='../../../assets/img/icon5.png'
            alt=''
            style={{ width: '6.6rem' }}
          />
          <div
            className={c(FontClassNames.xxLarge, t.mv4)}
            style={{ fontWeight: FontWeights.semibold }}
          >
            高安全保障下的PB级存储
          </div>
          <div
            className={c(FontClassNames.mediumPlus, t.lhCopy)}
            style={{ maxWidth: '20rem' }}
          >
            支持多种数据存储方式和访问协议（HDFS、NFS、Azure
            Blob）。平台软件提供基于Azure
            AD的安全认证和授权机制。支持PB级可扩展数据存储资源的管理及调度。
          </div>
        </div>
      </div>
      <div
        className={c(
          t.w33L,
          t.w100,
          t.mt0L,
          t.mt5,
          t.tc,
          t.flex,
          t.flexColumn,
          t.itemsEnd,
          t.justifyBetween,
        )}
      >
        <div className={c(t.flex, t.flexColumn, t.itemsCenter)}>
          <img
            src='../../../assets/img/icon6.png'
            alt=''
            style={{ width: '6.6rem' }}
          />
          <div
            className={c(FontClassNames.xxLarge, t.mv4)}
            style={{ fontWeight: FontWeights.semibold }}
          >
            全方位监控系统
          </div>
          <div
            className={c(FontClassNames.mediumPlus, t.lhCopy)}
            style={{ maxWidth: '20rem' }}
          >
            为用户提供可视化工具，可管理人工智能任务，包括任务的提交、监控、取消。提供任务在线调试、错误报警、日志管理、性能检测等功能，显著降低了AI平台的日常运维难度。
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Feature;
