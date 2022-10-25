import React, { PropsWithChildren, useState } from 'react';
import '../style/components-style/TopicBox.scss'

const AccodianMenu = ({ name, children }: any) => {
    const [detail, setDetail] = useState(true);

    const onClickDetail = () => {
        setDetail(detail => !detail);
        console.log(detail)
    };

    return (
        <div>
            {detail ?
                <>
                    <div className='title-line-wrap' onClick={onClickDetail} >
                        <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.7751 22.7249C16.5433 22.9562 16.3594 23.231 16.234 23.5334C16.1085 23.8358 16.0439 24.16 16.0439 24.4874C16.0439 24.8149 16.1085 25.1391 16.234 25.4415C16.3594 25.7439 16.5433 26.0187 16.7751 26.2499L28.2501 37.7249C28.4813 37.9567 28.7561 38.1406 29.0585 38.266C29.3609 38.3915 29.6851 38.4561 30.0126 38.4561C30.34 38.4561 30.6642 38.3915 30.9666 38.266C31.2691 38.1406 31.5438 37.9567 31.7751 37.7249L43.2501 26.2499C43.4815 26.0185 43.6651 25.7437 43.7904 25.4413C43.9156 25.1389 43.9801 24.8148 43.9801 24.4874C43.9801 24.1601 43.9156 23.836 43.7904 23.5336C43.6651 23.2312 43.4815 22.9564 43.2501 22.7249C43.0186 22.4935 42.7438 22.3099 42.4414 22.1846C42.139 22.0594 41.8149 21.9949 41.4876 21.9949C41.1602 21.9949 40.8361 22.0594 40.5337 22.1846C40.2313 22.3099 39.9565 22.4935 39.7251 22.7249L30.0001 32.4249L20.3001 22.7249C19.3251 21.7749 17.7251 21.7749 16.7751 22.7249Z" fill="#818181" />
                        </svg>
                        <span className='title-line-name'>{name}</span>
                    </div>
                    <div className='line' style={{ width: '100%' }} />
                    <div>
                        {children}
                    </div>
                </> :
                <>
                    <div className='title-line-wrap' onClick={onClickDetail} >
                        <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.2249 37.2751C43.4567 37.0438 43.6406 36.769 43.766 36.4666C43.8915 36.1642 43.9561 35.84 43.9561 35.5126C43.9561 35.1851 43.8915 34.8609 43.766 34.5585C43.6406 34.2561 43.4567 33.9813 43.2249 33.7501L31.7499 22.2751C31.5187 22.0433 31.2439 21.8594 30.9415 21.734C30.6391 21.6085 30.3149 21.5439 29.9874 21.5439C29.66 21.5439 29.3358 21.6085 29.0334 21.734C28.7309 21.8594 28.4562 22.0433 28.2249 22.2751L16.7499 33.7501C16.5185 33.9815 16.3349 34.2563 16.2096 34.5587C16.0844 34.8611 16.0199 35.1852 16.0199 35.5126C16.0199 35.8399 16.0844 36.164 16.2096 36.4664C16.3349 36.7688 16.5185 37.0436 16.7499 37.2751C16.9814 37.5065 17.2562 37.6901 17.5586 37.8154C17.861 37.9406 18.1851 38.0051 18.5124 38.0051C18.8398 38.0051 19.1639 37.9406 19.4663 37.8154C19.7687 37.6901 20.0435 37.5065 20.2749 37.2751L29.9999 27.5751L39.6999 37.2751C40.6749 38.2251 42.2749 38.2251 43.2249 37.2751Z" fill="#818181" />
                        </svg>
                        <span className='title-line-name'>{name}</span>
                    </div>
                    <div className='line' style={{ width: '100%' }} />
                    <div style={{ marginBottom: '10px' }}>
                    </div>
                </>}
        </div>
    );
};

export default AccodianMenu;