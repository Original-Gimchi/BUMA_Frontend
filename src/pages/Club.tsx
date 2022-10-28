import React from 'react';
import {
    Header,
    Board,
    SubFooter,
    Aside,
    Footer,
    AccodianMenu,
    Classify
} from 'src/allFiles';
import '../style/pages-style/Club.scss'

const Club = () => {
    return (
        <div>
            <Header />
            <div className="club-board-wrap">
                <Board>
                    <div className="doc-title-box">
                        <span>부마위키:동아리</span>
                    </div>
                    <div className="classif-box">
                        <Classify>동아리</Classify>
                    </div>
                    <div className="line" />
                    {/* 입학년도별 입학생 */}
                    <div className='summary-wrap'>
                        <AccodianMenu name={'전공동아리'}>
                            <p className='summary-content'>
                                <span>
                                    <ul className='club-list'>
                                        <li>쉬스테마</li>
                                        <li>T자형 인재</li>
                                        <li>COIN</li>
                                        <li>BER(blessing software)</li>
                                        <li>우최동</li>
                                        <li>야누스</li>
                                        <li>마나무네</li>
                                        <li>JJOK</li>
                                        <li>오태식과 친구들</li>
                                    </ul>
                                </span>
                            </p>
                        </AccodianMenu>
                    </div>
                    <div className='summary-wrap'>
                        <AccodianMenu name={'일반동아리'}>
                            <p className='summary-content'>
                                <span>
                                    <ul className='club-list'>
                                        <li>생활탁구</li>
                                        <li>축구</li>
                                        <li>파이썬 투자 동아리</li>
                                        <li>3D프린팅</li>
                                        <li>매점운영 동아리</li>
                                        <li>소작농(소마고 작은 농노들)</li>
                                        <li>도서부</li>
                                    </ul>
                                </span>
                            </p>
                        </AccodianMenu>
                    </div>
                    <SubFooter />
                </Board>
                <Aside />
            </div>
            <Footer />
        </div>
    );
};

export default Club;