import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { dateParser } from 'util/dateParser';
import '../style/components-style/VersionBtn.scss';

const VersionBtn = () => {
    const router = useParams();
    const [docs, setDocs] = useState({
        id: '',
        title: '',
        docsType: '',
        enroll: 0,
        contents: '',
        lastModifiedAt: '',
        view: ''
    });
    useEffect(() => {
        axios.get(`/docs/find/id/${router.id}`)
            .then((res) => {
                console.log(res)
                setDocs({
                    ...res.data,
                    lastModifiedAt: dateParser(res.data.lastModifiedAt)
                })
            })
            .catch((err) => {
                if (err instanceof AxiosError) {
                    console.log(err);
                    alert('오류가 발생하여 문서를 불러올 수 없습니다.');
                }
            })
    }, [router.id]);
    return (
        <div className="updating">
            <Link to={`/version/${docs?.id}`} className='link'>수정기록</Link>
        </div>
    );
}

export default VersionBtn;